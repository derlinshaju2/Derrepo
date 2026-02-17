"use client";

import { motion } from "framer-motion";
import { PieChart as PieIcon, List, AlertCircle, TrendingUp, Search } from "lucide-react";

const nutrients = [
    { name: "Carbs", value: 55, color: "bg-teal-500", detail: "Energy source" },
    { name: "Proteins", value: 25, color: "bg-emerald-500", detail: "Muscle repair" },
    { name: "Fats", value: 20, color: "bg-teal-700", detail: "Hormone health" }
];

export default function NutritionAnalysis() {
    return (
        <section id="nutrition" className="py-24 px-6 bg-teal-50/30 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-sm font-bold tracking-widest text-teal-600 mb-2 uppercase"
                    >
                        Nutrients
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-teal-950 mb-6"
                    >
                        Lifestyle & Nutrition
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left: Food Logging Form */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="p-8 rounded-[2rem] bg-white border border-teal-100 shadow-sm space-y-6">
                            <div className="flex items-center justify-between">
                                <h4 className="text-xl font-bold text-teal-950">Daily Food Log</h4>
                                <div className="text-teal-500"><List size={20} /></div>
                            </div>

                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-300 w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Add food (e.g. Avocado Toast)"
                                    className="w-full pl-10 pr-4 py-3 bg-teal-50 border border-teal-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                                />
                            </div>

                            <div className="space-y-3">
                                {["Greek Yogurt with Berries", "Grilled Salmon & Asparagus", "Quinoa Salad"].map((food, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-teal-50/50 border border-teal-50 text-sm">
                                        <span className="text-teal-900 font-medium">{food}</span>
                                        <span className="text-teal-400 font-bold uppercase text-[10px]">Logged</span>
                                    </div>
                                ))}
                            </div>

                            <button className="w-full py-4 rounded-xl bg-teal-600 text-white font-bold text-sm hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/10">
                                Analyze Nutrients
                            </button>
                        </div>

                        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100 flex gap-4">
                            <AlertCircle className="w-6 h-6 text-amber-600 shrink-0" />
                            <p className="text-xs text-amber-800 leading-relaxed font-medium">
                                <span className="font-black uppercase tracking-widest block mb-1">AI Suggestion</span>
                                Your sugar intake is currently 15% above the recommended limit. Consider replacing desserts with fresh fruits.
                            </p>
                        </div>
                    </div>

                    {/* Right: Nutrient Charts */}
                    <div className="lg:col-span-7">
                        <div className="p-10 rounded-[2.5rem] bg-white border border-teal-100 shadow-xl shadow-teal-500/5 h-full">
                            <div className="flex items-center justify-between mb-12">
                                <h4 className="text-2xl font-bold text-teal-950">Nutritional Breakdown</h4>
                                <TrendingUp className="text-teal-500" />
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-around gap-12">
                                {/* Visual Pie Representation (Simplified) */}
                                <div className="relative w-56 h-56 flex items-center justify-center">
                                    <svg className="w-full h-full -rotate-90">
                                        {/* Simplified multi-segment circle logic */}
                                        <circle cx="112" cy="112" r="90" stroke="#f0fdfa" strokeWidth="30" fill="transparent" />
                                        <circle cx="112" cy="112" r="90" stroke="#14b8a6" strokeWidth="30" fill="transparent" strokeDasharray="565.48" strokeDashoffset={565.48 * (1 - 0.55)} strokeLinecap="round" />
                                    </svg>
                                    <div className="absolute flex flex-col items-center">
                                        <span className="text-4xl font-black text-teal-950">2150</span>
                                        <span className="text-[10px] uppercase font-bold text-teal-400 tracking-widest">Kcal Total</span>
                                    </div>
                                </div>

                                {/* Legend & Details */}
                                <div className="space-y-6 flex-1 max-w-xs">
                                    {nutrients.map((n, i) => (
                                        <div key={i} className="space-y-2">
                                            <div className="flex justify-between items-end">
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-3 h-3 rounded-full ${n.color}`} />
                                                    <span className="font-bold text-teal-900">{n.name}</span>
                                                </div>
                                                <span className="text-xl font-black text-teal-950">{n.value}%</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-teal-50 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${n.value}%` }}
                                                    className={`h-full ${n.color}`}
                                                />
                                            </div>
                                            <div className="text-[10px] text-teal-400 font-bold uppercase">{n.detail}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
