import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="bg-dark-section text-text-primary py-16 border-t border-dark-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Branding & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1 md:col-span-2"
          >
            <motion.a 
              href="#home" 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold font-display tracking-tight text-white mb-6 block w-fit"
            >
              Irfan Haider
            </motion.a>
            <motion.p 
              className="text-text-secondary max-w-sm mb-8 leading-relaxed font-sans"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              AI-focused developer and Full-Stack MERN engineer dedicated to building 
              intelligent and scalable digital solutions for the modern web.
            </motion.p>
            <div className="flex space-x-5">
              {[
                { icon: <Github size={20} />, href: "https://github.com/irfanali11" },
                { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/irfan-ali-118a20229" },
                { icon: <Twitter size={20} />, href: "https://twitter.com" },
                { icon: <Instagram size={20} />, href: "https://instagram.com" },
                { icon: <Mail size={20} />, href: "mailto:irfanalishar196@gmail.com" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -4, scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-10 h-10 bg-dark-card border border-dark-border rounded-lg flex items-center justify-center hover:bg-[#4fd1c5] transition-colors duration-300 text-text-muted hover:text-dark-section shadow-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h4 className="text-lg font-bold font-display mb-6 text-text-primary">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, idx) => (
                <motion.li key={item} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 + idx * 0.05 }}>
                  <motion.a 
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ x: 4, color: "#4fd1c5" }} // Skills section accent
                    className="text-text-secondary hover:text-[#4fd1c5] transition-colors duration-200 font-sans inline-block"
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold font-display mb-6 text-text-primary">Contact</h4>
            <ul className="space-y-4">
              {[
                "irfanalishar196@gmail.com",
                "03061584471",
                "Available for Remote Work"
              ].map((info, idx) => (
                <motion.li 
                  key={idx} 
                  className="text-text-secondary font-sans hover:text-[#4fd1c5] transition-colors duration-200 cursor-default"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 + idx * 0.05 }}
                >
                  {info}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <p className="text-text-secondary text-sm">
            © {currentYear} Irfan Haider. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-text-secondary">
            {["Privacy Policy", "Terms of Service"].map((policy, idx) => (
              <motion.a 
                key={policy}
                href="#"
                whileHover={{ y: -1, color: "#4fd1c5" }}
                className="hover:text-[#4fd1c5] transition-colors duration-200"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.05 }}
              >
                {policy}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}