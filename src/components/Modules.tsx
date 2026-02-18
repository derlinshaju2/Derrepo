"use client";

import { motion } from "framer-motion";
import { Camera, AlertCircle, LayoutDashboard, CheckCircle2, Bell, FileText, BarChart3, Search, UserCheck } from "lucide-react";

const modules = [
    {
        title: "Image Processing Module",
        icon: <Camera className="w-8 h-8 text-cyan-400" />,
        features: [
            "Camera input acquisition",
            "Image preprocessing",
            "Object detection (YOLO/Deep Learning)",
            "Person tracking",
            "Distance estimation",
            "Real-time violation detection"
        ]
    },
    {
        title: "Distance Monitoring & Alerting",
        icon: <AlertCircle className="w-8 h-8 text-blue-400" />,
        features: [
            "Continuous monitoring",
            "Threshold-based violation detection",
            "Visual alerts (Red bounding boxes)",
            "Audible alarms",
            "SMS / Email notification capability",
            "Auto-escalation for mass violations"
        ]
    },
    {
        title: "Visualization & Reporting",
        icon: <LayoutDashboard className="w-8 h-8 text-purple-400" />,
        features: [
            "Live video feed display",
            "Overlay bounding boxes",
            "Compliance statistics dashboard",
            "Violation logs & history",
            "Downloadable PDF/CSV reports",
            "Analytics charts & trends"
        ]
    }
];

export default function Modules() {
    return (
        <section id="modules" className="py-24 px-6 bg-[#0B1120]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest text-cyan-400 mb-2 uppercase"
                    >
                        Core Components
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white"
                    >
                        System Modules
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modules.map((module, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card p-8 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-transparent blur-2xl -mr-8 -mt-8 group-hover:bg-cyan-500/20 transition-all duration-500" />

                            <div className="mb-6 w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/50 transition-all duration-300">
                                {module.icon}
                            </div>

                            <h4 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors">
                                {module.title}
                            </h4>

                            <ul className="space-y-4">
                                {module.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start gap-3 text-gray-400 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-cyan-500/50 flex-shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
