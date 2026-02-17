"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Home, BookOpen, User, Briefcase, Zap, Terminal } from "lucide-react";
import Image from "next/image";

interface NavbarProps {
    currentView: "portfolio" | "socialsense";
    onViewChange: (view: "portfolio" | "socialsense") => void;
}

export default function Navbar({ currentView, onViewChange }: NavbarProps) {
    const [activeHash, setActiveHash] = useState("#home");
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = document.querySelectorAll("section");
            sections.forEach((section) => {
                const top = section.offsetTop - 100;
                const height = section.offsetHeight;
                if (window.scrollY >= top && window.scrollY < top + height) {
                    setActiveHash(`#${section.id}`);
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [mobileMenuOpen]);

    const portfolioItems = [
        { name: "Home", href: "#home", icon: <Home size={20} /> },
        { name: "About", href: "#about", icon: <User size={20} /> },
        { name: "Skills", href: "#skills", icon: <Zap size={20} /> },
        { name: "Projects", href: "#projects", icon: <Briefcase size={20} /> },
        { name: "Certifications", href: "#certifications", icon: <BookOpen size={20} /> },
    ];

    const projectItems = [
        { name: "System", href: "#modules", icon: <Briefcase size={20} /> },
        { name: "Architecture", href: "#architecture", icon: <Zap size={20} /> },
        { name: "Tech", href: "#technologies", icon: <Terminal size={20} /> },
        { name: "Demo", href: "#demo", icon: <Terminal size={20} /> },
        { name: "Dashboard", href: "#dashboard", icon: <BookOpen size={20} /> },
    ];

    const navItems = currentView === "portfolio" ? portfolioItems : projectItems;

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${scrolled
                    ? currentView === "portfolio"
                        ? "bg-[#0B1120]/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
                        : "bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm"
                    : "bg-transparent"
                    }`}
            >
                {/* Logo / Name */}
                <button
                    onClick={() => onViewChange("portfolio")}
                    className="text-xl font-bold tracking-tight flex items-center gap-2 group"
                >
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                        <Zap size={20} className="text-white" />
                    </div>
                    <span className={`hidden sm:block transition-colors ${currentView === "portfolio" ? "text-white" : "text-slate-900"}`}>
                        {currentView === "portfolio" ? "Derlin Shaju" : "Social Distancing using Image Processing"}
                    </span>
                </button>

                {/* Desktop Menu */}
                <div className={`hidden lg:flex items-center gap-1 p-1 rounded-full border transition-all duration-300 ${currentView === "portfolio"
                    ? "bg-white/[0.03] border-white/10 backdrop-blur-md"
                    : "bg-slate-100 border-slate-200 backdrop-blur-md"
                    }`}>
                    {currentView === "socialsense" && (
                        <button
                            onClick={() => onViewChange("portfolio")}
                            className="px-4 py-2 text-sm font-bold text-cyan-600 hover:text-cyan-700 transition-colors mr-2 border-r border-slate-200"
                        >
                            ← Back to Portfolio
                        </button>
                    )}
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setActiveHash(item.href)}
                            className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeHash === item.href
                                ? currentView === "portfolio" ? "text-white" : "text-cyan-600"
                                : currentView === "portfolio" ? "text-gray-400 hover:text-white" : "text-slate-500 hover:text-slate-900"
                                }`}
                        >
                            {activeHash === item.href && (
                                <motion.span
                                    layoutId="activePill"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className={`absolute inset-0 border rounded-full -z-10 ${currentView === "portfolio"
                                        ? "bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border-cyan-500/30"
                                        : "bg-cyan-50 border-cyan-200"
                                        }`}
                                />
                            )}
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(true)}
                    className={`lg:hidden p-2 rounded-lg border active:scale-95 transition-all ${currentView === "portfolio"
                        ? "text-white bg-white/5 border-white/10"
                        : "text-slate-900 bg-slate-100 border-slate-200"
                        }`}
                    aria-label="Open Menu"
                >
                    <Menu size={24} />
                </button>
            </motion.nav>

            {/* Mobile Full Screen Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className={`fixed inset-0 z-[60] flex flex-col lg:hidden ${currentView === "portfolio" ? "bg-[#0B1120]" : "bg-white"
                            }`}
                    >
                        <div className={`flex items-center justify-between px-6 py-4 border-b ${currentView === "portfolio" ? "border-white/10" : "border-slate-200"
                            }`}>
                            <span className={`text-xl font-bold ${currentView === "portfolio" ? "text-white" : "text-slate-900"}`}>Menu</span>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className={`p-2 rounded-lg border active:scale-95 transition-all ${currentView === "portfolio"
                                    ? "text-white bg-white/5 border-white/10"
                                    : "text-slate-900 bg-slate-100 border-slate-200"
                                    }`}
                                aria-label="Close Menu"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-4">
                            {currentView === "socialsense" && (
                                <button
                                    onClick={() => {
                                        onViewChange("portfolio");
                                        setMobileMenuOpen(false);
                                    }}
                                    className="flex items-center gap-4 p-4 rounded-xl border bg-cyan-500/10 border-cyan-500/30 text-cyan-600 font-bold mb-4"
                                >
                                    <Home size={20} />
                                    <span>Back to Portfolio</span>
                                </button>
                            )}

                            {navItems.map((item, index) => (
                                <motion.a
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => {
                                        setActiveHash(item.href);
                                        setMobileMenuOpen(false);
                                    }}
                                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${activeHash === item.href
                                        ? currentView === "portfolio"
                                            ? "bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border-cyan-500/30 text-white"
                                            : "bg-cyan-50 border-cyan-200 text-cyan-600"
                                        : currentView === "portfolio"
                                            ? "bg-white/5 border-white/5 text-gray-400 hover:text-white"
                                            : "bg-slate-50 border-slate-100 text-slate-500 hover:text-slate-900"
                                        }`}
                                >
                                    <div className={`p-2 rounded-lg ${activeHash === item.href
                                        ? "bg-cyan-500 text-white"
                                        : currentView === "portfolio" ? "bg-white/5 text-gray-400" : "bg-slate-200 text-slate-500"
                                        }`}>
                                        {item.icon}
                                    </div>
                                    <span className="text-lg font-medium">{item.name}</span>
                                </motion.a>
                            ))}
                        </div>

                        <div className={`p-6 text-center text-xs uppercase tracking-widest border-t ${currentView === "portfolio" ? "text-gray-500 border-white/5" : "text-slate-400 border-slate-200"
                            }`}>
                            {currentView === "portfolio" ? "Derlin Shaju" : "Social Distancing using Image Processing"} &copy; 2026
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
