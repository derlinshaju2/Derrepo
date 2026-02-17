"use client";

import { motion } from "framer-motion";
import { Camera, RefreshCw, CheckCircle, Timer, AlertCircle, Info } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const poses = [
    { name: "Tree Pose", accuracy: 92, holdTime: "30s", instructions: "Balance on one leg, place foot on inner thigh." },
    { name: "Warrior II", accuracy: 0, holdTime: "45s", instructions: "Deep lunge, arms parallel to ground." },
    { name: "Down Dog", accuracy: 0, holdTime: "60s", instructions: "V-shape with body, focus on spine alignment." }
];

export default function YogaVision() {
    const [isCameraActive, setIsCameraActive] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [poseMatch, setPoseMatch] = useState(94);

    useEffect(() => {
        let stream: MediaStream | null = null;
        let animationId: number;

        const startCamera = async () => {
            try {
                stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
                setIsCameraActive(true);
                drawSkeletalTracking();
            } catch (err) {
                console.error("Error accessing camera:", err);
                setIsCameraActive(false);
            }
        };

        const drawSkeletalTracking = () => {
            if (!canvasRef.current || !videoRef.current) return;
            const ctx = canvasRef.current.getContext("2d");
            if (!ctx) return;

            const animate = () => {
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

                // Draw mock skeletal points that fluctuate slightly to simulate AI tracking
                const time = Date.now() / 1000;
                const points = [
                    { x: 50 + Math.sin(time) * 2, y: 20 + Math.cos(time) * 1 }, // Head
                    { x: 50, y: 35 }, // Neck
                    { x: 35 + Math.sin(time * 0.5) * 2, y: 35 }, // L Shoulder
                    { x: 65 - Math.sin(time * 0.5) * 2, y: 35 }, // R Shoulder
                    { x: 50, y: 60 }, // Hip
                    { x: 35, y: 85 }, // L Foot
                    { x: 65, y: 85 }, // R Foot
                ];

                ctx.strokeStyle = "#14b8a6";
                ctx.lineWidth = 3;
                ctx.lineCap = "round";
                ctx.beginPath();

                // Draw connecting lines
                ctx.moveTo(points[0].x * 3.2, points[0].y * 1.8);
                ctx.lineTo(points[1].x * 3.2, points[1].y * 1.8);
                ctx.lineTo(points[2].x * 3.2, points[2].y * 1.8);
                ctx.moveTo(points[1].x * 3.2, points[1].y * 1.8);
                ctx.lineTo(points[3].x * 3.2, points[3].y * 1.8);
                ctx.moveTo(points[1].x * 3.2, points[1].y * 1.8);
                ctx.lineTo(points[4].x * 3.2, points[4].y * 1.8);
                ctx.lineTo(points[5].x * 3.2, points[5].y * 1.8);
                ctx.moveTo(points[4].x * 3.2, points[4].y * 1.8);
                ctx.lineTo(points[6].x * 3.2, points[6].y * 1.8);
                ctx.stroke();

                // Draw joints
                points.forEach(p => {
                    ctx.fillStyle = "#2dd4bf";
                    ctx.beginPath();
                    ctx.arc(p.x * 3.2, p.y * 1.8, 4, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = "#14b8a6";
                });

                setPoseMatch(prev => Math.min(100, Math.max(90, prev + (Math.random() - 0.5))));
                animationId = requestAnimationFrame(animate);
            };

            animate();
        };

        if (isCameraActive) {
            startCamera();
        }

        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
            cancelAnimationFrame(animationId);
        };
    }, [isCameraActive]);

    return (
        <section id="yoga" className="py-24 px-6 bg-teal-950 text-white relative overflow-hidden">
            {/* Dark medical tech background grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at center, #14b8a6 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-sm font-bold tracking-[0.3em] text-teal-400 mb-2 uppercase"
                    >
                        Vision Module
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Yoga Pose Detection
                    </motion.h3>
                    <p className="text-teal-200/50 max-w-2xl mx-auto font-medium">
                        Real-time body tracking using MediaPipe. Correct your posture and hold poses with live AI feedback.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Left: Camera Feed */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="relative aspect-video rounded-[2.5rem] bg-black/40 border-4 border-teal-900 overflow-hidden shadow-2xl flex items-center justify-center">
                            {!isCameraActive ? (
                                <div className="text-center space-y-8 p-12">
                                    <div className="w-24 h-24 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 mx-auto animate-pulse">
                                        <Camera className="w-12 h-12" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-2xl font-bold">AI Vision Ready</h4>
                                        <p className="text-teal-400/60 max-w-sm mx-auto text-sm">Enable your camera to start the pose estimation module and skeletal tracking.</p>
                                    </div>
                                    <button
                                        onClick={() => setIsCameraActive(true)}
                                        className="px-10 py-4 rounded-2xl bg-teal-500 text-teal-950 font-black uppercase text-sm tracking-widest hover:bg-teal-400 transition-all shadow-xl shadow-teal-500/20"
                                    >
                                        Initialize Camera
                                    </button>
                                </div>
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <video
                                        ref={videoRef}
                                        autoPlay
                                        playsInline
                                        muted
                                        className="w-full h-full object-cover scale-x-[-1]"
                                    />
                                    <canvas
                                        ref={canvasRef}
                                        width={320}
                                        height={180}
                                        className="absolute inset-0 w-full h-full z-10 scale-x-[-1]"
                                    />

                                    <div className="absolute inset-0 bg-teal-900/10 pointer-events-none" />
                                </div>
                            )}

                            {/* HUD Overlays */}
                            {isCameraActive && (
                                <>
                                    <div className="absolute top-6 left-6 flex gap-4 z-20">
                                        <div className="px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Live Feed</span>
                                        </div>
                                        <div className="px-4 py-2 rounded-xl bg-teal-500/20 backdrop-blur-md border border-teal-500/50 flex items-center gap-2">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-teal-400">MediaPipe Active</span>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-20">
                                        <div className="p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 max-w-xs">
                                            <div className="flex items-center gap-2 mb-2 text-teal-400">
                                                <Info size={14} />
                                                <span className="text-[10px] font-black uppercase tracking-widest">Correction</span>
                                            </div>
                                            <p className="text-xs text-teal-100/70 font-medium">Keep your spine upright and focus on balancing your core weight distribution.</p>
                                        </div>

                                        <div className="flex flex-col items-end gap-3">
                                            <div className="p-4 rounded-2xl bg-teal-500 text-teal-950 flex flex-col items-center min-w-[100px]">
                                                <Timer size={20} className="mb-1" />
                                                <span className="text-2xl font-black">22s</span>
                                            </div>
                                            <div className="p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 text-right">
                                                <div className="text-[10px] font-black uppercase tracking-widest text-teal-400 mb-1">Pose Match</div>
                                                <div className="text-2xl font-black">{poseMatch.toFixed(0)}%</div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Right: Pose List & History */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md space-y-8">
                            <h4 className="text-xl font-bold flex items-center gap-3">
                                <CheckCircle className="text-teal-400" /> Goal: Tree Pose
                            </h4>

                            <div className="space-y-4">
                                {poses.map((pose, i) => (
                                    <div key={i} className={`p-4 rounded-2xl border transition-all ${i === 0 ? "bg-teal-500/10 border-teal-500/50" : "bg-white/5 border-white/5 opacity-50"
                                        }`}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-bold text-sm">{pose.name}</span>
                                            {pose.accuracy > 0 && <span className="text-[10px] font-black text-teal-400">{pose.accuracy}% Acc.</span>}
                                        </div>
                                        <p className="text-[10px] text-teal-200/40 font-medium line-clamp-2">{pose.instructions}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-white/5">
                                <div className="flex items-center gap-3 text-amber-400 mb-4">
                                    <AlertCircle size={16} />
                                    <span className="text-xs font-bold uppercase tracking-wider">Safety Tip</span>
                                </div>
                                <p className="text-[10px] text-teal-200/30 leading-relaxed italic">
                                    "Ensure your environment is flat and non-slip. Always consult a professional for complex yogic maneuvers."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
