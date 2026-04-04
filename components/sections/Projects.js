'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ExternalLink, Github, Code2, Sparkles, Zap } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const projects = [
  {
  id: 1,
  title: 'Vision Guide – Real-Time Assistive AI System',
  category: 'AI/ML',
  description: 'Real-time computer vision web application using YOLO for object detection with live frontend-backend integration.',
  fullDescription: 'Developed Vision Guide, a real-time assistive computer vision system using YOLO for object detection and TensorFlow for Indoor–Outdoor environment classification. Optimized YOLO performance through hyperparameter tuning and early stopping, improving mAP@0.5 from 68% to 70%. Built a Flask-based inference backend and integrated it with a React frontend to deliver live detection feedback with seamless API communication.',
  technologies: ['Python', 'YOLO', 'TensorFlow', 'OpenCV', 'Flask', 'React'],
  features: [
    'Real-Time Object Detection',
    'Indoor–Outdoor Scene Classification',
    'Custom Door Detection Training',
    'Flask Inference API',
    'Live Frontend Integration'
  ],
  image: 'https://images.unsplash.com/photo-1762692877077-0e7d3f694143?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlzaW9uJTIwaW1wYWlybWVudHxlbnwwfHwwfHx8MA%3D%3D',
  github: 'https://github.com/Prix09/Vision-Guide',
  live: '#',
  impact: 'Improved YOLO mAP@0.5 from 68% to 70% through hyperparameter optimization and custom training'
},
  {
  id: 2,
  title: 'Hospital Management System',
  category: 'Full-Stack',
  description: 'Full-stack healthcare management platform with role-based access, appointment scheduling, and real-time consultations.',
  fullDescription: 'Developed a full-stack Hospital Management System using Java Spring Boot and React to manage online appointments and virtual consultations. Implemented role-based authentication using Spring Security with JWT and designed RESTful APIs connected to a PostgreSQL database. Integrated real-time video consultations using WebRTC and automated PDF prescription generation for enhanced patient experience.',
  technologies: ['Java', 'Spring Boot', 'Spring Security', 'React', 'PostgreSQL', 'WebRTC', 'Tailwind CSS'],
  features: [
    'Role-Based Authentication (JWT)',
    'Online Appointment Scheduling',
    'Real-Time Video Consultation',
    'RESTful API Integration',
    'Automated PDF Prescription Generation'
  ],
  image: 'https://images.unsplash.com/photo-1664902275922-9cd136203ba1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvc3BpdGFsJTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D',
  video: 'https://res.cloudinary.com/dusvrl5ei/video/upload/v1775344492/Screen_Recording_2026-03-10_174054_wua0xo.mp4',
  github: 'https://github.com/Prix09/Hospital',
  live: '#',
  impact: 'Built a secure and scalable healthcare platform enabling streamlined patient-doctor interaction'
},
  {
  id: 3,
  title: 'Enterprise GenAI Knowledge Assistant',
  category: 'Full-Stack',
  showInAll: true,
  description: 'Intelligent enterprise knowledge base assistant leveraging Retrieval-Augmented Generation (RAG) for accurate, contextual responses.',
  fullDescription: 'Developed a scalable enterprise RAG (Retrieval-Augmented Generation) Knowledge Assistant designed to securely ingest, process, and query vast amounts of internal documentation. Architected a robust backend pipeline to vectorize documents and leveraged Large Language Models to deliver precise, context-aware answers to user queries, significantly reducing information retrieval time.',
  technologies: ['Python', 'LangChain', 'Vector Databases', 'LLMs', 'FastAPI', 'React', 'Tailwind CSS'],
  features: [
    'Document Ingestion & Vectorization',
    'Context-Aware Querying via RAG',
    'Secure Enterprise Data Handling',
    'Interactive Conversational UI',
    'Scalable API Architecture'
  ],
  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFpfGVufDB8fDB8fHww',
  video: 'https://res.cloudinary.com/dusvrl5ei/video/upload/v1775343792/Screen_Recording_2026-03-09_183821_rvqx1m.mp4',
  github: 'https://github.com/Prix09/enterprise_genai_knowledge_assistant',
  live: '#',
  impact: 'Streamlined enterprise knowledge retrieval, reducing search time and improving response accuracy'
},
  {
  id: 4,
  title: 'FixForge',
  category: 'Frontend',
  showInAll: false,
  description: 'Responsive industrial product catalog interface with advanced filtering, structured layouts, and optimized user experience.',
  fullDescription: 'Developed the frontend architecture for FixForge, an industrial nut and bolt catalog website featuring structured product listings, category-based filtering, and intuitive search functionality. Focused on responsive design, reusable component architecture, and performance optimization to ensure smooth navigation and enhanced product discoverability.',
  technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  features: [
    'Dynamic Product Listing UI',
    'Category & Filter Interface',
    'Reusable Component Architecture',
    'Responsive Layout Design',
    'Optimized Performance'
  ],
  image: 'https://images.unsplash.com/photo-1605701249987-f0bb9b505d06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bnV0cyUyMGFuZCUyMGJvbHRzfGVufDB8fDB8fHww',
  video: 'https://res.cloudinary.com/dusvrl5ei/video/upload/v1775342098/Screen_Recording_2026-03-12_051221_yuih5w.mp4',
  github: 'https://github.com/Prix09/FixForge',
  live: '#',
  impact: 'Improved user experience and product discoverability through structured UI and responsive design'
},
{
  id: 5,
  title: 'Travel Advisor',
  category: 'Full-Stack',
  showInAll: false, // 👈 important
  description: 'AI-powered travel application tailored for rapid itinerary planning, chatbot interactions, and personalized recommendation insights.',
  fullDescription: 'Engineered a highly responsive full-stack AI Travel Advisor. Focused heavily on backend optimization to achieve near-instantaneous (sub-6 second) response times for intelligent AI features including custom itinerary generation and specialized chatbot assistance without compromising response depth or completion. Designed with a clean frontend to render complex responses and mapped locations intuitively.',
  technologies: ['React', 'Node.js', 'Express', 'GenAI', 'Tailwind CSS'],
  features: ['Rapid AI Itinerary Generation', 'Intelligent Chatbot Optimization', 'Recommendation Insights', 'High-Speed Response Delivery'],
  image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D',
  video: 'https://res.cloudinary.com/dusvrl5ei/video/upload/v1775344755/Screen_Recording_2026-03-09_224305_jhcu5k.mp4',
  github: 'https://github.com/Prix09/Travel_Advisor',
  live: '#',
  impact: 'Delivered a seamless AI travel companion with aggressive optimization for low-latency intelligent responses'
},
{
  id: 6,
  title: 'Onset of Diabetes Prediction System',
  category: 'AI/ML',
  showInAll: false, // 👈 Hidden from "All"
  description:
    'Regression-based ML system predicting age of diabetes onset using clinical and lifestyle data with optimized model performance.',
  fullDescription:
    'Developed a machine learning regression model to predict the age of diabetes onset using structured lifestyle, genetic, and clinical datasets. Performed advanced feature engineering on variables including BMI, HbA1c levels, family history, physical activity, and dietary patterns, improving prediction accuracy by approximately 20%. Compared Linear Regression, Decision Tree, Random Forest, and XGBoost models, applying Optuna-based hyperparameter optimization that reduced prediction error by nearly 15%. Achieved highest R² score with XGBoost and minimized RMSE, ensuring statistically validated predictive performance.',
  technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Optuna', 'XGBoost'],
  features: [
    'Regression-Based Prediction Model',
    '20% Accuracy Improvement via Feature Engineering',
    '15% Error Reduction with Optuna Tuning',
    'RMSE & R² Statistical Evaluation',
    'Comparative Model Benchmarking'
  ],
  image:
    'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=600&auto=format&fit=crop&q=60',
  github: 'https://github.com/Prix09/diabetes_prediction',
  live: '#',
  impact:
    'Improved predictive accuracy by ~20% and reduced model error by ~15% through optimization and advanced feature engineering'
},
];

const categories = ['AI/ML', 'Full-Stack', 'Frontend'];

// Extracted ProjectCard to manage individual hover states for videos
const ProjectCard = ({ project, index, isInView, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current.play().catch(e => console.log("Video play interrupted", e));
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer rounded-xl overflow-hidden bg-card/40 backdrop-blur-md border dark:border-white/10 border-black/5 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-2xl"
    >
      <div className="relative h-48 overflow-hidden">
        {project.video ? (
           <>
             <img 
              src={project.image} 
              alt={project.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100 group-hover:scale-110'}`}
            />
            <video
              ref={videoRef}
              src={project.video}
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            />
          </>
        ) : (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        )}
       
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500 text-white shadow-sm">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-violet-500 transition-all">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        <div className="flex gap-4">
          {project.github !== '#' && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-sm text-muted-foreground hover:text-blue-400 transition-colors flex items-center gap-1 z-10 relative">
              <Github size={16} /> Code
            </a>
          )}
          {project.live !== '#' && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-sm text-muted-foreground hover:text-blue-400 transition-colors flex items-center gap-1 z-10 relative">
              <ExternalLink size={16} /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState('AI/ML');
  const [selectedProject, setSelectedProject] = useState(null);

 const filteredProjects = projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-violet-950/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real-world applications showcasing my skills
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
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg'
                  : 'bg-secondary hover:bg-secondary/80 text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
             <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                isInView={isInView} 
                onClick={() => setSelectedProject(project)} 
             />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto w-[95vw]">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                {selectedProject.video ? (
                   <video 
                     src={selectedProject.video} 
                     controls
                     autoPlay
                     loop
                     className="w-full h-auto max-h-[50vh] object-contain rounded-lg bg-black/5 border border-border"
                   />
                ) : (
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-64 md:h-80 object-cover rounded-lg"
                  />
                )}
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Overview</h3>
                  <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                        <Sparkles size={16} className="text-blue-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-secondary text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Zap size={20} className="text-blue-400" />
                    Impact
                  </h3>
                  <p className="text-muted-foreground">{selectedProject.impact}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  {selectedProject.github !== '#' && (
                     <a 
                      href={selectedProject.github}
                      target="_blank" rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center gap-2"
                    >
                      <Github size={20} /> View Code
                    </a>
                  )}
                  {selectedProject.live !== '#' && (
                    <a 
                      href={selectedProject.live}
                      target="_blank" rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={20} /> Live Demo
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