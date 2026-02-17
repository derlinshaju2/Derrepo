"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Thermometer, Droplets, Scale, Ruler, Activity, Save, RefreshCw } from "lucide-react";

export default function HealthDataInput() {
    const [metrics, setMetrics] = useState({
        age: "25",
        gender: "Male",
        height: "175",
        weight: "70",
        systolic: "120",
        diastolic: "80",
        sugar: "90",
        cholesterol: "180",
        activity: "Moderate"
    });

    const categories = [
        { name: "Basic Info", icon: <Scale className="w-5 h-5" />, fields: ["age", "gender", "height", "weight"] },
        { name: "Vital Signs", icon: <Thermometer className="w-5 h-5" />, fields: ["systolic", "diastolic"] },
        { name: "Clinical Data", icon: <Droplets className="w-5 h-5" />, fields: ["sugar", "cholesterol"] },
        { name: "Lifestyle", icon: <Activity className="w-5 h-5" />, fields: ["activity"] }
    ];

    const handleInputChange = (field: string, value: string) => {
        setMetrics(prev => ({ ...prev, [field]: value }));
    };

    return (
        <section id="predictor" className="py-24 px-6 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-sm font-bold tracking-widest text-teal-600 mb-2 uppercase"
                    >
                        Foundation
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-teal-950 mb-6"
                    >
                        Health Data Input
                    </motion.h3>
                    <p className="text-teal-800/60 max-w-2xl mx-auto">
                        Enter your medical parameters below. Our AI engine uses these metrics to generate a comprehensive risk profile and wellness recommendations.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Input Columns */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {categories.map((cat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-3xl bg-teal-50 border border-teal-100 shadow-sm hover:shadow-md transition-all"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-teal-600 shadow-sm">
                                        {cat.icon}
                                    </div>
                                    <h4 className="text-lg font-bold text-teal-950">{cat.name}</h4>
                                </div>

                                <div className="space-y-4">
                                    {cat.fields.map(field => (
                                        <div key={field} className="space-y-1.5">
                                            <label className="text-xs font-bold text-teal-800/50 uppercase tracking-wider">
                                                {field.replace(/([A-Z])/g, ' $1').trim()}
                                            </label>
                                            <input
                                                type="text"
                                                value={(metrics as any)[field]}
                                                onChange={(e) => handleInputChange(field, e.target.value)}
                                                className="w-full px-4 py-3 rounded-xl bg-white border border-teal-100 text-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all font-medium"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Summary / CTA Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="p-8 rounded-3xl bg-teal-600 text-white shadow-xl flex flex-col justify-between"
                    >
                        <div className="space-y-6">
                            <h4 className="text-2xl font-bold">Data Summary</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-2 border-b border-white/10">
                                    <span className="opacity-70 text-sm">Vital Score</span>
                                    <span className="font-bold">Good</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-white/10">
                                    <span className="opacity-70 text-sm">Completeness</span>
                                    <span className="font-bold">100%</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-white/10">
                                    <span className="opacity-70 text-sm">Last Update</span>
                                    <span className="font-bold">Just Now</span>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-white/10 border border-white/20">
                                <p className="text-sm italic opacity-90 leading-relaxed">
                                    "Accuracy of prediction depends on the precision of entered clinical data."
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 mt-12">
                            <button className="w-full py-4 rounded-2xl bg-white text-teal-700 font-bold hover:bg-teal-50 transition-colors flex items-center justify-center gap-2">
                                <Save className="w-5 h-5" /> Save Profile
                            </button>
                            <button className="w-full py-4 rounded-2xl border border-white/30 text-white font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                                <RefreshCw className="w-5 h-5" /> Reset Data
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
