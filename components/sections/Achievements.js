'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, Shield, Cloud, Brain, Medal, ExternalLink, Star, Trophy } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const achievements = [
  // AWS Certifications
  {
    id: 'aws-arch',
    title: 'AWS Academy Cloud Architecting',
    issuer: 'Amazon Web Services',
    date: 'February 2025',
    category: 'AWS',
    icon: Cloud,
    description: 'Trained in architecting optimal IT solutions using AWS cloud computing services.',
    image: '/certificates/aws_architecting_training.png',
    pdf: '/certificates/aws_architecting_training.pdf',
  },
  {
    id: 'aws-foundations',
    title: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services',
    date: 'December 2024',
    category: 'AWS',
    icon: Cloud,
    description: 'Trained in foundational knowledge of AWS cloud concepts, core services, security, architecture, pricing, and support.',
    image: '/certificates/aws_foundations_training_badge.png',
    pdf: '/certificates/aws_foundations_training.pdf',
    credential: 'AWS Academy Graduate - Cloud Foundations'
  },
  {
    id: 'aws-ops',
    title: 'AWS Academy Cloud Operations',
    issuer: 'Amazon Web Services',
    date: 'March 2025',
    category: 'AWS',
    icon: Cloud,
    description: 'Trained in operating highly available and scalable infrastructure on the AWS Cloud.',
    image: '/certificates/aws_operations_training_badge.png',
    pdf: '/certificates/aws_operations_training.pdf',
    credential: 'AWS Academy Graduate - Cloud Operations'
  },

  // Cybersecurity
  {
    id: 'cyber-analyst',
    title: 'Junior Cybersecurity Analyst Career Path',
    issuer: 'Cisco Networking Academy',
    date: 'March 2026',
    category: 'Cybersecurity',
    icon: Shield,
    description: 'Comprehensive pathway covering network security, threat intelligence, and incident response fundamentals.',
    image: '/certificates/cybersecurity_analyst.png',
    pdf: '/certificates/cybersecurity_analyst_update.pdf',
    credential: 'Cisco Networking Academy'
  },
  {
    id: 'cyber-threat',
    title: 'Cyber Threat Management',
    issuer: 'Cisco Networking Academy',
    date: 'February 2026',
    category: 'Cybersecurity',
    icon: Shield,
    description: 'Developed skills to monitor, detect, analyze, and respond to cyber threats and vulnerabilities.',
    image: '/certificates/cyber_threat_management.png',
    pdf: '/certificates/cyber_threat_management_update.pdf',
    credential: 'Cyber Threat Management'
  },

  // AI & ML
  {
    id: 'dl-spec',
    title: 'Deep Learning Specialization',
    issuer: 'Udemy',
    date: 'May 2024',
    category: 'AI/ML',
    icon: Brain,
    description: 'Mastery of foundational deep learning theory and practical applications using neural networks.',
    pdf: '/certificates/dl_specialization.pdf',
    credential: 'Specialization Certificate - Issued by Udemy'
  },
  {
    id: 'dl-tf',
    title: 'Deep Learning with TensorFlow',
    issuer: 'Udemy',
    date: 'June 2024',
    category: 'AI/ML',
    icon: Brain,
    description: 'Applied deep learning principles building models with TensorFlow, including CNNs and RNNs.',
    pdf: '/certificates/dl_tensorflow.pdf',
    credential: 'Deep Learning - Issued by Udemy'
  },

  // Internships
  {
    id: 'internship',
    title: 'Cloud Virtual Internship',
    issuer: 'AICTE',
    date: 'October 2024',
    category: 'Internships',
    icon: Award,
    description: 'Completed a comprehensive virtual internship focused on cloud computing principles and applications.',
    pdf: '/certificates/aicte_internship.pdf',
    credential: 'ID: 405b50fadf8470b7661bf1bd58ac194d'
  },
  {
    id: 'internship2',
    title: 'Sales and Marketing Internship',
    issuer: 'HighRadius',
    date: 'May 2025',
    category: 'Internships',
    icon: Award,
    description: 'Applied academic knowledge in practical scenarios through a professional sales and marketing internship program.',
    pdf: '/certificates/internship.pdf',
    credential: 'Highway to HighRadius Internship Program'
  },

  // Other / Foundational
  {
    id: 'redhat',
    title: 'Red Hat System Administration I',
    issuer: 'Red Hat',
    date: 'July 2025',
    category: 'Other',
    icon: Medal,
    description: 'Core system administration skills managing Red Hat Enterprise Linux networking, storage, and security.',
    image: '/certificates/red_hat.png',
    pdf: '/certificates/redhat_attendance.pdf',
    credential: 'ID: ca032ef0-8719-4440-b95d-cb39036602d9'
  },
  {
    id: 'deloitte',
    title: 'Deloitte Tech Consulting Simulation',
    issuer: 'Forage / Deloitte',
    date: 'February 2026',
    category: 'Other',
    icon: Star,
    description: 'Completed a virtual experience program simulating real-world technology consulting scenarios.',
    pdf: '/certificates/deloitte_simulation.pdf',
    credential: 'User Verification Code: 699411a4fc9eb223776b8473 - Issued by Forage'
  },
  {
    id: 'hackathon1',
    title: 'Flipkart GRiD 6.0 - Software Development Track',
    issuer: 'Flipkart',
    date: '2024',
    category: 'Other',
    icon: Trophy,
    description: 'Participated in the Level 1.1 - E-Commerce & Tech Quiz of Flipkart GRiD 6.0.',
    image: '/certificates/whatsapp_1.jpeg',
    credential: 'Participant - Issued by Unstop'
  },
  {
    id: 'hackathon2',
    title: 'HackOn With Amazon - Season 4',
    issuer: 'Amazon',
    date: '2024',
    category: 'Other',
    icon: Trophy,
    description: 'Participated in the Coding Round of HackOn With Amazon - Season 4.',
    image: '/certificates/whatsapp_2.jpeg',
    credential: 'Participant - Issued by Unstop'
  }
];

const categories = ['AWS', 'Cybersecurity', 'AI/ML', 'Internships', 'Other'];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState('AWS'); // Default to AWS since All is removed
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const filteredAchievements = achievements.filter(achievement => achievement.category === selectedCategory);

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/5 to-background" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Recognition and continuous learning milestones
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg'
                : 'bg-secondary hover:bg-secondary/80 text-foreground'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredAchievements.map((achievement, index) => {
            const IconComponent = achievement.icon;

            // Layout tweaks if it's an AWS credential with a transparent badge we want to feature prominently
            const isFeaturedBadge = !!achievement.image;

            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedAchievement(achievement)}
                className="group cursor-pointer rounded-xl overflow-hidden bg-card/40 backdrop-blur-md border dark:border-white/10 border-black/5 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-2xl flex flex-col"
              >
                {/* Visual Header Region */}
                <div className={`relative ${isFeaturedBadge ? 'h-40 bg-gradient-to-br from-blue-900/20 to-violet-900/20 flex items-center justify-center p-6 border-b border-border/50' : 'p-6 pb-2'}`}>
                  {isFeaturedBadge ? (
                    <img
                      src={achievement.image}
                      alt={`${achievement.title} badge`}
                      className="h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-xl"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <IconComponent className="text-white" size={28} />
                    </div>
                  )}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-foreground backdrop-blur-sm border border-border/50 shadow-sm">
                      {achievement.category}
                    </span>
                  </div>
                </div>

                {/* Text Content Region */}
                <div className={`p-6 flex-1 flex flex-col ${isFeaturedBadge ? 'pt-5' : 'pt-2'}`}>
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-violet-500 transition-all line-clamp-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm font-medium mb-3 text-muted-foreground">{achievement.issuer}</p>
                  <p className="text-sm text-foreground/80 line-clamp-3 mb-4 flex-1">
                    {achievement.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-xs text-muted-foreground">{achievement.date}</p>
                    {achievement.pdf && (
                      <span className="text-sm text-blue-400 font-medium group-hover:underline flex items-center gap-1">
                        View <ExternalLink size={14} />
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Achievement Modal */}
      <Dialog open={!!selectedAchievement} onOpenChange={() => setSelectedAchievement(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedAchievement && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-4">
                  {!selectedAchievement.image && (
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0 shadow-md">
                      <selectedAchievement.icon className="text-white" size={24} />
                    </div>
                  )}
                  <span className="leading-tight">{selectedAchievement.title}</span>
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6 pt-2">

                {selectedAchievement.image && (
                  <div className="w-full bg-gradient-to-br from-blue-900/10 to-violet-900/10 rounded-xl p-8 flex justify-center border border-border/50">
                    <img
                      src={selectedAchievement.image}
                      alt={selectedAchievement.title}
                      className="h-48 md:h-64 object-contain drop-shadow-2xl"
                    />
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-blue-400 font-medium text-lg">{selectedAchievement.issuer}</p>
                      <p className="text-muted-foreground text-sm">{selectedAchievement.date}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-foreground">
                      {selectedAchievement.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedAchievement.description}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <h3 className="text-sm font-semibold mb-1 text-foreground">Credential Details</h3>
                    <p className="text-sm text-blue-400 font-mono">{selectedAchievement.credential}</p>
                  </div>

                  {selectedAchievement.pdf && (
                    <a
                      href={selectedAchievement.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 p-4 rounded-lg border-2 border-blue-500/50 hover:border-blue-500 hover:bg-blue-500/10 transition-all flex flex-col justify-center items-center gap-2 group cursor-pointer"
                    >
                      <span className="font-semibold text-blue-400 group-hover:text-blue-500 transition-colors flex items-center gap-2">
                        View Full Certificate <ExternalLink size={16} />
                      </span>
                      <span className="text-xs text-muted-foreground">Opens PDF in new tab</span>
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}