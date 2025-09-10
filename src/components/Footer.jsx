
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Mail, href: 'mailto:jesse.miller@email.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleSocialClick = (href, label) => {
    if (href.startsWith('mailto:')) {
      window.location.href = href;
    } else if (href === '#') {
      toast({
        title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
      });
    }
  };

  const handleQuickLinkClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-2xl font-bold gradient-text mb-4 block">Jesse Miller</span>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Frontend Developer passionate about creating beautiful, 
              functional web experiences with modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.button
                  key={social.label}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleSocialClick(social.href, social.label)}
                  className="p-2 glass-effect rounded-lg hover:glow-effect transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold mb-4 block">Quick Links</span>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleQuickLinkClick(link.href)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold mb-4 block">Get In Touch</span>
            <div className="space-y-3 text-gray-400">
              <p>San Francisco, CA</p>
              <p>jesse.miller@email.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Jesse Miller. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> and lots of coffee
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
