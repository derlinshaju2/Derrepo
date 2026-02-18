"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Home, BookOpen, User, Briefcase, Zap, Terminal } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    const [activeHash, setActiveHash] = useState("#home");
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20); // Trigger earlier for mobile feel
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

    // Lock body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [mobileMenuOpen]);

    const navItems = [
        { name: "Home", href: "#home", icon: <Home size={20} /> },
        { name: "About", href: "#about", icon: <User size={20} /> },
        { name: "Modules", href: "#modules", icon: <Briefcase size={20} /> },
        { name: "Architecture", href: "#architecture", icon: <Zap size={20} /> },
        { name: "Technologies", href: "#technologies", icon: <Terminal size={20} /> },
        { name: "Features", href: "#features", icon: <BookOpen size={20} /> },
        { name: "Demo", href: "#demo", icon: <Terminal size={20} /> },
        { name: "Contact", href: "#contact", icon: <Terminal size={20} /> },
    ];

    return (
        <>
            {/* Desktop & Mobile Navbar Container */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${scrolled ? "bg-[#0B1120]/80 backdrop-blur-xl border-b border-white/10 shadow-lg" : "bg-transparent"
                    }`}
            >
                {/* Logo / Name */}
                <a href="#home" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                        <Zap size={20} className="text-white" />
                    </div>
                    <span className="hidden sm:block">SocialSense AI</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setActiveHash(item.href)}
                            className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeHash === item.href ? "text-white" : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {activeHash === item.href && (
                                <motion.span
                                    layoutId="activePill"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-full -z-10"
                                />
                            )}
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(true)}
                    className="lg:hidden p-2 text-white bg-white/5 rounded-lg border border-white/10 active:scale-95 transition-all"
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
                        className="fixed inset-0 z-[60] bg-[#0B1120] flex flex-col lg:hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                            <span className="text-xl font-bold text-white">Menu</span>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-2 text-white bg-white/5 rounded-lg border border-white/10 active:scale-95 transition-all"
                                aria-label="Close Menu"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-4">
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
                                        ? "bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border-cyan-500/30 text-white"
                                        : "bg-white/5 border-white/5 text-gray-400 hover:text-white"
                                        }`}
                                >
                                    <div className={`p-2 rounded-lg ${activeHash === item.href ? "bg-cyan-500 text-white" : "bg-white/5 text-gray-400"}`}>
                                        {item.icon}
                                    </div>
                                    <span className="text-lg font-medium">{item.name}</span>
                                </motion.a>
                            ))}
                        </div>

                        {/* Footer decorative */}
                        <div className="p-6 text-center text-gray-500 text-xs uppercase tracking-widest border-t border-white/5">
                            SocialSense AI &copy; 2026
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
