'use client'

import { IoLogoYoutube, IoLogoWhatsapp, IoCall, IoFlash } from 'react-icons/io5'

const sections = [
  {
    title: 'Program',
    links: [
      { text: 'Details & Pricing', href: '#program' },
      { text: 'Curriculum', href: '#curriculum' },
      { text: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Support',
    links: [
      { text: 'WhatsApp Support', href: 'https://wa.me/917827433875', external: true },
      { text: 'Call Us', href: 'tel:+917827433875' },
      { text: 'Email Us', href: 'mailto:support@nifty-nitesh.com' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { text: 'YouTube Channel', href: 'https://www.youtube.com/@Nifty-Nitesh', external: true },
      { text: 'WhatsApp', href: 'https://wa.me/917827433875', external: true },
      { text: 'Call: +91 78274 33875', href: 'tel:+917827433875' },
    ],
  },
]

const socials = [
  { icon: <IoLogoYoutube size={18} />, href: 'https://www.youtube.com/@Nifty-Nitesh', label: 'YouTube', color: 'hover:text-red-500' },
  { icon: <IoLogoWhatsapp size={18} />, href: 'https://wa.me/917827433875', label: 'WhatsApp', color: 'hover:text-green-400' },
  { icon: <IoCall size={18} />, href: 'tel:+917827433875', label: 'Call', color: 'hover:text-[#f0b429]' },
]

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap');
        .bebas { font-family: 'Bebas Neue', sans-serif; }
        .body-font { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <footer className="body-font relative w-full bg-black border-t border-white/8 pt-14 pb-8 overflow-hidden">

        {/* Dot grid */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">

          {/* ── Main grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-10">

            {/* Brand */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#c8922a] flex items-center justify-center text-black">
                  <IoFlash size={16} />
                </div>
                <span className="bebas text-[26px] text-[#f0b429] tracking-wide leading-none">Nifty Nitesh</span>
              </div>

              <p className="text-[13px] text-white/40 leading-relaxed max-w-[240px] m-0">
                Teaching Indians the fundamentals of stock market investing through structured, beginner-friendly programs.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-2 mt-1">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`w-8 h-8 rounded-lg bg-white/[0.06] border border-white/8 flex items-center justify-center text-white/40 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 ${s.color} no-underline`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {sections.map((sec, i) => (
              <div key={i}>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#c8922a] mb-4 m-0">{sec.title}</p>
                <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                  {sec.links.map((link, li) => (
                    <li key={li}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="text-[13px] text-white/40 hover:text-white/80 transition-colors duration-150 no-underline"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── Bottom bar ── */}
          <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-[12px] text-white/25 m-0">© 2025 Nifty Nitesh. All rights reserved.</p>
            <div className="flex items-center gap-5">
              {['Privacy Policy', 'Terms', 'Disclaimer'].map((t, i) => (
                <a key={i} href="#" className="text-[12px] text-white/25 hover:text-white/50 transition-colors duration-150 no-underline">
                  {t}
                </a>
              ))}
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}