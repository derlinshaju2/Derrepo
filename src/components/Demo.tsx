"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play, Upload, Camera, Square, AlertTriangle, ShieldCheck } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Demo() {
    const [isMonitoring, setIsMonitoring] = useState(false);
    const [violations, setViolations] = useState(0);
    const [status, setStatus] = useState("Idle");
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let interval: any;
        if (isMonitoring) {
            setStatus("Live Monitoring");
            interval = window.setInterval(() => {
                if (Math.random() > 0.7) {
                    setViolations(prev => prev + 1);
                }
            }, 3000);
        } else {
            setStatus("Idle");
            setViolations(0);
        }
        return () => {
            if (interval) window.clearInterval(interval);
        };
    }, [isMonitoring]);

    const handleUpload = () => {
        setStatus("Uploading Video...");
        setTimeout(() => {
            setIsMonitoring(true);
            setStatus("Processing Uploaded Feed");
        }, 1500);
    };

    const mockDetections = [
        { id: 1, top: "20%", left: "30%", width: "15%", height: "40%", type: "safe" },
        { id: 2, top: "25%", left: "55%", width: "12%", height: "35%", type: "safe" },
        { id: 3, top: "40%", left: "45%", width: "15%", height: "45%", type: "violation" },
        { id: 4, top: "42%", left: "50%", width: "12%", height: "38%", type: "violation" },
    ];

    return (
        <section id="demo" className="py-24 px-6 bg-[#0B1120]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest text-cyan-400 mb-2 uppercase"
                    >
                        Try it Out
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Interactive Demo
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Controls */}
                    <div className="lg:col-span-1 space-y-4">
                        <button
                            onClick={() => setIsMonitoring(!isMonitoring)}
                            className={`w-full p-6 rounded-2xl flex items-center justify-between transition-all ${isMonitoring
                                ? "bg-red-500/10 border border-red-500/50 text-red-500"
                                : "bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20"
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                {isMonitoring ? <Square className="fill-current" /> : <Camera />}
                                <span className="font-bold">{isMonitoring ? "Stop Camera" : "Start Camera"}</span>
                            </div>
                        </button>

                        <button
                            onClick={handleUpload}
                            className="w-full p-6 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-between hover:bg-white/10 transition-all group"
                        >
                            <div className="flex items-center gap-4">
                                <Upload className="group-hover:text-cyan-400 transition-colors" />
                                <span className="font-bold">Upload Video</span>
                            </div>
                        </button>

                        <div className="p-6 rounded-2xl bg-[#0F172A] border border-white/5 space-y-6">
                            <div>
                                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">System Status</h4>
                                <div className="flex items-center gap-3">
                                    <div className={`w-3 h-3 rounded-full ${isMonitoring ? "bg-green-500 animate-pulse" : "bg-gray-700"}`} />
                                    <span className={`font-bold ${isMonitoring ? "text-green-400" : "text-gray-500"}`}>{status}</span>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Violations Detected</h4>
                                <span className="text-5xl font-bold text-white tabular-nums">{violations}</span>
                            </div>

                            <AnimatePresence>
                                {isMonitoring && violations > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400"
                                    >
                                        <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                                        <span className="text-sm font-medium">Distance Threshold Breached!</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Simulation Display */}
                    <div className="lg:col-span-3">
                        <div
                            ref={containerRef}
                            className="relative aspect-video rounded-3xl bg-black overflow-hidden border border-white/10 shadow-2xl group"
                        >
                            {/* Placeholder Mock Feed */}
                            <div className="absolute inset-0 grayscale opacity-40 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200')] bg-cover bg-center" />

                            {/* Scanning Effect */}
                            <AnimatePresence>
                                {isMonitoring && (
                                    <motion.div
                                        initial={{ top: "-100%" }}
                                        animate={{ top: "100%" }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent z-10 opacity-70"
                                    />
                                )}
                            </AnimatePresence>

                            {/* UI Overlays */}
                            <div className="absolute top-6 left-6 z-20 flex items-center gap-3 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20">
                                <div className={`w-2 h-2 rounded-full ${isMonitoring ? "bg-red-500 animate-pulse" : "bg-gray-600"}`} />
                                <span className="text-[10px] font-bold text-white uppercase tracking-widest">REC: FEED_01</span>
                            </div>

                            <div className="absolute bottom-6 right-6 z-20 flex flex-col items-end gap-1">
                                <span className="text-[10px] font-mono text-cyan-400 bg-black/50 px-2 py-1 rounded">2026-02-17 11:15:23</span>
                                <span className="text-[10px] font-mono text-white/50">CAM_INTERNAL_04</span>
                            </div>

                            {/* Mock Detection Boxes */}
                            {isMonitoring && mockDetections.map((box) => (
                                <motion.div
                                    key={box.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute border-2 z-20"
                                    style={{
                                        top: box.top,
                                        left: box.left,
                                        width: box.width,
                                        height: box.height,
                                        borderColor: box.type === "violation" ? "#ef4444" : "#22c55e",
                                        backgroundColor: box.type === "violation" ? "rgba(239, 68, 68, 0.1)" : "rgba(34, 197, 94, 0.1)"
                                    }}
                                >
                                    <span
                                        className={`absolute bottom-full left-0 px-1 text-[8px] font-bold uppercase ${box.type === "violation" ? "bg-red-500" : "bg-green-500"
                                            } text-white`}
                                    >
                                        {box.type === "violation" ? "VIOLATION" : "SAFE"}
                                    </span>
                                    {box.type === "violation" && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-full h-[2px] bg-red-500/50 rotate-45" />
                                            <div className="w-full h-[2px] bg-red-500/50 -rotate-45" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}

                            {/* Dark Overlay when idle */}
                            {!isMonitoring && (
                                <div className="absolute inset-0 z-30 bg-black/60 flex flex-col items-center justify-center gap-4 text-center px-6">
                                    <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
                                        <Play className="w-8 h-8 text-cyan-400 fill-current translate-x-1" />
                                    </div>
                                    <h5 className="text-xl font-bold text-white">System Standby</h5>
                                    <p className="text-sm text-gray-400 max-w-xs">Initialize the computer vision engine to start real-time social distancing monitoring.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
