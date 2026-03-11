import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Eye, Zap, Target } from 'lucide-react';

const problems = [
  {
    icon: Globe,
    title: 'Páginas web desactualizadas',
    description: 'Tu sitio web no refleja la calidad de tu negocio y aleja a potenciales clientes.',
  },
  {
    icon: Eye,
    title: 'Baja visibilidad online',
    description: 'Tus competidores te superan en búsquedas y tus clientes no te encuentran.',
  },
  {
    icon: Zap,
    title: 'Procesos digitales ineficientes',
    description: 'Pierdes tiempo y recursos en tareas que podrían estar automatizadas.',
  },
  {
    icon: Target,
    title: 'Falta de estrategia digital',
    description: 'Sin un plan claro, tus esfuerzos digitales no generan resultados medibles.',
  },
];

export default function ProblemSection() {
  return (
    <section className="relative py-28 bg-[#1a1410]">
      {/* Subtle divider glow */}
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
            El problema
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            La mayoría de las empresas{' '}
            <span className="text-[#c9a96e]">pierde oportunidades</span>{' '}
            por una mala presencia digital
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative bg-[#231d16] rounded-2xl p-7 border border-[rgba(201,169,110,0.06)] hover:border-[rgba(201,169,110,0.15)] transition-all duration-500 hover:shadow-xl hover:shadow-black/20"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <problem.icon size={22} className="text-red-400/70" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#f5f0eb]">{problem.title}</h3>
              <p className="text-sm text-[#a89b8c] leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
