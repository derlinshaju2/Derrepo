"use client";

import { motion } from "framer-motion";
import { Camera, AlertCircle, LayoutDashboard, CheckCircle2, Bell, FileText, BarChart3, Search, UserCheck } from "lucide-react";

const modules = [
    {
        title: "Image Processing Module",
        description: "Uses Deep Learning (YOLOv8) to identify and track individuals in high-density surveillance feeds.",
        icon: <Camera className="w-8 h-8" />,
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
        description: "Applies Euclidean distance algorithms to detect violations and trigger multi-channel alerts.",
        icon: <AlertCircle className="w-8 h-8" />,
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
        description: "Centralized dashboard for real-time visualization, statistical analysis, and logging.",
        icon: <LayoutDashboard className="w-8 h-8" />,
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
        <section id="modules" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest text-cyan-600 mb-2 uppercase"
                    >
                        Core Components
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        System Modules
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modules.map((module, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center text-white mb-6 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                                {module.icon}
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-4">{module.title}</h4>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                {module.description}
                            </p>
                            <ul className="space-y-3">
                                {module.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center gap-2 text-sm text-slate-500">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                        {feature}
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
