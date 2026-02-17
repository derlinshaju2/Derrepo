"use client";

import { motion } from "framer-motion";
import { Zap, Target, Gauge, Bell, Users, BarChart, Cloud } from "lucide-react";

const features = [
    {
        title: "Real-time Monitoring",
        description: "Zero-latency video processing for immediate violation detection.",
        icon: <Zap className="w-5 h-5" />
    },
    {
        title: "AI-Based Detection",
        description: "Powered by state-of-the-art YOLO v8 object detection models.",
        icon: <Target className="w-5 h-5" />
    },
    {
        title: "High Accuracy",
        description: "Optimized for varying lighting conditions and crowded spaces.",
        icon: <Gauge className="w-5 h-5" />
    },
    {
        title: "Automated Alert System",
        description: "Instant visual and audible notifications for protocol breaches.",
        icon: <Bell className="w-5 h-5" />
    },
    {
        title: "Scalable Solution",
        description: "Easily deployable in malls, airports, and large hospital complexes.",
        icon: <Users className="w-5 h-5" />
    },
    {
        title: "Data Analytics",
        description: "Built-in dashboard for tracking compliance trends over time.",
        icon: <BarChart className="w-5 h-5" />
    },
    {
        title: "Cloud Ready",
        description: "Deploy on AWS, Azure, or GCP for central management of multiple sites.",
        icon: <Cloud className="w-5 h-5" />
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 px-6 bg-slate-50 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest text-cyan-600 mb-2 uppercase"
                    >
                        Capabilities
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        Advanced Features
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-cyan-500/5 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
