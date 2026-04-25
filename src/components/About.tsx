import { motion } from 'motion/react';
import { Brain, Code, Database, LineChart } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Brain size={24} />,
      title: "AI-Focused Developer",
      desc: "Passionate about integrating machine learning and AI into modern web applications."
    },
    {
      icon: <Code size={24} />,
      title: "MERN Stack Expert",
      desc: "Building robust full-stack solutions using MongoDB, Express, React, and Node.js."
    },
    {
      icon: <LineChart size={24} />,
      title: "Data Analytics",
      desc: "Experience in processing and analyzing data to drive intelligent decision-making."
    },
    {
      icon: <Database size={24} />,
      title: "Scalable Systems",
      desc: "Designing database architectures that grow with your user base."
    }
  ];

  return (
    <section id="about" className="py-24 bg-dark-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-text-primary mb-4">
            About Me
          </h2>
          <div className="h-1.5 bg-[#4fd1c5] mx-auto rounded-full w-20" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Description + Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.h3
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold font-display tracking-tight text-text-primary mb-6 leading-snug"
            >
              I'm Irfan Haider, a developer passionate about the intersection of <span className="text-[#4fd1c5]">AI and Web Engineering</span>.
            </motion.h3>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6 }}
              className="text-text-secondary mb-6 leading-relaxed font-sans"
            >
              With a strong foundation in the MERN stack and a growing expertise in Machine Learning, 
              I bridge the gap between complex data algorithms and user-friendly interfaces. 
              My goal is to build digital products that aren't just functional, but intelligent.
            </motion.p>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-text-secondary mb-8 leading-relaxed font-sans"
            >
              I've completed internships focusing on both full-stack development and machine learning, 
              giving me a unique perspective on how to leverage data to solve real-world problems. 
              I'm currently looking for international opportunities to bring my skills to a global stage.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="p-4 bg-[rgba(79,209,197,0.1)] rounded-xl border border-[rgba(79,209,197,0.2)]">
                <div className="text-3xl font-bold text-[#4fd1c5] mb-1">2+</div>
                <div className="text-sm text-text-muted font-medium">Years Experience</div>
              </div>
              <div className="p-4 bg-[rgba(79,209,197,0.1)] rounded-xl border border-[rgba(79,209,197,0.2)]">
                <div className="text-3xl font-bold text-[#4fd1c5] mb-1">15+</div>
                <div className="text-sm text-text-muted font-medium">Projects Completed</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Highlight Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.5 }}
                className="p-6 bg-dark-card border border-dark-border rounded-2xl 
                           hover:border-[rgba(79,209,197,0.4)] hover:bg-[rgba(79,209,197,0.15)] 
                           hover:shadow-[0_10px_40px_-10px_rgba(79,209,197,0.25)] 
                           transition-all group cursor-pointer"
              >
                <motion.div
                  className="w-12 h-12 bg-[rgba(79,209,197,0.1)] rounded-lg flex items-center justify-center mb-4 
                             group-hover:bg-[rgba(79,209,197,0.4)] group-hover:text-black transition-colors text-[#4fd1c5]"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                </motion.div>
                <h4 className="text-lg font-bold font-display text-text-primary mb-2">{item.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed font-sans">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}