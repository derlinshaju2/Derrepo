"use client";

import { motion } from "framer-motion";
import { Activity, Shield, Heart, ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function HealthHero() {
    const [bpm, setBpm] = useState(72);
    const [sleepScore, setSleepScore] = useState(85);
    const [healthScore, setHealthScore] = useState(92);

    useEffect(() => {
        const interval = setInterval(() => {
            setBpm(70 + Math.floor(Math.random() * 6));
            setSleepScore(prev => Math.min(100, Math.max(80, prev + (Math.random() - 0.5))));
            setHealthScore(prev => Math.min(100, Math.max(90, prev + (Math.random() - 0.5))));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="health-home" className="relative w-full min-h-[90vh] pt-32 pb-20 px-4 flex items-center justify-center overflow-hidden bg-teal-50">
            {/* Medical Theme Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 50, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-24 -left-24 w-96 h-96 bg-teal-200/30 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, -40, 0],
                        y: [0, 60, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 -right-24 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[120px]"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-7 space-y-8 text-center lg:text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-200 bg-white/50 backdrop-blur-md"
                    >
                        <Activity className="w-4 h-4 text-teal-600 animate-pulse" />
                        <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Intelligent Health Analysis active</span>
                    </motion.div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-950 leading-[1.1]">
                        AI-Driven Health Monitoring <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
                            & Proactive Wellness Management
                        </span>
                    </h1>

                    <p className="text-lg text-teal-800/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                        Proactive wellness management system leveraging AI to predict health risks, optimize nutrition, and monitor physical activity in real-time.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                        <a href="#predictor" className="px-8 py-4 rounded-2xl bg-teal-600 text-white font-bold shadow-xl shadow-teal-600/20 hover:bg-teal-700 hover:scale-105 transition-all flex items-center gap-2">
                            Check Health Status <ArrowRight className="w-5 h-5" />
                        </a>
                        <a href="#yoga" className="px-8 py-4 rounded-2xl bg-white border border-teal-100 text-teal-700 font-bold shadow-sm hover:shadow-md hover:border-teal-200 transition-all flex items-center gap-2">
                            Start Yoga Vision <Activity className="w-5 h-5" />
                        </a>
                    </div>

                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-teal-100/50">
                        {[
                            { label: "Prediction", value: "94%", icon: <Shield /> },
                            { label: "Live Monitoring", value: "24/7", icon: <Activity /> },
                            { label: "Accuracy", value: "98.2%", icon: <Heart /> }
                        ].map((stat, i) => (stat &&
                            <div key={i} className="space-y-1">
                                <div className="text-teal-600 flex items-center justify-center lg:justify-start">
                                    {stat.icon && <span className="p-1 rounded bg-teal-50">{stat.icon}</span>}
                                </div>
                                <div className="text-2xl font-bold text-teal-900">{stat.value}</div>
                                <div className="text-[10px] text-teal-600/60 uppercase tracking-widest font-bold">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="lg:col-span-5 relative hidden lg:flex items-center justify-center"
                >
                    <div className="relative w-full aspect-square max-w-md">
                        {/* Decorative Rings */}
                        <div className="absolute inset-0 border-[20px] border-teal-100/30 rounded-full animate-[spin_20s_linear_infinite]" />
                        <div className="absolute inset-8 border-[1px] border-teal-200/50 rounded-full border-dashed" />

                        {/* Central Hub */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                className="w-64 h-64 rounded-3xl bg-white shadow-2xl shadow-teal-500/10 border border-teal-50 flex items-center justify-center p-8 relative z-10"
                            >
                                <div className="w-full h-full rounded-2xl bg-teal-50 flex flex-col items-center justify-center text-teal-600 gap-4">
                                    <Heart className="w-16 h-16 animate-beat fill-teal-600/10" />
                                    <div className="text-center">
                                        <div className="text-sm font-bold uppercase tracking-wider text-teal-400">Heart Rate</div>
                                        <div className="text-4xl font-black text-teal-900 leading-none">{bpm} <span className="text-sm font-bold opacity-40">BPM</span></div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Floating Metric Cards */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-teal-50 z-20 flex items-center gap-4"
                        >
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                <Activity size={20} />
                            </div>
                            <div>
                                <div className="text-[10px] text-gray-400 uppercase font-bold">Sleep Quality</div>
                                <div className="text-lg font-bold text-teal-900 font-poppins">{sleepScore.toFixed(0)}% Excellent</div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-12 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-teal-50 z-20 flex items-center gap-4"
                        >
                            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                                <Shield size={20} />
                            </div>
                            <div>
                                <div className="text-[10px] text-gray-400 uppercase font-bold">Health Score</div>
                                <div className="text-lg font-bold text-teal-900 font-poppins">{healthScore.toFixed(0)}/100</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-teal-600/40"
            >
                <span className="text-[10px] items-center font-bold uppercase tracking-[0.2em]">Analysis</span>
                <ChevronDown className="w-5 h-5" />
            </motion.div>
        </section>
    );
}
