"use client";

import { motion } from "framer-motion";
import {
    Code,
    Brain,
    Database,
    Terminal,
    BarChart,
    Users,
    Lightbulb,
    Clock,
    BookOpen,
} from "lucide-react";

export default function Skills() {
    const technicalSkills = [
        { name: "Python", level: 95, icon: <Code />, color: "from-blue-400 to-blue-600" },
        { name: "Machine Learning", level: 90, icon: <Brain />, color: "from-purple-400 to-purple-600" },
        { name: "Deep Learning", level: 85, icon: <Brain />, color: "from-pink-400 to-pink-600" },
        { name: "Data Science", level: 88, icon: <BarChart />, color: "from-cyan-400 to-cyan-600" },
        { name: "C Programming", level: 80, icon: <Code />, color: "from-green-400 to-green-600" },
        { name: "MySQL", level: 85, icon: <Database />, color: "from-yellow-400 to-orange-600" },
        { name: "R Programming", level: 75, icon: <Terminal />, color: "from-red-400 to-red-600" },
    ];

    const softSkills = [
        { name: "Problem Solving", icon: <Lightbulb /> },
        { name: "Communication", icon: <Users /> },
        { name: "Leadership", icon: <Users /> },
        { name: "Teamwork", icon: <Users /> },
        { name: "Quick Learner", icon: <BookOpen /> },
        { name: "Time Management", icon: <Clock /> },
    ];

    return (
        <section id="skills" className="py-32 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

            <div className="max-w-md mx-auto px-4 md:max-w-7xl md:px-6 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-20"
                >
                    <span className="text-cyan-400 uppercase tracking-widest text-sm font-semibold mb-2 block">My Expertise</span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        Skills & <span className="text-cyan-400">Stack</span>
                    </h2>
                </motion.div>

                {/* Technical Skills - Floating Capsules */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mb-16 md:mb-24">
                    {technicalSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 50 }}
                            whileHover={{ scale: 1.02 }}
                            className="group relative p-6 rounded-3xl backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] shadow-2xl overflow-hidden hover:shadow-cyan-500/20 transition-all duration-500 w-full"
                        >
                            {/* Inner Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            <div className="relative z-10 flex items-center justify-between mb-4">
                                <div className={`p-3 rounded-2xl bg-gradient-to-br ${skill.color} text-white shadow-lg`}>
                                    {skill.icon}
                                </div>
                                <span className="text-2xl font-bold text-white/90">{skill.level}%</span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-white transition-colors">{skill.name}</h3>

                            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                                    className={`h-full bg-gradient-to-r ${skill.color} shadow-[0_0_10px_currentColor]`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Soft Skills - Glass Pills */}
                <div className="flex flex-wrap gap-3 justify-center md:gap-6">
                    {softSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                            className="flex items-center gap-2 md:gap-3 px-4 py-3 md:px-6 md:py-3 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md cursor-default hover:border-cyan-500/30 transition-all shadow-lg min-w-[max-content]"
                        >
                            <span className="text-cyan-400 scale-90 md:scale-100">{skill.icon}</span>
                            <span className="text-gray-300 font-medium text-sm md:text-base whitespace-nowrap">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
