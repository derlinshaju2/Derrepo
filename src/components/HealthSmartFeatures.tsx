"use client";

import { motion } from "framer-motion";
import { Bell, Droplets, Footprints, FileText, UserPlus, Clock, CheckCircle2 } from "lucide-react";

const smartFeatures = [
    {
        title: "Medication Reminders",
        description: "Intelligent scheduling and smart notifications for your medicinal prescriptions.",
        icon: <Bell className="w-6 h-6" />,
        color: "blue",
        metrics: ["2 Poses Pending", "Next: 4:00 PM"]
    },
    {
        title: "Hydration Tracker",
        description: "Monitor daily water intake with automated reminders based on activity levels.",
        icon: <Droplets className="w-6 h-6" />,
        color: "teal",
        metrics: ["1.5L / 2.5L", "60% Daily Target"]
    },
    {
        title: "Pedometer AI",
        description: "Precision step counting using device sensors with trajectory analysis.",
        icon: <Footprints className="w-6 h-6" />,
        color: "emerald",
        metrics: ["8,432 Steps", "Burned 320 kcal"]
    },
    {
        title: "Smart PDF Reports",
        description: "Generate comprehensive medical reports for doctors in standardized formats.",
        icon: <FileText className="w-6 h-6" />,
        color: "indigo",
        metrics: ["Export PDF", "Last: Yesterday"]
    }
];

export default function HealthSmartFeatures() {
    return (
        <section className="py-24 px-6 bg-white relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-sm font-bold tracking-widest text-teal-600 mb-2 uppercase"
                        >
                            Smart Utilities
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold text-teal-950 mb-6"
                        >
                            Proactive Wellness <br />Tools
                        </motion.h3>
                    </div>
                    <p className="text-teal-800/60 lg:text-lg leading-relaxed">
                        Beyond clinical analysis, our system provides a suite of daily life utilities designed to keep you on track with your health goals effortlessly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {smartFeatures.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="p-8 rounded-[2rem] bg-teal-50/50 border border-teal-100 hover:bg-white hover:border-teal-200 hover:shadow-xl hover:shadow-teal-500/10 transition-all group"
                        >
                            <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center transition-colors ${feature.color === 'blue' ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' :
                                    feature.color === 'teal' ? 'bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white' :
                                        feature.color === 'emerald' ? 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white' :
                                            'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'
                                }`}>
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-teal-950 mb-3">{feature.title}</h4>
                            <p className="text-sm text-teal-800/60 leading-relaxed mb-6">
                                {feature.description}
                            </p>

                            <div className="space-y-2">
                                {feature.metrics.map((metric, midx) => (
                                    <div key={midx} className="flex items-center gap-2 text-[10px] font-bold text-teal-500 uppercase tracking-widest">
                                        <div className="w-1 h-1 rounded-full bg-teal-400" />
                                        {metric}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Integration Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-12 p-8 rounded-[2.5rem] bg-teal-950 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-teal-800/50"
                >
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                            <UserPlus size={32} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-1">Doctor Consultation</h4>
                            <p className="text-teal-400/60 text-sm">Directly share your health insights with certified medical professionals.</p>
                        </div>
                    </div>
                    <button className="px-8 py-4 rounded-xl bg-teal-500 text-teal-950 font-bold hover:bg-teal-400 transition-all whitespace-nowrap">
                        Book Appointment
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
