import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

const testimonials = [
  {
    company: 'TechVentures Corp',
    initials: 'TV',
    name: 'Carlos Méndez',
    role: 'Director de Operaciones',
    text: 'Lugal Systems transformó por completo nuestra presencia digital. Pasamos de no tener visibilidad online a generar leads de forma consistente cada mes.',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    company: 'InnovaRetail',
    initials: 'IR',
    name: 'María López',
    role: 'CEO',
    text: 'La tienda online que nos desarrollaron incrementó nuestras ventas en un 150% en solo 3 meses. El equipo es excepcional y siempre disponible.',
    gradient: 'from-emerald-500 to-green-500',
  },
  {
    company: 'GrowthPartners',
    initials: 'GP',
    name: 'Andrés García',
    role: 'Fundador',
    text: 'Su enfoque estratégico marcó la diferencia. No solo entregaron un producto increíble, sino que nos ayudaron a entender cómo crecer digitalmente.',
    gradient: 'from-[#c9a96e] to-[#d4b87a]',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-28 bg-[#1a1410]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[rgba(201,169,110,0.15)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a96e] mb-4 block">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Lo que dicen nuestros{' '}
            <span className="text-[#c9a96e]">clientes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group bg-[#231d16] rounded-2xl p-7 border border-[rgba(201,169,110,0.06)] hover:border-[rgba(201,169,110,0.15)] transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} size={14} className="fill-[#c9a96e] text-[#c9a96e]" />
                ))}
              </div>

              <p className="text-[#a89b8c] leading-relaxed mb-6 text-sm italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 pt-5 border-t border-[rgba(201,169,110,0.06)]">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${t.gradient} flex items-center justify-center`}>
                  <span className="text-white text-xs font-bold">{t.initials}</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-[#f5f0eb]">{t.name}</div>
                  <div className="text-xs text-[#7a6e62]">{t.role} — {t.company}</div>
                </div>
                <ExternalLink size={14} className="text-[#7a6e62] group-hover:text-teal-400 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
