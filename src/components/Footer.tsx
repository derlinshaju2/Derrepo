"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#0B1120] text-gray-400 py-16 relative overflow-hidden text-center md:text-left">
            {/* Top Gradient Border */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 relative z-10">

                {/* Brand & Tagline */}
                <div className="md:col-span-2 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold font-poppins text-white mb-2 tracking-tight">
                            Derlin Shaju<span className="text-cyan-400">.</span>
                        </h2>
                        <p className="text-lg text-gray-500 max-w-sm mx-auto md:mx-0 leading-relaxed">
                            Crafting intelligent digital experiences with a focus on Deep Learning, AI, and modern web technologies.
                        </p>
                    </motion.div>

                    <div className="flex gap-4 justify-center md:justify-start">
                        {[
                            { Icon: Github, href: "https://github.com/derlinshaju2" },
                            { Icon: Linkedin, href: "https://www.linkedin.com/in/derlinshaju/" },
                            { Icon: Twitter, href: "#" },
                            { Icon: Mail, href: "mailto:derlinshaju2@gmail.com" }
                        ].map(({ Icon, href }, idx) => (
                            <a
                                key={idx}
                                href={href}
                                target={href.startsWith("http") ? "_blank" : "_self"}
                                rel={href.startsWith("http") ? "noopener noreferrer" : ""}
                                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navigation</h3>
                    <ul className="space-y-4">
                        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="hover:text-cyan-400 transition-colors flex items-center justify-center md:justify-start gap-2 group"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/0 group-hover:bg-cyan-500 transition-all" />
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex flex-col gap-1">
                            <span className="text-gray-600 font-medium uppercase text-xs">Email</span>
                            <a href="mailto:derlinshaju2@gmail.com" className="hover:text-white transition-colors">derlinshaju2@gmail.com</a>
                        </li>
                        <li className="flex flex-col gap-1">
                            <span className="text-gray-600 font-medium uppercase text-xs">Location</span>
                            <span className="text-gray-400">Kerala, India</span>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-white/5 max-w-7xl mx-auto px-6 relative z-10 text-sm">
                <p>&copy; {new Date().getFullYear()} Derlin Shaju. All rights reserved.</p>

                <button
                    onClick={scrollToTop}
                    className="mt-6 md:mt-0 flex items-center gap-2 text-cyan-400 hover:text-white transition-colors group"
                >
                    Back to Top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                </button>
            </div>
        </footer>
    );
}
