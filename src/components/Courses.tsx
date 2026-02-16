"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock } from "lucide-react";

const courses = [
    { name: "AI for Future", issuer: "Let’s Code AI", duration: "4 Months", icon: <BookOpen className="w-8 h-8 text-cyan-400" /> },
    { name: "UI/UX Design", issuer: "Avodha", duration: "6 Months", icon: <BookOpen className="w-8 h-8 text-purple-400" /> },
];

export default function Courses() {
    return (
        <section id="courses" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0B1120] to-[#0F172A]">
            <div className="absolute top-1/2 left-0 w-full h-[500px] bg-gradient-to-r from-blue-900/5 via-purple-900/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-purple-400 uppercase tracking-widest text-sm font-bold mb-2 block">Ongoing Learning</span>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                        Specialized <span className="text-white">Courses</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, borderColor: "rgba(147, 51, 234, 0.4)" }}
                            className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] p-8 rounded-3xl hover:shadow-[0_0_30px_rgba(147,51,234,0.15)] transition-all duration-300 relative overflow-hidden group"
                        >
                            {/* Animated Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                        {course.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                                        {course.name}
                                    </h3>
                                    <p className="text-sm text-gray-400 font-medium">{course.issuer}</p>
                                </div>

                                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 pt-6 border-t border-white/5 uppercase tracking-wider">
                                    <Clock size={14} className="text-purple-400" /> Duration: <span className="text-white">{course.duration}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
