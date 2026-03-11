import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-28 bg-[#1a1410] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[rgba(201,169,110,0.15)] to-transparent" />

      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-teal-500/[0.06] rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-[#c9a96e]/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/[0.06] mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-medium text-teal-400 tracking-wide uppercase">
              Da el siguiente paso
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Impulsa la presencia digital{' '}
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
              de tu empresa
            </span>
          </h2>

          <p className="text-lg text-[#a89b8c] max-w-2xl mx-auto mb-10 leading-relaxed">
            Agenda una reunión y descubre cómo podemos ayudarte a crecer digitalmente. Sin compromiso, sin costo.
          </p>

          <button
            onClick={() => scrollTo('#contacto')}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 hover:scale-[1.03]"
          >
            Agendar reunión
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="mt-6 text-sm text-[#7a6e62]">
            Respuesta garantizada en menos de 24 horas
          </p>
        </motion.div>
      </div>
    </section>
  );
}
