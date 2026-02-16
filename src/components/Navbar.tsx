"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Home, BookOpen, User, Briefcase, Zap, Terminal } from "lucide-react";

export default function Navbar() {
    const [activeHash, setActiveHash] = useState("#home");
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
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

    const navItems = [
        { name: "Home", href: "#home", icon: <Home size={18} /> },
        { name: "About", href: "#about", icon: <User size={18} /> },
        { name: "Skills", href: "#skills", icon: <BookOpen size={18} /> },
        { name: "Projects", href: "#projects", icon: <Briefcase size={18} /> },
        { name: "Certifications", href: "#certifications", icon: <Zap size={18} /> },
        { name: "Contact", href: "#contact", icon: <Terminal size={18} /> },
    ];

    return (
        <>
            {/* Desktop Floating Navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className={`fixed top-6 left-0 right-0 z-50 flex justify-center hidden md:flex`}
            >
                <div className={`
          relative flex items-center gap-1 px-2 py-2 rounded-full 
          backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300
          ${scrolled ? "bg-[#0B1120]/80" : "bg-white/[0.03]"}
        `}>
                    {/* Active indicator */}
                    <div className="flex items-center gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setActiveHash(item.href)}
                                className={`relative flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 z-10 ${activeHash === item.href ? "text-white" : "text-gray-400 hover:text-gray-200"
                                    }`}
                            >
                                {activeHash === item.href && (
                                    <motion.span
                                        layoutId="activePill"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)] -z-10"
                                    />
                                )}
                                {item.icon}
                                <span className="font-semibold tracking-wide">{item.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Bottom Bar (For easy thumb access) */}
            <motion.nav
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className={`fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0B1120]/80 backdrop-blur-xl border-t border-white/10 p-4 safe-area-pb`}
            >
                <div className="flex justify-around items-center">
                    {navItems.slice(0, 5).map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setActiveHash(item.href)}
                            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${activeHash === item.href ? "text-cyan-400 bg-white/5" : "text-gray-500"
                                }`}
                        >
                            {item.icon}
                            <span className="text-[10px] font-medium">{item.name}</span>
                        </a>
                    ))}
                    {/* More Menu for last item or extras */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${mobileMenuOpen ? "text-white" : "text-gray-500"}`}
                    >
                        <Menu size={18} />
                        <span className="text-[10px] font-medium">More</span>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Full Screen Menu Overlay acting as "More" */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed inset-0 z-40 bg-[#0B1120]/95 backdrop-blur-2xl flex items-center justify-center md:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <div className="grid grid-cols-2 gap-6 p-8 w-full max-w-sm">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="flex flex-col items-center justify-center bg-white/5 border border-white/10 p-6 rounded-2xl active:scale-95 transition-all"
                                >
                                    <div className="text-cyan-400 mb-3 transform scale-150">{item.icon}</div>
                                    <span className="text-white font-medium text-lg">{item.name}</span>
                                </a>
                            ))}
                        </div>
                        <button className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full">
                            <X size={24} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
