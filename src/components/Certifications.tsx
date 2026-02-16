"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Scroll } from "lucide-react";

const certifications = [
    { name: "Machine Learning", issuer: "NIT Calicut", year: "2024" },
    { name: "Flutter Workshop", issuer: "Alisons Informatics", year: "2023" },
    { name: "Let’s Code AI", issuer: "NEXTGENAI", year: "2023" },
    { name: "Python Programming", issuer: "Revertech IT Solutions", year: "2022" },
    { name: "Data Science", issuer: "Dataspark", year: "2024" },
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-24 relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute top-1/2 left-0 w-full h-[400px] bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-transparent -rotate-6 transform skew-y-6 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-2 block">Achievements</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Certified <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Excellence</span>
                    </h2>
                </motion.div>

                {/* Horizontal Scrolling Area */}
                <div className="flex overflow-x-auto pb-8 gap-6 justify-start lg:justify-center scrollbar-hide snap-x px-4">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(6,182,212,0.15)" }}
                            className="min-w-[320px] bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] p-8 rounded-3xl snap-center group hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Card Decoration */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-400 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                                    <BadgeCheck size={32} />
                                </div>
                                <div>
                                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                                        {cert.year}
                                    </span>
                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                                        {cert.name}
                                    </h3>
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-sm text-gray-400">
                                <span className="flex items-center gap-2">
                                    <Scroll size={14} className="text-cyan-500/50" />
                                    {cert.issuer}
                                </span>
                                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
