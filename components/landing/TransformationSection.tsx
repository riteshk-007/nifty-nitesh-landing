'use client'

import { IoClose, IoCheckmark, IoFlash } from 'react-icons/io5'

const beforeItems = [
  'Random YouTube videos without structure',
  'Blindly following WhatsApp market tips',
  'Getting overwhelmed and losing confidence early on',
  'Treating the market like gambling',
  'Fear of technical analysis and charts',
  'No formal risk management system',
]

const afterItems = [
  'Structured learning with proper foundation',
  'Data-driven trading decisions',
  'Confidence in every trade setup',
  'Understanding the market as a business',
  'Pro-level chart and indicator skills',
  'Professional risk management',
]

export default function TransformationSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(200,146,42,0.4); }
          50%       { box-shadow: 0 0 40px rgba(240,180,41,0.7); }
        }

        .animate-fade-up   { animation: fadeUp   0.6s ease both; }
        .animate-slide-l   { animation: slideLeft  0.6s ease both; }
        .animate-slide-r   { animation: slideRight 0.6s ease both; }
        .animate-glow      { animation: glowPulse 2.2s ease-in-out infinite; }
        .bebas { font-family: 'Bebas Neue', sans-serif; }
        .body-font { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <section className="body-font relative w-full bg-black py-10 md:py-16 overflow-hidden">

        {/* Dot grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Gold radial glow top-center */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(ellipse, #f0b429 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">

          {/* ── Header ── */}
          <div className="animate-fade-up text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#f0b429]/10 border border-[#f0b429]/25 text-[#f0b429] text-[12px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              <IoFlash size={12} />
              20-Day Transformation
            </div>
            <h2 className="bebas text-[clamp(42px,6vw,72px)] leading-[0.93] text-white tracking-wide m-0">
              What Will Change <br className="hidden sm:block" />
              <span className="text-[#c8922a]">in 20 Days?</span>
            </h2>
            <p className="mt-4 text-[17px] text-white/50 max-w-xl mx-auto leading-relaxed">
              Complete transformation — from confused beginner to confident trader.
            </p>
          </div>

          {/* ── Split layout ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_72px_1fr] gap-6 lg:gap-0 items-start">

            {/* ── BEFORE column ── */}
            <div className="flex flex-col gap-3">
              {/* Column label */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-2">
                  <IoClose size={16} className="text-red-400" />
                  <span className="bebas text-[22px] text-red-400 tracking-widest leading-none">Before</span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-red-500/30 to-transparent" />
              </div>

              {beforeItems.map((text, i) => (
                <div
                  key={i}
                  className="animate-slide-l group flex items-start gap-3 bg-white/[0.03] border border-white/8 hover:border-red-500/30 hover:bg-red-500/5 rounded-xl px-4 py-3.5 transition-all duration-200 cursor-default"
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                    <IoClose size={13} className="text-red-400" />
                  </div>
                  <p className="text-base text-white/55 leading-snug m-0 group-hover:text-white/70 transition-colors duration-200">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* ── Centre divider ── */}
            <div className="hidden lg:flex flex-col items-center justify-start gap-0">
              <div className="w-px flex-1 bg-gradient-to-b from-transparent via-[#c8922a]/40 to-transparent min-h-[320px]" />
              <div
                className="animate-glow my-3 w-11 h-11 rounded-full bg-[#c8922a] flex items-center justify-center text-black flex-shrink-0 z-10"
              >
                <IoFlash size={20} />
              </div>
              <div className="w-px flex-1 bg-gradient-to-b from-transparent via-[#c8922a]/40 to-transparent min-h-[150px]" />
            </div>

            {/* Mobile divider */}
            <div className="lg:hidden flex items-center gap-3 my-2">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c8922a]/40 to-transparent" />
              <div className="animate-glow w-9 h-9 rounded-full bg-[#c8922a] flex items-center justify-center text-black flex-shrink-0">
                <IoFlash size={17} />
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-[#c8922a]/40 via-[#c8922a]/40 to-transparent" />
            </div>

            {/* ── AFTER column ── */}
            <div className="flex flex-col gap-3">
              {/* Column label */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-2">
                  <IoCheckmark size={16} className="text-green-400" />
                  <span className="bebas text-[22px] text-green-400 tracking-widest leading-none">After</span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-green-500/30 to-transparent" />
              </div>

              {afterItems.map((text, i) => (
                <div
                  key={i}
                  className="animate-slide-r group flex items-start gap-3 bg-white/[0.03] border border-white/8 hover:border-green-500/30 hover:bg-green-500/5 rounded-xl px-4 py-3.5 transition-all duration-200 cursor-default"
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                    <IoCheckmark size={13} className="text-green-400" />
                  </div>
                  <p className="text-base text-white/75 leading-snug m-0 group-hover:text-white transition-colors duration-200">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Bottom stat strip ── */}
          <div className="mt-14 grid grid-cols-3 divide-x divide-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {[
              { val: '500+', sub: 'Students Transformed' },
              { val: '20', sub: 'Days to Confidence' },
              { val: '4.9★', sub: 'Average Rating' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center py-5 px-4 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-200">
                <span className="bebas text-[32px] sm:text-[38px] text-[#f0b429] leading-none tracking-wide">{s.val}</span>
                <span className="text-[11px] text-white/40 font-semibold uppercase tracking-widest mt-1 text-center">{s.sub}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}