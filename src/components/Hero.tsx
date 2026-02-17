"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, ArrowRight, Download } from "lucide-react";

const roles = [
    "Computer Vision Analysis",
    "Real-Time Detection",
    "Automated Alerting",
    "Social Distancing Monitoring"
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const { scrollY } = useScroll();

    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    useEffect(() => {
        let timeout: any;
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            if (displayText.length > 0) {
                timeout = window.setTimeout(() => {
                    setDisplayText(currentRole.substring(0, displayText.length - 1));
                }, 30);
            } else {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        } else {
            if (displayText.length < currentRole.length) {
                timeout = window.setTimeout(() => {
                    setDisplayText(currentRole.substring(0, displayText.length + 1));
                }, 100);
            } else {
                timeout = window.setTimeout(() => {
                    setIsDeleting(true);
                }, 2000);
            }
        }

        return () => {
            if (timeout) window.clearTimeout(timeout);
        };
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section id="home" className="relative w-full min-h-[90vh] pt-32 pb-20 px-4 flex items-center justify-center overflow-hidden">
            {/* Dynamic Background Elements */}
            <motion.div
                style={{ y: y1, x: -50 }}
                className="absolute top-20 left-10 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"
            />
            <motion.div
                style={{ y: y2, x: 50 }}
                className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] mix-blend-screen"
            />

            {/* Main Content Container */}
            <div className="max-w-md mx-auto md:max-w-7xl md:px-6 grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-6 md:gap-x-6 md:gap-y-12 items-center relative z-10 w-full">
                {/* Left Content - Typography & CTA */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="col-span-1 md:col-span-8 lg:col-span-7 flex flex-col justify-center gap-4 md:gap-8 z-10 place-items-center text-center md:place-items-start md:text-left pt-10 md:pt-0"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex max-w-max items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md mb-2 md:mb-0"
                    >
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        <span className="text-[10px] md:text-sm font-medium text-cyan-300 uppercase tracking-wider">Live Monitoring Active</span>
                    </motion.div>

                    <h1 className="text-[28px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.2] tracking-tight text-white line-clamp-3">
                        AI-Based
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x pb-1 md:pb-2">
                            Social Distancing
                        </span>
                        Monitoring
                    </h1>

                    <div className="h-8 md:h-16 flex items-center justify-center md:justify-start -mt-2 md:mt-0">
                        <span className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light">
                            Powered by <span className="text-cyan-400 font-semibold border-r-2 border-cyan-400 pr-1 animate-pulse">{displayText}</span>
                        </span>
                    </div>

                    <p className="text-sm sm:text-lg text-gray-400 max-w-2xl leading-relaxed px-2 md:px-0">
                        Real-time human detection and distance estimation using Deep Learning. Automate safety compliance across malls, airports, and hospitals with intelligent alerts.
                    </p>

                    <div className="grid grid-cols-1 gap-3 w-full sm:w-auto sm:flex sm:flex-row pt-2 md:pt-4 px-4 md:px-0">
                        <a href="#demo" className="group relative px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm md:text-base font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all overflow-hidden text-center w-full sm:w-auto min-h-[44px] flex items-center justify-center">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                View System <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </a>

                        <a href="#contact" className="group px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white text-sm md:text-base font-semibold hover:bg-white/10 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2 text-center w-full sm:w-auto min-h-[44px]">
                            Request Demo
                        </a>
                    </div>
                </motion.div>

                {/* Right Visual - 3D Orb Simulation - Hidden on mobile, visible on desktop */}
                <div className="hidden md:flex col-span-4 md:col-span-8 lg:col-span-5 relative h-[500px] lg:h-[600px] items-center justify-center lg:justify-end pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative w-full max-w-[500px] aspect-square flex items-center justify-center"
                    >
                        {/* Rotating Rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-white/5 border-t-cyan-500/50 shadow-[0_0_50px_rgba(6,182,212,0.1)]"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-8 rounded-full border border-white/5 border-b-purple-500/50 shadow-[0_0_50px_rgba(147,51,234,0.1)]"
                        />
                        <motion.div
                            animate={{ rotate: 180 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-16 rounded-full border border-white/5 border-l-blue-500/50 shadow-[0_0_50px_rgba(59,130,246,0.1)]"
                        />

                        {/* Central Core */}
                        <div className="absolute inset-0 m-auto w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 blur-3xl opacity-40 animate-pulse"></div>
                        <div className="relative w-32 h-32 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform duration-500 z-10">
                            <span className="text-5xl">🤖</span>
                        </div>

                        {/* Floating Cards - Positioned absolutely relative to the orb container */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 right-0 lg:-right-10 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl shadow-lg z-20"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold text-xs">98%</div>
                                <div>
                                    <div className="text-[10px] text-gray-300 uppercase tracking-widest">Accuracy</div>
                                    <div className="text-sm text-white font-bold">High Precision</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 left-0 lg:-left-10 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl shadow-lg z-20"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">⚡</div>
                                <div>
                                    <div className="text-[10px] text-gray-300 uppercase tracking-widest">Speed</div>
                                    <div className="text-sm text-white font-bold">Optimized</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

            </div>

            {/* Scroll Down Indicator */}
            <motion.a
                style={{ opacity }}
                href="#about"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white flex flex-col items-center gap-2 group cursor-pointer"
            >
                <span className="text-xs tracking-widest uppercase opacity-50 group-hover:opacity-100 transition-opacity">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </motion.a>
        </section>
    );
}
