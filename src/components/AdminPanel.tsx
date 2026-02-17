"use client";

import { motion } from "framer-motion";
import { Lock, Settings, Save, RefreshCcw, Activity, Terminal, Shield } from "lucide-react";
import { useState } from "react";

export default function AdminPanel() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [settings, setSettings] = useState([
        { label: "AI Optimization", desc: "Enable TensorRT acceleration", enabled: true },
        { label: "Privacy Masking", desc: "Auto-blur detected faces", enabled: true },
        { label: "Cloud Sync", desc: "Real-time violation backup", enabled: false },
        { label: "Audio Alerts", desc: "Play alarm on violation", enabled: true },
    ]);

    const logs = [
        { time: "14:20:01", type: "system", msg: "YOLOv8 engine initialized successfully." },
        { time: "14:20:05", type: "info", msg: "Camera node 'ENTRANCE_MAIN' connected." },
        { time: "14:21:12", type: "warning", msg: "High density detected in Zone B." },
        { time: "14:22:30", type: "error", msg: "Database connection timeout (retrying...)" },
        { time: "14:22:35", type: "success", msg: "Database reconnected. Logs synced." },
    ];

    const toggleSetting = (index: number) => {
        const newSettings = [...settings];
        newSettings[index].enabled = !newSettings[index].enabled;
        setSettings(newSettings);
    };

    if (!isLoggedIn) {
        return (
            <section id="admin" className="py-24 px-6 bg-slate-50">
                <div className="max-w-md mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-cyan-600/10 flex items-center justify-center text-cyan-600 mx-auto mb-8">
                            <Lock size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Admin Access</h3>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Username</label>
                                <input
                                    type="text"
                                    defaultValue="admin"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-cyan-600 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Password</label>
                                <input
                                    type="password"
                                    defaultValue="••••••••"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-cyan-600 outline-none transition-all"
                                />
                            </div>
                            <button
                                onClick={() => setIsLoggedIn(true)}
                                className="w-full py-4 rounded-xl bg-cyan-600 text-white font-bold hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-600/20"
                            >
                                Sign In
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="admin" className="py-24 px-6 bg-white relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest text-cyan-600 mb-2 uppercase"
                    >
                        Central Control
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        Administration Panel
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Settings Side */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                            <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Settings className="text-cyan-600" />
                                System Settings
                            </h4>
                            <div className="space-y-6">
                                {settings.map((setting, index) => (
                                    <div key={index} className="flex items-center justify-between group">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-slate-700">{setting.label}</span>
                                            <span className="text-[10px] text-slate-400 font-medium">{setting.desc}</span>
                                        </div>
                                        <button
                                            onClick={() => toggleSetting(index)}
                                            className={`w-12 h-6 rounded-full transition-all relative ${setting.enabled ? "bg-cyan-600" : "bg-slate-300"
                                                }`}
                                        >
                                            <motion.div
                                                animate={{ x: setting.enabled ? 24 : 4 }}
                                                className="absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm"
                                            />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <button className="w-full mt-8 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group">
                                <Save className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                Save Configuration
                            </button>
                        </div>

                        <div className="p-6 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center gap-4">
                            <div className="p-2 bg-white rounded-lg text-cyan-600 shadow-sm">
                                <RefreshCcw size={20} />
                            </div>
                            <div>
                                <h5 className="text-sm font-bold text-slate-900">Auto-scaling Active</h5>
                                <p className="text-xs text-slate-500">Instance: node-cv-region-1</p>
                            </div>
                        </div>
                    </div>

                    {/* Console Side */}
                    <div className="lg:col-span-2">
                        <div className="rounded-3xl bg-slate-900 shadow-2xl overflow-hidden border border-slate-800">
                            <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-700 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                                    <Terminal size={12} /> Live Terminal Logs — v1.2.4
                                </div>
                                <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                            </div>

                            <div className="p-8 h-[400px] overflow-y-auto font-mono text-sm space-y-3 custom-scrollbar">
                                {logs.map((log, index) => (
                                    <div key={index} className="flex items-start gap-4 group">
                                        <span className="text-xs text-slate-600 font-bold opacity-50 whitespace-nowrap">{log.time}</span>
                                        <div className="flex-1">
                                            <span className={`${log.type === "error" ? "text-red-400" :
                                                log.type === "warning" ? "text-yellow-400" :
                                                    log.type === "success" ? "text-green-400" :
                                                        "text-cyan-400"
                                                } font-bold mr-2 uppercase text-[10px]`}>
                                                [{log.type}]
                                            </span>
                                            <span className="text-slate-300 group-hover:text-white transition-colors">
                                                {log.msg}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                                <div className="h-1 bg-cyan-500/20 w-full animate-pulse mt-4" />
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                            <div className="flex items-center gap-3">
                                <Shield className="text-cyan-600" />
                                <span className="text-sm font-bold text-slate-900">Security Protocol: High</span>
                            </div>
                            <button className="text-cyan-600 text-sm font-bold hover:underline">View Policy</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
