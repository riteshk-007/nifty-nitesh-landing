'use client'

import { IoFlame, IoTime, IoPeople, IoCheckmarkCircle, IoLogoWhatsapp } from 'react-icons/io5'

export default function UrgencySection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap');
        @keyframes flicker {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.75; transform: scale(0.94); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .flicker { animation: flicker 1.8s ease-in-out infinite; }
        .animate-fade-up { animation: fadeUp 0.55s ease both; }
        .bebas { font-family: 'Bebas Neue', sans-serif; }
        .body-font { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <section className="body-font relative w-full bg-black py-16 overflow-hidden">

        {/* Dot grid */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        {/* Gold glow centre */}
        <div aria-hidden="true" className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[440px] h-[160px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(ellipse, #f0b429, transparent 70%)' }} />

        <div className="relative z-10 max-w-xl mx-auto px-5 sm:px-8 text-center">

          {/* Flame */}
          <div className="flicker inline-flex text-orange-500 mb-4">
            <IoFlame size={44} />
          </div>

          {/* Headline */}
          <h2 className="animate-fade-up bebas text-[clamp(38px,6vw,58px)] leading-[0.93] text-white tracking-wide m-0 mb-3">
            Register Before <br />
            <span className="text-[#c8922a]">Seats Fill Up</span>
          </h2>

          <p className="animate-fade-up text-[14px] text-white/45 leading-relaxed max-w-sm mx-auto mb-7">
            Limited batch size so every student gets personal attention from Nitesh Sir.
          </p>

          {/* 3 pills in a row */}
          <div className="animate-fade-up flex flex-wrap justify-center gap-2 mb-8">
            {[
              { icon: <IoPeople size={14} />, text: 'Limited Seats', color: 'text-[#f0b429]' },
              { icon: <IoTime size={14} />, text: 'Batch Starting Soon', color: 'text-[#f0b429]' },
              { icon: <IoCheckmarkCircle size={14} />, text: 'Instant Confirmation', color: 'text-green-400' },
            ].map((p, i) => (
              <div key={i} className={`flex items-center gap-1.5 bg-white/[0.05] border border-white/10 rounded-full px-4 py-1.5 text-[12.5px] font-semibold text-white/70 ${p.color}`}>
                <span className={p.color}>{p.icon}</span>
                {p.text}
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/917827433875"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-fade-up inline-flex items-center gap-2.5 bg-[#22c55e] hover:bg-[#16a34a] text-white bebas text-[22px] tracking-widest px-8 py-3.5 rounded-xl transition-all duration-200 no-underline hover:shadow-[0_8px_28px_rgba(34,197,94,0.35)] hover:-translate-y-0.5"
          >
            <IoLogoWhatsapp size={22} />
            Apply Now on WhatsApp
          </a>

          <p className="mt-4 text-[12px] text-white/25 m-0">
            +91 78274 33875 · Direct chat with our team
          </p>

        </div>
      </section>
    </>
  )
}