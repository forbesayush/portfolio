const { useState, useEffect, useRef } = React;
const { motion, useInView } = window.Motion;

// FadeInUp component for scroll reveal
const FadeInUp = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
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
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Telegram Visitor Tracking
    useEffect(() => {
        const trackVisitor = async () => {
            // Only track once per session to avoid spamming
            if (sessionStorage.getItem('visitor_tracked')) return;

            try {
                // Fetch IP and Location Data
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();

                // Gather Device Data
                const userAgent = navigator.userAgent;
                const platform = navigator.platform;
                const language = navigator.language;
                const screen = `${window.screen.width}x${window.screen.height}`;

                // Format Message
                const message = `
🔔 *New Portfolio Visitor!* 🔔

📍 *Location:* ${data.city}, ${data.region}, ${data.country_name}
🌐 *IP Address:* ${data.ip}
🏢 *ISP/Org:* ${data.org}
💻 *Platform:* ${platform}
📏 *Screen:* ${screen}
🗣 *Language:* ${language}
📱 *User Agent:* ${userAgent}
                `;

                // Send to Telegram (Waiting for Chat ID)
                const botToken = '8716446112:AAHaVMVVxuXNEN0QtSFFMinAXD-AA5iPlP8';
                const chatId = '6290094136'; // We need the user to provide this

                if (chatId !== 'REPLACE_WITH_CHAT_ID') {
                    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            chat_id: chatId,
                            text: message,
                            parse_mode: 'Markdown'
                        })
                    });
                    
                    // Mark as tracked
                    sessionStorage.setItem('visitor_tracked', 'true');
                }
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

    return (
        <div className={`min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-800 dark:text-zinc-200 transition-colors duration-300 font-sans`}>
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
                        alt="Ayush Chatterjee" 
                        className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-white dark:border-zinc-900 shadow-xl relative z-10"
                    />
                    <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-4 border-white dark:border-zinc-900 rounded-full z-20" title="Available for new opportunities"></div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                    className="text-blue-600 dark:text-blue-500 text-xs md:text-sm font-bold tracking-[0.2em] mb-4 uppercase"
                >
                    ASPIRING PRODUCT MANAGER &middot; MBA (IT & HR)
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
                    Product Testing @ OnePlus &middot; Growth Research @ Innovist &middot; Founder, Karma Kama Lab-Grown Diamonds.
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
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 w-full sm:w-auto"
                >
                    <a href="#projects" className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2">
                        View Projects
                    </a>
                    <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-slate-300 dark:border-zinc-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-zinc-800/50 rounded-full font-medium transition-all flex items-center justify-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        Contact Me
                    </a>
                    <a href="#" className="flex items-center justify-center gap-2 text-slate-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-4 py-3.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                        LinkedIn
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

/* --- Metrics Section --- */
const MetricsSection = () => {
    return (
        <section className="bg-slate-50 dark:bg-zinc-950 hidden">
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
            role: "Product Tester — Mobile OS & Devices (Pre-Release)",
            company: "OnePlus Software R&D Centre Private Limited",
            date: "SEP 2024 — DEC 2025",
            points: [
                "Strengthened launch readiness by executing structured pre-release testing cycles across mobile OS builds, identifying 15+ UX and functional defects that improved product stability prior to release.",
                "Enhanced validation workflows by refining defect tracking and cross-functional feedback loops, aligning processes with IT quality standards.",
                "Contributed to usability improvements through systematic issue prioritization and reporting, directly impacting release confidence."
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
                        <FadeInUp key={i} delay={i * 0.1}>
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
                                            <li key={j} className="text-slate-700 dark:text-zinc-300 flex items-start text-base leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-600 mr-4 mt-2.5 shrink-0"></div>
                                                <span>{p}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </FadeInUp>
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
            skills: ["SWOT Analysis", "Porter's Five Forces", "BCG Matrix", "Competitive Benchmarking", "Stakeholder Reporting", "HR Strategy", "D2C Growth", "Structured Problem Solving"]
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
                        <FadeInUp key={i} delay={i * 0.1}>
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
                                    {c.skills.map(s => (
                                        <span key={s} className="px-4 py-2 bg-white dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700/50 rounded-full text-sm font-semibold text-slate-700 dark:text-zinc-300 hover:border-blue-500 dark:hover:border-blue-500 transition-colors shadow-sm cursor-default">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </FadeInUp>
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
                            
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">MBA — Information Technology &amp; Marketing</h3>
                            <div className="text-slate-500 dark:text-zinc-400 text-lg mb-2">Regional College of Management (RCM), Bhubaneswar</div>
                            <div className="text-blue-600 dark:text-blue-500 font-medium mb-8">SGPA: 7.1 &middot; Strategic Management, IT &amp; HR Strategy</div>

                            <div className="border-t border-slate-100 dark:border-zinc-800 pt-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 dark:text-zinc-500"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                                    <div className="text-[11px] font-bold text-slate-400 dark:text-zinc-500 tracking-widest uppercase">KEY COURSEWORK</div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["Product Strategy", "IT Management", "HR Strategy", "Marketing Management", "Business Analytics"].map(course => (
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
                            <div className="text-blue-600 dark:text-blue-500 font-medium mb-8">SGPA: 8.0 &middot; Foundation in Business Principles</div>

                            <div className="border-t border-slate-100 dark:border-zinc-800 pt-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 dark:text-zinc-500"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                                    <div className="text-[11px] font-bold text-slate-400 dark:text-zinc-500 tracking-widest uppercase">KEY COURSEWORK</div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["Business Analytics", "Organizational Behavior", "Marketing Strategy", "Financial Accounting"].map(course => (
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

/* --- Contact Section --- */
const ContactSection = () => {
    return (
        <section id="contact" className="py-32 px-6 bg-white dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800">
            <div className="container mx-auto max-w-4xl text-center">
                <FadeInUp>
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-slate-900 dark:text-white tracking-tighter">
                        Let's build something <span className="text-blue-600 dark:text-blue-500">impactful.</span>
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Currently exploring full-time Product Manager and APM opportunities. If you're looking for a data-driven builder to join your team, I'd love to connect.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <a href="mailto:hello@example.com" className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-500/30 transition-all font-semibold flex justify-center items-center gap-3 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                            Email Me
                        </a>
                        <a href="https://www.linkedin.com/in/ayushmba" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-5 bg-white dark:bg-transparent border-2 border-slate-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 text-slate-900 dark:text-white rounded-full transition-all font-semibold flex justify-center items-center gap-3 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                            LinkedIn
                        </a>
                    </div>
                </div>
                </FadeInUp>
            </div>
        </section>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
