'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code2, Database, Cpu, Cloud, Layers } from 'lucide-react';

const techGroups = [
  {
    title: "Frontend Development",
    icon: <Code2 className="text-blue-500" />,
    colorClass: "text-blue-400",
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", projects: ["Vision Guide", "Hospital Management", "Enterprise GenAI", "FixForge", "Travel Advisor"] },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", projects: ["FixForge"] },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", projects: ["FixForge"] },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", projects: ["Hospital Management", "Enterprise GenAI", "FixForge", "Travel Advisor"] },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", projects: ["UI Frameworks"] },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", projects: ["All Projects"] },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", projects: ["All Projects"] },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", projects: ["State Management"] }
    ]
  },
  {
    title: "Backend & Database",
    icon: <Database className="text-violet-500" />,
    colorClass: "text-violet-400",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", projects: ["Travel Advisor"] },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", projects: ["Travel Advisor"] },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", projects: ["Hospital Management"] },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", projects: ["Hospital Management"] },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", projects: ["Vision Guide"] },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", projects: ["Enterprise GenAI"] },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", projects: ["Hospital Management"] },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", projects: ["Database Design"] }
    ]
  },
  {
    title: "Data & AI / ML",
    icon: <Cpu className="text-emerald-500" />,
    colorClass: "text-emerald-400",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", projects: ["Vision Guide", "Enterprise GenAI", "Diabetes Prediction"] },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", projects: ["Vision Guide"] },
      { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg", projects: ["Enterprise GenAI (RAG Scouting)"] },
      { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", projects: ["Diabetes Prediction"] },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", projects: ["Diabetes Prediction"] },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", projects: ["Diabetes Prediction"] },
      { name: "LangChain", icon: "https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/favicon.png", projects: ["Enterprise GenAI"] },
      { name: "XGBoost", icon: "https://raw.githubusercontent.com/dmlc/web-data/master/xgboost/logo/xgboost-logo.png", projects: ["Diabetes Prediction"] }
    ]
  },
  {
    title: "Cloud & Core Tools",
    icon: <Cloud className="text-amber-500" />,
    colorClass: "text-amber-400",
    skills: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", projects: ["Deployment & S3"] },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", projects: ["Containerization"] },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", projects: ["Version Control"] },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", projects: ["Code Collaboration"] },
      { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", projects: ["API Testing"] },
      { name: "Vercel", icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg", projects: ["Frontend Hosting"] },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", projects: ["Development"] },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", projects: ["Core Programming"] }
    ]
  }
];

const SkillIcon = ({ name, icon, projects, isInView, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group flex flex-col items-center justify-center p-4 rounded-xl bg-secondary/20 border border-border/50 hover:border-blue-500/50 hover:bg-secondary/40 transition-all duration-300 cursor-default h-full"
    >
      <div className="w-12 h-12 mb-3 flex items-center justify-center filter grayscale group-hover:grayscale-0 transition-all duration-300">
        <img 
          src={icon} 
          alt={name}
          className="w-full h-full object-contain"
          onError={(e) => {
            e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"; // Fallback
          }}
        />
      </div>
      <span className="text-[10px] font-bold text-center group-hover:text-blue-400 transition-colors uppercase tracking-wider">
        {name}
      </span>

      {/* Hover Info Tag */}
      {isHovered && projects.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-16 left-1/2 -translate-x-1/2 z-50 px-3 py-2 rounded-lg bg-blue-600 text-[10px] text-white whitespace-normal min-w-[120px] shadow-2xl pointer-events-none"
        >
          <div className="font-black border-b border-white/20 mb-1 pb-1 text-[9px]">USED IN:</div>
          <div className="leading-relaxed">{projects.join(", ")}</div>
          {/* Triangle shadow pointer */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-600 rotate-45" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-violet-950/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-4">
            Tech <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical toolkit, mapped to real-world project implementations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {techGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, x: groupIndex % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              className="p-8 rounded-2xl bg-card/40 backdrop-blur-md border border-border/50 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-secondary/50">
                  {group.icon}
                </div>
                <h3 className={`text-2xl font-serif font-bold ${group.colorClass}`}>
                  {group.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {group.skills.map((skill, index) => (
                  <SkillIcon 
                    key={skill.name} 
                    name={skill.name} 
                    icon={skill.icon}
                    projects={skill.projects} 
                    isInView={isInView}
                    index={index + groupIndex * 4}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}