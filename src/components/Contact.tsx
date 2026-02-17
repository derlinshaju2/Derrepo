"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send, Users } from "lucide-react";

interface ContactProps {
    currentView?: "portfolio" | "socialsense";
}

export default function Contact({ currentView = "portfolio" }: ContactProps) {
    const isLight = currentView === "socialsense";

    return (
        <section
            id="contact"
            className={`py-24 relative overflow-hidden transition-colors duration-700 ${isLight ? "bg-slate-50" : "bg-gradient-to-t from-[#0B1120] to-[#0F172A]"
                }`}
        >
            {/* Decorative Blobs */}
            {!isLight && (
                <>
                    <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] mix-blend-screen animate-pulse pointer-events-none" />
                    <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
                </>
            )}

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className={`font-bold uppercase tracking-widest text-sm mb-2 block ${isLight ? "text-cyan-600" : "text-cyan-400"}`}>Connect</span>
                    <h2 className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${isLight ? "from-cyan-600 to-blue-700" : "from-cyan-400 to-blue-500"} mb-6`}>
                        Get In Touch
                    </h2>
                    <p className={`max-w-xl mx-auto ${isLight ? "text-slate-500" : "text-gray-400"}`}>
                        Interested in implementing the SocialSense AI system? Contact our team for a full demonstration or deployment consultation.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className={`p-6 rounded-3xl flex items-center gap-6 border transition-all ${isLight ? "bg-white border-slate-200 shadow-sm" : "glass-card border-white/5"
                            }`}>
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isLight ? "bg-cyan-50 text-cyan-600" : "bg-cyan-500/10 text-cyan-400"}`}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className={`font-bold ${isLight ? "text-slate-900" : "text-white"}`}>Email Us</h4>
                                <a href="mailto:info@socialsense.ai" className={`text-sm transition-colors ${isLight ? "text-slate-500 hover:text-cyan-600" : "text-gray-400 hover:text-cyan-400"}`}>info@socialsense.ai</a>
                            </div>
                        </div>

                        <div className={`p-6 rounded-3xl flex items-center gap-6 border transition-all ${isLight ? "bg-white border-slate-200 shadow-sm" : "glass-card border-white/5"
                            }`}>
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isLight ? "bg-blue-50 text-blue-600" : "bg-blue-500/10 text-blue-400"}`}>
                                <Linkedin size={24} />
                            </div>
                            <div>
                                <h4 className={`font-bold ${isLight ? "text-slate-900" : "text-white"}`}>Project Repository</h4>
                                <a href="https://github.com/derrepo" className={`text-sm transition-colors ${isLight ? "text-slate-500 hover:text-blue-600" : "text-gray-400 hover:text-blue-400"}`}>github.com/socialsense-ai</a>
                            </div>
                        </div>

                        <div className={`p-8 rounded-3xl border transition-all ${isLight ? "bg-white border-slate-200 shadow-sm" : "glass-card border-white/5"
                            }`}>
                            <h4 className={`font-bold mb-6 flex items-center gap-2 ${isLight ? "text-slate-900" : "text-white"}`}>
                                <Users className={`w-4 h-4 ${isLight ? "text-cyan-600" : "text-cyan-400"}`} /> Development Team
                            </h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className={`font-medium ${isLight ? "text-slate-800" : "text-white"}`}>Derlin Shaju</span>
                                    <span className="text-slate-500">Lead AI Developer</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className={`font-medium ${isLight ? "text-slate-800" : "text-white"}`}>Project Guide</span>
                                    <span className="text-slate-500">Computer Vision Expert</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`p-8 md:p-10 rounded-[2.5rem] border transition-all ${isLight ? "bg-white border-slate-200 shadow-xl" : "bg-white/[0.03] backdrop-blur-2xl border-white/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]"
                            } relative z-20`}
                    >
                        <div className="space-y-6">
                            <div className="group relative">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className={`w-full rounded-xl px-6 py-4 text-base transition-all duration-300 outline-none border ${isLight
                                            ? "bg-slate-50 border-slate-200 text-slate-900 focus:border-cyan-600"
                                            : "bg-white/5 border-white/10 text-white focus:border-cyan-500/50"
                                        }`}
                                />
                            </div>

                            <div className="group relative">
                                <input
                                    type="email"
                                    placeholder="Work Email"
                                    className={`w-full rounded-xl px-6 py-4 text-base transition-all duration-300 outline-none border ${isLight
                                            ? "bg-slate-50 border-slate-200 text-slate-900 focus:border-cyan-600"
                                            : "bg-white/5 border-white/10 text-white focus:border-cyan-500/50"
                                        }`}
                                />
                            </div>

                            <div className="group relative">
                                <textarea
                                    rows={4}
                                    placeholder="How can we help you?"
                                    className={`w-full rounded-xl px-6 py-4 text-base transition-all duration-300 resize-none outline-none border ${isLight
                                            ? "bg-slate-50 border-slate-200 text-slate-900 focus:border-cyan-600"
                                            : "bg-white/5 border-white/10 text-white focus:border-cyan-500/50"
                                        }`}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold shadow-lg shadow-cyan-600/20 hover:shadow-cyan-600/40 active:scale-95 transition-all"
                            >
                                Request Consultation
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
