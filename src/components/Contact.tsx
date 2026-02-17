"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-t from-[#0B1120] to-[#0F172A]">
            {/* Decorative Blobs */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] mix-blend-screen animate-pulse pointer-events-none" />
            <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-2 block">Connect</span>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
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
                        <div className="glass-card p-6 flex items-center gap-6">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Email Us</h4>
                                <a href="mailto:support@socialsense.ai" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">info@socialsense.ai</a>
                            </div>
                        </div>

                        <div className="glass-card p-6 flex items-center gap-6">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                                <Linkedin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Project Repository</h4>
                                <a href="https://github.com/derrepo" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">github.com/socialsense-ai</a>
                            </div>
                        </div>

                        <div className="glass-card p-8 border border-white/5">
                            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                                <Users className="text-cyan-400 w-5 h-5" /> Development Team
                            </h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-white font-medium">Derlin Shaju</span>
                                    <span className="text-gray-500">Lead AI Developer</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-white font-medium">Project Guide</span>
                                    <span className="text-gray-500">Computer Vision Expert</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Glass Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-10 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] relative z-20"
                    >
                        <div className="space-y-6">
                            <div className="group relative">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 text-base focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300"
                                />
                            </div>

                            <div className="group relative">
                                <input
                                    type="email"
                                    placeholder="Work Email"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 text-base focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300"
                                />
                            </div>

                            <div className="group relative">
                                <textarea
                                    rows={4}
                                    placeholder="How can we help you with social distancing monitoring?"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 text-base focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 active:scale-95 transition-all"
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
