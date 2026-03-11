import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-[#0f0b08]">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-teal-500/[0.07] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-emerald-500/[0.05] rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a96e]/[0.03] rounded-full blur-[150px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(201,169,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(201,169,110,0.2)] bg-[rgba(201,169,110,0.06)] mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-xs font-medium text-[#c9a96e] tracking-wide uppercase">
                Soluciones digitales integrales
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
            >
              Soluciones digitales que{' '}
              <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
                impulsan el crecimiento
              </span>{' '}
              de tu empresa
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="text-lg text-[#a89b8c] leading-relaxed max-w-xl mb-10"
            >
              Ayudamos a empresas a mejorar su presencia digital, automatizar procesos y generar más oportunidades de negocio mediante desarrollo web, marketing digital y soluciones tecnológicas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollTo('#contacto')}
                className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-300 hover:scale-[1.02] flex items-center gap-2"
              >
                Agendar una reunión
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('#soluciones')}
                className="px-8 py-4 border border-[rgba(201,169,110,0.2)] text-[#f5f0eb] font-medium rounded-full hover:bg-white/[0.04] hover:border-[rgba(201,169,110,0.35)] transition-all duration-300 flex items-center gap-2"
              >
                <Play size={16} className="text-[#c9a96e]" />
                Ver soluciones
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex gap-10 mt-14 pt-10 border-t border-[rgba(201,169,110,0.08)]"
            >
              {[
                { value: '50+', label: 'Proyectos' },
                { value: '98%', label: 'Satisfacción' },
                { value: '3x', label: 'ROI promedio' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-[#2dd4bf]">{stat.value}</div>
                  <div className="text-xs text-[#7a6e62] mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-emerald-500/10 rounded-3xl blur-3xl" />
              
              {/* Main card */}
              <div className="relative bg-[#231d16] rounded-3xl border border-[rgba(201,169,110,0.1)] p-8 shadow-2xl">
                {/* Dashboard mockup */}
                <div className="space-y-6">
                  {/* Top bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                      <div className="w-3 h-3 rounded-full bg-green-400/60" />
                    </div>
                    <div className="h-6 w-48 bg-white/[0.05] rounded-full" />
                  </div>
                  
                  {/* Charts area */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: 'Tráfico', value: '+127%', color: 'from-teal-400 to-teal-500' },
                      { label: 'Conversión', value: '+43%', color: 'from-emerald-400 to-emerald-500' },
                      { label: 'Ingresos', value: '+89%', color: 'from-[#c9a96e] to-[#d4b87a]' },
                    ].map((item) => (
                      <div key={item.label} className="bg-white/[0.03] rounded-xl p-4 border border-white/[0.04]">
                        <div className="text-xs text-[#7a6e62] mb-2">{item.label}</div>
                        <div className={`text-xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart bars */}
                  <div className="bg-white/[0.02] rounded-xl p-5 border border-white/[0.04]">
                    <div className="flex items-end gap-3 h-32">
                      {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 1 + i * 0.05, duration: 0.5 }}
                          className="flex-1 bg-gradient-to-t from-teal-500/60 to-teal-400/20 rounded-t-md"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-[#231d16] rounded-2xl border border-[rgba(201,169,110,0.12)] p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center">
                    <ArrowRight size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-[#7a6e62]">Crecimiento mensual</div>
                    <div className="text-sm font-semibold text-emerald-400">+34.2%</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
