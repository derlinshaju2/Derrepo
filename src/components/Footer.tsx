"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

interface FooterProps {
    currentView?: "portfolio" | "socialsense";
}

export default function Footer({ currentView = "portfolio" }: FooterProps) {
    const isLight = currentView === "socialsense";

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className={`${isLight ? "bg-white border-t border-slate-200" : "bg-[#0B1120] border-t border-white/5"} text-gray-500 py-16 relative overflow-hidden text-center md:text-left transition-colors duration-700`}>
            {!isLight && (
                <>
                    {/* Top Gradient Border */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none" />
                </>
            )}

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 relative z-10">

                {/* Brand & Tagline */}
                <div className="md:col-span-2 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={`text-3xl font-bold font-poppins mb-2 tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
                            SocialSense <span className="text-cyan-600">AI.</span>
                        </h2>
                        <p className={`text-lg max-w-sm mx-auto md:mx-0 leading-relaxed ${isLight ? "text-slate-500" : "text-gray-500"}`}>
                            Protecting public health through intelligent computer vision and real-time social distancing monitoring.
                        </p>
                    </motion.div>

                    <div className="flex gap-4 justify-center md:justify-start">
                        {[
                            { Icon: Github, href: "https://github.com/derrepo" },
                            { Icon: Linkedin, href: "https://www.linkedin.com/in/derlinshaju/" },
                            { Icon: Twitter, href: "#" },
                            { Icon: Mail, href: "mailto:info@socialsense.ai" }
                        ].map(({ Icon, href }, idx) => (
                            <a
                                key={idx}
                                href={href}
                                target={href.startsWith("http") ? "_blank" : "_self"}
                                rel={href.startsWith("http") ? "noopener noreferrer" : ""}
                                className={`p-3 rounded-full border transition-all duration-300 transform hover:-translate-y-1 shadow-sm ${isLight
                                    ? "bg-slate-50 border-slate-200 text-slate-600 hover:bg-cyan-50 hover:border-cyan-200 hover:text-cyan-600 shadow-slate-200/50"
                                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-400"
                                    }`}
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className={`font-bold mb-6 uppercase tracking-wider text-sm ${isLight ? "text-slate-900" : "text-white"}`}>Navigation</h3>
                    <ul className="space-y-4">
                        {["Home", "About", "Modules", "Architecture", "Demo"].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className={`transition-colors flex items-center justify-center md:justify-start gap-2 group ${isLight ? "hover:text-cyan-600 text-slate-500" : "hover:text-cyan-400 text-gray-400"
                                        }`}
                                >
                                    <span className={`w-1.5 h-1.5 rounded-full transition-all ${isLight ? "bg-cyan-600/0 group-hover:bg-cyan-600" : "bg-cyan-500/0 group-hover:bg-cyan-500"
                                        }`} />
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Placeholder or Empty Column to maintain spacing */}
                <div className="hidden md:block" />

            </div>

            <div className={`flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t max-w-7xl mx-auto px-6 relative z-10 text-sm ${isLight ? "border-slate-100 text-slate-400" : "border-white/5 text-gray-500"
                }`}>
                <p>&copy; {new Date().getFullYear()} SocialSense AI. Project by Derlin Shaju.</p>

                <button
                    onClick={scrollToTop}
                    className={`flex items-center gap-2 transition-colors group ${isLight ? "text-cyan-600 hover:text-cyan-700" : "text-cyan-400 hover:text-white"
                        }`}
                >
                    Back to Top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                </button>
            </div>
        </footer>
    );
}
