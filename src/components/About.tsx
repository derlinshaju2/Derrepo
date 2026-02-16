"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export default function About() {
    const education = [
        {
            year: "2021 - 2025",
            degree: "B.Tech in AI & Data Science",
            institution: "APJ Abdul Kalam Technological University",
            description: "Focus on Machine Learning, Neural Networks, and Data Mining. CGPA: 8.0.",
            icon: <GraduationCap />
        },
        // Can add more items here
    ];

    return (
        <section id="about" className="py-16 relative overflow-hidden bg-gradient-to-br from-[#0B1120] to-[#0F172A]">
            <div className="absolute top-0 right-0 w-full h-[300px] bg-gradient-to-b from-cyan-900/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col justify-center"
                >
                    <h2 className="text-sm font-bold tracking-widest text-cyan-400 mb-2 uppercase">My Journey</h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight">
                        Driven by Data,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            Inspired by Intelligence.
                        </span>
                    </h3>

                    <div className="space-y-6 text-gray-400 text-base leading-relaxed">
                        <p>
                            I am an AI enthusiast dedicated to bridging the gap between raw data and actionable intelligence. My academic journey has equipped me with a robust understanding of <span className="text-white font-medium">Deep Learning architectures</span> and <span className="text-white font-medium">Statistical Modeling</span>.
                        </p>
                        <p>
                            Whether it's deploying a computer vision model on an edge device or optimizing a recommendation engine, I thrive on the challenges that modern AI presents.
                        </p>
                    </div>


                </motion.div>

                {/* Timeline Glass Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full"
                >
                    {/* Decorative blurred backdrop */}
                    <div className="absolute inset-0 bg-blue-500/10 blur-3xl transform rotate-6 rounded-[3rem] -z-10" />

                    <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 md:p-8 shadow-2xl relative overflow-hidden">

                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10" />

                        <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                            <Award className="text-cyan-400" /> Education & Milestones
                        </h4>

                        <div className="space-y-8 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500/50 to-transparent" />

                            {education.map((item, i) => (
                                <div key={i} className="relative pl-12 group">
                                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-[#0B1120] border border-cyan-500/30 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(6,182,212,0.2)] group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all">
                                            {item.icon}
                                        </span>
                                    </div>

                                    <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20 mb-2 inline-block">
                                        {item.year}
                                    </span>
                                    <h5 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                                        {item.degree}
                                    </h5>
                                    <p className="text-sm text-gray-400">{item.institution}</p>
                                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
