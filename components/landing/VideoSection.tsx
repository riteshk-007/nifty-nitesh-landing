'use client'

import { IoCheckmarkCircle, IoVideocam } from 'react-icons/io5'

const bullets = [
  'Understand the program structure and curriculum',
  "Learn about Nitesh Sir's experience and expertise",
  'See real student results and success stories',
  'Know what to do and what not to do in the market',
  'Develop the right mindset for investing',
]

export default function VideoSection() {
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
        @keyframes glowRing {
          0%, 100% { box-shadow: 0 0 0 0 rgba(200,146,42,0.4); }
          50%       { box-shadow: 0 0 0 10px rgba(200,146,42,0); }
        }

        .animate-fade-up  { animation: fadeUp   0.6s ease both; }
        .animate-slide-l  { animation: slideLeft  0.65s ease both; }
        .animate-slide-r  { animation: slideRight 0.65s ease both; }
        .animate-glow-ring{ animation: glowRing 2s ease-in-out infinite; }
        .bebas { font-family: 'Bebas Neue', sans-serif; }
        .body-font { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <section className="body-font relative w-full bg-black py-24 overflow-hidden">

        {/* Dot grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Gold radial glow — left side behind video */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 -left-40 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(ellipse, #f0b429 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">

          {/* ── Header ── */}
          <div className="animate-fade-up text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#f0b429]/10 border border-[#f0b429]/25 text-[#f0b429] text-[12px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              <IoVideocam size={13} />
              Program Overview
            </div>
            <h2 className="bebas text-[clamp(42px,6vw,72px)] leading-[0.93] text-white tracking-wide m-0">
              About The <span className="text-[#c8922a]">Program</span>
            </h2>
            <p className="mt-4 text-[17px] text-white/50 max-w-lg mx-auto leading-relaxed">
              Watch Nitesh Sir's video to better understand what's inside the program.
            </p>
          </div>

          {/* ── Content grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* ── Video player ── */}
            <div className="animate-slide-l" style={{ animationDelay: '0.1s' }}>
              {/* Outer glow border */}
              <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-[#c8922a]/60 via-[#f0b429]/30 to-[#c8922a]/10">
                <div className="relative bg-black rounded-2xl overflow-hidden">
                  {/* Decorative top bar */}
                  <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    <span className="ml-3 text-[11px] text-white/30 font-medium tracking-wide">Nifty Nitesh — Program Overview</span>
                  </div>

                  {/* iframe */}
                  <div className="relative w-full aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/v18cY0dwLhM"
                      className="absolute inset-0 w-full h-full border-0"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      title="Nifty Nitesh Program Overview"
                    />
                  </div>
                </div>
              </div>

              {/* Below video pill */}
              <div className="mt-4 flex items-center gap-2 justify-center">
                <div className="animate-glow-ring w-2 h-2 rounded-full bg-[#c8922a]" />
                <span className="text-[12px] text-white/40 font-semibold uppercase tracking-widest">
                  Free Preview — No Registration Required
                </span>
              </div>
            </div>

            {/* ── Bullets ── */}
            <div className="animate-slide-r flex flex-col gap-4" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-[18px] font-bold text-[#f0b429] m-0 mb-1">
                What You'll Learn From This Video:
              </h3>

              {bullets.map((text, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 bg-white/[0.03] border border-white/8 hover:border-[#c8922a]/40 hover:bg-[#c8922a]/5 rounded-xl px-4 py-4 transition-all duration-200 hover:translate-x-1 cursor-default"
                  style={{ animationDelay: `${0.25 + i * 0.07}s` }}
                >
                  {/* Number + icon */}
                  <div className="flex flex-col items-center gap-1 flex-shrink-0">
                    <div className="w-7 h-7 rounded-full bg-[#c8922a]/15 border border-[#c8922a]/30 flex items-center justify-center group-hover:bg-[#c8922a]/30 transition-colors duration-200">
                      <IoCheckmarkCircle size={15} className="text-[#f0b429]" />
                    </div>
                  </div>

                  <p className="text-[14px] text-white/65 leading-snug m-0 group-hover:text-white/85 transition-colors duration-200">
                    {text}
                  </p>
                </div>
              ))}

              {/* CTA below bullets */}
              <a
                href="https://wa.me/917827433875"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-between gap-3 bg-[#c8922a] hover:bg-[#f0b429] text-black font-bold text-[15px] px-6 py-4 rounded-xl transition-all duration-200 no-underline group"
              >
                <span>Ready to Join? Apply Now</span>
                <span className="text-[20px] group-hover:translate-x-1 transition-transform duration-150">→</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}