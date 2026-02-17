"use client";

import { motion } from "framer-motion";
import { Scale, Coffee, Dumbbell, Apple, Utensils, Zap } from "lucide-react";

const recommendations = {
    underweight: {
        diet: [
            "Increase complex carbohydrate intake (whole grains, sweet potatoes).",
            "Include healthy fats like avocados, nuts, and olive oil.",
            "Higher protein intake for muscle development."
        ],
        exercise: [
            "Focus on strength training and muscle building.",
            "Reduce high-intensity cardio.",
            "Prioritize heavy lifting with low repetitions."
        ]
    },
    normal: {
        diet: [
            "Balanced intake of lean proteins, fats, and complex carbs.",
            "High fiber intake (fruits, vegetables).",
            "Maintain adequate hydration throughout the day."
        ],
        exercise: [
            "Mix of 150 mins cardio and 2 days strength training.",
            "Focus on flexibility and core stability.",
            "Maintain current activity levels."
        ]
    }
};

export default function BMIVision() {
    return (
        <section id="bmi" className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: BMI Calculator Stats */}
                    <div className="space-y-8">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-sm font-bold tracking-widest text-emerald-600 mb-2 uppercase"
                            >
                                Metrics
                            </motion.h2>
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-5xl font-bold text-teal-950 mb-6"
                            >
                                BMI Analysis & <br />Recommendations
                            </motion.h3>
                        </div>

                        <div className="p-10 rounded-[2.5rem] bg-emerald-50 border border-emerald-100 flex items-center justify-between relative overflow-hidden group">
                            <div className="relative z-10">
                                <div className="text-sm font-black text-emerald-600 uppercase tracking-[0.2em] mb-2">Calculated BMI</div>
                                <div className="text-7xl font-black text-emerald-900 font-poppins">22.8</div>
                                <div className="mt-4 px-4 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full inline-block uppercase tracking-wider">
                                    Normal Weight
                                </div>
                            </div>
                            <div className="relative z-10 hidden sm:block">
                                <Scale className="w-24 h-24 text-emerald-200 group-hover:scale-110 transition-transform" />
                            </div>
                            {/* Decorative background circle */}
                            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-emerald-200/20 rounded-full blur-3xl" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 rounded-3xl bg-teal-50 border border-teal-100">
                                <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Target Weight</span>
                                <div className="text-2xl font-bold text-teal-900 mt-1">68.5 kg</div>
                            </div>
                            <div className="p-6 rounded-3xl bg-teal-50 border border-teal-100">
                                <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Ideal Range</span>
                                <div className="text-2xl font-bold text-teal-900 mt-1">62 - 75 kg</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Recommendations */}
                    <div className="grid grid-cols-1 gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="p-8 rounded-[2rem] bg-white border border-teal-100 shadow-xl shadow-teal-500/5 space-y-6"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
                                    <Utensils className="w-6 h-6" />
                                </div>
                                <h4 className="text-2xl font-bold text-teal-950">Dietary Strategy</h4>
                            </div>
                            <ul className="space-y-4">
                                {recommendations.normal.diet.map((item, idx) => (
                                    <li key={idx} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                                            <Apple className="w-3.5 h-3.5" />
                                        </div>
                                        <p className="text-sm text-teal-800/70 font-medium leading-relaxed">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="p-8 rounded-[2rem] bg-teal-900 text-white shadow-xl space-y-6"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-teal-300">
                                    <Dumbbell className="w-6 h-6" />
                                </div>
                                <h4 className="text-2xl font-bold">Exercise Protocol</h4>
                            </div>
                            <ul className="space-y-4">
                                {recommendations.normal.exercise.map((item, idx) => (
                                    <li key={idx} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-white/10 text-teal-300 flex items-center justify-center shrink-0">
                                            <Zap className="w-3.5 h-3.5" />
                                        </div>
                                        <p className="text-sm text-teal-100/70 font-medium leading-relaxed">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
