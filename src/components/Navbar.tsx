import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Logo = () => (
  <motion.a
    href="#home"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="group relative flex items-center justify-center"
  >
    <div className="absolute inset-0 bg-[#4fd1c5]/20 rounded-full blur-xl group-hover:bg-[#4fd1c5]/30 transition-all duration-500" />
    <div className="relative w-16 h-16 rounded-full bg-dark-section border border-dark-border flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.3)] group-hover:shadow-[0_12px_24px_rgba(79,209,197,0.2)] overflow-hidden group-hover:border-[#4fd1c5]/50 transition-all duration-300">
      <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="flex items-center justify-center">
        <span className="text-[10px] font-black font-display tracking-[0.3em] text-text-primary group-hover:text-[#4fd1c5] transition-colors duration-300">
          IRFAN
        </span>
      </div>
    </div>
  </motion.a>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-4 sm:px-6 lg:px-8 ${
        scrolled ? 'pt-4' : 'pt-6'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 ${
          scrolled
            ? 'bg-dark-section/80 backdrop-blur-xl border border-dark-border shadow-[0_0_30px_rgba(0,0,0,0.5)] rounded-2xl px-6 py-2'
            : 'bg-transparent px-4 py-2'
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2, scale: 1.05, color: '#4fd1c5' }}
                transition={{ duration: 0.3 }}
                className="relative text-text-secondary font-semibold px-3 py-2 rounded-md text-sm font-sans"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4fd1c5] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://github.com/irfanali11"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1, color: '#4fd1c5' }}
              className="text-text-muted transition-all"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/irfan-ali-118a20229"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1, color: '#4fd1c5' }}
              className="text-text-muted transition-all"
            >
              <Linkedin size={20} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-[#4fd1c5] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-section border-b border-dark-border overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-[#4fd1c5] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex space-x-4 px-3 py-2">
                <a
                  href="https://github.com/irfanali11"
                  className="text-text-muted hover:text-[#4fd1c5] transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/irfan-ali-118a20229"
                  className="text-text-muted hover:text-[#4fd1c5] transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}