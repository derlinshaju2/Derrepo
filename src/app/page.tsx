import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
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
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Modules />
      <Architecture />
      <TechStack />
      <Features />
      <Demo />
      <Dashboard />
      <AdminPanel />
      <Contact />
      <Footer />
    </main>
  );
}
