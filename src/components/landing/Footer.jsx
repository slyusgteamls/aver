import React from 'react';

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Contacto', href: '#contacto' },
];

const socials = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: 'https://instagram.com/teraweb.solutions' },
  { label: 'WhatsApp', href: 'https://wa.me/5491121587726' },
];

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0a0805] pt-16 pb-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[rgba(201,169,110,0.1)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ac70414f3c8803a64f6810/ad7f68692_Logo_simple_recortado-removebg-preview.png"
                alt="Lugal Systems"
                className="w-9 h-9 object-contain rounded-full border-2 border-[#2dd4bf]"
              />
              <span className="text-lg font-semibold text-[#f5f0eb]">
                Lugal <span className="text-[#2dd4bf]">Systems</span>
              </span>
            </div>
            <p className="text-sm text-[#7a6e62] leading-relaxed max-w-sm">
              Soluciones digitales integrales para empresas que buscan crecer, innovar y destacar en el mundo digital.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#c9a96e] mb-5">
              Navegación
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-[#7a6e62] hover:text-[#f5f0eb] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#c9a96e] mb-5">
              Contacto
            </h4>
            <ul className="space-y-3 mb-6">
              <li className="text-sm text-[#7a6e62]">contacto@lugalsystems.com</li>
            </ul>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#c9a96e] mb-4">
              Síguenos
            </h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="px-3 py-1.5 text-xs text-[#7a6e62] border border-[rgba(201,169,110,0.08)] rounded-lg hover:text-[#f5f0eb] hover:border-[rgba(201,169,110,0.2)] transition-all"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[rgba(201,169,110,0.06)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#7a6e62]">
            © {new Date().getFullYear()} Lugal Systems. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-[#7a6e62] hover:text-[#a89b8c] cursor-pointer transition-colors">Política de privacidad</span>
            <span className="text-xs text-[#7a6e62] hover:text-[#a89b8c] cursor-pointer transition-colors">Términos de uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
