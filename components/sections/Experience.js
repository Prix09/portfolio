'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Cloud Virtual Internship — AICTE',
    company: 'Cloud Computing Intern (Virtual)',
    period: 'Oct 2024 - Dec 2024',
    description:
      'Completed a Cloud Computing Virtual Internship focused on AWS services and deployment fundamentals.',
    achievements: [
      'Gained hands-on experience with IaaS, PaaS, SaaS models',
      'Worked with AWS EC2, S3, IAM and deployment workflows',
      'Understood scalability, load balancing & cloud architecture',
      'Deployed applications in simulated production environments'
    ],
    technologies: ['AWS', 'EC2', 'IAM', 'Load Balancing']
  },
  {
    id: 2,
    role: 'Web Development Project',
    company: 'Freelance',
    period: 'May 2025 - June 2025',
    description: 'Created custom web solutions for clients.',
    achievements: [
      'Delivered projects with 100% client satisfaction',
      'Implemented SEO best practices achieving top rankings',
      'Built fully responsive cross-device applications',
      'Integrated third-party APIs and payment systems'
    ],
    technologies: ['React', 'Node.js', 'SEO', 'APIs']
  },
  {
    id: 3,
    role: 'AI/ML Learning Projects',
    company: 'Self-Learning',
    period: '2023 - 2024',
    description: 'Explored machine learning and AI integration.',
    achievements: [
      'Built ML models achieving 92% accuracy',
      'Implemented TensorFlow & PyTorch systems',
      'Integrated ML models into web applications',
      'Performed model evaluation & optimization'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn']
  },
  {
    id: 4,
    role: 'Marketing Manager — GFG KIIT',
    company: 'Leadership & Community Role',
    period: '2023 - 2025',
    description: 'Led marketing and outreach initiatives for technical events.',
    achievements: [
      'Increased event reach by 40%+ through strategic campaigns',
      'Engaged 500+ students across workshops & hackathons',
      'Managed branding, promotions & cross-team coordination',
      'Strengthened community participation'
    ],
    technologies: ['Leadership', 'Marketing Strategy', 'Community Growth']
  },
  {
    id: 5,
    role: 'Marketing & Sales — HighRadius Company',
    company: 'Business Essential Program',
    period: 'May, 2025',
    description: 'Handled marketing campaigns and sales initiatives.',
    achievements: [
      'Contributed to client outreach & lead generation',
      'Supported revenue-focused campaigns',
      'Improved negotiation & communication skills',
      'Executed targeted engagement strategies'
    ],
    technologies: ['Sales', 'Client Relations', 'Business Development']
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 relative bg-gradient-to-b from-background via-violet-950/5 to-background">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-4">
            Experience &{' '}
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey and key contributions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => {
            const isLeadership = exp.id >= 4;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* 🔹 Animated Divider */}
                {exp.id === 4 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center my-12"
                  >
                    <div className="h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent mb-4" />
                    <h3 className="text-2xl font-semibold text-blue-400">
                      Leadership & Community Roles
                    </h3>
                  </motion.div>
                )}

                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-violet-500/20" />
                )}

                <div className="flex gap-6 group">
                  {/* Timeline Dot */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform
                      ${
                        isLeadership
                          ? 'bg-gradient-to-r from-violet-500 to-blue-500'
                          : 'bg-gradient-to-r from-blue-500 to-violet-500'
                      }`}
                  >
                    <Briefcase className="text-white" size={20} />
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 pb-8">
                    <motion.div
                      whileHover={{ scale: 1.02, x: 10 }}
                      className={`p-6 rounded-xl transition-all shadow-lg border backdrop-blur-sm
                        ${
                          isLeadership
                            ? 'bg-card/40 border-violet-500/30 hover:border-violet-500/60'
                            : 'bg-card border-border/50 hover:border-blue-500/50'
                        }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                            {exp.role}
                          </h3>
                          <p className="text-blue-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar size={16} />
                          {exp.period}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="text-blue-400 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`text-xs px-3 py-1 rounded-full
                              ${
                                isLeadership
                                  ? 'bg-violet-500/20 text-violet-300'
                                  : 'bg-secondary text-muted-foreground'
                              }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}