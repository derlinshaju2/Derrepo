"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Camera, Upload, Play, Square, AlertTriangle, ShieldCheck, Terminal, Monitor } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Demo() {
    const [isMonitoring, setIsMonitoring] = useState(false);
    const [violations, setViolations] = useState(0);
    const [status, setStatus] = useState("Idle");
    const [mediaType, setMediaType] = useState<"camera" | "upload" | null>(null);
    const [mediaUrl, setMediaUrl] = useState<string | null>(null);
    const [activeDetections, setActiveDetections] = useState<any[]>([]);

    const videoRef = useRef<HTMLVideoElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const streamRef = useRef<MediaStream | null>(null);

    useEffect(() => {
        let interval: any;
        if (isMonitoring) {
            interval = window.setInterval(() => {
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
        }
        return () => {
            if (interval) window.clearInterval(interval);
        };
    }, [isMonitoring]);

    const startCamera = async () => {
        try {
            if (streamRef.current) {
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
        setMediaUrl(null);
    };

    return (
        <section id="demo" className="py-24 px-6 bg-white overflow-hidden relative">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest text-cyan-600 mb-2 uppercase"
                    >
                        Try it Out
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        Live Monitoring Demo
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                            <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Terminal className="text-cyan-600" />
                                Control Panel
                            </h4>

                            <div className="grid grid-cols-1 gap-4">
                                <button
                                    onClick={startCamera}
                                    className={`flex items-center justify-between p-4 rounded-xl border transition-all ${mediaType === "camera"
                                        ? "bg-cyan-500 border-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                                        : "bg-white border-slate-200 text-slate-600 hover:border-cyan-500/50"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <Camera className={mediaType === "camera" ? "animate-pulse" : ""} />
                                        <span className="font-bold">Live Camera Feed</span>
                                    </div>
                                    <span className="text-xs uppercase font-bold px-2 py-1 rounded bg-black/10">
                                        {mediaType === "camera" ? "Active" : "Start"}
                                    </span>
                                </button>

                                <div className="relative">
                                    <input
                                        type="file"
                                        onChange={handleFileUpload}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                        accept="image/*,video/*"
                                    />
                                    <div className={`flex items-center justify-between p-4 rounded-xl border border-dashed transition-all ${mediaType === "upload"
                                        ? "bg-cyan-100 border-cyan-500 text-cyan-700"
                                        : "border-slate-300 bg-white text-slate-600 hover:border-cyan-500/50"}`}>
                                        <div className="flex items-center gap-3">
                                            <Upload />
                                            <span className="font-bold">Upload Media</span>
                                        </div>
                                        <span className="text-xs uppercase font-bold text-slate-400">JPG, MP4</span>
                                    </div>
                                </div>
                            </div>

                            <div className={`mt-8 p-6 rounded-2xl border transition-all ${isMonitoring
                                ? "bg-red-50 border-red-200"
                                : "bg-slate-100 border-slate-200"
                                }`}>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-3 h-3 rounded-full ${isMonitoring ? "bg-red-500 animate-ping" : "bg-slate-300"}`} />
                                        <span className={`font-bold ${isMonitoring ? "text-red-600" : "text-slate-500"}`}>
                                            {isMonitoring ? "SYSTEM ACTIVE" : "SYSTEM STANDBY"}
                                        </span>
                                    </div>
                                    <button
                                        onClick={isMonitoring ? stopMonitoring : () => setIsMonitoring(true)}
                                        disabled={!mediaType}
                                        className={`px-6 py-2 rounded-lg font-bold transition-all ${isMonitoring
                                            ? "bg-red-500 text-white shadow-lg shadow-red-500/20"
                                            : "bg-cyan-600 text-white shadow-lg shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                            }`}
                                    >
                                        {isMonitoring ? "Stop" : "Analyze"}
                                    </button>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                                        <div className="text-xs text-slate-400 uppercase font-bold mb-1">Violations</div>
                                        <div className="text-2xl font-bold text-red-500">{violations}</div>
                                    </div>
                                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                                        <div className="text-xs text-slate-400 uppercase font-bold mb-1">FPS</div>
                                        <div className="text-2xl font-bold text-slate-900">{isMonitoring ? "24.5" : "0.0"}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl shadow-slate-900/10">
                            <h5 className="font-bold mb-2 flex items-center gap-2">
                                <ShieldCheck className="text-cyan-400" /> YOLO v8 Ready
                            </h5>
                            <p className="text-xs text-gray-400 leading-relaxed italic">
                                "The system is currently configured with the YOLOv8m weights for balanced performance and accuracy on public surveillance feeds."
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-video w-full rounded-3xl bg-slate-100 border-4 border-white shadow-2xl relative overflow-hidden group">
                            {mediaType === "camera" ? (
                                <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
                            ) : mediaUrl ? (
                                mediaUrl.includes("video") ? (
                                    <video src={mediaUrl} autoPlay loop muted className="w-full h-full object-cover" />
                                ) : (
                                    <img src={mediaUrl} className="w-full h-full object-cover" alt="Feed" />
                                )
                            ) : (
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-300">
                                    <Monitor size={80} className="mb-4 opacity-20" />
                                    <span className="font-bold tracking-widest text-slate-400">NO SIGNAL</span>
                                </div>
                            )}

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
                                        backgroundColor: box.type === "violation" ? "rgba(239, 68, 68, 0.2)" : "rgba(34, 197, 94, 0.2)"
                                    }}
                                >
                                    <div className={`absolute top-0 left-0 px-1 text-[8px] font-bold text-white uppercase ${box.type === "violation" ? "bg-red-500" : "bg-green-500"}`}>
                                        {box.type === "violation" ? "VIOLATION" : "SAFE"}
                                    </div>
                                </motion.div>
                            ))}

                            {!isMonitoring && (
                                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm z-30 flex flex-col items-center justify-center p-6 text-center">
                                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                                        <Play className="text-white fill-current translate-x-0.5" />
                                    </div>
                                    <h5 className="text-white font-bold mb-2">System Standby</h5>
                                    <p className="text-xs text-white/60 max-w-xs">Initialize a media source to start the AI monitoring simulation.</p>
                                </div>
                            )}
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
