import { motion } from 'motion/react';
import { Layout, Server, Database, Brain, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout size={20} />,
    skills: ["React.js", "Next.js", "Tailwind CSS", "Redux", "TypeScript"]
  },
  {
    title: "Backend",
    icon: <Server size={20} />,
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.io", "JWT"]
  },
  {
    title: "Database",
    icon: <Database size={20} />,
    skills: ["MongoDB", "PostgreSQL", "Firebase", "Redis"]
  },
  {
    title: "AI / Data",
    icon: <Brain size={20} />,
    skills: ["Python", "Pandas", "NumPy", "Scikit-Learn", "TensorFlow"]
  },
  {
    title: "Tools",
    icon: <Wrench size={20} />,
    skills: ["Git", "GitHub", "Postman", "Docker", "VS Code"]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
  };

  const barVariants = {
    hidden: { width: "0%" },
    visible: { width: "100%", transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] } },
  };

  return (
    <section id="skills" className="py-24 bg-dark-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-display tracking-tight text-text-primary mb-4"
          >
            Technical Skills
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            className="h-1.5 bg-brand-primary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.3, ease: "easeOut" } }}
              className="bg-dark-card p-8 rounded-2xl border border-dark-border hover:border-[#4fd1c5]/50 hover:shadow-[0_15px_50px_-15px_rgba(79,209,197,0.2)] transition-all group relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4fd1c5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon & Title */}
              <h3 className="text-xl font-bold font-display text-white mb-6 flex items-center relative z-10">
                <motion.div 
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: idx * 0.1 }}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white mr-4 group-hover:bg-[#4fd1c5] group-hover:text-dark-section transition-all duration-300 shadow-sm"
                >
                  {category.icon}
                </motion.div>
                {category.title}
              </h3>

              {/* Skill Items */}
              <motion.div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    variants={skillVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex flex-col group/skill w-full"
                  >
                    <div className="px-4 py-2 bg-dark-section text-text-secondary text-sm font-medium font-sans rounded-lg border border-dark-border group-hover/skill:border-[#4fd1c5] group-hover/skill:bg-[#4fd1c5]/10 transition-all cursor-default">
                      {skill}
                    </div>
                    <div className="h-1 bg-white/10 mt-1.5 rounded-full overflow-hidden w-full">
                      <motion.div className="h-full bg-[#4fd1c5]" variants={barVariants} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}