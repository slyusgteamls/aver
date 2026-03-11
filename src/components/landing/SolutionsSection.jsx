import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, BarChart3, ShoppingCart, Settings } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const solutions = [
  {
    icon: Monitor,
    title: 'Desarrollo Web Profesional',
    description: 'Diseño de páginas web rápidas, modernas y optimizadas para convertir visitantes en clientes.',
    gradient: 'from-teal-500 to-cyan-500',
    bgGlow: 'bg-teal-500/10',
  },
  {
    icon: BarChart3,
    title: 'Marketing Digital',
    description: 'Estrategias para aumentar visibilidad, tráfico y generación de oportunidades de negocio.',
    gradient: 'from-emerald-500 to-green-500',
    bgGlow: 'bg-emerald-500/10',
  },
  {
    icon: ShoppingCart,
    title: 'Soluciones E-commerce',
    description: 'Tiendas online optimizadas para vender y escalar tu negocio digital.',
    gradient: 'from-[#c9a96e] to-[#d4b87a]',
    bgGlow: 'bg-[#c9a96e]/10',
  },
  {
    icon: Settings,
    title: 'Automatización y Sistemas',
    description: 'Optimización de procesos empresariales mediante herramientas digitales inteligentes.',
    gradient: 'from-violet-500 to-purple-500',
    bgGlow: 'bg-violet-500/10',
  },
];

export default function SolutionsSection() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="soluciones" className="relative py-28 bg-[#0f0b08]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[rgba(45,212,191,0.15)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400 mb-4 block">
            Nuestras soluciones
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            Soluciones digitales{' '}
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              a medida
            </span>
          </h2>
          <p className="text-[#a89b8c] mt-5 max-w-2xl mx-auto text-lg">
            Cada empresa es única. Diseñamos soluciones adaptadas a tus necesidades específicas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative bg-[#1a1410] rounded-2xl p-8 border border-[rgba(201,169,110,0.06)] hover:border-[rgba(45,212,191,0.2)] transition-all duration-500 cursor-pointer overflow-hidden"
              onClick={() => scrollTo('#contacto')}
            >
              {/* Hover glow */}
              <div className={`absolute top-0 right-0 w-40 h-40 ${sol.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sol.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <sol.icon size={26} className="text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-[#f5f0eb] group-hover:text-white transition-colors">
                  {sol.title}
                </h3>
                <p className="text-[#a89b8c] leading-relaxed mb-6">
                  {sol.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-medium text-teal-400 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Saber más <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
