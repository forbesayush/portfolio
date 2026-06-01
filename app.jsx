const { useState, useEffect, useRef } = React;
const { motion, useScroll, useTransform, AnimatePresence } = window.Motion;

// --- Security Layers & Honeypot ---
const SecurityWrapper = ({ children }) => {
    const [isVpnBlocked, setIsVpnBlocked] = useState(false);
    const [isCheckingVpn, setIsCheckingVpn] = useState(true);

    useEffect(() => {
        const handleContextMenu = (e) => e.preventDefault();
        const handleKeyDown = (e) => {
            if (e.key === 'F12' || 
               ((e.ctrlKey || e.metaKey) && e.shiftKey && ['i', 'j', 'c'].includes(e.key.toLowerCase())) ||
               ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'u')) {
                e.preventDefault();
            }
        };
        if (window.top !== window.self) {
            window.top.location = window.self.location;
        }
        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('keydown', handleKeyDown);
        
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

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    if (isCheckingVpn) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 flex flex-col items-center justify-center transition-colors duration-300 font-sans">
                <div className="w-10 h-10 border-4 border-blue-200 dark:border-blue-900 border-t-blue-600 dark:border-t-blue-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    if (isVpnBlocked) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 flex flex-col items-center justify-center px-6 text-center">
                <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xl p-8 max-w-2xl w-full rounded-3xl">
                    <h1 className="text-3xl font-black text-red-600 mb-4">Access Restricted</h1>
                    <p className="text-slate-600 dark:text-zinc-400">To maintain accurate visitor analytics, Commercial VPNs and Proxies are blocked. Please disable your VPN to continue.</p>
                </div>
            </div>
        );
    }

    return <React.Fragment>{children}</React.Fragment>;
};

// --- Custom Animated 3D Global IT Network ---
const GlobalDataScene = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let points = [];
        let particles = [];
        
        const init = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            points = [];
            particles = [];
            
            const phi = Math.PI * (3 - Math.sqrt(5)); 
            const numPoints = width < 768 ? 200 : 500;
            for (let i = 0; i < numPoints; i++) {
                const y = 1 - (i / (numPoints - 1)) * 2; 
                const r = Math.sqrt(1 - y * y);
                const theta = phi * i;
                const x = Math.cos(theta) * r;
                const z = Math.sin(theta) * r;
                points.push({ x, y, z, baseSize: Math.random() * 1.5 + 0.5 });
            }

            for(let i=0; i<40; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 2
                });
            }
        };

        let angleX = 0;
        let angleY = 0;
        let targetAngleX = 0;
        let targetAngleY = 0;

        const handleMouseMove = (e) => {
            targetAngleY = (e.clientX / window.innerWidth - 0.5) * 1.5;
            targetAngleX = (e.clientY / window.innerHeight - 0.5) * 1.5;
        };
        window.addEventListener('mousemove', handleMouseMove);

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            
            const bgGrad = ctx.createLinearGradient(0, 0, width, height);
            bgGrad.addColorStop(0, '#030303');
            bgGrad.addColorStop(1, '#0a0a0f');
            ctx.fillStyle = bgGrad;
            ctx.fillRect(0, 0, width, height);
            
            ctx.fillStyle = 'rgba(255,255,255,0.1)';
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                if(p.x < 0 || p.x > width) p.vx *= -1;
                if(p.y < 0 || p.y > height) p.vy *= -1;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
                ctx.fill();
            });

            angleX += (targetAngleX - angleX) * 0.05;
            angleY += (targetAngleY - angleY) * 0.05;
            
            const time = Date.now() * 0.00015;
            const finalAngleY = time + angleY;
            const finalAngleX = angleX + 0.2;

            const cosX = Math.cos(finalAngleX);
            const sinX = Math.sin(finalAngleX);
            const cosY = Math.cos(finalAngleY);
            const sinY = Math.sin(finalAngleY);
            
            const radius = Math.min(width, height) * (width < 768 ? 0.6 : 0.45);
            const focalLength = 1000;
            const centerX = width < 768 ? width / 2 : width * 0.75; 
            const centerY = height * 0.5;

            points.forEach((p, i) => {
                let rotX = p.x * cosY - p.z * sinY;
                let rotZ = p.z * cosY + p.x * sinY;
                let rotY = p.y * cosX - rotZ * sinX;
                let finalZ = rotZ * cosX + p.y * sinX;
                
                const scale = focalLength / (focalLength + finalZ * radius);
                const screenX = centerX + rotX * radius * scale;
                const screenY = centerY + rotY * radius * scale;
                
                if (finalZ > -0.2) { 
                    const alpha = Math.min(1, (finalZ + 1) * 0.5);
                    ctx.fillStyle = `rgba(0, 240, 255, ${alpha * 0.7})`; 
                    ctx.beginPath();
                    ctx.arc(screenX, screenY, p.baseSize * scale, 0, Math.PI * 2);
                    ctx.fill();

                    if (i % 6 === 0) {
                        ctx.strokeStyle = `rgba(0, 240, 255, ${alpha * 0.1})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(screenX, screenY);
                        ctx.lineTo(centerX, centerY);
                        ctx.stroke();
                    }
                }
            });
            requestAnimationFrame(draw);
        };
        
        init();
        draw();
        window.addEventListener('resize', init);
        return () => {
            window.removeEventListener('resize', init);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0 pointer-events-none"></canvas>;
};

// --- UI Components ---
const BentoCard = ({ children, className = "", delay = 0 }) => (
    <motion.div 
        initial={ opacity: 0, y: 30 }
        whileInView={ opacity: 1, y: 0 }
        viewport={ once: true, margin: "-50px" }
        transition={ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }
        className={`bg-white/[0.02] backdrop-blur-2xl border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 relative overflow-hidden group ${className}`}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-700 pointer-events-none"></div>
        <div className="relative z-10">{children}</div>
    </motion.div>
);

const SectionTitle = ({ title, subtitle }) => (
    <div className="mb-12">
        <div className="text-cyan-400 font-mono text-xs md:text-sm tracking-[0.2em] uppercase mb-4 flex items-center gap-4">
            <span className="w-12 h-px bg-cyan-400/50"></span>
            {subtitle}
        </div>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white">{title}</h2>
    </div>
);

// --- Sections ---

const HeroSection = () => (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20 pb-10">
        <div className="max-w-4xl">
            <motion.div initial={ opacity: 0, x: -30 } animate={ opacity: 1, x: 0 } transition={ duration: 1 } className="font-mono text-cyan-400 text-sm md:text-base tracking-[0.2em] mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                OPEN TO NEW OPPORTUNITIES
            </motion.div>
            
            <motion.h1 initial={ opacity: 0, y: 30 } animate={ opacity: 1, y: 0 } transition={ duration: 1, delay: 0.2 } className="text-6xl md:text-8xl font-medium tracking-tighter text-white mb-6 leading-[1.1]">
                Ayush Chatterjee
            </motion.h1>
            
            <motion.div initial={ opacity: 0, y: 30 } animate={ opacity: 1, y: 0 } transition={ duration: 1, delay: 0.4 } className="text-xl md:text-3xl text-zinc-400 font-light tracking-tight mb-10 max-w-2xl">
                Product Manager specializing in <span className="text-white font-normal">IT & International Business.</span> Bridging complex data structures with global market execution.
            </motion.div>

            <motion.div initial={ opacity: 0 } animate={ opacity: 1 } transition={ duration: 1, delay: 0.8 } className="flex flex-wrap gap-6 items-center">
                <a href="#contact" className="px-8 py-4 bg-cyan-500 text-black font-mono text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all rounded-sm shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                    Hire Me
                </a>
                <a href="resume.pdf" target="_blank" className="px-8 py-4 border border-white/20 text-white font-mono text-sm font-bold tracking-widest uppercase hover:bg-white/10 transition-all rounded-sm">
                    Download Resume
                </a>
                <a href="#about" className="font-mono text-sm tracking-widest uppercase text-zinc-400 hover:text-white transition-colors flex items-center gap-2 mt-4 md:mt-0">
                    Explore Data <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                </a>
            </motion.div>
        </div>
    </section>
);

const AboutSection = () => {
    const metrics = [ ref: r1, value: c1, suffix: '+', label: 'UX Defects Found', sub: 'Pre-release @ OnePlus' },
        { ref: r2, value: c2, suffix: '+', label: 'Transactions Analyzed', sub: 'D-Dzire Jewels FOCO' },
        { ref: r3, value: c3, suffix: '%', label: 'Forecast Accuracy Gain', sub: 'Power BI & Excel' },
        { ref: r4, value: c4, suffix: '', label: 'Internships Completed', sub: 'Across IT, Retail & D2C' },
    ];
    const philosophies = [
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
        <section id="about" className="py-32 px-6 md:px-20 max-w-7xl mx-auto">
            <SectionTitle title="Product Philosophy" subtitle="01 // About" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {metrics.map((m, i) => (
                    <BentoCard key={i} delay={i * 0.1}>
                        <div className="text-5xl font-light text-cyan-400 mb-2">{m.value}</div>
                        <div className="text-zinc-400 font-mono text-sm uppercase tracking-wider">{m.label}</div>
                    </BentoCard>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {philosophies.map((p, i) => (
                    <BentoCard key={i} delay={0.3 + (i * 0.1)}>
                        <div className="text-cyan-400 mb-4">{p.icon}</div>
                        <h3 className="text-xl font-medium text-white mb-3">{p.title}</h3>
                        <p className="text-zinc-400 font-light text-sm">{p.desc}</p>
                    </BentoCard>
                ))}
            </div>
        </section>
    );
};

const ExperienceSection = () => {
    const experiences = [
            role: "User Experience Analyst — Product Strategy",
            company: "OnePlus & Innovist",
            date: "OCT 2025 — PRESENT",
            points: [
                "Conducted structured quality assurance diagnostics across 4 unique operating system builds, mapping end-to-end interface performance parameters to evaluate 20+ interface bugs.",
                "Reduced post-release software defect recurrence by 22% after authoring comprehensive engineering documentation and technical root-cause diagnostics within rapid cross-functional development loops.",
                "Improved functional customer task-flow delivery efficiency metrics by 15% by defining clean digital feature optimization criteria from raw product web usability records."
            ]
        },
        {
            role: "Business Analytics & International Strategy Intern",
            company: "D2C Skincare Brand Portfolio",
            date: "SEP 2024 — DEC 2025",
            points: [
                "Analyzed international client acquisition data trends and global retention variances across 5 storefronts, successfully resolving a complex 17% repeat purchase performance deficit.",
                "Validated corporate roadmap software deployment strategies by preparing 3 comprehensive data-backed growth recommendations to teams, securing a 66% internal stakeholder adoption rate.",
                "Streamlined routine cross-border business reporting loops by 35% after initiating an automated performance metric dashboard script to track global sales data structures.",
                "Controlled interface engagement testing operations across 8 digital web storefront modules by systematically auditing conversion tracking configurations and Average Order Value indicators."
            ]
        }
    ];
    return (
        <section id="experience" className="py-32 px-6 md:px-20 max-w-7xl mx-auto border-t border-white/5">
            <SectionTitle title="Professional Trajectory" subtitle="02 // Experience" />
            <div className="flex flex-col gap-6">
                {experiences.map((exp, i) => (
                    <BentoCard key={i} delay={i * 0.1} className="border-l-4 border-l-cyan-500/50 hover:border-l-cyan-400">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                            <div>
                                <h3 className="text-2xl font-medium text-white mb-2">{exp.role}</h3>
                                <div className="text-cyan-400 font-mono text-sm tracking-wider">{exp.company}</div>
                            </div>
                            <div className="font-mono text-xs text-zinc-500 px-4 py-2 border border-white/10 rounded-full w-max">{exp.date}</div>
                        </div>
                        <div className="space-y-3 text-zinc-400 font-light text-sm">
                            {exp.points.map((p, j) => (
                                <p key={j} className="flex gap-4"><span className="text-cyan-500/50">▹</span> {p}</p>
                            ))}
                        </div>
                    </BentoCard>
                ))}
            </div>
        </section>
    );
};

const ProjectsSection = () => {
    const projects = [
            title: "Pre-Release UX Testing @ OnePlus",
            category: "Product Validation · Mobile OS",
            icon: <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />,
            colorClass: "text-slate-700 bg-slate-100 dark:text-zinc-300 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700",
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
            colorClass: "text-slate-700 bg-slate-100 dark:text-zinc-300 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700",
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
            colorClass: "text-slate-700 bg-slate-100 dark:text-zinc-300 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700",
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
            colorClass: "text-slate-700 bg-slate-100 dark:text-zinc-300 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700",
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
        <section id="projects" className="py-32 px-6 md:px-20 max-w-7xl mx-auto border-t border-white/5">
            <SectionTitle title="Strategic Implementations" subtitle="03 // Case Studies" />
            <div className="grid grid-cols-1 gap-8">
                {projects.map((proj, i) => (
                    <BentoCard key={i} delay={i * 0.1}>
                        <div className="flex flex-col lg:flex-row gap-8">
                            <div className="lg:w-1/3">
                                <div className="font-mono text-xs text-cyan-400 mb-4 tracking-widest uppercase">{proj.category}</div>
                                <h3 className="text-2xl font-medium text-white mb-6">{proj.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {proj.tools.map((t, j) => <span key={j} className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded-sm text-zinc-400">{t}</span>)}
                                </div>
                            </div>
                            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-white font-medium mb-2 flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full"></span> Problem</h4>
                                    <p className="text-zinc-400 text-sm font-light mb-6">{proj.problem}</p>
                                    <h4 className="text-white font-medium mb-2 flex items-center gap-2"><span className="w-1 h-1 bg-yellow-500 rounded-full"></span> Action</h4>
                                    <p className="text-zinc-400 text-sm font-light">{proj.action}</p>
                                </div>
                                <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/5">
                                    <h4 className="text-white font-medium mb-4 flex items-center gap-2"><span className="w-1 h-1 bg-green-500 rounded-full"></span> Key Impact</h4>
                                    <ul className="space-y-3">
                                        {proj.impactParts.map((ip, j) => (
                                            <li key={j} className="text-sm text-zinc-300 font-light flex gap-3">
                                                <span className="text-cyan-400">✓</span> {ip}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </BentoCard>
                ))}
            </div>
        </section>
    );
};

const SkillsEducationSection = () => {
    const categories = [
            title: "Product Skills",
            icon: <g><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></g>,
            colorClass: "text-slate-700 bg-slate-100 dark:text-zinc-300 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700",
            skills: ["Product Testing", "Consumer Insights", "UX Feedback", "Market Research", "Competitive Analysis", "KPI Tracking", "A/B Testing", "Pre-launch Validation"]
        },
        {
            title: "Analytics & Tech",
            icon: <g><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></g>,
            colorClass: "text-slate-700 bg-slate-100 dark:text-zinc-300 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700",
            skills: ["Excel (Advanced)", "Power BI", "Data Visualization", "MIS Reporting", "Workforce Analytics", "Dashboarding", "Process Optimization"]
        },
        {
            title: "Business & Strategy",
            icon: <g><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></g>,
            colorClass: "text-slate-700 bg-slate-100 dark:text-zinc-300 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700",
            skills: ["Strategic Management", "SWOT Analysis", "Porter's Five Forces", "BCG Matrix", "Competitive Benchmarking", "Stakeholder Reporting", "IT & International Business Strategy", "D2C Growth", "Structured Problem Solving"]
        }
    ];
    return (
        <section id="skills" className="py-32 px-6 md:px-20 max-w-7xl mx-auto border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                    <SectionTitle title="Academic Foundation" subtitle="04 // Education" />
                    <div className="flex flex-col gap-8">
                        <div className="border-l border-white/10 pl-6 relative">
                            <div className="absolute w-2 h-2 bg-cyan-400 rounded-full -left-[4.5px] top-2 shadow-[0_0_10px_rgba(34,211,238,1)]"></div>
                            <div className="font-mono text-xs text-cyan-400 mb-2">AUG 2025 — APR 2027</div>
                            <h3 className="text-xl text-white font-medium mb-1">MBA — IT & International Business</h3>
                            <div className="text-zinc-400 font-light">Regional College of Management (RCM)</div>
                        </div>
                        <div className="border-l border-white/10 pl-6 relative">
                            <div className="absolute w-2 h-2 bg-zinc-600 rounded-full -left-[4.5px] top-2"></div>
                            <div className="font-mono text-xs text-zinc-500 mb-2">AUG 2022 — JUN 2025</div>
                            <h3 className="text-xl text-white font-medium mb-1">BBA (Hons)</h3>
                            <div className="text-zinc-400 font-light">Regional College of Management (RCM)</div>
                        </div>
                    </div>
                </div>
                <div>
                    <SectionTitle title="System Architecture" subtitle="05 // Skills" />
                    <div className="flex flex-col gap-6">
                        {categories.map((cat, i) => (
                            <div key={i}>
                                <h4 className="text-white font-medium mb-3">{cat.title}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map(skill => (
                                        <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-zinc-300 hover:border-cyan-400/50 transition-colors">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const CredentialsLibrarySection = () => {
    const certifications = [
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
        <section className="py-32 px-6 md:px-20 max-w-7xl mx-auto border-t border-white/5">
            <SectionTitle title="Certifications" subtitle="06 // Credentials" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certifications.map((cert, i) => (
                    <BentoCard key={i} delay={i * 0.1}>
                        <div className="font-mono text-xs text-zinc-500 mb-4">{cert.date}</div>
                        <h3 className="text-lg font-medium text-white mb-2">{cert.title}</h3>
                        <div className="text-cyan-400 text-sm">{cert.org}</div>
                    </BentoCard>
                ))}
            </div>
        </section>
    );
};

const FAQContactSection = () => {
    const faqs = [
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
    const [openFaq, setOpenFaq] = useState(null);
    return (
        <section id="contact" className="py-32 px-6 md:px-20 max-w-7xl mx-auto border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                    <SectionTitle title="Query Parameters" subtitle="07 // FAQ" />
                    <div className="flex flex-col gap-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border-b border-white/10 pb-4">
                                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center text-left text-white font-medium hover:text-cyan-400 transition-colors">
                                    {faq.q}
                                    <span className="text-cyan-400">{openFaq === i ? '−' : '+'}</span>
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div initial={ height: 0, opacity: 0 } animate={ height: 'auto', opacity: 1 } exit={ height: 0, opacity: 0 } className="overflow-hidden">
                                            <p className="pt-4 text-zinc-400 font-light text-sm">{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <SectionTitle title="Initiate Handshake" subtitle="08 // Contact" />
                    <BentoCard>
                        <form action="https://formspree.io/f/xpwrvrjq" method="POST" className="flex flex-col gap-4">
                            <input type="text" name="name" placeholder="NAME" required className="bg-white/5 border border-white/10 p-4 rounded-md text-white font-mono text-sm focus:border-cyan-400 outline-none transition-colors" />
                            <input type="email" name="email" placeholder="EMAIL" required className="bg-white/5 border border-white/10 p-4 rounded-md text-white font-mono text-sm focus:border-cyan-400 outline-none transition-colors" />
                            <textarea name="message" rows="4" placeholder="TRANSMISSION PAYLOAD" required className="bg-white/5 border border-white/10 p-4 rounded-md text-white font-mono text-sm focus:border-cyan-400 outline-none transition-colors resize-none"></textarea>
                            <button type="submit" className="bg-cyan-500 text-black font-bold font-mono py-4 rounded-md hover:bg-white transition-colors uppercase tracking-widest mt-2">Send Transmission</button>
                        </form>
                    </BentoCard>
                </div>
            </div>
        </section>
    );
};

const App = () => {
    return (
        <SecurityWrapper>
            <div className="min-h-screen bg-[#030303] text-zinc-300 font-sans selection:bg-cyan-500/30 selection:text-white relative">
                <GlobalDataScene />
                <div className="relative z-10">
                    <nav className="fixed w-full top-0 p-6 flex justify-between items-center z-40 mix-blend-difference text-white">
                        <div className="font-mono font-bold tracking-tighter text-xl">AC<span className="text-cyan-400">.</span></div>
                        <div className="hidden md:flex gap-8 font-mono text-xs tracking-widest uppercase">
                            <a href="#experience" className="hover:text-cyan-400">Experience</a>
                            <a href="#projects" className="hover:text-cyan-400">Case Studies</a>
                            <a href="#skills" className="hover:text-cyan-400">Architecture</a>
                        </div>
                    </nav>
                    
                    <HeroSection />
                    <AboutSection />
                    <ExperienceSection />
                    <ProjectsSection />
                    <SkillsEducationSection />
                    <CredentialsLibrarySection />
                    <FAQContactSection />
                    
                    <footer className="py-12 px-6 md:px-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs text-zinc-600 uppercase tracking-widest bg-[#030303]/50 backdrop-blur-sm">
                        <div>&copy; {new Date().getFullYear()} Ayush Chatterjee. All systems operational.</div>
                        <div className="flex gap-6">
                            <a href="https://linkedin.com/in/ayushmba" target="_blank" className="hover:text-cyan-400">LinkedIn</a>
                            <a href="mailto:ayushchatterjee@rcm.ac.in" className="hover:text-cyan-400">Email</a>
                        </div>
                    </footer>
                </div>
            </div>
        </SecurityWrapper>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
