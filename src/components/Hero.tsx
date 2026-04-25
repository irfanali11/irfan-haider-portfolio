import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/1000434464.png';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 md:pt-40 overflow-hidden bg-dark-bg">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#4fd1c5]/20 rounded-full blur-3xl animate-pulse opacity-50" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#22d3ee]/20 rounded-full blur-3xl animate-pulse opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-[#4fd1c5] uppercase bg-[#4fd1c5]/10 rounded-full border border-[#4fd1c5]/20"
            >
              Available for Internships & Projects
            </motion.span>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold font-display text-text-primary tracking-tight leading-[1.1] mb-6"
            >
              AI Developer & <br />
              <span className="gradient-text">Full-Stack Engineer</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-text-secondary mb-10 max-w-xl leading-relaxed font-sans"
            >
              Building intelligent, scalable, and user-focused digital solutions. 
              Specializing in the MERN stack and AI-driven applications.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >

              <motion.a 
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center px-8 py-4 bg-[#4fd1c5] text-dark-section font-semibold rounded-xl hover:bg-[#38b2ac] transition-all duration-300 shadow-lg shadow-[#4fd1c5]/20"
              >
                View Projects <ArrowRight className="ml-2" size={20} />
              </motion.a>

              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center px-8 py-4 bg-dark-card text-text-primary font-semibold rounded-xl border border-dark-border hover:border-[#4fd1c5] hover:text-[#4fd1c5] transition-all duration-300"
              >
                Contact Me
              </motion.a>

              <motion.a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center px-8 py-4 text-text-secondary hover:text-[#4fd1c5] font-medium transition-colors duration-300"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </motion.a>

            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative group w-full aspect-square rounded-3xl overflow-hidden border border-dark-border shadow-2xl">

              <img 
                src={profileImg}
                alt="Irfan Haider"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-110 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-[#4fd1c5]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#4fd1c5]/30 rounded-2xl blur-2xl animate-pulse -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-[#4fd1c5]/30 rounded-2xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}