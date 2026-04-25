import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "https://instagram.com", label: "Instagram" }
  ];

  return (
    <section id="contact" className="py-24 bg-dark-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold font-display tracking-tight text-text-primary mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1.5 bg-[#4fd1c5] mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl font-bold font-display tracking-tight text-text-primary mb-6"
            >
              Let's discuss your next project
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-text-secondary mb-10 leading-relaxed font-sans"
            >
              Whether you have a question about my work, want to discuss a potential collaboration, 
              or just want to say hi, I'd love to hear from you.
            </motion.p>

            <div className="space-y-6">
              {[
                { icon: <Mail size={24} />, label: "Email Me", value: "irfanalishar196@gmail.com", href: "mailto:irfanalishar196@gmail.com" },
                { icon: <Phone size={24} />, label: "Call Me", value: "03061584471", href: "tel:03061584471" },
                { icon: <MapPin size={24} />, label: "Location", value: "Available for Remote & Relocation" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white group-hover:bg-[#4fd1c5] group-hover:text-dark-section transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-text-muted font-medium">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-lg font-bold text-text-primary hover:text-[#4fd1c5] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-bold text-text-primary">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-12 pt-12 border-t border-dark-border"
            >
              <p className="text-sm font-bold text-text-muted uppercase tracking-wider mb-6">Follow Me</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, backgroundColor: "#4fd1c5", color: "#000" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-dark-card border border-dark-border rounded-xl flex items-center justify-center text-text-muted transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-dark-card p-8 md:p-10 rounded-3xl border border-dark-border shadow-[0_10px_40px_-10px_rgba(79,209,197,0.2)] hover:shadow-[0_15px_50px_-15px_rgba(79,209,197,0.3)] transition-all"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["Full Name", "Email Address"].map((label, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i*0.1 }}
                  >
                    <label className="block text-sm font-semibold text-text-secondary mb-2 font-sans">{label}</label>
                    <motion.input 
                      type={label === "Email Address" ? "email" : "text"} 
                      placeholder={label === "Email Address" ? "john@example.com" : "John Doe"}
                      whileFocus={{ scale: 1.02, borderColor: "#4fd1c5", boxShadow: "0 0 12px #4fd1c5/50" }}
                      className="w-full px-4 py-3 rounded-xl bg-dark-section border border-dark-border text-text-primary font-sans focus:outline-none transition-all duration-300"
                    />
                  </motion.div>
                ))}
              </div>

              {["Subject", "Message"].map((label, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i*0.1 }}
                >
                  <label className="block text-sm font-semibold text-text-secondary mb-2 font-sans">{label}</label>
                  {label === "Message" ? (
                    <motion.textarea
                      rows={4} 
                      placeholder="Tell me about your project..."
                      whileFocus={{ scale: 1.02, borderColor: "#4fd1c5", boxShadow: "0 0 12px #4fd1c5/50" }}
                      className="w-full px-4 py-3 rounded-xl bg-dark-section border border-dark-border text-text-primary font-sans focus:outline-none transition-all duration-300 resize-none"
                    ></motion.textarea>
                  ) : (
                    <motion.input 
                      type="text"
                      placeholder="Project Inquiry"
                      whileFocus={{ scale: 1.02, borderColor: "#4fd1c5", boxShadow: "0 0 12px #4fd1c5/50" }}
                      className="w-full px-4 py-3 rounded-xl bg-dark-section border border-dark-border text-text-primary font-sans focus:outline-none transition-all duration-300"
                    />
                  )}
                </motion.div>
              ))}

              <motion.button 
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px #4fd1c5/50", y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#4fd1c5] text-dark-section font-bold rounded-xl transition-all shadow-lg shadow-[#4fd1c5]/20"
              >
                Send Message
                <Send className="ml-2" size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}