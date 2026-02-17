"use client";

import { motion } from "framer-motion";
import { Camera, RefreshCw, CheckCircle, Timer, AlertCircle, Info } from "lucide-react";
import { useState } from "react";

const poses = [
    { name: "Tree Pose", accuracy: 92, holdTime: "30s", instructions: "Balance on one leg, place foot on inner thigh." },
    { name: "Warrior II", accuracy: 0, holdTime: "45s", instructions: "Deep lunge, arms parallel to ground." },
    { name: "Down Dog", accuracy: 0, holdTime: "60s", instructions: "V-shape with body, focus on spine alignment." }
];

export default function YogaVision() {
    const [isCameraActive, setIsCameraActive] = useState(false);

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
                                <div className="absolute inset-0 bg-teal-900/10 flex items-center justify-center">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        className="text-teal-500 opacity-50"
                                    >
                                        <RefreshCw size={48} />
                                    </motion.div>

                                    {/* Mock Skeletal Overlay */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-teal-400 opacity-60" viewBox="0 0 100 100">
                                        <line x1="50" y1="20" x2="50" y2="50" strokeWidth="1" />
                                        <line x1="50" y1="50" x2="30" y2="80" strokeWidth="1" />
                                        <line x1="50" y1="50" x2="70" y2="80" strokeWidth="1" />
                                        <line x1="30" y1="30" x2="70" y2="30" strokeWidth="1" />
                                        <circle cx="50" cy="20" r="2" fill="currentColor" />
                                    </svg>
                                </div>
                            )}

                            {/* HUD Overlays */}
                            {isCameraActive && (
                                <>
                                    <div className="absolute top-6 left-6 flex gap-4">
                                        <div className="px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Live Feed</span>
                                        </div>
                                        <div className="px-4 py-2 rounded-xl bg-teal-500/20 backdrop-blur-md border border-teal-500/50 flex items-center gap-2">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-teal-400">MediaPipe Active</span>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
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
                                                <div className="text-2xl font-black">94%</div>
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
