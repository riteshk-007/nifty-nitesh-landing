'use client'

import { useEffect, useState } from 'react'
import { IoLogoWhatsapp } from 'react-icons/io5'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@500;600;700&display=swap');

        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0);     opacity: 1; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        .header-root {
          animation: slideDown 0.5s cubic-bezier(0.22,1,0.36,1) both;
          font-family: 'DM Sans', sans-serif;
        }

        .logo-shimmer {
          font-family: 'Bebas Neue', sans-serif;
          background: linear-gradient(100deg, #c8922a 20%, #f0b429 45%, #fff5cc 50%, #f0b429 55%, #c8922a 80%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .wa-sheen::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.45s ease;
          border-radius: inherit;
        }
        .wa-sheen:hover::before { transform: translateX(100%); }
      `}</style>

      <header
        className={`header-root fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-[#c8922a]/20 shadow-[0_4px_24px_rgba(0,0,0,0.6)]'
            : 'bg-black'
          }`}
      >
        <div className="w-full bg-black text-[#c8922a] text-[10px] sm:text-[11px] py-1 text-center font-medium border-b border-white/5 tracking-wide">
          This is for educational purposes only. We do not provide investment advice. Trading involves risk.
        </div>
        {/* Gold accent line — visible when scrolled */}
        <div className={`h-[2px] bg-gradient-to-r from-transparent via-[#c8922a] to-transparent transition-opacity duration-300 ${scrolled ? 'opacity-50' : 'opacity-0'}`} />

        <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between h-[60px] sm:h-[68px]">

          {/* ── Logo ── */}
          <a href="/" aria-label="Nifty Nitesh Home" className="flex items-center gap-2.5 no-underline flex-shrink-0">
            <div className={`relative rounded-lg overflow-hidden border border-[#c8922a]/30 shadow-[0_0_12px_rgba(200,146,42,0.2)] flex-shrink-0 transition-all duration-300 ${scrolled ? 'w-8 h-8' : 'w-9 h-9'}`}>
              <Image
                src="/logo.webp"
                alt="Nifty Nitesh Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className={`logo-shimmer transition-all duration-300 leading-none ${scrolled ? 'text-[20px]' : 'text-[22px] sm:text-[25px]'}`}>
              NIFTY NITESH
            </span>
          </a>

          {/* ── WhatsApp CTA ── */}
          <a
            href="https://wa.me/917827433875"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enroll Now on WhatsApp"
            className="wa-sheen relative overflow-hidden flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] active:scale-95 text-white font-bold text-[13px] sm:text-[14px] px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all duration-200 no-underline hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(34,197,94,0.35)] flex-shrink-0"
          >
            <IoLogoWhatsapp size={17} />
            <span>Enroll Now (Paid)</span>
          </a>

        </div>
      </header>
    </>
  )
}