"use client";

import { motion } from "framer-motion";
import { Activity, Shield, AlertTriangle, CheckCircle2, Info } from "lucide-react";

const risks = [
    {
        category: "Metabolic",
        diseases: [
            { name: "Diabetes Type 2", risk: 25, level: "Low", color: "bg-emerald-500", icon: "🍬" },
            { name: "Obesity Risk", risk: 40, level: "Medium", color: "bg-amber-500", icon: "⚖️" }
        ]
    },
    {
        category: "Cardiovascular",
        diseases: [
            { name: "Hypertension", risk: 65, level: "High", color: "bg-orange-500", icon: "❤️" },
            { name: "Coronary Heart Disease", risk: 15, level: "Low", color: "bg-emerald-500", icon: "🫀" }
        ]
    },
    {
        category: "Organ & Vitality",
        diseases: [
            { name: "Kidney Function", risk: 10, level: "Optimal", color: "bg-teal-500", icon: "💧" },
            { name: "Anemia Risk", risk: 30, level: "Low", color: "bg-emerald-500", icon: "🩸" }
        ]
    }
];

export default function DiseasePrediction() {
    return (
        <section id="predictor" className="py-24 px-6 bg-teal-50/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-sm font-bold tracking-widest text-teal-600 mb-2 uppercase"
                    >
                        AI Analysis
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-teal-950 mb-6"
                    >
                        Disease Risk Prediction
                    </motion.h3>
                    <div className="flex items-center justify-center gap-2 text-teal-700/60 mb-8 p-4 rounded-2xl bg-white/50 border border-teal-100 max-w-2xl mx-auto">
                        <Shield className="w-5 h-5 text-teal-500" />
                        <span className="text-sm">Risk levels calculated using clinical-grade ML algorithms based on multi-variate analysis.</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {risks.map((group, gIdx) => (
                        <div key={gIdx} className="space-y-6">
                            <h4 className="text-xl font-bold text-teal-900 border-l-4 border-teal-500 pl-4">{group.category}</h4>
                            <div className="space-y-4">
                                {group.diseases.map((disease, dIdx) => (
                                    <motion.div
                                        key={dIdx}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: dIdx * 0.1 }}
                                        className="p-6 rounded-3xl bg-white border border-teal-100 shadow-sm hover:shadow-xl hover:shadow-teal-500/5 transition-all group"
                                    >
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{disease.icon}</span>
                                                <div>
                                                    <h5 className="font-bold text-teal-950 group-hover:text-teal-600 transition-colors">{disease.name}</h5>
                                                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${disease.level === "High" ? "bg-orange-100 text-orange-600" :
                                                            disease.level === "Medium" ? "bg-amber-100 text-amber-600" : "bg-emerald-100 text-emerald-600"
                                                        }`}>
                                                        {disease.level} Risk
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl font-black text-teal-900">{disease.risk}%</div>
                                                <div className="text-[10px] text-teal-400 font-bold uppercase tracking-widest">Risk Index</div>
                                            </div>
                                        </div>

                                        {/* Risk Meter Bar */}
                                        <div className="space-y-2">
                                            <div className="h-2 w-full bg-teal-50 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${disease.risk}%` }}
                                                    transition={{ duration: 1, delay: 0.5 }}
                                                    className={`h-full rounded-full ${disease.color} shadow-lg shadow-teal-500/20`}
                                                />
                                            </div>
                                            <div className="flex justify-between text-[10px] text-teal-400 font-bold uppercase tracking-widest">
                                                <span>Optimal</span>
                                                <span>Elevated</span>
                                                <span>Critical</span>
                                            </div>
                                        </div>

                                        {/* Predictive Insights */}
                                        <div className="mt-6 pt-4 border-t border-teal-50 hidden group-hover:block animate-in fade-in slide-in-from-top-2">
                                            <div className="flex gap-2 items-start text-xs text-teal-800/70">
                                                <Info className="w-4 h-4 text-teal-500 shrink-0" />
                                                <p>Increased {disease.name.toLowerCase()} detected. Recommend lower sodium intake and cardiovascular monitoring.</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Combined Risk Index Visualization Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-16 p-8 rounded-[2rem] bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="space-y-4">
                            <h4 className="text-3xl font-bold">Consolidated Health Score</h4>
                            <p className="max-w-xl opacity-90 text-teal-50">
                                Based on all predictive indicators, your overall proactive wellness score is currently analyzed as **Stable but requiring attention** in the Cardiovascular area.
                            </p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-32 h-32 rounded-full border-8 border-white/20 flex items-center justify-center relative">
                                <span className="text-4xl font-black">82</span>
                                <svg className="absolute inset-0 w-full h-full -rotate-90">
                                    <circle
                                        cx="64" cy="64" r="56"
                                        fill="transparent"
                                        stroke="white"
                                        strokeWidth="8"
                                        strokeDasharray="351.85"
                                        strokeDashoffset={351.85 * (1 - 0.82)}
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-emerald-300" />
                                    <span className="text-sm font-medium">Metabolic Stable</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <AlertTriangle size={16} className="text-orange-300" />
                                    <span className="text-sm font-medium">Cardio Refinement</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
