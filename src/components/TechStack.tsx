"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
    { name: "Python", category: "Language", icon: "≡ƒÉì" },
    { name: "OpenCV", category: "Computer Vision", icon: "≡ƒæü∩╕Å" },
    { name: "YOLO v8", category: "Object Detection", icon: "≡ƒÄ»" },
    { name: "TensorFlow", category: "Deep Learning", icon: "≡ƒºá" },
    { name: "PyTorch", category: "Deep Learning", icon: "≡ƒöÑ" },
    { name: "Flask/Django", category: "Backend API", icon: "≡ƒîÉ" },
    { name: "Next.js/React", category: "Frontend UI", icon: "ΓÜ¢∩╕Å" },
    { name: "MySQL/Firebase", category: "Database", icon: "≡ƒùä∩╕Å" },
];

export default function TechStack() {
    return (
        <section id="technologies" className="py-24 px-6 bg-[#0B1120]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest text-cyan-400 mb-2 uppercase"
                    >
                        Tools of the Trade
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Technology Stack
                    </motion.h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, borderColor: 'rgba(6, 182, 212, 0.4)' }}
                            className="glass-card p-8 flex flex-col items-center justify-center text-center border border-white/5 hover:bg-white/[0.05] transition-all"
                        >
                            <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">
                                {tech.icon}
                            </div>
                            <h4 className="text-lg font-bold text-white mb-1">{tech.name}</h4>
                            <span className="text-xs text-cyan-400 uppercase tracking-widest font-medium opacity-70">
                                {tech.category}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
