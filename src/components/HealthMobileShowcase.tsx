"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Smartphone, Layout, UserCircle, Activity } from "lucide-react";

export default function HealthMobileShowcase() {
    return (
        <section className="py-24 px-6 bg-teal-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-200/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-sm font-bold tracking-widest text-teal-600 mb-2 uppercase"
                    >
                        Mobile First
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-teal-950 mb-6"
                    >
                        Your Health, <br />In Your Pocket
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Left: App Features */}
                    <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
                        {[
                            { title: "Fluid User Journey", desc: "Seamless Splash to Dashboard transition designed for medical urgency.", icon: <Smartphone /> },
                            { title: "Smart Authentication", desc: "Biometric and JWT integrated secure medical login systems.", icon: <UserCircle /> },
                            { title: "Real-time AI Sync", desc: "Dashboard updates in microseconds with local and cloud data syncing.", icon: <Activity /> },
                            { title: "Adaptive UI/UX", desc: "Interface adjusts based on your health urgency levels automatically.", icon: <Layout /> }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-6 p-6 rounded-[2rem] bg-white border border-teal-100 shadow-sm hover:shadow-md transition-all group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all shrink-0">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-teal-950 mb-1">{feature.title}</h4>
                                    <p className="text-teal-800/60 text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: The Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="lg:col-span-7 flex justify-center order-1 lg:order-2"
                    >
                        <div className="relative group">
                            {/* Glow Effect */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-teal-500/20 to-emerald-500/20 rounded-[3rem] blur-2xl group-hover:opacity-75 transition-opacity" />

                            <div className="relative rounded-[3rem] border-[12px] border-teal-950 bg-teal-950 shadow-2xl overflow-hidden w-[320px] h-[640px]">
                                {/* Dynamic App Screenshot Placeholder */}
                                <div className="absolute inset-0 bg-white overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
                                        alt="AI Health App Screens"
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Overlay for better integration */}
                                    <div className="absolute inset-0 bg-teal-900/5 mix-blend-multiply" />
                                </div>

                                {/* Status Bar Mockup */}
                                <div className="absolute top-0 left-0 right-0 h-10 bg-white flex items-center justify-between px-8 z-20">
                                    <span className="text-[10px] font-black">9:41</span>
                                    <div className="flex gap-1">
                                        <div className="w-3 h-3 rounded-full border border-black/10" />
                                        <div className="w-3 h-3 rounded-full bg-teal-500" />
                                    </div>
                                </div>

                                {/* iPhone Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-teal-950 rounded-b-3xl z-30" />
                            </div>

                            {/* Floating Highlight Cards */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-20 bg-white p-6 rounded-3xl shadow-xl border border-teal-50 z-40 hidden md:block"
                            >
                                <div className="text-3xl font-black text-teal-900 mb-1">98%</div>
                                <div className="text-[10px] uppercase font-bold text-teal-400 tracking-widest">Uptime Reliability</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-10 -left-16 bg-teal-900 p-6 rounded-3xl shadow-xl z-40 hidden md:block"
                            >
                                <div className="text-xl font-bold text-white mb-2">Secure Sync</div>
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4].map(i => <div key={i} className="w-6 h-1 rounded-full bg-teal-500/50" />)}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
