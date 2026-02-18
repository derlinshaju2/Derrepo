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
        <section id="features" className="py-24 px-6 bg-[#0F172A]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    <div className="lg:col-span-1">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-sm font-bold tracking-widest text-cyan-400 mb-2 uppercase"
                        >
                            Capabilities
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-white mb-6"
                        >
                            Advanced System <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                                Features
                            </span>
                        </motion.h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Our system combines cutting-edge AI with practical safety requirements to provide a robust solution for modern public health challenges.
                        </p>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
                        >
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                <Zap className="text-cyan-400 w-5 h-5" /> Quick Fact
                            </h4>
                            <p className="text-sm text-gray-400">
                                The system can process up to 30 frames per second on a standard GPU, ensuring no violation goes unnoticed.
                            </p>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl glass-card flex gap-4 border border-white/5 active:scale-95 transition-transform"
                            >
                                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
