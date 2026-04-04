'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Briefcase } from 'lucide-react';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const HeroScene = dynamic(() => import('../3d/HeroScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-violet-900" />
});

const Avatar3D = dynamic(() => import('../3d/Avatar3D'), {
  ssr: false,
  loading: () => <div className="w-full h-[400px] bg-secondary/20 rounded-lg animate-pulse" />
});

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tighter leading-[0.9] text-foreground mb-4">
                <span className="block font-medium">Priya</span>
                <span className="block font-medium italic text-muted-foreground ml-8 md:ml-12">Mishra</span>
              </h1>
            </motion.div>



            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-xl"
            >
              Building elegant, performant web experiences with modern technologies.
              Passionate about creating intuitive user interfaces and exploring the intersection
              of frontend development and artificial intelligence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToProjects}
                className="group px-8 py-3 bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2"
              >
                <Briefcase size={20} />
                View Projects
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </button>

              <a
                href="/Priya_Mishra.pdf"
                download="Priya Mishra"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right side - 3D Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <Suspense fallback={<div className="w-full h-[400px] bg-secondary/20 rounded-lg animate-pulse" />}>
                <Avatar3D />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm">Scroll Down</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}