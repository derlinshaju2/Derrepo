"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Activity, Cpu, Bell } from "lucide-react";

export default function About() {
    const highlights = [
        {
            title: "Automated Monitoring",
            description: "Replace manual supervision with 24/7 AI-powered surveillance that never tires.",
            icon: <Cpu className="w-6 h-6" />
        },
        {
            title: "Real-Time Analysis",
            description: "Process video feeds instantly to detect distance violations as they happen.",
            icon: <Activity className="w-6 h-6" />
        },
        {
            title: "Instant Alerting",
            description: "Configure audible and visual alarms to enforce safety protocols immediately.",
            icon: <Bell className="w-6 h-6" />
        },
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-br from-[#0B1120] to-[#0F172A]">
            <div className="absolute top-0 right-0 w-full h-[300px] bg-gradient-to-b from-cyan-900/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col justify-center"
                >
                    <h2 className="text-sm font-bold tracking-widest text-cyan-400 mb-2 uppercase">Safety First</h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight">
                        What is <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            Social Distancing Detection?
                        </span>
                    </h3>

                    <div className="space-y-6 text-gray-400 text-base leading-relaxed">
                        <p>
                            Social distancing detection is an AI-driven technique used to measure the physical distance between individuals in a monitored area. By leveraging <span className="text-white font-medium">Computer Vision</span> and <span className="text-white font-medium">Deep Learning</span>, the system identifies people and calculates the gaps between them in real-time.
                        </p>
                        <p>
                            In public health environments, maintaining space is critical to preventing the spread of contagious diseases. Our system automates this monitoring process, ensuring high compliance without the need for constant human intervention.
                        </p>
                        <div className="pt-4 border-l-2 border-cyan-500/30 pl-6 italic">
                            "Automation is the key to scalable safety enforcement in high-traffic zones like malls, airports, and hospitals."
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="grid grid-cols-1 gap-6 relative z-10">
                        {highlights.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ x: 10 }}
                                className="glass-card p-6 flex gap-6 items-start group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Background decoration */}
                    <div className="absolute -inset-10 bg-cyan-500/5 blur-3xl rounded-full -z-10 animate-pulse" />
                </motion.div>
            </div>
        </section>
    );
}
