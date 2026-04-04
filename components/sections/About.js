'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Sparkles, Target, Zap } from 'lucide-react';

const specializations = [
  {
    icon: Code,
    title: 'Full-Stack Engineering',
    description: 'Building scalable MERN and Spring Boot applications with secure REST APIs, JWT authentication, and optimized database design — always with clean architecture and production readiness in mind.'
  },
  {
    icon: Sparkles,
    title: 'Cloud & DevOps',
    description: 'Deploying and managing applications on AWS (EC2, S3, IAM) using Docker-based containerization, ensuring secure, reliable, and scalable cloud infrastructure.'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Delivering fast, smooth user experiences through code-splitting, lazy loading, caching, and database indexing — consistently achieving high Lighthouse scores.'
  },
  {
    icon: Target,
    title: 'AI/ML Integration',
    description: 'Building ML-powered systems using Python, TensorFlow, and Scikit-learn with real-time API integration, focused on measurable accuracy improvements and intelligent automation.'
  }
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating seamless digital experiences
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16 p-8 rounded-2xl bg-card/40 backdrop-blur-md border dark:border-white/10 border-black/5 shadow-lg hover:shadow-xl transition-shadow"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a Software Developer with a strong foundation in modern web technologies and the MERN Stack, passionate about building intelligent, production-ready applications. I specialize in crafting performant, scalable, and accessible solutions using <span className="text-blue-400 font-semibold">React</span>, Next.js, <span className="text-emerald-400 font-semibold">TypeScript</span>, and robust backend systems — with a growing focus on <span className="text-violet-400 font-semibold">AI/ML</span> and <span className="text-blue-400 font-semibold">Cloud</span> computing. My goal is to bridge the gap between great engineering and real-world impact.
          </p>
        </motion.div>

        {/* Specializations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {specializations.map((spec, index) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="p-6 rounded-xl bg-card/40 backdrop-blur-md border dark:border-white/10 border-black/5 hover:border-blue-500/50 transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <spec.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">{spec.title}</h3>
              <p className="text-sm text-muted-foreground">{spec.description}</p>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}