import React from 'react';
import { motion } from 'framer-motion';
import { Crosshair, Cpu, Fingerprint, TrendingUp, HeadphonesIcon } from 'lucide-react';

const benefits = [
  {
    icon: Crosshair,
    title: 'Enfoque estratégico',
    description: 'Cada solución está alineada con los objetivos de negocio de tu empresa.',
  },
  {
    icon: Cpu,
    title: 'Tecnología moderna',
    description: 'Utilizamos las herramientas más avanzadas del mercado para resultados superiores.',
  },
  {
    icon: Fingerprint,
    title: 'Soluciones personalizadas',
    description: 'Nada genérico. Todo está diseñado específicamente para tu empresa.',
  },
  {
    icon: TrendingUp,
    title: 'Escalabilidad garantizada',
    description: 'Soluciones que crecen con tu empresa sin necesidad de empezar de cero.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Soporte y acompañamiento',
    description: 'Te acompañamos en cada etapa para asegurar el éxito de tu proyecto.',
  },
];

export default function BenefitsSection() {
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
            Ventajas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Por qué trabajar con{' '}
            <span className="text-[#c9a96e]">Lugal Systems</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className={`group relative p-7 rounded-2xl border border-[rgba(201,169,110,0.06)] hover:border-[rgba(201,169,110,0.15)] bg-[#231d16] transition-all duration-500 hover:shadow-lg hover:shadow-black/20 ${
                i === 4 ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''
              }`}
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-emerald-500/10 border border-teal-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon size={22} className="text-teal-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#f5f0eb]">{benefit.title}</h3>
                  <p className="text-sm text-[#a89b8c] leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
