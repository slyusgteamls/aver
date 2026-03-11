import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Clock, CheckCircle2 } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" width="25" height="25" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.002 3C9.373 3 4 8.373 4 15.002c0 2.137.563 4.14 1.54 5.88L4 29l8.352-1.516A12.94 12.94 0 0016.002 28C22.63 28 28 22.627 28 16.002 28 9.373 22.63 3 16.002 3zm0 23.6a10.55 10.55 0 01-5.38-1.47l-.386-.23-3.99.724.754-3.895-.252-.4A10.563 10.563 0 015.4 15.002C5.4 9.147 10.147 4.4 16.002 4.4S26.6 9.147 26.6 15.002 21.856 26.6 16.002 26.6zm5.79-7.887c-.317-.158-1.874-.924-2.164-1.03-.29-.104-.5-.158-.71.16-.21.317-.813 1.03-.997 1.24-.184.21-.368.235-.685.08-.317-.159-1.338-.493-2.549-1.572-.942-.838-1.578-1.874-1.763-2.19-.184-.316-.02-.487.138-.645.143-.141.317-.368.476-.553.158-.184.21-.316.315-.527.105-.21.053-.395-.026-.553-.08-.158-.71-1.71-.974-2.343-.256-.614-.517-.531-.71-.541-.184-.009-.395-.011-.605-.011-.21 0-.553.08-.843.395-.29.316-1.106 1.08-1.106 2.633s1.132 3.054 1.29 3.264c.158.21 2.228 3.4 5.397 4.768.754.326 1.343.52 1.8.666.757.24 1.446.206 1.99.125.607-.09 1.874-.766 2.138-1.505.264-.74.264-1.374.185-1.505-.079-.132-.29-.21-.607-.368z"/>
  
  </svg>
);

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', company: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', phone: '', company: '', message: '' });
  };

  return (
    <section id="contacto" className="relative py-28 bg-[#1a1410]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[rgba(201,169,110,0.15)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a96e] mb-4 block">
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
              Agenda tu reunión{' '}
              <span className="text-[#c9a96e]">gratuita</span>
            </h2>
            <p className="text-[#a89b8c] leading-relaxed mb-10">
              Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas con una propuesta personalizada.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/10 flex items-center justify-center">
                  <Phone size={20} className="text-teal-400" />
                </div>
                <div>
                  <div className="text-sm text-[#7a6e62]">WhatsApp / Teléfono</div>
                  <div className="text-[#f5f0eb] font-medium">+54 9 11 2158-7726</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#c9a96e]/10 border border-[#c9a96e]/10 flex items-center justify-center">
                  <Clock size={20} className="text-[#c9a96e]" />
                </div>
                <div>
                  <div className="text-sm text-[#7a6e62]">Tiempo de respuesta</div>
                  <div className="text-[#f5f0eb] font-medium">Menos de 24 horas</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="bg-[#231d16] rounded-2xl border border-[rgba(201,169,110,0.08)] p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-[#7a6e62] uppercase tracking-wider mb-2 block">
                    Nombre
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/[0.03] border border-[rgba(201,169,110,0.08)] rounded-xl text-[#f5f0eb] text-sm placeholder:text-[#7a6e62] focus:border-teal-500/30 focus:outline-none focus:ring-1 focus:ring-teal-500/20 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#7a6e62] uppercase tracking-wider mb-2 block">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white/[0.03] border border-[rgba(201,169,110,0.08)] rounded-xl text-[#f5f0eb] text-sm placeholder:text-[#7a6e62] focus:border-teal-500/30 focus:outline-none focus:ring-1 focus:ring-teal-500/20 transition-all"
                    placeholder="+54 9 00-0000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-[#7a6e62] uppercase tracking-wider mb-2 block">
                  Empresa
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-[rgba(201,169,110,0.08)] rounded-xl text-[#f5f0eb] text-sm placeholder:text-[#7a6e62] focus:border-teal-500/30 focus:outline-none focus:ring-1 focus:ring-teal-500/20 transition-all"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label className="text-xs text-[#7a6e62] uppercase tracking-wider mb-2 block">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-[rgba(201,169,110,0.08)] rounded-xl text-[#f5f0eb] text-sm placeholder:text-[#7a6e62] focus:border-teal-500/30 focus:outline-none focus:ring-1 focus:ring-teal-500/20 transition-all resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className={`w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 ${
                  sent
                    ? 'bg-emerald-500'
                    : 'bg-gradient-to-r from-teal-500 to-emerald-500 hover:shadow-lg hover:shadow-teal-500/20 hover:scale-[1.01]'
                }`}
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={18} />
                    Mensaje enviado
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.link/m3au1q"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        style={{ background: 'linear-gradient(135deg, #25d366 60%, #128c7e)', width: '45px', height: '45px', padding: '10px' }}
      >
        <WhatsAppIcon />
      </a>
    </section>
  );
}
