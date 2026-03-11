import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: '¿Qué tipo de empresas pueden trabajar con Lugal Systems?',
    answer: 'Trabajamos con empresas de todos los tamaños que buscan mejorar su presencia digital, desde startups hasta corporaciones. Nuestras soluciones se adaptan a las necesidades y presupuesto de cada organización.',
  },
  {
    question: '¿Cuánto tarda el desarrollo de un proyecto?',
    answer: 'El tiempo depende de la complejidad del proyecto. Una página web profesional puede estar lista en 2-4 semanas, mientras que soluciones más complejas como e-commerce o sistemas de automatización pueden tomar de 4 a 8 semanas.',
  },
  {
    question: '¿Ofrecen mantenimiento o soporte?',
    answer: 'Sí, ofrecemos planes de mantenimiento y soporte continuo para asegurar que tu solución digital funcione de manera óptima. Esto incluye actualizaciones, monitoreo de rendimiento y soporte técnico.',
  },
  {
    question: '¿Se pueden escalar las soluciones en el futuro?',
    answer: 'Absolutamente. Todas nuestras soluciones están diseñadas con escalabilidad en mente. A medida que tu empresa crece, podemos adaptar y ampliar las funcionalidades sin necesidad de empezar desde cero.',
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-[rgba(201,169,110,0.08)] last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className={`text-base font-medium pr-8 transition-colors duration-300 ${
          isOpen ? 'text-[#f5f0eb]' : 'text-[#a89b8c] group-hover:text-[#f5f0eb]'
        }`}>
          {faq.question}
        </span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          isOpen ? 'bg-teal-500/20 text-teal-400' : 'bg-white/[0.04] text-[#7a6e62]'
        }`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm text-[#a89b8c] leading-relaxed max-w-3xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-28 bg-[#0f0b08]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[rgba(45,212,191,0.15)] to-transparent" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400 mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Preguntas{' '}
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              frecuentes
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="bg-[#1a1410] rounded-2xl border border-[rgba(201,169,110,0.06)] px-8"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
