"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, AlertCircle, CheckCircle } from "lucide-react";

export default function Dashboard() {
    const stats = [
        { label: "Total People", value: "2,543", icon: <Users />, color: "text-blue-400" },
        { label: "Safety Score", value: "98.2%", icon: <CheckCircle />, color: "text-green-400" },
        { label: "Violations today", value: "42", icon: <AlertCircle />, color: "text-red-400" },
        { label: "Alert Precision", value: "99.1%", icon: <TrendingUp />, color: "text-purple-400" },
    ];

    const chartData = [40, 70, 45, 90, 65, 80, 50]; // Mock violation data

    return (
        <section id="dashboard" className="py-24 px-6 bg-[#0F172A]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-sm font-bold tracking-widest text-cyan-400 mb-2 uppercase"
                    >
                        Analytics
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Live Statistics Dashboard
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 border border-white/5"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${stat.color}`}>
                                    {stat.icon}
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
                                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Activity Chart */}
                    <div className="lg:col-span-2 glass-card p-8 border border-white/5 relative overflow-hidden">
                        <div className="flex justify-between items-center mb-8">
                            <h4 className="text-xl font-bold text-white">Violation Trends (Last 7 Days)</h4>
                            <div className="flex gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-cyan-500" />
                                    <span className="text-xs text-gray-400">Violations</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-64 flex items-end gap-4 relative">
                            {chartData.map((height, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center gap-3 group relative">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${height}%` }}
                                        transition={{ duration: 1, delay: i * 0.1 }}
                                        className="w-full bg-gradient-to-t from-cyan-600 to-blue-400 rounded-t-lg relative"
                                    >
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                            {height}
                                        </div>
                                    </motion.div>
                                    <span className="text-[10px] text-gray-500 font-bold uppercase">Day {i + 1}</span>
                                </div>
                            ))}
                            {/* Horizontal Lines */}
                            <div className="absolute inset-x-0 top-0 h-[1px] bg-white/5" />
                            <div className="absolute inset-x-0 top-1/2 h-[1px] bg-white/5" />
                        </div>
                    </div>

                    {/* Hourly Distribution */}
                    <div className="glass-card p-8 border border-white/5">
                        <h4 className="text-xl font-bold text-white mb-8">Risk Heatmap</h4>
                        <div className="space-y-4">
                            {[
                                { area: "Entrance A", risk: "Low", color: "bg-green-500/20 text-green-400" },
                                { area: "Food Court", risk: "High", color: "bg-red-500/20 text-red-400" },
                                { area: "Main Hall", risk: "Medium", color: "bg-yellow-500/20 text-yellow-400" },
                                { area: "Restroom Corridor", risk: "Low", color: "bg-green-500/20 text-green-400" },
                                { area: "Parking Elevators", risk: "Medium", color: "bg-yellow-500/20 text-yellow-400" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                    <span className="text-sm text-gray-400">{item.area}</span>
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${item.color}`}>
                                        {item.risk}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-8 py-3 rounded-xl border border-white/10 text-white text-sm font-bold hover:bg-white/5 transition-all">
                            View Full Report
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
