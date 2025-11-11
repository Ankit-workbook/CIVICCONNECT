'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    'Quick Links': [
      { label: 'Report Issue', href: '/report' },
      { label: 'Track Reports', href: '/track' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    'Information': [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
    'Resources': [
      { label: 'Help Center', href: '/help' },
      { label: 'Guidelines', href: '/guidelines' },
      { label: 'Admin Login', href: '/admin' },
      { label: 'Sitemap', href: '/sitemap' },
    ],
  };

  return (
    <footer className="bg-slate-900 text-white border-t-4 border-blue-600 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-indigo-900/20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="bg-blue-600 rounded-lg p-2"
              >
                <MapPin className="h-6 w-6 text-white" />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                CivicConnect
              </span>
            </Link>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Official civic issue reporting portal for citizens to report and track public infrastructure concerns.
            </p>
            <div className="space-y-2 text-sm">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>support@civicconnect.gov</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>1800-XXX-XXXX (Toll Free)</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], columnIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: columnIndex * 0.1 }}
            >
              <h3 className="font-bold mb-4 text-white">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-all text-sm flex items-center gap-1 group"
                    >
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="inline-block"
                      >
                        {link.label}
                      </motion.span>
                      {link.label === 'Admin Login' && (
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-slate-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left flex items-center gap-1">
              © {new Date().getFullYear()} CivicConnect. Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-red-500 inline" />
              </motion.span>{' '}
              for better communities
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-gray-300 transition-colors">
                Terms of Service
              </Link>
              <span>•</span>
              <Link href="/accessibility" className="hover:text-gray-300 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
