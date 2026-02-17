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
import AdminPanel from "@/components/AdminPanel";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [view, setView] = useState<"portfolio" | "socialsense">("portfolio");

  const handleViewChange = (newView: "portfolio" | "socialsense") => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className={`min-h-screen transition-colors duration-700 ${view === "portfolio" ? "bg-[#0B1120]" : "bg-slate-50"}`}>
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
          <AdminPanel />
        </>
      )}

      <Contact currentView={view} />
      <Footer currentView={view} />
    </main>
  );
}
