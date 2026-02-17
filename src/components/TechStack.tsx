"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
    { name: "Python", category: "Language", icon: "🐍" },
    { name: "OpenCV", category: "Computer Vision", icon: "👁️" },
    { name: "YOLO v8", category: "Object Detection", icon: "🎯" },
    { name: "TensorFlow", category: "Deep Learning", icon: "🧠" },
    { name: "PyTorch", category: "Deep Learning", icon: "🔥" },
    { name: "Flask/Django", category: "Backend API", icon: "🌐" },
    { name: "Next.js/React", category: "Frontend UI", icon: "⚛️" },
    { name: "MySQL/Firebase", category: "Database", icon: "🗄️" },
];

export default function TechStack() {
    return (
        <section id="technologies" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest text-cyan-600 mb-2 uppercase"
                    >
                        Tools of the Trade
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
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
                            whileHover={{ y: -5, borderColor: 'rgba(6, 182, 212, 0.4)', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)' }}
                            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center text-center transition-all group"
                        >
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                                {tech.icon}
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 mb-1">{tech.name}</h4>
                            <span className="text-xs text-cyan-600 uppercase tracking-widest font-bold opacity-70">
                                {tech.category}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
