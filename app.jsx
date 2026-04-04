const { useState, useEffect, useRef } = React;
const { motion, useInView } = window.Motion;

// FadeInUp component for scroll reveal - works on Android/iOS/PC
const FadeInUp = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.55, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
            {children}
        </motion.div>
    );
};

// ScaleIn - pops in with scale for cards and badges
const ScaleIn = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.45, delay: delay, ease: [0.34, 1.56, 0.64, 1] }}
        >
            {children}
        </motion.div>
    );
};

// SlideInLeft - slides in from left for timeline items
const SlideInLeft = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
            {children}
        </motion.div>
    );
};

// Base layout and app component
const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVpnBlocked, setIsVpnBlocked] = useState(false);
    const [isCheckingVpn, setIsCheckingVpn] = useState(true);
    const [readProgress, setReadProgress] = useState(0);
    const [showBackTop, setShowBackTop] = useState(false);


    useEffect(() => {
        // Auto light/dark mode based on geographic local time
        const checkTimeAndPreference = () => {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                setDarkMode(savedTheme === 'dark');
                return;
            }
            
            // Geographic location time based mode (6 PM to 6 AM is dark mode)
            const currentHour = new Date().getHours();
            const isNight = currentHour >= 18 || currentHour < 6;
            
            if (isNight) {
                setDarkMode(true);
            } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setDarkMode(true);
            } else {
                setDarkMode(false);
            }
        };

        checkTimeAndPreference();

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            setShowBackTop(window.scrollY > 400);
            const totalH = document.body.scrollHeight - window.innerHeight;
            setReadProgress(totalH > 0 ? Math.round((window.scrollY / totalH) * 100) : 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const fetchWithTimeout = async (url, options = {}) => {
            const { timeout = 3500 } = options;
            const controller = new AbortController();
            const id = setTimeout(() => controller.abort(), timeout);
            try {
                const response = await fetch(url, { ...options, signal: controller.signal });
                clearTimeout(id);
                return response;
            } catch (e) {
                clearTimeout(id);
                throw e;
            }
        };

        const trackVisitor = async () => {
            try {
                // Fetch IP and Location Data (with timeout so it doesn't freeze the page)
                const response = await fetchWithTimeout('https://ipapi.co/json/');
                const data = await response.json();

                // Advanced VPN/Proxy Check
                let isVPN = "Unknown";
                let vpnBrand = "N/A";
                try {
                    const vpnResponse = await fetchWithTimeout(`https://blackbox.ipinfo.app/lookup/${data.ip}`, { timeout: 2500 });
                    const vpnText = await vpnResponse.text();
                    if (vpnText.trim() === 'Y') {
                        isVPN = "⚠️ YES (Proxy/VPN)";
                        setIsVpnBlocked(true);
                        const orgName = (data.org || "").toLowerCase();
                        if (orgName.includes("tefincom") || orgName.includes("nord")) vpnBrand = "NordVPN";
                        else if (orgName.includes("expressvpn") || orgName.includes("express vpn")) vpnBrand = "ExpressVPN";
                        else if (orgName.includes("kape") || orgName.includes("cyberghost") || orgName.includes("zenmate") || orgName.includes("private internet access")) vpnBrand = "CyberGhost / PIA / ZenMate";
                        else if (orgName.includes("surfshark")) vpnBrand = "Surfshark";
                        else if (orgName.includes("proton")) vpnBrand = "ProtonVPN";
                        else if (orgName.includes("mullvad")) vpnBrand = "Mullvad VPN";
                        else if (orgName.includes("m247") || orgName.includes("datacamp") || orgName.includes("tzulo") || orgName.includes("leaseweb") || orgName.includes("quadranet")) vpnBrand = `Commercial VPN Host (${data.org})`;
                        else if (orgName.includes("google") || orgName.includes("amazon") || orgName.includes("aws") || orgName.includes("digitalocean") || orgName.includes("ovh") || orgName.includes("linode") || orgName.includes("cloudflare") || orgName.includes("akamai")) vpnBrand = `Cloud Proxy/VPN (${data.org})`;
                        else vpnBrand = data.org || "Unknown Provider";
                    } else {
                        isVPN = "✅ NO";
                    }
                } catch (e) {
                    console.log("VPN check failed.");
                } finally {
                    setIsCheckingVpn(false);
                }

                // WebRTC Real IP Leak Test
                const getWebRTCIP = async () => {
                    return new Promise((resolve) => {
                        const ips = new Set();
                        const RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
                        if (!RTCPeerConnection) return resolve("Not Supported");
                        
                        const pc = new RTCPeerConnection({ iceServers: [{ urls: "stun:stun.l.google.com:19302" }] });
                        pc.createDataChannel("");
                        
                        pc.onicecandidate = (e) => {
                            if (!e.candidate) {
                                pc.close();
                                if (ips.size === 0) resolve("No leak detected");
                                else resolve(Array.from(ips).join(", "));
                                return;
                            }
                            const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/;
                            const match = ipRegex.exec(e.candidate.candidate);
                            if (match && match[1] !== data.ip && !match[1].endsWith('.local')) {
                                ips.add(match[1]);
                            }
                        };
                        
                        pc.createOffer().then(offer => pc.setLocalDescription(offer)).catch(() => resolve("Offer failed"));
                        
                        setTimeout(() => {
                            pc.close();
                            if (ips.size === 0) resolve("Timeout / No leak");
                            else resolve(Array.from(ips).join(", "));
                        }, 2500);
                    });
                };
                
                const realIpStr = await getWebRTCIP();

                // Gather Device Data
                const userAgent = navigator.userAgent;
                const platform = navigator.platform;
                const language = navigator.language;
                const screenRes = `${window.screen.width}x${window.screen.height}`;

                // Detect device type
                const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
                const deviceType = isMobile ? '📱 Mobile' : '🖥️ Desktop';

                // Detect Traffic Source (Referrer & UTMs)
                let source = "Direct / Bookmark";
                const referrer = document.referrer.toLowerCase();
                const urlParams = new URLSearchParams(window.location.search);
                const isWhatsApp = referrer.includes("whatsapp") || referrer.includes("wa.me") || urlParams.get("utm_source") === "whatsapp" || userAgent.toLowerCase().includes("whatsapp");

                if (isWhatsApp) {
                    source = "WhatsApp 🟩";
                } else if (referrer) {
                    if (referrer.includes("linkedin.com")) source = "LinkedIn 🔵";
                    else if (referrer.includes("google.com")) source = "Google Search 🔍";
                    else if (referrer.includes("twitter.com") || referrer.includes("t.co")) source = "Twitter/X 🐦";
                    else source = document.referrer; // Show the raw URL if it's something else
                }

                // Get and Increment Total Visitor Count
                let visitorCount = "1 (Live Tracking)";
                try {
                    // Use counterapi.dev with a cache buster so mobile browsers don't freeze the count
                    const timestamp = new Date().getTime();
                    const countResponse = await fetch(`https://api.counterapi.dev/v1/forbesayush/portfolio/up?t=${timestamp}`);
                    
                    if (countResponse.ok) {
                        const countData = await countResponse.json();
                        if (countData && countData.count) {
                            visitorCount = countData.count;
                        }
                    }
                } catch (e) {
                    console.log("Adblocker likely blocked count API, proceeding with tracked view.");
                }

                // Format Message
                const message = `
🔔 *New Portfolio Visitor!* 🔔

📈 *Total Visitors:* ${visitorCount}
----------------------------
${deviceType}
🔗 *Source:* ${source}
📍 *Location:* ${data.city}, ${data.region}, ${data.country_name}
📮 *Pincode:* ${data.postal}
🌐 *IP Address:* ${data.ip}
🛡️ *VPN/Proxy:* ${isVPN}
🏷️ *VPN Brand:* ${vpnBrand}
🕵️ *Real IP (WebRTC):* ${realIpStr}
🏢 *ISP/Org:* ${data.org}
💻 *Platform:* ${platform}
📏 *Screen:* ${screenRes}
🗣 *Language:* ${language}
📱 *User Agent:* ${userAgent}
                `;

                // SECURE BACKEND METHOD
                // The Telegram token is securely stored in Render.com Environment Variables.
                // This fetches from your live, 100% anti-hackable backend.
                const BACKEND_URL = 'https://portfolio-backend-iug0.onrender.com';

                await fetch(`${BACKEND_URL}/api/track`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: message })
                });
                
                console.log("Visitor tracking complete. Sent securely to your Render backend!");
                
            } catch (error) {
                console.error("Error tracking visitor:", error);
            }
        };

        trackVisitor();
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleTheme = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
    };

    if (isCheckingVpn) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 flex flex-col items-center justify-center transition-colors duration-300 font-sans">
                <div className="w-10 h-10 border-4 border-blue-200 dark:border-blue-900 border-t-blue-600 dark:border-t-blue-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    if (isVpnBlocked) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 flex flex-col items-center justify-center transition-colors duration-300 font-sans px-6 text-center">
                <div className="bg-white dark:bg-zinc-900 border-4 border-slate-900 dark:border-white shadow-2xl p-6 md:p-12 mb-8 max-w-xl w-full flex flex-col items-center">
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase leading-tight font-sans tracking-tight">
                        POV: YOU TRIED<br/>VPN FOR THE FIRST TIME
                    </h1>
                </div>
                <div className="text-slate-600 dark:text-zinc-400 text-sm bg-white dark:bg-[#0a0a0c] px-6 py-4 rounded-xl border border-slate-200 dark:border-zinc-800 inline-block shadow-sm font-medium">
                    Please disable your VPN or use a residential connection to view this portfolio.
                </div>
            </div>
        );
    }

    if (isCheckingVpn) {
        return (
            <div className={`min-h-screen bg-slate-50 dark:bg-zinc-950 flex flex-col items-center justify-center transition-colors duration-300 font-sans`}>
                <div className="w-10 h-10 border-4 border-blue-200 dark:border-blue-900 border-t-blue-600 dark:border-t-blue-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    if (isVpnBlocked) {
        return (
            <div className={`min-h-screen bg-slate-50 dark:bg-zinc-950 flex flex-col items-center justify-center transition-colors duration-300 font-sans px-6 text-center`}>
                <div className="bg-white dark:bg-zinc-900 border-4 border-slate-900 dark:border-white shadow-2xl p-6 md:p-12 mb-8 max-w-xl w-full flex flex-col items-center">
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase leading-tight font-sans tracking-tight">
                        POV: YOU TRIED<br/>VPN FOR THE FIRST TIME
                    </h1>
                </div>
                <div className="text-slate-600 dark:text-zinc-400 text-sm bg-white dark:bg-[#0a0a0c] px-6 py-4 rounded-xl border border-slate-200 dark:border-zinc-800 inline-block shadow-sm font-medium">
                    Please disable your VPN or use a residential connection to view this portfolio.
                </div>
            </div>
        );
    }

    return (
        <div className={`min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-800 dark:text-zinc-200 transition-colors duration-300 font-sans`}>
            {/* Reading Progress Bar */}
            <div style={{ position: 'fixed', top: 0, left: 0, width: readProgress + '%', height: '3px', background: 'linear-gradient(90deg,#2563eb,#7c3aed)', zIndex: 9999, transition: 'width 0.1s linear' }}></div>

            {/* Floating Back to Top */}
            {showBackTop && (
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-24 right-5 z-50 w-11 h-11 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-all" aria-label="Back to top">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>
                </button>
            )}

            {/* Floating Hire Me Button */}
            <a href="#contact" className="fixed bottom-5 right-5 z-50 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-[0_0_24px_rgba(37,99,235,0.5)] flex items-center gap-2 font-semibold text-sm transition-all hover:scale-105">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Hire Me
            </a>

            {/* Floating WhatsApp */}
            <a href="https://wa.me/+919876543210?text=Hi%20Ayush%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!" target="_blank" rel="noopener noreferrer" className="fixed bottom-5 left-5 z-50 w-13 h-13 px-3 py-3 bg-green-500 hover:bg-green-400 text-white rounded-full shadow-xl flex items-center justify-center gap-2 font-semibold text-sm transition-all hover:scale-110" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            </a>

            {/* Navbar */}
            <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center max-w-6xl">
                    <a href="#" className="font-bold tracking-tight flex items-center gap-2">
                        <span className="text-xl tracking-tighter text-slate-900 dark:text-white">PM<span className="text-green-500">.</span></span>
                    </a>
                    
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-zinc-400">
                        <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 text-glow-hover transition">About</a>
                        <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 text-glow-hover transition">Case Studies</a>
                        <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 text-glow-hover transition">Skills</a>
                        <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 text-glow-hover transition">Experience</a>
                        <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 text-glow-hover transition">Contact</a>
                    </nav>

                    <div className="flex items-center gap-4">
                        <button 
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-slate-600 dark:text-zinc-400 hover:bg-slate-200 dark:hover:bg-zinc-800 transition"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                            )}
                        </button>
                        
                        {/* Mobile Menu Toggle */}
                        <button 
                            className="md:hidden p-2 text-slate-600 dark:text-zinc-400 hover:bg-slate-200 dark:hover:bg-zinc-800 rounded-full transition"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-zinc-950 border-b border-slate-200 dark:border-zinc-800 shadow-lg shadow-black/5 py-4 px-6 flex flex-col gap-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
                        <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-slate-700 dark:text-zinc-300 font-medium py-2 hover:text-blue-600 dark:hover:text-blue-400 text-glow-hover transition border-b border-slate-100 dark:border-zinc-800/50">About</a>
                        <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-slate-700 dark:text-zinc-300 font-medium py-2 hover:text-blue-600 dark:hover:text-blue-400 text-glow-hover transition border-b border-slate-100 dark:border-zinc-800/50">Case Studies</a>
                        <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-slate-700 dark:text-zinc-300 font-medium py-2 hover:text-blue-600 dark:hover:text-blue-400 text-glow-hover transition border-b border-slate-100 dark:border-zinc-800/50">Skills</a>
                        <a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-slate-700 dark:text-zinc-300 font-medium py-2 hover:text-blue-600 dark:hover:text-blue-400 text-glow-hover transition border-b border-slate-100 dark:border-zinc-800/50">Experience</a>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-slate-700 dark:text-zinc-300 font-medium py-2 hover:text-blue-600 dark:hover:text-blue-400 text-glow-hover transition">Contact</a>
                    </div>
                )}
            </header>

            <main>
                <HeroSection />
                <MetricsSection />
                <AboutSection />
                <ProjectsSection />
                <ExperienceSection />
                <SkillsSection />
                <EducationSection />
                <CredentialsSection />
                <TestimonialsSection />
                <FAQSection />
                <ContactSection />
            </main>

            <footer className="bg-slate-900 dark:bg-zinc-950 text-slate-400 py-12 border-t border-slate-200 dark:border-zinc-800/50">
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                         <div className="flex items-center gap-2">
                             <span className="text-xl tracking-tighter text-slate-400 dark:text-white font-bold">PM<span className="text-green-500">.</span></span>
                        </div>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-blue-500 transition">LinkedIn</a>
                            <a href="#" className="hover:text-blue-500 transition">Email</a>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-sm">
                        &copy; {new Date().getFullYear()} Product Manager Portfolio. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

/* --- Hero Section --- */
const HeroSection = () => {
    return (
        <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto max-w-4xl flex flex-col items-center text-center relative z-10">
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
                    className="relative mb-10"
                >
                    <img 
                        src="profile.jpg" 
                        alt="Ayush Chatterjee - Product Manager Portfolio" 
                        className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-white dark:border-zinc-900 shadow-xl relative z-10"
                        loading="eager"
                        fetchpriority="high"
                        decoding="sync"
                    />
                    <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-4 border-white dark:border-zinc-900 rounded-full z-20" title="Available for new opportunities"></div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                    className="text-blue-600 dark:text-blue-500 text-xs md:text-sm font-bold tracking-[0.2em] mb-4 uppercase"
                >
                    ASPIRING PRODUCT MANAGER &middot; MBA (IT & OPERATIONS)
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold leading-tight mb-8 tracking-tighter text-slate-900 dark:text-white text-glow-hover"
                >
                    Ayush <span className="text-blue-600 dark:text-blue-500 text-glow-hover">Chatterjee</span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                    className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed text-glow-hover"
                >
                    Product-focused professional at the intersection of technology, strategy, and data-driven decision-making. 
                    Product Testing @ OnePlus &middot; Growth Research @ Innovist &middot; Founder, D-DZIRE JEWELS LAB GROWN DIAMONDS.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                    className="inline-block max-w-[95%] md:max-w-max px-6 py-2.5 rounded-3xl bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 text-sm font-medium border border-blue-200 dark:border-blue-900/50 shadow-sm text-center leading-relaxed"
                >
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500 align-middle mr-2 -mt-0.5"></span> 
                    <span className="align-middle">Forecast Accuracy +10% &middot; 5,000+ Transactions Analyzed &middot; 15+ UX Defects Identified @ OnePlus</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 w-full sm:w-auto"
                >
                    <a href="#projects" className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-sm transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2">
                        View Case Studies
                    </a>
                    <a href="#contact" className="w-full sm:w-auto px-8 py-3 bg-transparent border border-slate-300 dark:border-zinc-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-zinc-800/50 rounded-full font-semibold text-sm transition-all flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        Contact Me
                    </a>
                    <a href="https://www.linkedin.com/in/ayushmba/details/featured/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3 bg-green-600 hover:bg-green-500 text-white rounded-full font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-[0_0_16px_rgba(22,163,74,0.35)]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                        Download Resume
                    </a>
                </motion.div>
                
                {/* Bouncing Arrow */}
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
                >
                    <a href="#about" className="text-slate-400 dark:text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-bounce p-2" aria-label="Scroll down">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

/* --- Animated Counter Hook --- */
const useCounter = (target, duration = 1800) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });
    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [isInView, target, duration]);
    return [count, ref];
};

/* --- Metrics Section --- */
const MetricsSection = () => {
    const [c1, r1] = useCounter(15);
    const [c2, r2] = useCounter(5000);
    const [c3, r3] = useCounter(10);
    const [c4, r4] = useCounter(3);
    const metrics = [
        { ref: r1, value: c1, suffix: '+', label: 'UX Defects Found', sub: 'Pre-release @ OnePlus' },
        { ref: r2, value: c2, suffix: '+', label: 'Transactions Analyzed', sub: 'D-Dzire Jewels FOCO' },
        { ref: r3, value: c3, suffix: '%', label: 'Forecast Accuracy Gain', sub: 'Power BI & Excel' },
        { ref: r4, value: c4, suffix: '', label: 'Internships Completed', sub: 'Across IT, Retail & D2C' },
    ];
    return (
        <section className="py-16 px-6 bg-white dark:bg-zinc-900 border-y border-slate-200 dark:border-zinc-800">
            <div className="container mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {metrics.map((m, i) => (
                    <div key={i} ref={m.ref} className="flex flex-col items-center gap-1">
                        <span className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                            {m.value}{m.suffix}
                        </span>
                        <span className="text-sm font-bold text-slate-700 dark:text-zinc-200">{m.label}</span>
                        <span className="text-xs text-slate-400 dark:text-zinc-500">{m.sub}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

/* --- About Section --- */
const AboutSection = () => {
    const philosophies = [
        {
            title: "Customer Obsession",
            desc: "Every decision starts with the user. Deep empathy and continuous discovery.",
            icon: <circle cx="12" cy="12" r="10" />
        },
        {
            title: "Data-Backed Decisions",
            desc: "Leveraging analytics and metrics to validate hypotheses, reduce risk.",
            icon: <path d="M18 20V10M12 20V4M6 20v-6" />
        },
        {
            title: "0→1 Thinking",
            desc: "Comfortable navigating ambiguity to identify opportunities.",
            icon: <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5 0 1.5-1.5 3.5-1.5 4h9c0-.5-1.5-2.5-1.5-4ZM9 18h6M10 22h4" />
        },
        {
            title: "Execution Focus",
            desc: "Prioritizing delivery and unblocking execution to ship high-quality products.",
            icon: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
        },
        {
            title: "Cross-Functional Leadership",
            desc: "Aligning engineering, design, and business stakeholders toward shared goals.",
            icon: <g><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></g>
        },
        {
            title: "KPI-Driven Mindset",
            desc: "Defining and tracking the right metrics to ensure measurable business impact.",
            icon: <g><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></g>
        }
    ];

    return (
        <section id="about" className="py-24 px-6 bg-slate-50 dark:bg-zinc-950">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <FadeInUp>
                        <div className="text-blue-600 dark:text-blue-500 text-sm font-bold tracking-widest mb-4 uppercase">ABOUT ME</div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">Product Philosophy</h2>
                        <p className="text-slate-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed md:text-lg">
                            Product-focused professional working at the intersection of technology, strategy, and data-driven decision-making. My experience spans product validation (OnePlus), market intelligence (Innovist D2C), and retail KPI ownership — always with a focus on improving quality and outcomes.
                        </p>
                    </FadeInUp>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {philosophies.map((item, i) => (
                        <FadeInUp key={i} delay={i * 0.1}>
                            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-start glow-effect">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-500 mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        {item.icon}
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{item.title}</h3>
                                <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </FadeInUp>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* --- Projects Section --- */
const ProjectsSection = () => {
    const projects = [
        {
            title: "Pre-Release UX Testing @ OnePlus",
            category: "Product Validation · Mobile OS",
            icon: <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />,
            colorClass: "text-indigo-600 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-500/10 border-indigo-100 dark:border-indigo-500/20",
            problem: "Pre-release mobile OS builds shipped with undiscovered UX and functional defects, creating risks to launch readiness, user experience quality, and brand reputation.",
            hypothesis: "Structured, systematic testing cycles with rigorous defect documentation and cross-functional feedback loops will surface critical issues early enough to fix before launch.",
            action: "Executed structured pre-release testing cycles across multiple mobile OS builds. Documented 15+ UX and functional defects with severity classification.",
            tools: ["Structured QA", "Defect Tracking", "UX Heuristics", "Feedback Loops"],
            impactParts: [
                "15+ UX & functional defects identified pre-launch",
                "Strengthened launch readiness and validation workflows",
                "Improved product stability and release confidence"
            ]
        },
        {
            title: "Jewelry Retail Analytics Dashboard",
            category: "Power BI · Excel",
            icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
            colorClass: "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-500/10 border-blue-100 dark:border-blue-500/20",
            problem: "Retail decision-makers lacked real-time visibility into KPIs like Conversion Rate, AOV, and Gross Margin, leading to inventory overstock and slow executive reporting.",
            hypothesis: "Building a structured MIS dashboard tracking core retail KPIs will reduce reporting errors, improve forecast accuracy, and enable faster decisions.",
            action: "Conducted KPI mapping across Conversion Rate, AOV, Sales/sq ft, and Gross Margin %. Built MIS dashboards in Power BI and Excel.",
            tools: ["Power BI", "Excel", "MIS Design"],
            impactParts: [
                "Reduced manual reporting time by 80%",
                "Improved forecasting accuracy by 10%",
                "Enabled data-driven inventory and sales optimizations"
            ]
        },
        {
            title: "WhySchool Brand Strategy",
            category: "Consumer Strategy · Guided by Ritik Prajjal Sahu, ISB Alumnus",
            icon: <g><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></g>,
            colorClass: "text-rose-600 bg-rose-50 dark:text-rose-400 dark:bg-rose-500/10 border-rose-100 dark:border-rose-500/20",
            problem: "WhySchool needed a differentiated consumer brand strategy to compete in a crowded edtech space, with no clear positioning or growth model benchmarked against successful D2C brands.",
            hypothesis: "Applying structured strategy frameworks (SWOT, Porter's Five Forces, BCG Matrix) and benchmarking against proven D2C models like boAt and Nish Hair will identify WhySchool's most viable growth levers.",
            action: "Built comprehensive consumer brand strategy using SWOT, Porter's Five Forces, and BCG Matrix. Benchmarked against boAt and Parul Gulati (Nish Hair) D2C models. Identified strategic positioning and growth levers.",
            tools: ["SWOT Analysis", "Porter's Five Forces", "BCG Matrix", "D2C Benchmarking", "Brand Strategy"],
            impactParts: [
                "Identified top 3 growth levers for D2C expansion",
                "Developed differentiated positioning framework vs. competitors",
                "Strategy presented to ISB alumnus mentor for validation"
            ]
        },
        {
            title: "D2C Growth Research @ Innovist",
            category: "Product & Growth Strategy · 5 Skincare Brands",
            icon: <g><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></g>,
            colorClass: "text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20",
            problem: "Innovist's multi-brand D2C portfolio lacked structured competitive intelligence, leaving product and growth teams without clear differentiation signals or actionable retention insights.",
            hypothesis: "Systematic competitive benchmarking and acquisition funnel analysis across 5 brands will surface actionable improvement opportunities that directly lift customer retention and positioning clarity.",
            action: "Conducted competitive benchmarking across 5 skincare brands. Analyzed acquisition funnels and customer retention drivers. Evaluated product-market positioning and identified differentiation gaps within the D2C ecosystem.",
            tools: ["Competitive Benchmarking", "Acquisition Funnel Analysis", "Market Research", "D2C Strategy"],
            impactParts: [
                "10+ data-backed operational & positioning improvements recommended",
                "Strengthened brand differentiation across 5-brand portfolio",
                "Informed growth strategy decisions at the product team level"
            ]
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 bg-white dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <FadeInUp>
                        <div className="text-blue-600 dark:text-blue-500 text-sm font-bold tracking-widest mb-4 uppercase">CASE STUDIES</div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">Product Thinking in Action</h2>
                    </FadeInUp>
                </div>

                <div className="space-y-12">
                    {projects.map((p, i) => (
                        <FadeInUp key={i} delay={i * 0.1}>
                            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-zinc-800 shadow-sm w-full glow-effect hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                
                                {/* Header */}
                                <div className="flex items-center gap-5 mb-10">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border ${p.colorClass}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            {p.icon}
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-1">{p.title}</h3>
                                        <div className="text-slate-500 dark:text-zinc-400 font-medium text-sm">{p.category}</div>
                                    </div>
                                </div>
                                
                                {/* Body Columns */}
                                <div className="grid md:grid-cols-3 gap-8 mb-10">
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 dark:text-zinc-500 tracking-widest uppercase mb-3">Problem</div>
                                        <p className="text-slate-700 dark:text-zinc-300 leading-relaxed text-sm">{p.problem}</p>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 dark:text-zinc-500 tracking-widest uppercase mb-3">Hypothesis</div>
                                        <p className="text-slate-700 dark:text-zinc-300 leading-relaxed text-sm">{p.hypothesis}</p>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 dark:text-zinc-500 tracking-widest uppercase mb-3">Action</div>
                                        <p className="text-slate-700 dark:text-zinc-300 leading-relaxed text-sm mb-4">{p.action}</p>
                                        
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {p.tools.map(t => (
                                                <span key={t} className="px-3 py-1.5 bg-slate-100 dark:bg-zinc-800 rounded-lg text-xs font-semibold text-slate-600 dark:text-zinc-300">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Impact Footer */}
                                <div className="p-6 md:p-8 bg-green-50 dark:bg-green-500/10 rounded-2xl border border-green-200 dark:border-green-500/20">
                                    <div className="text-xs font-bold text-green-700 dark:text-green-500 tracking-widest uppercase mb-4">Impact & Results</div>
                                    <div className="grid sm:grid-cols-3 gap-6">
                                        {p.impactParts && p.impactParts.map((impact, idx) => (
                                            <div key={idx} className="flex gap-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600 dark:text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                                <div className="text-green-900 dark:text-green-100 text-sm font-medium leading-relaxed">{impact}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                            </div>
                        </FadeInUp>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* --- Experience Section --- */
const ExperienceSection = () => {
    const experiences = [
        {
            role: "Product Tester — Mobile OS, Earbuds & Smart Watches (Pre-Release)",
            company: "OnePlus Software R&D Centre Private Limited",
            date: "SEP 2024 — DEC 2025",
            points: [
                "Strengthened launch readiness by executing structured pre-release testing cycles across mobile OS builds, earbuds, and smart watches — identifying 15+ UX and functional defects that improved product stability prior to release.",
                "Enhanced validation workflows by refining defect tracking and cross-functional feedback loops across multiple product categories, aligning processes with IT quality standards.",
                "Contributed to usability improvements through systematic issue prioritization and reporting, directly impacting release confidence across devices."
            ]
        },
        {
            role: "Product Research Contributor — D2C Brand Portfolio",
            company: "Innovist (5 Skincare Brands)",
            date: "APR 2024 — PRESENT",
            points: [
                "Influenced product and growth strategy by conducting competitive benchmarking across a multi-brand D2C portfolio of 5 skincare brands.",
                "Analyzed acquisition funnels and customer retention drivers to identify optimization opportunities, resulting in 10+ data-backed operational and positioning improvement recommendations.",
                "Evaluated product-market positioning within the D2C ecosystem to strengthen brand differentiation and go-to-market strategy."
            ]
        },
        {
            role: "Business Analytics & Retail Operations Intern",
            company: "D-DZIRE JEWELS — FOCO Model Analysis",
            date: "MAY 2025 — OCT 2025",
            points: [
                "Built KPI dashboards tracking Conversion Rate, AOV, Sales/sq ft, and Gross Margin %; improved reporting accuracy by 8–10% through structured MIS design using Excel & SQL.",
                "Analyzed 5,000+ transactions using Power BI and Excel, improving forecast accuracy by 10% and reducing excess inventory by 11%.",
                "Delivered weekly executive performance insights enabling data-driven decision-making at the leadership level."
            ]
        },
        {
            role: "Industry & Competitive Strategy Intern",
            company: "D-DZIRE JEWELS — Lab-Grown Diamonds Sector",
            date: "MAY 2025 — OCT 2025",
            points: [
                "Assessed pricing models and market positioning within an emerging luxury-tech industry, enabling clearer competitive strategy for the brand.",
                "Applied SWOT and Porter's Five Forces to evaluate D2C expansion potential and FOCO Model viability.",
                "Conducted product and competitor analysis to identify strategic market gaps and growth opportunities."
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 px-6 bg-slate-50 dark:bg-zinc-950/80">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <FadeInUp>
                        <div className="text-blue-600 dark:text-blue-500 text-sm font-bold tracking-widest mb-4 uppercase">CAREER PATH</div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">Experience</h2>
                        <p className="text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto md:text-lg">
                            Outcome-oriented roles spanning analytics, product operations, and strategic research.
                        </p>
                    </FadeInUp>
                </div>

                <div className="relative border-l border-slate-200 dark:border-zinc-800 ml-3 md:ml-0 md:pl-0">
                    {experiences.map((exp, i) => (
                        <SlideInLeft key={i} delay={i * 0.08}>
                            <div className={`mb-12 relative ${i !== experiences.length - 1 ? '' : 'mb-0'}`}>
                                <div className="absolute w-2 h-2 bg-blue-600 dark:bg-blue-500 rounded-full -left-[4.5px] top-6 ring-4 ring-slate-50 dark:ring-zinc-950"></div>
                                <div className="ml-8 md:ml-12 bg-white dark:bg-[#0a0a0c] p-8 md:p-10 rounded-2xl border border-slate-200 dark:border-zinc-800/80 shadow-sm glow-effect hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{exp.role}</h3>
                                        <span className="text-sm font-bold text-blue-600 dark:text-blue-500 shrink-0 uppercase tracking-widest">{exp.date}</span>
                                    </div>
                                    <div className="text-slate-500 dark:text-zinc-400 font-medium mb-8 text-lg">{exp.company}</div>
                                    <ul className="space-y-5">
                                        {exp.points.map((p, j) => (
                                            <motion.li
                                                key={j}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + j * 0.1, duration: 0.4 }}
                                                className="text-slate-700 dark:text-zinc-300 flex items-start text-base leading-relaxed"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-600 mr-4 mt-2.5 shrink-0"></div>
                                                <span>{p}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </SlideInLeft>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* --- Skills Section --- */
const SkillsSection = () => {
    const categories = [
        {
            title: "Product Skills",
            icon: <g><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></g>,
            colorClass: "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-500/10 border-blue-100 dark:border-blue-500/20",
            skills: ["Product Testing", "Consumer Insights", "UX Feedback", "Market Research", "Competitive Analysis", "KPI Tracking", "A/B Testing", "Pre-launch Validation"]
        },
        {
            title: "Analytics & Tech",
            icon: <g><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></g>,
            colorClass: "text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20",
            skills: ["Excel (Advanced)", "Power BI", "Data Visualization", "MIS Reporting", "Workforce Analytics", "Dashboarding", "Process Optimization"]
        },
        {
            title: "Business & Strategy",
            icon: <g><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></g>,
            colorClass: "text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-500/10 border-purple-100 dark:border-purple-500/20",
            skills: ["Strategic Management", "SWOT Analysis", "Porter's Five Forces", "BCG Matrix", "Competitive Benchmarking", "Stakeholder Reporting", "IT & OPERATIONS Strategy", "D2C Growth", "Structured Problem Solving"]
        }
    ];

    return (
        <section id="skills" className="py-24 px-6 bg-white dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <FadeInUp>
                        <div className="text-blue-600 dark:text-blue-500 text-sm font-bold tracking-widest mb-4 uppercase">TOOLKIT</div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">Skills &amp; Expertise</h2>
                        <p className="text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto md:text-lg">
                            A versatile skill set spanning product management, data analytics, and business strategy.
                        </p>
                    </FadeInUp>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {categories.map((c, i) => (
                        <ScaleIn key={i} delay={i * 0.1}>
                            <div className="bg-slate-50 dark:bg-zinc-900/50 rounded-3xl p-8 h-full border border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="flex flex-col mb-8">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm border mb-6 ${c.colorClass}`}>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            {c.icon}
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">{c.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {c.skills.map((s, si) => (
                                        <motion.span
                                            key={s}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: si * 0.04, duration: 0.3 }}
                                            className="px-4 py-2 bg-white dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700/50 rounded-full text-sm font-semibold text-slate-700 dark:text-zinc-300 hover:border-blue-500 dark:hover:border-blue-500 transition-colors shadow-sm cursor-default"
                                        >
                                            {s}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </ScaleIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* --- Education Section --- */
const EducationSection = () => {
    return (
        <section id="education" className="py-24 px-6 bg-slate-50 dark:bg-zinc-950/80">
            <div className="container mx-auto max-w-4xl">
                 <div className="text-center mb-16">
                    <FadeInUp>
                        <div className="text-blue-600 dark:text-blue-500 text-sm font-bold tracking-widest mb-4 uppercase">EDUCATION</div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">Academic Background</h2>
                        <p className="text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto md:text-lg">
                            A strong technical and business foundation combining IT expertise with strategic management.
                        </p>
                    </FadeInUp>
                </div>

                <div className="space-y-8">
                    <FadeInUp delay={0.1}>
                        <div className="bg-white dark:bg-[#0a0a0c] rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-zinc-800 shadow-sm w-full glow-effect hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-500 shrink-0 border border-blue-100 dark:border-blue-900/30">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                                </div>
                                <div className="text-sm font-bold text-blue-600 dark:text-blue-500 tracking-widest uppercase">AUG 2025 — APR 2027</div>
                            </div>
                            
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">MBA — Information Technology &amp; Operations</h3>
                            <div className="text-slate-500 dark:text-zinc-400 text-lg mb-2">Regional College of Management (RCM), Bhubaneswar</div>
                            <div className="text-blue-600 dark:text-blue-500 font-medium mb-8">Strategic Management, IT &amp; OPERATIONS Strategy</div>

                            <div className="border-t border-slate-100 dark:border-zinc-800 pt-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 dark:text-zinc-500"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                                    <div className="text-[11px] font-bold text-slate-400 dark:text-zinc-500 tracking-widest uppercase">KEY COURSEWORK</div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["Strategic Management", "Product Strategy", "IT Management", "IT & OPERATIONS Strategy", "Operations Management", "Business Analytics"].map(course => (
                                        <span key={course} className="px-5 py-2.5 bg-slate-100 dark:bg-zinc-800/80 rounded-full text-sm font-semibold text-slate-600 dark:text-zinc-400">
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeInUp>
                    
                    <FadeInUp delay={0.2}>
                        <div className="bg-white dark:bg-[#0a0a0c] rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-zinc-800 shadow-sm w-full glow-effect hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-500 shrink-0 border border-blue-100 dark:border-blue-900/30">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                                </div>
                                <div className="text-sm font-bold text-blue-600 dark:text-blue-500 tracking-widest uppercase">AUG 2022 — JUN 2025</div>
                            </div>
                            
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">BBA — Bachelor of Business Administration</h3>
                            <div className="text-slate-500 dark:text-zinc-400 text-lg mb-2">Regional College of Management (RCM), Bhubaneswar</div>
                            <div className="text-blue-600 dark:text-blue-500 font-medium mb-8">Foundation in Business Principles</div>

                            <div className="border-t border-slate-100 dark:border-zinc-800 pt-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 dark:text-zinc-500"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                                    <div className="text-[11px] font-bold text-slate-400 dark:text-zinc-500 tracking-widest uppercase">KEY COURSEWORK</div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["Strategic Management", "Business Analytics", "Organizational Behavior", "Marketing Strategy", "Financial Accounting"].map(course => (
                                        <span key={course} className="px-5 py-2.5 bg-slate-100 dark:bg-zinc-800/80 rounded-full text-sm font-semibold text-slate-600 dark:text-zinc-400">
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeInUp>
                </div>
            </div>
        </section>
    );
};

/* --- Credentials Section --- */
const CredentialsSection = () => {
    const certifications = [
        {
            provider: "IBM",
            providerColor: "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-500/10",
            title: "Gen AI: Prompt Engineering Basics",
            url: "https://www.linkedin.com/in/ayushmba/details/certifications/"
        },
        {
            provider: "Online",
            providerColor: "text-emerald-600 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-500/10",
            title: "Generative AI & ChatGPT for Business",
            url: "https://www.linkedin.com/in/ayushmba/details/certifications/"
        },
        {
            provider: "Forage Job Simulation",
            providerColor: "text-amber-600 bg-amber-100 dark:text-amber-400 dark:bg-amber-500/10",
            title: "AWS APAC Solutions Architecture",
            url: "https://www.linkedin.com/in/ayushmba/details/certifications/"
        },
        {
            provider: "Coursera",
            providerColor: "text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-500/10",
            title: "Management of Fashion & Luxury Companies",
            url: "https://www.linkedin.com/in/ayushmba/details/certifications/"
        },
        {
            provider: "LinkedIn Learning",
            providerColor: "text-rose-600 bg-rose-100 dark:text-rose-400 dark:bg-rose-500/10",
            title: "Customer Experience (CX) for Business Success",
            url: "https://www.linkedin.com/in/ayushmba/details/certifications/"
        },
        {
            provider: "Nationwide Webinar",
            providerColor: "text-indigo-600 bg-indigo-100 dark:text-indigo-400 dark:bg-indigo-500/10",
            title: "Career in Securities Market",
            url: "https://www.linkedin.com/in/ayushmba/details/certifications/"
        }
    ];

    return (
        <section id="credentials" className="py-24 px-6 bg-white dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <div className="text-blue-600 dark:text-blue-500 text-sm font-bold tracking-widest mb-4 uppercase">CREDENTIALS</div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">Certifications &amp; Leadership</h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                    {/* Certifications (Left) */}
                    <div className="lg:w-2/3">
                        <div className="flex items-center gap-3 mb-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-500 dark:text-blue-400"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                            <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-300 tracking-widest uppercase">CERTIFICATIONS</h3>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                            {certifications.map((cert, i) => (
                                <FadeInUp key={i} delay={i * 0.1}>
                                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="block h-full group cursor-pointer hover:-translate-y-1 transition-transform">
                                        <div className="bg-slate-50 dark:bg-zinc-900/40 p-6 rounded-2xl border border-slate-200 dark:border-zinc-800/80 shadow-sm h-full hover:border-slate-300 dark:hover:border-zinc-700 transition-colors glow-effect">
                                            <div className={`inline-block px-3 py-1.5 rounded-lg text-xs font-bold mb-4 ${cert.providerColor}`}>
                                                {cert.provider}
                                            </div>
                                            <div className="flex justify-between items-start">
                                                <h4 className="text-slate-900 dark:text-white font-bold tracking-tight text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{cert.title}</h4>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 dark:text-zinc-500 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity mt-1 flex-shrink-0"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                                            </div>
                                        </div>
                                    </a>
                                </FadeInUp>
                            ))}
                        </div>
                    </div>

                    {/* Leadership (Right) */}
                    <div className="lg:w-1/3">
                        <div className="flex items-center gap-3 mb-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-amber-500"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                            <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-300 tracking-widest uppercase">LEADERSHIP</h3>
                        </div>
                        <FadeInUp delay={0.2}>
                            <div className="bg-slate-50 dark:bg-zinc-900/40 p-8 rounded-2xl border border-slate-200 dark:border-zinc-800/80 shadow-sm h-full hover:border-slate-300 dark:hover:border-zinc-700 transition-colors glow-effect flex flex-col">
                                <div className="w-12 h-12 bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-500 rounded-xl flex items-center justify-center mb-6 border border-amber-100 dark:border-amber-500/20 shadow-sm flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                                </div>
                                <h4 className="text-xl text-slate-900 dark:text-white font-bold mb-4 tracking-tight">Point of Contact &mdash; CEO, OrangeCross</h4>
                                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-[15px]">
                                    Led cross-functional coordination for a 100+ participant management fest; served as POC facilitating Mr. Ajay Bhanja's role as Leadership Speaker and Awardee.
                                </p>
                            </div>
                        </FadeInUp>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* --- Testimonials Section --- */
const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Rahul Sharma",
            role: "Senior PM, OnePlus Software R&D",
            text: "Ayush brought exceptional attention to detail during pre-release testing. His structured defect reporting directly improved our launch readiness and confidence across product categories.",
            initials: "RS",
            color: "bg-blue-600"
        },
        {
            name: "Priya Mehta",
            role: "Growth Lead, Innovist",
            text: "His competitive benchmarking work was thorough and actionable. The 10+ data-backed recommendations he delivered gave us clear direction for D2C positioning and growth strategy.",
            initials: "PM",
            color: "bg-purple-600"
        },
        {
            name: "Vikram Das",
            role: "Business Head, D-Dzire Jewels",
            text: "Ayush built our entire KPI dashboard from scratch. His ability to translate raw transaction data into executive-level insights was remarkable for someone at his stage.",
            initials: "VD",
            color: "bg-emerald-600"
        }
    ];
    return (
        <section id="testimonials" className="py-24 px-6 bg-white dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <FadeInUp>
                        <div className="text-blue-600 dark:text-blue-500 text-sm font-bold tracking-widest mb-4 uppercase">SOCIAL PROOF</div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">What People Say</h2>
                        <p className="text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto md:text-lg">
                            Feedback from mentors and collaborators across my internships.
                        </p>
                    </FadeInUp>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <FadeInUp key={i} delay={i * 0.1}>
                            <div className="bg-slate-50 dark:bg-zinc-900 rounded-2xl p-8 border border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed mb-8 flex-1 italic">&ldquo;{t.text}&rdquo;</p>
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>{t.initials}</div>
                                    <div>
                                        <div className="font-bold text-slate-900 dark:text-white text-sm">{t.name}</div>
                                        <div className="text-xs text-slate-500 dark:text-zinc-500">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        </FadeInUp>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* --- FAQ Section (Answer Engine Optimization) --- */
const FAQSection = () => {
    const faqs = [
        {
            q: "Who is Ayush Chatterjee?",
            a: "Ayush Chatterjee is a data-driven, strategic, and execution-focused Product Manager. He has a background in IT, Analytics, and OPERATIONS, and has worked on pre-release product validation at OnePlus, and D2C growth research at Innovist."
        },
        {
            q: "What is Ayush Chatterjee's product philosophy?",
            a: "Ayush's product philosophy centers around Customer Obsession, Data-Backed Decisions, 0 to 1 Thinking, Execution Focus, Cross-Functional Leadership, and a KPI-Driven Mindset."
        },
        {
            q: "How can I contact Ayush Chatterjee for product management roles?",
            a: "You can reach out to Ayush via LinkedIn or through the contact section on his portfolio website at ayushchatterjee.me."
        }
    ];

    return (
        <section id="faq" className="py-24 px-6 bg-slate-50 dark:bg-zinc-950/80 border-t border-slate-200 dark:border-zinc-800">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <FadeInUp>
                        <div className="text-blue-600 dark:text-blue-500 text-sm font-bold tracking-widest mb-4 uppercase">QUICK FACTS</div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">Frequently Asked Questions</h2>
                        <p className="text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto md:text-lg">
                            Quick answers about my background, experience, and approach to product management.
                        </p>
                    </FadeInUp>
                </div>
                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <FadeInUp key={i} delay={i * 0.1}>
                            <div className="bg-white dark:bg-[#0a0a0c] p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md glow-effect">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-start gap-3 tracking-tight">
                                    <span className="text-blue-600 dark:text-blue-500 font-black">Q.</span>
                                    {faq.q}
                                </h3>
                                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed pl-8">
                                    {faq.a}
                                </p>
                            </div>
                        </FadeInUp>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* --- Contact Section --- */
const ContactSection = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        try {
            await fetch('https://formspree.io/f/xpwrvrjq', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(formState)
            });
            setSent(true);
        } catch(err) {
            alert('Something went wrong. Please email directly at ayushchatterjee@example.com');
        }
        setSending(false);
    };

    return (
        <section id="contact" className="py-24 px-6 bg-white dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800">
            <div className="container mx-auto max-w-5xl">
                <FadeInUp>
                    <div className="text-center mb-16">
                        <div className="text-blue-600 dark:text-blue-500 text-sm font-bold tracking-widest mb-4 uppercase">GET IN TOUCH</div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-slate-900 dark:text-white tracking-tighter">
                            Let's build something <span className="text-blue-600 dark:text-blue-500">impactful.</span>
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                            Currently exploring full-time Product Manager and APM opportunities. Drop me a message!
                        </p>
                    </div>
                </FadeInUp>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <FadeInUp delay={0.1}>
                        <div className="bg-slate-50 dark:bg-zinc-900 rounded-3xl p-8 border border-slate-200 dark:border-zinc-800 shadow-sm">
                            {sent ? (
                                <div className="text-center py-8">
                                    <div className="text-5xl mb-4">🎉</div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                                    <p className="text-slate-600 dark:text-zinc-400">I'll get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-1.5">Your Name</label>
                                        <input required value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} type="text" placeholder="e.g. Rahul Sharma" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-sm" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-1.5">Email Address</label>
                                        <input required value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})} type="email" placeholder="you@company.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-sm" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-1.5">Message</label>
                                        <textarea required value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})} rows={4} placeholder="Hi Ayush, I'd love to discuss a PM opportunity..." className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-sm resize-none"></textarea>
                                    </div>
                                    <button type="submit" disabled={sending} className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white rounded-xl font-semibold transition-all shadow-[0_0_16px_rgba(37,99,235,0.35)] flex items-center justify-center gap-2">
                                        {sending ? 'Sending...' : 'Send Message'}
                                        {!sending && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>}
                                    </button>
                                </form>
                            )}
                        </div>
                    </FadeInUp>

                    {/* Direct Links */}
                    <FadeInUp delay={0.2}>
                        <div className="flex flex-col gap-4">
                            <a href="mailto:ayushchatterjee@rcm.ac.in" className="flex items-center gap-4 p-5 bg-slate-50 dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all group shadow-sm">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">Email</div>
                                    <div className="text-slate-500 dark:text-zinc-500 text-xs">ayushchatterjee@rcm.ac.in</div>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/ayushmba" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 bg-slate-50 dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all group shadow-sm">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">LinkedIn</div>
                                    <div className="text-slate-500 dark:text-zinc-500 text-xs">linkedin.com/in/ayushmba</div>
                                </div>
                            </a>
                            <a href="https://wa.me/+919876543210?text=Hi%20Ayush!" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 bg-slate-50 dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 hover:border-green-500 dark:hover:border-green-500 transition-all group shadow-sm">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-green-600 dark:group-hover:text-green-400 transition">WhatsApp</div>
                                    <div className="text-slate-500 dark:text-zinc-500 text-xs">Quick chat on WhatsApp</div>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/ayushmba/details/featured/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl border border-emerald-200 dark:border-emerald-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all group shadow-sm">
                                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                                </div>
                                <div>
                                    <div className="font-bold text-emerald-700 dark:text-emerald-400 text-sm">Download Resume</div>
                                    <div className="text-slate-500 dark:text-zinc-500 text-xs">Latest CV on LinkedIn</div>
                                </div>
                            </a>
                        </div>
                    </FadeInUp>
                </div>
            </div>
        </section>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
