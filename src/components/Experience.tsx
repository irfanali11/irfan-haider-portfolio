import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: "MERN Stack Intern",
    company: "Tech Solutions Inc.",
    period: "Jan 2024 - Present",
    description: [
      "Developing and maintaining full-stack web applications using React, Node.js, and MongoDB.",
      "Collaborating with senior developers to implement responsive UI components and RESTful APIs.",
      "Optimizing database queries which improved application performance by 25%.",
      "Participating in agile ceremonies and code reviews to ensure high-quality software delivery."
    ]
  },
  {
    title: "Machine Learning Intern",
    company: "Prodigy InfoTech",
    period: "June 2023 - Dec 2023",
    description: [
      "Implemented various machine learning models including Linear Regression, Decision Trees, and K-Means clustering.",
      "Performed data preprocessing, cleaning, and exploratory data analysis on large datasets using Python.",
      "Developed a predictive model for customer churn with an accuracy of 88%.",
      "Documented technical workflows and presented findings to the project stakeholders."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-display tracking-tight text-text-primary mb-4"
          >
            Work Experience
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            className="h-1.5 bg-brand-primary mx-auto rounded-full"
          />
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative pl-8 pb-12 border-l-2 border-white/10 last:border-0 last:pb-0"
            >
              {/* Timeline Dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (idx * 0.15) + 0.3, type: "spring", stiffness: 200 }}
                className="absolute left-[-9px] top-0 w-4 h-4 bg-brand-primary rounded-full border-4 border-dark-bg shadow-sm"
              />

              {/* Experience Card */}
              <div className="bg-dark-card p-8 rounded-2xl border border-dark-border hover:border-white/30 hover:shadow-[0_15px_50px_-15px_rgba(79,209,197,0.2)] transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-xl font-bold font-display tracking-tight text-text-primary">{exp.title}</h3>
                    <div className="flex items-center text-white font-medium mt-1">
                      <Briefcase size={16} className="mr-2" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center text-text-muted text-sm bg-dark-section px-4 py-2 rounded-full border border-dark-border">
                    <Calendar size={16} className="mr-2" />
                    {exp.period}
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.description.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start text-text-secondary font-sans leading-relaxed">
                      <span className="text-brand-primary mr-3 mt-1.5">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}