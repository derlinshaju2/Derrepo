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
                        Have a project in mind or just want to discuss the latest in AI? I'm always open to new opportunities.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10 flex items-center gap-6">
                                <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">Email Me</h4>
                                    <a href="mailto:derlinshaju2@gmail.com" className="text-gray-400 hover:text-cyan-300 transition-colors">derlinshaju2@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10 flex items-center gap-6">
                                <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">Call Me</h4>
                                    <a href="tel:+917561874672" className="text-gray-400 hover:text-purple-300 transition-colors">+91 75618 74672</a>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10 flex items-center gap-6">
                                <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                                    <Linkedin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">Networking</h4>
                                    <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors">Connect on LinkedIn</a>
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
                                    placeholder="Your Name"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 text-base focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300"
                                />
                                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 group-focus-within:w-full transition-all duration-500" />
                            </div>

                            <div className="group relative">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 text-base focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300"
                                />
                                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 group-focus-within:w-full transition-all duration-500" />
                            </div>

                            <div className="group relative">
                                <textarea
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 text-base focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
                                ></textarea>
                                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 group-focus-within:w-full transition-all duration-500" />
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-4 group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 p-[1px] shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 border-none"
                            >
                                <span className="relative flex items-center justify-center gap-3 bg-[#0B1120] hover:bg-transparent text-white w-full h-full px-6 py-4 rounded-xl transition-all duration-300">
                                    <span className="font-bold tracking-wide">Send Message</span>
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </span>
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
