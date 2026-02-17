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
        <section id="architecture" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-[0.4] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest text-cyan-600 mb-2 uppercase"
                    >
                        System Pipeline
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        Technology Workflow
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="h-full p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-cyan-600 text-white flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                                    {step.icon}
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-[10px] font-bold text-cyan-600/40 uppercase">Step 0{index + 1}</span>
                                    <h4 className="text-lg font-bold text-slate-900">{step.name}</h4>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>

                            {index !== steps.length - 1 && (
                                <div className="hidden lg:flex absolute top-1/2 -right-4 w-8 h-8 items-center justify-center text-slate-300 z-20">
                                    <ArrowRight size={20} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Bottom Decoy */}
                <div className="mt-12 text-center lg:hidden">
                    <ArrowRight className="w-8 h-8 text-slate-300 mx-auto rotate-90" />
                </div>
            </div>
        </section>
    );
}
