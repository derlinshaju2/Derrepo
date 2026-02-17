"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Courses from "@/components/Courses";
import Modules from "@/components/Modules";
import Architecture from "@/components/Architecture";
import TechStack from "@/components/TechStack";
import Features from "@/components/Features";
import Demo from "@/components/Demo";
import Dashboard from "@/components/Dashboard";
import HealthHero from "@/components/HealthHero";
import HealthDataInput from "@/components/HealthDataInput";
import DiseasePrediction from "@/components/DiseasePrediction";
import BMIVision from "@/components/BMIVision";
import NutritionAnalysis from "@/components/NutritionAnalysis";
import HealthSmartFeatures from "@/components/HealthSmartFeatures";
import HealthMobileShowcase from "@/components/HealthMobileShowcase";
import YogaVision from "@/components/YogaVision";
import Footer from "@/components/Footer";

export default function Home() {
  const [view, setView] = useState<"portfolio" | "socialsense" | "healthguard">("portfolio");

  const handleViewChange = (newView: "portfolio" | "socialsense" | "healthguard") => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className={`min-h-screen transition-colors duration-700 ${view === "portfolio" ? "bg-[#0B1120]" :
      view === "socialsense" ? "bg-slate-50" : "bg-teal-50"
      }`}>
      <Navbar currentView={view} onViewChange={handleViewChange} />

      {view === "portfolio" ? (
        <>
          <Hero />
          <About />
          <Skills />
          <Projects onViewProject={() => handleViewChange("socialsense")} />
          <Certifications />
          <Courses />
        </>
      ) : (
        <>
          <Modules />
          <Architecture />
          <TechStack />
          <Features />
          <Demo />
          <Dashboard />
        </>
      )}

      {view === "healthguard" && (
        <>
          <HealthHero />
          <HealthDataInput />
          <DiseasePrediction />
          <BMIVision />
          <NutritionAnalysis />
          <HealthSmartFeatures />
          <HealthMobileShowcase />
          <YogaVision />
        </>
      )}


      <Footer currentView={view} />
    </main>
  );
}
