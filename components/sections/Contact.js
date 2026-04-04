'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Github, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden flex flex-col min-h-screen justify-between">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-violet-950/5 to-background" />

      <div className="container mx-auto px-4 relative z-10 flex-1 flex items-center justify-center pt-20" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center w-full max-w-4xl mx-auto space-y-12"
        >
          {/* Main Typography Header */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black tracking-tight leading-tight text-foreground">
              Don't shy away from <br className="hidden md:block"/>
              <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">connecting!</span>
            </h2>
            
            {/* Humorous sub-text */}
            <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto selection:bg-blue-500/30">
              I promise I don't bite.<br/>
              <span className="text-sm md:text-base opacity-70 italic tracking-wide">(Unless you're an unresolved bug in my code, then it's strictly personal.)</span>
            </p>
          </div>

          {/* Prominent Email Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-8 pb-16"
          >
            <a 
              href="mailto:prixmishra090311@gmail.com"
              className="group relative inline-block text-2xl md:text-4xl lg:text-5xl font-medium text-foreground hover:text-blue-400 transition-colors duration-300"
            >
              prixmishra090311@gmail.com
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-violet-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          </motion.div>

          {/* Minimal Links Footer Layout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-12 border-t border-border/40"
          >
            <a 
              href="https://www.linkedin.com/in/priya-mishra-ab8159215/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm tracking-[0.2em] font-bold text-muted-foreground hover:text-blue-400 transition-colors flex items-center gap-2 uppercase group"
            >
              LinkedIn <span className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">↗</span>
            </a>
            <a 
              href="https://github.com/Prix09" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm tracking-[0.2em] font-bold text-muted-foreground hover:text-violet-400 transition-colors flex items-center gap-2 uppercase group"
            >
              GitHub <span className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">↗</span>
            </a>
            <a 
              href="/Priya_Mishra.pdf" 
              download="Priya Mishra"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm tracking-[0.2em] font-bold text-muted-foreground hover:text-purple-400 transition-colors flex items-center gap-2 uppercase group"
            >
              Resume <span className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">↗</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Copyright Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 w-full flex flex-col items-center justify-center pb-8 pt-20"
      >
         <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center mb-6 text-muted-foreground hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default shadow-sm bg-card/30 backdrop-blur-sm">
            <span className="text-xs">PM</span>
         </div>
         <p className="text-xs tracking-[0.1em] text-muted-foreground/70 uppercase font-medium">
           © 2026 PRIYA MISHRA. ALL RIGHTS RESERVED.
         </p>
      </motion.div>
    </section>
  );
}