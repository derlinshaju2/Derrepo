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
            title: "Social Distancing Monitor",
            description: "Real-time computer vision system utilizing surveillance feeds to detect and alert social distancing violations. Built for public safety protocols.",
            tech: ["OpenCV", "Python", "YOLOv8"],
            color: "from-cyan-500 to-blue-500",
            image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: "health-ai",
            title: "AI Health Assistant",
            description: "Predictive health analytics platform tracking vital signs to forecast potential risks and generate personalized wellness plans.",
            tech: ["TensorFlow", "React", "Node.js"],
            color: "from-blue-500 to-purple-500",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
        }
    ];

    return (
        <section id="projects" className="py-32 relative bg-gray-50/50">
            <div className="absolute left-0 bottom-0 w-full h-[500px] bg-gradient-to-t from-cyan-50/50 to-transparent pointer-events-none" />

            <div className="max-w-md mx-auto px-4 md:max-w-7xl md:px-6 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">Work</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-medium">
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
                            className="group relative flex flex-col p-4 md:p-6 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-200/50 transition-all duration-500 h-full"
                        >
                            <div className="grid grid-rows-[auto_1fr_auto] gap-4 h-full">
                                <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-inner">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors duration-500 z-10" />

                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/40 backdrop-blur-md z-20">
                                        <button
                                            onClick={() => project.id === "socialsense" && onViewProject?.("socialsense")}
                                            className="px-6 py-2 rounded-full bg-cyan-600 text-white font-bold shadow-lg shadow-cyan-500/30 hover:bg-cyan-700 transition-all transform translate-y-4 group-hover:translate-y-0"
                                        >
                                            {project.id === "socialsense" ? "View AI System" : "View Case Study"}
                                        </button>
                                    </div>
                                </div>

                                <div className="relative flex flex-col gap-4">
                                    <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${project.color} blur-[60px] opacity-10 transition-opacity pointer-events-none`} />

                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-cyan-700 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 border border-gray-200 text-gray-700 whitespace-nowrap">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 border-t border-gray-100 mt-auto">
                                    <a
                                        href="https://github.com/derlinshaju2/Derrepo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-600 transition-all font-semibold py-1"
                                    >
                                        <Github size={18} />
                                        <span>Source Code</span>
                                    </a>
                                    <button
                                        onClick={() => project.id === "socialsense" && onViewProject?.("socialsense")}
                                        className="flex items-center gap-2 text-sm font-bold text-cyan-600 bg-cyan-50 hover:bg-cyan-100 border border-cyan-100 px-4 py-2 rounded-xl transition-all w-full sm:w-auto justify-center"
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
