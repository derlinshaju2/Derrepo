"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ZoomIn } from "lucide-react";
import Image from "next/image";

interface ProjectsProps {
    onViewProject?: (projectId: string) => void;
}

export default function Projects({ onViewProject }: ProjectsProps) {
    const projects = [
        {
            id: "socialsense",
            title: "Social Distancing using Image Processing",
            description: "Real-time computer vision system utilizing surveillance feeds to detect and alert social distancing violations. Built for public safety protocols.",
            tech: ["OpenCV", "Python", "YOLOv8"],
            color: "from-cyan-500 to-blue-500",
            image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: "healthguard",
            title: "AI-Driven Health Monitoring & Proactive Wellness Management System",
            description: "AI-driven health monitoring system providing disease prediction, BMI analysis, and real-time yoga pose detection for proactive wellness.",
            tech: ["TensorFlow", "MediaPipe", "React", "Python"],
            color: "from-teal-500 to-emerald-600",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
        }
    ];

    return (
        <section id="projects" className="py-32 relative">
            <div className="absolute left-0 bottom-0 w-full h-[500px] bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />

            <div className="max-w-md mx-auto px-4 md:max-w-7xl md:px-6 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 mb-6">
                        Featured Work
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                        Showcasing innovative solutions in AI and Machine Learning.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="group relative flex flex-col p-4 md:p-6 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-3xl shadow-2xl transition-all duration-500 h-full"
                        >
                            <div className="grid grid-rows-[auto_1fr_auto] gap-4 h-full">
                                <div className="relative h-64 w-full rounded-2xl overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />

                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-sm z-20">
                                        <button
                                            onClick={() => (project.id === "socialsense" || project.id === "healthguard") && onViewProject?.(project.id as any)}
                                            className="px-6 py-2 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-white/20 transition-all transform translate-y-4 group-hover:translate-y-0"
                                        >
                                            View AI System
                                        </button>
                                    </div>
                                </div>

                                <div className="relative flex flex-col gap-4">
                                    <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${project.color} blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity pointer-events-none`} />

                                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-cyan-200 whitespace-nowrap">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 border-t border-white/10 mt-auto">
                                    <a
                                        href="https://github.com/derlinshaju2/Derrepo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-cyan-400/80 hover:text-cyan-400 transition-all font-medium py-1"
                                    >
                                        <Github size={18} />
                                        <span>Source Code</span>
                                    </a>
                                    <button
                                        onClick={() => (project.id === "socialsense" || project.id === "healthguard") && onViewProject?.(project.id as any)}
                                        className="flex items-center gap-2 text-sm font-bold text-white bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 px-4 py-2 rounded-xl transition-all w-full sm:w-auto justify-center"
                                    >
                                        Live Demo <ExternalLink size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
