import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Plataforma E-commerce Premium',
    type: 'E-commerce · Desarrollo Web',
    description: 'Tienda online con experiencia de usuario premium que incrementó las conversiones en un 200%.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    gradient: 'from-teal-500/20 to-cyan-500/10',
  },
  {
    title: 'Dashboard Empresarial',
    type: 'Automatización · Sistema Digital',
    description: 'Panel de control integral para gestión de operaciones y análisis de datos en tiempo real.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    gradient: 'from-emerald-500/20 to-green-500/10',
  },
  {
    title: 'Campaña de Marketing Digital',
    type: 'Marketing · SEO · SEM',
    description: 'Estrategia integral de marketing digital que triplicó el tráfico orgánico en 6 meses.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop',
    gradient: 'from-[#c9a96e]/20 to-[#d4b87a]/10',
  },
];

export default function PortfolioSection() {
  return (
    <section id="resultados" className="relative py-28 bg-[#0f0b08]">
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
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Proyectos y{' '}
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              resultados
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden bg-[#1a1410] border border-[rgba(201,169,110,0.06)] hover:border-[rgba(45,212,191,0.2)] transition-all duration-500">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} to-transparent opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <span className="text-xs font-medium text-teal-400 uppercase tracking-wider">
                    {project.type}
                  </span>
                  <h3 className="text-lg font-bold mt-2 mb-2 text-[#f5f0eb] group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#a89b8c] leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-teal-400 group-hover:gap-3 transition-all duration-300">
                    Ver proyecto <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
