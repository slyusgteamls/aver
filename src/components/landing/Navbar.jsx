import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#1a1410]/90 backdrop-blur-xl border-b border-[rgba(201,169,110,0.08)] shadow-2xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollTo('#inicio'); }} className="flex items-center gap-3 group">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ac70414f3c8803a64f6810/ad7f68692_Logo_simple_recortado-removebg-preview.png"
              alt="Lugal Systems"
              className="w-9 h-9 object-contain rounded-full border-2 border-[#2dd4bf]"
            />
            <span className="text-lg font-semibold tracking-tight text-[#f5f0eb] group-hover:text-[#c9a96e] transition-colors">
              Lugal <span className="text-[#2dd4bf]">Systems</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm text-[#a89b8c] hover:text-[#f5f0eb] transition-colors duration-300 rounded-lg hover:bg-white/[0.04]"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollTo('#contacto')}
              className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 hover:scale-[1.02]"
            >
              Agendar reunión
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#a89b8c] hover:text-[#f5f0eb]"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1a1410]/95 backdrop-blur-xl border-t border-[rgba(201,169,110,0.08)]"
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left px-4 py-3 text-[#a89b8c] hover:text-[#f5f0eb] hover:bg-white/[0.04] rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('#contacto')}
                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-medium rounded-full"
              >
                Agendar reunión
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
