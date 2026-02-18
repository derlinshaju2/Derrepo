"use client";

import { motion } from "framer-motion";
import { Lock, Search, FileDown, Trash2, Filter, Eye } from "lucide-react";
import { useState } from "react";

export default function AdminPanel() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logs = [
        { id: "V-1029", time: "11:04:12", location: "Entrance A", severity: "Low", snapshot: "view" },
        { id: "V-1030", time: "11:08:45", location: "Food Court", severity: "High", snapshot: "view" },
        { id: "V-1031", time: "11:12:30", location: "Main Hall", severity: "Medium", snapshot: "view" },
        { id: "V-1032", time: "11:15:02", location: "Food Court", severity: "High", snapshot: "view" },
        { id: "V-1033", time: "11:18:22", location: "Entrance B", severity: "Low", snapshot: "view" },
    ];

    if (!isLoggedIn) {
        return (
            <section id="admin" className="py-24 px-6 bg-[#0B1120]">
                <div className="max-w-md mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-10 border border-white/10 shadow-2xl"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mx-auto mb-8">
                            <Lock size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white text-center mb-8">Admin Access</h3>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Username</label>
                                <input
                                    type="text"
                                    defaultValue="admin"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Password</label>
                                <input
                                    type="password"
                                    defaultValue="ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none transition-all"
                                />
                            </div>
                            <button
                                onClick={() => setIsLoggedIn(true)}
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95 transition-all"
                            >
                                Sign In
                            </button>
                            <p className="text-center text-xs text-gray-500">
                                This is a simulated admin portal for demonstration purposes.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="admin" className="py-24 px-6 bg-[#0B1120]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-sm font-bold tracking-widest text-cyan-400 mb-2 uppercase"
                        >
                            Control Center
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl font-bold text-white"
                        >
                            Violation History
                        </motion.h3>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white flex items-center gap-2 hover:bg-white/10 transition-all font-bold text-sm">
                            <Filter size={18} /> Filter
                        </button>
                        <button className="px-6 py-3 rounded-xl bg-cyan-500 text-white flex items-center gap-2 hover:bg-cyan-600 transition-all font-bold text-sm shadow-lg shadow-cyan-500/20">
                            <FileDown size={18} /> Export Data
                        </button>
                    </div>
                </div>

                <div className="glass-card overflow-hidden border border-white/5">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/[0.03] border-b border-white/10">
                                    <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Incident ID</th>
                                    <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Timestamp</th>
                                    <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Location</th>
                                    <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Severity</th>
                                    <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Proof</th>
                                    <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 font-mono">
                                {logs.map((log) => (
                                    <tr key={log.id} className="hover:bg-white/[0.01] transition-colors group">
                                        <td className="px-8 py-6 text-cyan-400 font-bold">{log.id}</td>
                                        <td className="px-8 py-6 text-gray-400">{log.time}</td>
                                        <td className="px-8 py-6 text-white">{log.location}</td>
                                        <td className="px-8 py-6">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${log.severity === "High" ? "bg-red-500/20 text-red-500" :
                                                    log.severity === "Medium" ? "bg-yellow-500/20 text-yellow-500" :
                                                        "bg-blue-500/20 text-blue-500"
                                                }`}>
                                                {log.severity}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <button className="flex items-center gap-2 text-xs text-gray-500 hover:text-cyan-400 transition-colors">
                                                <Eye size={14} /> View Frame
                                            </button>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
                                                <Trash2 size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
