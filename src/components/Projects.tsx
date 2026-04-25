import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, X } from 'lucide-react';

const projects = [
  {
    title: "My Lumina",
    description: "Task Manager App",
    image: "https://picsum.photos/seed/lumina/600/400",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/irfanali11/My-Lumina",
    demo: ""
  },
  {
    title: "Sales Prediction Using Machine Learning",
    description: "ML project for predicting sales.",
    image: "https://picsum.photos/seed/sales/600/400",
    tags: ["Python", "Machine Learning", "Pandas"],
    github: "https://github.com/irfanali11/ML-Project-Sales-Prediction-Using-Machine-Learning",
    demo: ""
  },
  {
    title: "Product Card Task",
    description: "Responsive product card UI task.",
    image: "https://picsum.photos/seed/product/600/400",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/irfanali11/Product-Card-Task",
    demo: ""
  }
];

export default function Projects() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (!activeTag) return projects;
    return projects.filter(project => project.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <section id="projects" className="py-24 bg-dark-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold font-display tracking-tight text-text-primary mb-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }
              }}
            >
              Featured Projects
            </motion.h2>
            <motion.div 
              className="h-1.5 bg-brand-primary mx-auto md:mx-0 rounded-full"
              variants={{
                hidden: { width: 0, opacity: 0 },
                visible: { width: 80, opacity: 1, transition: { delay: 0.4, duration: 0.8 } }
              }}
            />
          </motion.div>
          <motion.p 
            className="text-text-secondary max-w-md font-sans leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } }
            }}
          >
            A selection of my recent work, showcasing web apps, ML projects, and UI tasks.
          </motion.p>
        </motion.div>

        {/* Filter Indicator */}
        <AnimatePresence mode="wait">
          {activeTag && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="text-text-muted text-sm font-medium">Filtering by:</span>
              <button 
                onClick={() => setActiveTag(null)}
                className="flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-sm font-bold rounded-full border border-white/30 hover:bg-white/20 transition-colors group"
              >
                {activeTag}
                <X size={14} className="group-hover:scale-110 transition-transform" />
              </button>
              <button 
                onClick={() => setActiveTag(null)}
                className="text-text-muted hover:text-brand-primary text-xs font-medium underline underline-offset-4 transition-colors"
              >
                Clear all
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -5, boxShadow: "0 20px 60px rgba(79,209,197,0.25)" }}
                className="group bg-dark-card rounded-3xl overflow-hidden border border-dark-border hover:border-[#4fd1c5]/50 transition-all"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#4fd1c5]/10 opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-3xl" />
                </div>

                {/* Project Details */}
                <div className="p-8">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tIdx) => (
                      <motion.button 
                        key={tIdx} 
                        onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                        whileHover={{ scale: 1.1 }}
                        className={`px-3 py-1 text-xs font-bold rounded-full border uppercase tracking-wider transition-all duration-300 ${
                          tag === activeTag 
                            ? 'bg-[#4fd1c5] text-dark-section border-[#4fd1c5]' 
                            : 'bg-dark-section text-text-secondary border-dark-border hover:border-[#4fd1c5] hover:bg-[#4fd1c5]/10'
                        }`}
                      >
                        {tag}
                      </motion.button>
                    ))}
                  </div>

                  {/* Title */}
                  <motion.h3
                    className="text-2xl font-bold font-display tracking-tight text-text-primary mb-3 group-hover:text-white origin-left"
                    whileHover={{ x: 2 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    {project.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-text-secondary mb-6 line-clamp-2 font-sans leading-relaxed">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    {project.github && (
                      <motion.a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ x: 3 }}
                        className="flex items-center text-text-muted hover:text-[#4fd1c5] font-semibold transition-colors duration-300"
                      >
                        <Github size={20} className="mr-2" />
                        Code
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ x: 3 }}
                        className="flex items-center text-text-muted hover:text-[#4fd1c5] font-semibold transition-colors duration-300"
                      >
                        <ExternalLink size={20} className="mr-2" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}