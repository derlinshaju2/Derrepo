"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play, Upload, Camera, Square, AlertTriangle, ShieldCheck } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Demo() {
    const [isMonitoring, setIsMonitoring] = useState(false);
    const [violations, setViolations] = useState(0);
    const [status, setStatus] = useState("Idle");
    const [mediaType, setMediaType] = useState<"camera" | "upload" | null>(null);
    const [mediaUrl, setMediaUrl] = useState<string | null>(null);
    const [activeDetections, setActiveDetections] = useState<any[]>([]);

    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const streamRef = useRef<MediaStream | null>(null);

    // Dynamic mock detection logic
    useEffect(() => {
        let interval: any;
        if (isMonitoring) {
            interval = window.setInterval(() => {
                // Generate 2-4 random detections
                const count = Math.floor(Math.random() * 3) + 2;
                const newDetections = Array.from({ length: count }).map((_, i) => ({
                    id: Date.now() + i,
                    top: `${Math.random() * 60 + 10}%`,
                    left: `${Math.random() * 70 + 5}%`,
                    width: `${Math.random() * 10 + 10}%`,
                    height: `${Math.random() * 20 + 20}%`,
                    type: Math.random() > 0.7 ? "violation" : "safe"
                }));

                setActiveDetections(newDetections);

                const violationCount = newDetections.filter(d => d.type === "violation").length;
                if (violationCount > 0) {
                    setViolations(prev => prev + violationCount);
                }
            }, 3000);
        } else {
            setActiveDetections([]);
            setViolations(0);
        }
        return () => {
            if (interval) window.clearInterval(interval);
        };
    }, [isMonitoring]);

    const startCamera = async () => {
        try {
            if (isMonitoring && mediaType === "camera") {
                stopMonitoring();
                return;
            }

            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
            streamRef.current = stream;
            setMediaType("camera");
            setIsMonitoring(true);
            setStatus("Live Camera Feed");
            setMediaUrl(null);
        } catch (err) {
            console.error("Error accessing camera:", err);
            setStatus("Camera Access Denied");
        }
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (mediaUrl) URL.revokeObjectURL(mediaUrl);
            const url = URL.createObjectURL(file);
            setMediaUrl(url);
            setMediaType("upload");
            setIsMonitoring(true);
            setStatus(file.type.startsWith("video") ? "Processing Video Feed" : "Analyzing Photo");
        }
    };

    const stopMonitoring = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
        }
        if (videoRef.current) {
            videoRef.current.srcObject = null;
        }
        setIsMonitoring(false);
        setMediaType(null);
        setStatus("Idle");
    };

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
                            onClick={startCamera}
                            className={`w-full p-6 rounded-2xl flex items-center justify-between transition-all ${isMonitoring && mediaType === "camera"
                                ? "bg-red-500/10 border border-red-500/50 text-red-500"
                                : "bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20"
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                {isMonitoring && mediaType === "camera" ? <Square className="fill-current" /> : <Camera />}
                                <span className="font-bold">{isMonitoring && mediaType === "camera" ? "Stop Camera" : "Start Camera"}</span>
                            </div>
                        </button>

                        <button
                            onClick={() => fileInputRef.current?.click()}
                            className={`w-full p-6 rounded-2xl flex items-center justify-between transition-all ${isMonitoring && mediaType === "upload"
                                ? "bg-blue-500/20 border border-blue-500/50 text-blue-400 font-bold"
                                : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                                } group`}
                        >
                            <div className="flex items-center gap-4">
                                <Upload className="group-hover:text-cyan-400 transition-colors" />
                                <span className="font-bold">Upload Media</span>
                            </div>
                        </button>

                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileUpload}
                            className="hidden"
                            accept="image/*,video/*"
                        />

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

                        {isMonitoring && (
                            <button
                                onClick={stopMonitoring}
                                className="w-full py-4 rounded-xl border border-white/10 text-gray-500 text-xs font-bold hover:text-white hover:bg-red-500/10 hover:border-red-500/20 transition-all"
                            >
                                Reset Monitoring Engine
                            </button>
                        )}
                    </div>

                    {/* Simulation Display */}
                    <div className="lg:col-span-3">
                        <div
                            ref={containerRef}
                            className="relative aspect-video rounded-3xl bg-black overflow-hidden border border-white/10 shadow-2xl group"
                        >
                            {/* Real Camera Feed */}
                            <video
                                ref={videoRef}
                                autoPlay
                                playsInline
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${mediaType === "camera" ? "opacity-100" : "opacity-0"}`}
                            />

                            {/* Uploaded Media (Image or Video) */}
                            {mediaUrl && (
                                mediaUrl.includes("video") || (fileInputRef.current?.files?.[0]?.type?.includes("video")) ? (
                                    <video
                                        src={mediaUrl}
                                        autoPlay
                                        loop
                                        muted
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                ) : (
                                    <img
                                        src={mediaUrl}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        alt="Uploaded violation source"
                                    />
                                )
                            )}

                            {/* Placeholder Mock Feed (Idle) */}
                            {!isMonitoring && (
                                <div className="absolute inset-0 grayscale opacity-40 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200')] bg-cover bg-center" />
                            )}

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
                                <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                                    {mediaType === "camera" ? "REC: LIVE_FEED" : mediaType === "upload" ? "PROC: FILE_SCAN" : "IDLE: NO_SOURCE"}
                                </span>
                            </div>

                            <div className="absolute bottom-6 right-6 z-20 flex flex-col items-end gap-1">
                                <span className="text-[10px] font-mono text-cyan-400 bg-black/50 px-2 py-1 rounded">
                                    {new Date().toISOString().split('T')[0]} {new Date().toLocaleTimeString()}
                                </span>
                                <span className="text-[10px] font-mono text-white/50">CAM_NODE_{mediaType?.toUpperCase() || "OFFLINE"}</span>
                            </div>

                            {/* Mock Detection Boxes */}
                            {isMonitoring && activeDetections.map((box) => (
                                <motion.div
                                    key={box.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="absolute border-2 z-20 transition-all duration-500"
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
