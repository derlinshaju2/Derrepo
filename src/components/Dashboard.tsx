"use client";

import { motion } from "framer-motion";
import { Users, CheckCircle, AlertCircle, TrendingUp, BarChart, ArrowUpRight } from "lucide-react";

export default function Dashboard() {
    const stats = [
        { label: "Total People Tracked", value: "2,543", icon: <Users />, trend: "+12%" },
        { label: "Safety Score", value: "98.2%", icon: <CheckCircle />, trend: "+0.5%" },
        { label: "Active Violations", value: "42", icon: <AlertCircle />, trend: "-15%" },
    ];

    const chartData = [
        { day: "Mon", violations: 40 },
        { day: "Tue", violations: 70 },
        { day: "Wed", violations: 45 },
        { day: "Thu", violations: 90 },
        { day: "Fri", violations: 65 },
        { day: "Sat", violations: 80 },
        { day: "Sun", violations: 50 },
    ];

    return (
        <section id="dashboard" className="py-24 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest text-cyan-600 mb-2 uppercase"
                    >
                        Analytics Console
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        Violation Statistics
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3 rounded-2xl bg-cyan-50 text-cyan-600">
                                    {stat.icon}
                                </div>
                                <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.trend.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {stat.trend}
                                </span>
                            </div>
                            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{stat.label}</h4>
                            <p className="text-4xl font-bold text-slate-900">{stat.value}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Activity Chart */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                <BarChart className="text-cyan-600" />
                                Weekly Trends
                            </h4>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-cyan-500" />
                                <span className="text-xs text-slate-500">Violations</span>
                            </div>
                        </div>

                        <div className="flex items-end justify-between h-64 gap-2 md:gap-4 px-4 relative">
                            {chartData.map((data, index) => (
                                <div key={index} className="flex-1 flex flex-col items-center gap-4 group">
                                    <div className="relative w-full flex flex-col justify-end h-full">
                                        <motion.div
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${data.violations}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: index * 0.05 }}
                                            className="w-full bg-slate-100 group-hover:bg-cyan-600 transition-all rounded-t-lg relative"
                                        >
                                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 shadow-xl">
                                                {data.violations} Counts
                                            </div>
                                        </motion.div>
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                                        {data.day}
                                    </span>
                                </div>
                            ))}
                            {/* Gridlines */}
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-[0.05] z-0">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-full h-px bg-slate-900" />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Risk Heatmap / Table */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl shadow-slate-900/10"
                    >
                        <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <ArrowUpRight className="text-cyan-400" />
                            Risk Zones
                        </h4>
                        <div className="space-y-4">
                            {[
                                { area: "Main Entrance", risk: "Low", color: "bg-green-500/20 text-green-400" },
                                { area: "Food Court", risk: "High", color: "bg-red-500/20 text-red-400" },
                                { area: "Conference Hall", risk: "Medium", color: "bg-yellow-500/20 text-yellow-400" },
                                { area: "Parking A", risk: "Low", color: "bg-green-500/20 text-green-400" },
                                { area: "Elevator Lobby", risk: "High", color: "bg-red-500/20 text-red-400" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-default">
                                    <span className="text-sm text-gray-300 font-medium">{item.area}</span>
                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest ${item.color}`}>
                                        {item.risk}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-8 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-bold transition-all shadow-lg shadow-cyan-600/20">
                            Download Analytics
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
