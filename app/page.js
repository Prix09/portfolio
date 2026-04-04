'use client';

import Navbar from '@/components/ui/Navbar';
import ScrollProgress from '@/components/ui/ScrollProgress';
import BackToTop from '@/components/ui/BackToTop';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';
import { Toaster } from 'sonner';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <BackToTop />
      <Toaster position="top-right" richColors />
    </>
  );
}