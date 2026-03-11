import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Análisis de necesidades',
    description: 'Entendemos a fondo tu empresa, tus objetivos y los retos que enfrentas en el entorno digital.',
  },
  {
    num: '02',
    icon: Lightbulb,
    title: 'Estrategia digital',
    description: 'Diseñamos un plan personalizado con las soluciones más adecuadas para alcanzar tus metas.',
  },
  {
    num: '03',
    icon: Code2,
    title: 'Desarrollo e implementación',
    description: 'Construimos y lanzamos tu solución con las mejores prácticas y tecnologías del mercado.',
  },
  {
    num: '04',
    icon: Rocket,
    title: 'Optimización y crecimiento',
    description: 'Monitoreamos, optimizamos y escalamos los resultados de forma continua.',
  },
];

export default function ProcessSection() {
  return (
    <section id="proceso" className="relative py-28 bg-[#0f0b08]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[rgba(45,212,191,0.15)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400 mb-4 block">
            Metodología
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Nuestro{' '}
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              proceso
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line - desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(45,212,191,0.2)] to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative text-center lg:text-left"
              >
                {/* Number */}
                <div className="flex justify-center lg:justify-start mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-[#1a1410] border border-[rgba(45,212,191,0.15)] flex items-center justify-center relative z-10">
                      <step.icon size={24} className="text-teal-400" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-xs font-bold text-white shadow-lg">
                      {step.num}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-3 text-[#f5f0eb]">{step.title}</h3>
                <p className="text-sm text-[#a89b8c] leading-relaxed">{step.description}</p>

                {/* Arrow connector - desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[52px] -right-3 text-[rgba(45,212,191,0.3)]">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
