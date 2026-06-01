const { useState, useEffect, useRef } = React;
const { motion, useScroll, useTransform, AnimatePresence } = window.Motion;

// --- Security Layers ---
const SecurityWrapper = ({ children }) => {
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
        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    return <>{children}</>;
};

// --- Custom Animated 3D Global IT Network (2026 Standard WebGL/Canvas Alternative) ---
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
            
            // Sphere points (Globe)
            const phi = Math.PI * (3 - Math.sqrt(5)); 
            const numPoints = window.innerWidth < 768 ? 300 : 700;
            for (let i = 0; i < numPoints; i++) {
                const y = 1 - (i / (numPoints - 1)) * 2; 
                const r = Math.sqrt(1 - y * y);
                const theta = phi * i;
                const x = Math.cos(theta) * r;
                const z = Math.sin(theta) * r;
                points.push({ x, y, z, baseSize: Math.random() * 1.5 + 0.5 });
            }

            // Floating background particles
            for(let i=0; i<50; i++) {
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
            
            // Deep 2026 Glassmorphism Dark BG
            const bgGrad = ctx.createLinearGradient(0, 0, width, height);
            bgGrad.addColorStop(0, '#030303');
            bgGrad.addColorStop(1, '#0a0a0f');
            ctx.fillStyle = bgGrad;
            ctx.fillRect(0, 0, width, height);
            
            // Draw floating particles
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
            const finalAngleX = angleX + 0.2; // Slight tilt

            const cosX = Math.cos(finalAngleX);
            const sinX = Math.sin(finalAngleX);
            const cosY = Math.cos(finalAngleY);
            const sinY = Math.sin(finalAngleY);
            
            const radius = Math.min(width, height) * (width < 768 ? 0.6 : 0.45);
            const focalLength = 1000;
            
            // On desktop, move globe to the right. On mobile, center it.
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
                    // Electric Cyan Glow for IT/Data
                    ctx.fillStyle = `rgba(0, 240, 255, ${alpha * 0.7})`; 
                    ctx.beginPath();
                    ctx.arc(screenX, screenY, p.baseSize * scale, 0, Math.PI * 2);
                    ctx.fill();

                    // Connect lines for network effect
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`bg-white/[0.02] backdrop-blur-2xl border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 relative overflow-hidden group ${className}`}
    >
        {/* Subtle hover gradient tracker */}
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
        <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white">{title}</h2>
    </div>
);

// --- Main App ---
const App = () => {
    // Basic visitor tracking without blocking rendering
    useEffect(() => {
        fetch('https://api.counterapi.dev/v1/forbesayush/portfolio/up').catch(e => console.log(e));
        // Note: Full tracking logic from old code can be injected via backend securely.
    }, []);

    // Scroll progress
    const { scrollYProgress } = useScroll();
    
    return (
        <SecurityWrapper>
            <div className="min-h-screen bg-[#030303] text-zinc-300 font-sans selection:bg-cyan-500/30 selection:text-white relative">
                
                {/* Global Scene Background */}
                <GlobalDataScene />

                {/* Progress Bar */}
                <motion.div 
                    className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 z-50 origin-left"
                    style={{ scaleX: scrollYProgress }}
                />

                {/* Content Overlay */}
                <div className="relative z-10">
                    
                    {/* Navigation */}
                    <nav className="fixed w-full top-0 p-6 md:p-10 flex justify-between items-center z-40 mix-blend-difference text-white">
                        <div className="font-mono font-bold tracking-tighter text-xl">AC<span className="text-cyan-400">.</span></div>
                        <div className="hidden md:flex gap-8 font-mono text-xs tracking-widest uppercase">
                            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
                            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
                            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
                        </div>
                    </nav>

                    {/* Hero Section */}
                    <section className="min-h-screen flex items-center px-6 md:px-20 pt-20">
                        <div className="max-w-4xl">
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}
                                className="font-mono text-cyan-400 text-sm md:text-base tracking-[0.2em] mb-6 flex items-center gap-3"
                            >
                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                                SYSTEM ONLINE
                            </motion.div>
                            
                            <motion.h1 
                                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
                                className="text-5xl md:text-8xl font-medium tracking-tighter text-white mb-6 leading-[1.1]"
                            >
                                Ayush Chatterjee
                            </motion.h1>
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
                                className="text-xl md:text-3xl text-zinc-400 font-light tracking-tight mb-10 max-w-2xl"
                            >
                                Product Manager specializing in <span className="text-white font-normal">IT & International Business.</span> Bridging complex data structures with global market execution.
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}
                                className="flex gap-6 items-center"
                            >
                                <a href="https://www.linkedin.com/in/ayushmba/" target="_blank" className="px-8 py-4 bg-white text-black font-mono text-sm font-bold tracking-widest uppercase hover:bg-cyan-400 hover:text-black transition-all rounded-sm">
                                    Initiate Contact
                                </a>
                                <a href="#experience" className="font-mono text-sm tracking-widest uppercase text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                                    Explore Data <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                                </a>
                            </motion.div>
                        </div>
                    </section>

                    {/* Experience Section */}
                    <section id="experience" className="py-32 px-6 md:px-20 max-w-7xl mx-auto">
                        <SectionTitle title="Professional Trajectory" subtitle="01 // Experience" />
                        
                        <div className="flex flex-col gap-8">
                            <BentoCard delay={0.1} className="border-l-4 border-l-cyan-500">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-medium text-white mb-2">User Experience Analyst — Product Strategy</h3>
                                        <div className="text-cyan-400 font-mono text-sm tracking-wider">OnePlus & Innovist</div>
                                    </div>
                                    <div className="font-mono text-sm text-zinc-500 px-4 py-2 border border-white/10 rounded-full w-max">OCT 2025 — PRESENT</div>
                                </div>
                                <div className="space-y-4 text-zinc-400 font-light leading-relaxed">
                                    <p className="flex gap-4"><span className="text-cyan-500">▹</span> Conducted structured quality assurance diagnostics across 4 unique operating system builds, mapping end-to-end interface performance parameters to evaluate 20+ interface bugs.</p>
                                    <p className="flex gap-4"><span className="text-cyan-500">▹</span> Reduced post-release software defect recurrence by 22% after authoring comprehensive engineering documentation and technical root-cause diagnostics within rapid cross-functional development loops.</p>
                                    <p className="flex gap-4"><span className="text-cyan-500">▹</span> Improved functional customer task-flow delivery efficiency metrics by 15% by defining clean digital feature optimization criteria from raw product web usability records.</p>
                                </div>
                            </BentoCard>

                            <BentoCard delay={0.2}>
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-medium text-white mb-2">Business Analytics & International Strategy Intern</h3>
                                        <div className="text-cyan-400 font-mono text-sm tracking-wider">D2C Skincare Brand Portfolio</div>
                                    </div>
                                    <div className="font-mono text-sm text-zinc-500 px-4 py-2 border border-white/10 rounded-full w-max">SEP 2024 — DEC 2025</div>
                                </div>
                                <div className="space-y-4 text-zinc-400 font-light leading-relaxed">
                                    <p className="flex gap-4"><span className="text-cyan-500">▹</span> Analyzed international client acquisition data trends and global retention variances across 5 storefronts, successfully resolving a complex 17% repeat purchase performance deficit.</p>
                                    <p className="flex gap-4"><span className="text-cyan-500">▹</span> Validated corporate roadmap software deployment strategies by preparing 3 comprehensive data-backed growth recommendations to teams, securing a 66% internal stakeholder adoption rate.</p>
                                    <p className="flex gap-4"><span className="text-cyan-500">▹</span> Streamlined routine cross-border business reporting loops by 35% after initiating an automated performance metric dashboard script to track global sales data structures.</p>
                                    <p className="flex gap-4"><span className="text-cyan-500">▹</span> Controlled interface engagement testing operations across 8 digital web storefront modules by systematically auditing conversion tracking configurations and Average Order Value indicators.</p>
                                </div>
                            </BentoCard>
                        </div>
                    </section>

                    {/* Projects Bento Grid */}
                    <section id="projects" className="py-32 px-6 md:px-20 max-w-7xl mx-auto">
                        <SectionTitle title="Strategic Implementations" subtitle="02 // Projects" />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <BentoCard delay={0.1} className="md:row-span-2">
                                <div className="font-mono text-xs text-zinc-500 mb-4 tracking-widest uppercase">Global Market Entry</div>
                                <h3 className="text-2xl font-medium text-white mb-6">Lab-Grown Diamonds Study <span className="text-cyan-400 text-sm ml-2">(D-DZIRE JEWELS)</span></h3>
                                <p className="text-zinc-400 font-light leading-relaxed mb-8">
                                    Designed a cross-border product positioning blueprint and evaluated international D2C scaling levers by conducting structured competitive benchmarking studies within premium lifestyle demographics.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['Benchmarking', 'D2C Scaling', 'Positioning'].map(t => <span key={t} className="text-xs font-mono border border-white/10 px-3 py-1 rounded-sm">{t}</span>)}
                                </div>
                            </BentoCard>

                            <BentoCard delay={0.2}>
                                <div className="font-mono text-xs text-zinc-500 mb-4 tracking-widest uppercase">Scale Strategy</div>
                                <h3 className="text-2xl font-medium text-white mb-6">WhySchool Brand Strategy</h3>
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    Transformed raw market penetration data into a structured business scalability framework model, applying corporate SWOT, Porter's Five Forces, and BCG Matrix models across market-leading disruptive tech brands.
                                </p>
                            </BentoCard>

                            <BentoCard delay={0.3}>
                                <div className="font-mono text-xs text-zinc-500 mb-4 tracking-widest uppercase">Acquisition Funnels</div>
                                <h3 className="text-2xl font-medium text-white mb-6">Digital Branding & Influencer Growth</h3>
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    Refined user retention cycles by reverse-engineering viral social platform engagement mechanics, identifying audience optimization funnels, and mapping customer exclusivity loops.
                                </p>
                            </BentoCard>
                        </div>
                    </section>

                    {/* Education & Skills */}
                    <section id="skills" className="py-32 px-6 md:px-20 max-w-7xl mx-auto border-t border-white/5">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div>
                                <SectionTitle title="Academic Foundation" subtitle="03 // Education" />
                                <div className="flex flex-col gap-8">
                                    <div className="border-l border-white/10 pl-6 relative">
                                        <div className="absolute w-2 h-2 bg-cyan-400 rounded-full -left-[4.5px] top-2 shadow-[0_0_10px_rgba(34,211,238,1)]"></div>
                                        <div className="font-mono text-xs text-cyan-400 mb-2">AUG 2025 — APR 2027</div>
                                        <h3 className="text-xl text-white font-medium mb-1">MBA — IT & International Business</h3>
                                        <div className="text-zinc-500 font-light">Regional College of Management (RCM)</div>
                                    </div>
                                    <div className="border-l border-white/10 pl-6 relative">
                                        <div className="absolute w-2 h-2 bg-zinc-600 rounded-full -left-[4.5px] top-2"></div>
                                        <div className="font-mono text-xs text-zinc-500 mb-2">AUG 2022 — JUN 2025</div>
                                        <h3 className="text-xl text-white font-medium mb-1">BBA (Hons)</h3>
                                        <div className="text-zinc-500 font-light">Regional College of Management (RCM)</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <SectionTitle title="System Architecture" subtitle="04 // Skills" />
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "Product Testing", "Power BI", "SQL", "Excel (Adv)", 
                                        "Strategic Management", "IT & International Business Strategy", 
                                        "UX Diagnostics", "A/B Testing", "Figma", "Jira", "Postman", 
                                        "Competitive Benchmarking"
                                    ].map((skill, i) => (
                                        <motion.div 
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05 }}
                                            key={skill} 
                                            className="px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-sm text-zinc-300 font-light hover:border-cyan-400/50 hover:text-white transition-colors"
                                        >
                                            {skill}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="py-12 px-6 md:px-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="font-mono text-zinc-600 text-sm">
                            &copy; {new Date().getFullYear()} Ayush Chatterjee. All systems operational.
                        </div>
                        <div className="flex gap-6 font-mono text-sm uppercase tracking-widest">
                            <a href="https://linkedin.com/in/ayushmba" className="text-zinc-400 hover:text-cyan-400 transition-colors">LinkedIn</a>
                            <a href="mailto:ayushchatterjee@rcm.ac.in" className="text-zinc-400 hover:text-cyan-400 transition-colors">Email</a>
                        </div>
                    </footer>

                </div>
            </div>
        </SecurityWrapper>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
