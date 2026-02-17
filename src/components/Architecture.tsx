"use client";

import { motion } from "framer-motion";
import { Camera, Cpu, Search, Ruler, AlertTriangle, Database, LayoutDashboard, ArrowRight } from "lucide-react";

const steps = [
    { name: "Camera", icon: <Camera className="w-6 h-6" />, description: "Live RTSP/CCTV Input" },
    { name: "Preprocessing", icon: <Cpu className="w-6 h-6" />, description: "Frame Resizing & Denoising" },
    { name: "Object Detection", icon: <Search className="w-6 h-6" />, description: "YOLO Human Identification" },
    { name: "Distance Calculation", icon: <Ruler className="w-6 h-6" />, description: "Euclidean Distance Metric" },
    { name: "Violation Detection", icon: <AlertTriangle className="w-6 h-6" />, description: "Distance Thresholding" },
    { name: "Alert System", icon: <Database className="w-6 h-6" />, description: "Visual & Audible Alarms" },
    { name: "Data Logging", icon: <Database className="w-6 h-6" />, description: "Violation Persistence" },
    { name: "Reporting", icon: <LayoutDashboard className="w-6 h-6" />, description: "Analytics Dashboard" },
];

export default function Architecture() {
    return (
        <section id="architecture" className="py-24 px-6 bg-[#0F172A] relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest text-cyan-400 mb-2 uppercase"
                    >
                        How it Works
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        System Architecture
                    </motion.h3>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Our intelligent pipeline processes video data through multiple specialized stages to ensure accurate detection and reliable alerting.
                    </p>
                </div>

                <div className="relative">
                    {/* Desktop Horizontal Flow */}
                    <div className="hidden lg:grid grid-cols-4 xl:grid-cols-8 gap-4 relative">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center text-cyan-400 mb-4 group hover:bg-cyan-500 hover:text-white transition-all duration-300 relative z-10"
                                >
                                    {step.icon}
                                    {index < steps.length - 1 && (
                                        <div className="absolute left-full top-1/2 w-full h-[1px] bg-cyan-500/20 -z-10 translate-x-[-10%]" />
                                    )}
                                </motion.div>
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.2 }}
                                    className="text-sm font-bold text-white text-center mb-1"
                                >
                                    {step.name}
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    className="text-[10px] text-gray-500 text-center uppercase tracking-tight"
                                >
                                    {step.description}
                                </motion.span>
                            </div>
                        ))}
                    </div>

                    {/* Mobile/Tablet Vertical/Grid Flow */}
                    <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-6 glass-card p-6"
                            >
                                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                                    {step.icon}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold text-cyan-500/50">0{index + 1}</span>
                                        <h4 className="font-bold text-white">{step.name}</h4>
                                    </div>
                                    <p className="text-sm text-gray-400">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Visual Connector for Mobile */}
                <div className="mt-16 text-center lg:hidden">
                    <ArrowRight className="w-8 h-8 text-gray-700 mx-auto rotate-90" />
                </div>
            </div>
        </section>
    );
}
