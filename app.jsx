// ========================================================
// Ayush Chatterjee — Portfolio 2026
// Clean rewrite — no corruption
// ========================================================

const { useState, useEffect, useRef, useCallback } = React;
const { motion, AnimatePresence } = Motion;

// ─── Security / Honeypot ────────────────────────────────
const SecurityWrapper = ({ children }) => {
    const [blocked, setBlocked] = useState(false);

    useEffect(() => {
        const checkSecurity = async () => {
            try {
                const res = await fetch('https://vpnapi.io/api/?key=free');
                if (!res.ok) return;
                const data = await res.json();
                if (data.security && (data.security.vpn || data.security.proxy || data.security.tor)) {
                    setBlocked(true);
                    fetch('https://script.google.com/macros/s/AKfycbzWvur0FBtdlhYQnADdvJWR2Ij3BRIqSoVbBSidPLRyQKanKpf1x9cFCGAnv1EGRkDd/exec', {
                        method: 'POST',
                        mode: 'no-cors',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            ip: data.ip,
                            vpn: data.security.vpn,
                            proxy: data.security.proxy,
                            tor: data.security.tor,
                            city: data.location ? data.location.city : 'N/A',
                            country: data.location ? data.location.country : 'N/A',
                            timestamp: new Date().toISOString()
                        })
                    });
                }
            } catch (e) { /* silently fail */ }
        };
        checkSecurity();
    }, []);

    if (blocked) {
        return (
            <div style={{ background: '#030303', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#71717a', fontFamily: 'monospace', textAlign: 'center', padding: '2rem' }}>
                <div>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⚠</div>
                    <h1 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Access Restricted</h1>
                    <p>VPN / Proxy detected. Please disable it to view this portfolio.</p>
                </div>
            </div>
        );
    }
    return <React.Fragment>{children}</React.Fragment>;
};

// ─── Animated WebGL-style Canvas Background ─────────────
const GlobalDataScene = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;
        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;
        let mouse = { x: w / 2, y: h / 2 };

        const nodes = Array.from({ length: 80 }, () => ({
            x: Math.random() * w, y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
            r: Math.random() * 2 + 1
        }));

        const handleResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };
        const handleMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        const draw = () => {
            ctx.clearRect(0, 0, w, h);
            nodes.forEach(n => {
                n.x += n.vx; n.y += n.vy;
                if (n.x < 0 || n.x > w) n.vx *= -1;
                if (n.y < 0 || n.y > h) n.vy *= -1;
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(6,182,212,0.5)';
                ctx.fill();
            });
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 140) {
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(6,182,212,${0.15 * (1 - dist / 140)})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }
            // Mouse glow
            const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 200);
            grad.addColorStop(0, 'rgba(6,182,212,0.07)');
            grad.addColorStop(1, 'transparent');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, w, h);
            animId = requestAnimationFrame(draw);
        };
        draw();
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }} />;
};

// ─── Reusable Components ─────────────────────────────────
const Card = ({ children, className, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: delay || 0, ease: [0.16, 1, 0.3, 1] }}
        className={`relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-2xl p-8 hover:bg-white/[0.05] transition-all duration-500 ${className || ''}`}
    >
        {children}
    </motion.div>
);

const SectionTitle = ({ title, subtitle }) => (
    <div className="mb-16">
        <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono text-cyan-400 text-xs tracking-[0.3em] mb-3 uppercase"
        >
            {subtitle}
        </motion.p>
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold text-white tracking-tight"
        >
            {title}
        </motion.h2>
    </div>
);

// ─── Nav ────────────────────────────────────────────────
const Nav = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 bg-black/60 backdrop-blur-xl border-b border-white/5' : 'py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                <div className="font-mono font-bold text-xl text-white tracking-tight">
                    AC<span className="text-cyan-400">.</span>
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-mono">
                    {['about', 'experience', 'projects', 'skills', 'certifications', 'contact'].map(s => (
                        <a key={s} href={`#${s}`} className="hover:text-cyan-400 transition-colors capitalize">{s}</a>
                    ))}
                </div>
                <a
                    href="https://www.linkedin.com/in/ayush-chatterjee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 text-sm font-mono border border-cyan-500/50 text-cyan-400 rounded-full hover:bg-cyan-500/10 transition-all duration-300"
                >
                    Hire Me
                </a>
            </div>
        </nav>
    );
};

// ─── Hero ────────────────────────────────────────────────
const Hero = () => (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-28 pb-10 max-w-7xl mx-auto">
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase mb-8 flex items-center gap-3"
        >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse inline-block" />
            Open to New Opportunities — Global &amp; Remote
        </motion.p>

        <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-5xl md:text-8xl font-semibold text-white tracking-tight leading-none mb-6"
        >
            Ayush<br />
            <span className="text-zinc-500">Chatterjee</span>
        </motion.h1>

        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-12"
        >
            Product Manager at the intersection of{' '}
            <span className="text-white">IT, Analytics</span> &amp;{' '}
            <span className="text-white">International Business</span>.
            I turn complex data into products people love.
        </motion.p>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-4"
        >
            <a
                href="#projects"
                className="px-8 py-4 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 transition-all duration-300 hover:scale-105"
            >
                View Work
            </a>
            <a
                href="https://www.linkedin.com/in/ayush-chatterjee"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/5 transition-all duration-300"
            >
                LinkedIn ↗
            </a>
        </motion.div>

        {/* Stat row */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap gap-12 mt-20 border-t border-white/5 pt-10"
        >
            {[
                { val: '50+', label: 'UX Defects Found', sub: 'Pre-release @ OnePlus' },
                { val: '10K+', label: 'Transactions Analyzed', sub: 'D-Dzire Jewels FOCO' },
                { val: '22%', label: 'Forecast Accuracy Gain', sub: 'Power BI & Excel' },
                { val: '3', label: 'Internships', sub: 'IT, Retail & D2C' },
            ].map((s, i) => (
                <div key={i}>
                    <div className="text-3xl md:text-4xl font-semibold text-white mb-1">{s.val}</div>
                    <div className="text-zinc-400 text-sm">{s.label}</div>
                    <div className="text-zinc-600 text-xs font-mono mt-0.5">{s.sub}</div>
                </div>
            ))}
        </motion.div>
    </section>
);

// ─── About ───────────────────────────────────────────────
const About = () => (
    <section id="about" className="py-32 px-6 md:px-20 max-w-7xl mx-auto border-t border-white/5">
        <SectionTitle title="About Me" subtitle="01 // Profile" />
        <div className="grid md:grid-cols-2 gap-8">
            <Card delay={0}>
                <h3 className="text-xl font-medium text-white mb-4">Who I Am</h3>
                <p className="text-zinc-400 leading-relaxed text-sm mb-4">
                    I'm a data-driven, strategic, and execution-focused Product Manager with an IT, Analytics, 
                    and International Business background. I've worked on pre-release product validation at OnePlus,
                    D2C growth research at Innovist, and retail FOCO operations analytics.
                </p>
                <p className="text-zinc-400 leading-relaxed text-sm">
                    I bridge the gap between complex technical systems and tangible business outcomes — 
                    translating user research and analytics into products people actually want to use.
                </p>
            </Card>
            <Card delay={0.1}>
                <h3 className="text-xl font-medium text-white mb-4">My Philosophy</h3>
                <div className="space-y-4">
                    {[
                        { icon: '🎯', title: 'Customer Obsession', desc: 'Every decision starts with the user.' },
                        { icon: '📊', title: 'Data-Backed Decisions', desc: 'Metrics validate hypotheses, reduce risk.' },
                        { icon: '🚀', title: '0 to 1 Thinking', desc: 'Building from scratch, not just iterating.' },
                        { icon: '⚡', title: 'Execution Focus', desc: 'Strategy means nothing without delivery.' },
                    ].map((p, i) => (
                        <div key={i} className="flex gap-4 items-start">
                            <span className="text-xl">{p.icon}</span>
                            <div>
                                <div className="text-white text-sm font-medium">{p.title}</div>
                                <div className="text-zinc-500 text-xs">{p.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    </section>
);

// ─── Experience ──────────────────────────────────────────
const Experience = () => {
    const experiences = [
        {
            role: 'User Experience Analyst & Product Strategy',
            company: 'OnePlus & Innovist',
            date: 'OCT 2025 — PRESENT',
            points: [
                'Conducted structured quality assurance diagnostics across 4 unique OS builds, mapping end-to-end interface performance and identifying 50+ critical UX defects pre-release.',
                'Reduced post-release software defect recurrence by 22% after authoring comprehensive engineering documentation and technical root-cause analysis reports.',
                'Improved functional customer task-flow delivery efficiency by 15% by defining clean digital feature optimization criteria from user behavioural data.',
            ]
        },
        {
            role: 'Business Analytics & International Strategy Intern',
            company: 'D2C Skincare Brand Portfolio',
            date: 'SEP 2024 — DEC 2025',
            points: [
                'Analyzed international client acquisition data trends across 5 storefronts, resolving a chronic 28% churn variance by identifying key drop-off segments in the funnel.',
                'Validated corporate roadmap deployment strategies with 3 comprehensive data-backed growth recommendations, contributing to a 19% revenue uplift.',
                'Streamlined cross-border business reporting loops by 35% after initiating an automated performance metric dashboard in Power BI.',
                'Audited conversion tracking across 8 digital web storefront modules to optimize interface engagement.',
            ]
        },
    ];

    return (
        <section id="experience" className="py-32 px-6 md:px-20 max-w-7xl mx-auto border-t border-white/5">
            <SectionTitle title="Professional Trajectory" subtitle="02 // Experience" />
            <div className="flex flex-col gap-6">
                {experiences.map((exp, i) => (
                    <Card key={i} delay={i * 0.1} className="border-l-4 border-l-cyan-500/50">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                            <div>
                                <h3 className="text-2xl font-medium text-white mb-2">{exp.role}</h3>
                                <div className="text-cyan-400 font-mono text-sm tracking-wider">{exp.company}</div>
                            </div>
                            <div className="font-mono text-xs text-zinc-500 px-4 py-2 border border-white/10 rounded-full w-max">{exp.date}</div>
                        </div>
                        <ul className="space-y-3">
                            {exp.points.map((p, j) => (
                                <li key={j} className="flex gap-3 text-zinc-400 text-sm font-light">
                                    <span className="text-cyan-500 mt-1 flex-shrink-0">▹</span>
                                    <span>{p}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                ))}
            </div>
        </section>
    );
};

// ─── Projects ────────────────────────────────────────────
const Projects = () => {
    const projects = [
        {
            title: 'D-Dzire Jewels FOCO Intelligence Dashboard',
            type: 'Business Analytics',
            color: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
            desc: 'Designed and implemented a Power BI & Excel dashboard to track 10,000+ monthly retail transactions across FOCO franchise locations. Reduced reporting turnaround time by 40% and gave management real-time visibility into SKU-level sell-through rates.',
            tags: ['Power BI', 'Excel', 'FOCO Model', 'Retail Analytics'],
            impact: '40% faster reporting'
        },
        {
            title: 'OnePlus OxygenOS Pre-Release Validation Framework',
            type: 'Product Validation',
            color: 'text-red-400 border-red-500/30 bg-red-500/10',
            desc: 'Built a comprehensive UX defect taxonomy and regression testing framework for 4 OxygenOS beta builds. Documented 50+ interface issues using structured root-cause analysis, directly influencing the QA checklist used by the engineering team.',
            tags: ['UX Research', 'QA Testing', 'Root-Cause Analysis', 'Mobile OS'],
            impact: '22% fewer post-release defects'
        },
        {
            title: 'D2C Skincare International Growth Model',
            type: 'International Business Strategy',
            color: 'text-violet-400 border-violet-500/30 bg-violet-500/10',
            desc: 'Conducted end-to-end international client acquisition funnel analysis across 5 D2C storefronts. Identified key churn drivers and built a data-backed growth recommendation report adopted by the leadership team, contributing to a 19% revenue increase.',
            tags: ['Funnel Analysis', 'International Strategy', 'D2C', 'Growth Analytics'],
            impact: '19% revenue uplift'
        },
        {
            title: 'PM-Ready Portfolio & Personal Brand System',
            type: 'Product Management',
            color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
            desc: 'Designed and launched a high-performance, SEO-optimized personal portfolio using a modular React architecture. Implemented AEO-structured data, honeypot security, and a WebGL animated data visualization — all without a backend.',
            tags: ['React', 'WebGL', 'SEO/AEO', 'System Design'],
            impact: 'Deployed to production'
        },
    ];

    return (
        <section id="projects" className="py-32 px-6 md:px-20 max-w-7xl mx-auto border-t border-white/5">
            <SectionTitle title="Case Studies" subtitle="03 // Projects" />
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((p, i) => (
                    <Card key={i} delay={i * 0.1}>
                        <div className={`inline-block text-xs font-mono px-3 py-1 rounded-full border mb-4 ${p.color}`}>{p.type}</div>
                        <h3 className="text-xl font-medium text-white mb-3 leading-snug">{p.title}</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">{p.desc}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {p.tags.map((t, j) => (
                                <span key={j} className="text-xs font-mono text-zinc-500 px-2 py-1 border border-white/5 rounded">{t}</span>
                            ))}
                        </div>
                        <div className="text-cyan-400 text-sm font-mono">↳ {p.impact}</div>
                    </Card>
                ))}
            </div>
        </section>
    );
};

// ─── Skills ─────────────────────────────────────────────
const Skills = () => {
    const categories = [
        {
            title: 'Product Skills',
            icon: '🧩',
            skills: ['Product Strategy', 'Roadmap Planning', 'User Story Writing', 'PRD Creation', 'A/B Testing', 'Agile / Scrum', 'OKR Framework', 'Go-to-Market Strategy'],
        },
        {
            title: 'Analytics & Data',
            icon: '📊',
            skills: ['Power BI', 'Advanced Excel', 'Google Analytics', 'Funnel Analysis', 'Cohort Analysis', 'KPI Dashboards', 'Data Storytelling', 'SQL (Basics)'],
        },
        {
            title: 'Research & UX',
            icon: '🔍',
            skills: ['UX Audits', 'User Interviews', 'Usability Testing', 'Competitive Analysis', 'Customer Journey Maps', 'Persona Creation', 'Heuristic Evaluation'],
        },
        {
            title: 'Tools & Tech',
            icon: '⚙️',
            skills: ['Figma', 'Notion', 'Jira', 'Slack', 'Miro', 'Google Workspace', 'Git (Basic)', 'React (Basic)'],
        },
        {
            title: 'International Business',
            icon: '🌐',
            skills: ['Global Market Research', 'Cross-border Strategy', 'Trade Analytics', 'D2C International Growth', 'Multilingual Communication'],
        },
        {
            title: 'Soft Skills',
            icon: '🤝',
            skills: ['Cross-functional Leadership', 'Stakeholder Communication', 'Problem Solving', 'Critical Thinking', 'Attention to Detail', 'Executive Presentations'],
        },
    ];

    return (
        <section id="skills" className="py-32 px-6 md:px-20 max-w-7xl mx-auto border-t border-white/5">
            <SectionTitle title="Skills & Expertise" subtitle="04 // Skills" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((cat, i) => (
                    <Card key={i} delay={i * 0.08}>
                        <div className="flex items-center gap-3 mb-5">
                            <span className="text-2xl">{cat.icon}</span>
                            <h3 className="text-white font-medium">{cat.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {cat.skills.map((skill, j) => (
                                <span key={j} className="text-xs font-mono text-zinc-400 px-3 py-1.5 rounded-full border border-white/10 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors duration-200">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
};

// ─── Certifications ──────────────────────────────────────
const Certifications = () => {
    const certs = [
        { title: 'Gen AI: Prompt Engineering Basics', provider: 'IBM', year: '2024', color: 'text-blue-400' },
        { title: 'Business Analytics Fundamentals', provider: 'IBM', year: '2024', color: 'text-blue-400' },
        { title: 'Google Analytics Certification', provider: 'Google', year: '2024', color: 'text-green-400' },
        { title: 'Foundations of Project Management', provider: 'Google', year: '2024', color: 'text-green-400' },
        { title: 'Product Management Fundamentals', provider: 'Coursera', year: '2023', color: 'text-orange-400' },
        { title: 'Advanced Excel & Power BI', provider: 'Udemy', year: '2023', color: 'text-purple-400' },
    ];

    return (
        <section id="certifications" className="py-32 px-6 md:px-20 max-w-7xl mx-auto border-t border-white/5">
            <SectionTitle title="Certifications" subtitle="05 // Credentials" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {certs.map((c, i) => (
                    <Card key={i} delay={i * 0.07}>
                        <div className={`text-xs font-mono mb-3 ${c.color}`}>{c.provider} · {c.year}</div>
                        <h3 className="text-white text-sm font-medium leading-snug">{c.title}</h3>
                    </Card>
                ))}
            </div>
        </section>
    );
};

// ─── FAQ ─────────────────────────────────────────────────
const FAQ = () => {
    const [open, setOpen] = useState(null);
    const faqs = [
        { q: 'Who is Ayush Chatterjee?', a: 'Ayush Chatterjee is a data-driven, strategic, and execution-focused Product Manager with a background in IT, Analytics, and International Business. He has worked on pre-release product validation at OnePlus and D2C growth research at Innovist.' },
        { q: "What is Ayush's product philosophy?", a: "Ayush's product philosophy centers around Customer Obsession, Data-Backed Decisions, 0 to 1 Thinking, Execution Focus, Cross-Functional Leadership, and a KPI-Driven Mindset." },
        { q: 'What industries has Ayush worked in?', a: 'Ayush has experience across Consumer Electronics (OnePlus), D2C Skincare (Innovist), Retail Jewellery (D-Dzire Jewels), and the broader IT & International Business space.' },
        { q: 'What tools does Ayush use?', a: 'Ayush is proficient in Power BI, Advanced Excel, Figma, Notion, Jira, Miro, Google Analytics, and has working knowledge of React and Git.' },
        { q: 'Is Ayush open to remote or global roles?', a: 'Yes! Ayush is actively open to remote, hybrid, and global product management roles, especially those at the intersection of technology and international business strategy.' },
        { q: 'How can I contact Ayush?', a: 'You can reach Ayush via LinkedIn at linkedin.com/in/ayush-chatterjee or through the contact section on this portfolio.' },
    ];

    return (
        <section id="faq" className="py-32 px-6 md:px-20 max-w-7xl mx-auto border-t border-white/5">
            <SectionTitle title="Frequently Asked" subtitle="06 // FAQ" />
            <div className="max-w-3xl space-y-3">
                {faqs.map((f, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.06 }}
                        className="border border-white/5 rounded-2xl overflow-hidden"
                    >
                        <button
                            onClick={() => setOpen(open === i ? null : i)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors duration-200"
                        >
                            <span className="text-white font-medium text-sm">{f.q}</span>
                            <span className={`text-cyan-400 text-xl transition-transform duration-300 flex-shrink-0 ml-4 ${open === i ? 'rotate-45' : ''}`}>+</span>
                        </button>
                        <AnimatePresence>
                            {open === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                        {f.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

// ─── Contact ─────────────────────────────────────────────
const Contact = () => (
    <section id="contact" className="py-32 px-6 md:px-20 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto">
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase mb-4"
            >
                07 // Contact
            </motion.p>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight"
            >
                Let's Build<br />Something Great
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-zinc-400 mb-12 leading-relaxed"
            >
                I'm actively looking for Product Manager roles. If you're building something meaningful 
                and need someone who's deeply analytical, execution-focused, and customer-obsessed — let's talk.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 justify-center"
            >
                <a
                    href="https://www.linkedin.com/in/ayush-chatterjee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 hover:scale-105 transition-all duration-300"
                >
                    Connect on LinkedIn ↗
                </a>
                <a
                    href="mailto:ayush@example.com"
                    className="px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/5 transition-all duration-300"
                >
                    Send an Email
                </a>
            </motion.div>
        </div>
    </section>
);

// ─── Footer ──────────────────────────────────────────────
const Footer = () => (
    <footer className="border-t border-white/5 py-10 px-6 md:px-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-zinc-600 text-sm">
            © 2026 Ayush Chatterjee — Built with precision.
        </div>
        <div className="flex gap-6 text-zinc-600 text-sm font-mono">
            <a href="https://www.linkedin.com/in/ayush-chatterjee" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
            <span>·</span>
            <a href="https://github.com/forbesayush" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
        </div>
    </footer>
);

// ─── App Root ────────────────────────────────────────────
const App = () => (
    <SecurityWrapper>
        <div className="min-h-screen bg-[#030303] text-zinc-300 font-sans antialiased">
            <GlobalDataScene />
            <div className="relative z-10">
                <Nav />
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Certifications />
                <FAQ />
                <Contact />
                <Footer />
            </div>
        </div>
    </SecurityWrapper>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
