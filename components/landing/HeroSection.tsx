'use client'

import Image from 'next/image'
import { IoLogoWhatsapp, IoTrendingUp } from 'react-icons/io5'
import { FaYoutube } from 'react-icons/fa6'
import { RiLiveLine } from 'react-icons/ri'
import { HiArrowRight } from 'react-icons/hi'

function TrustBadge({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-1.5 bg-white/[0.07] border border-white/10 rounded-full px-3.5 py-1.5 text-[12px] text-white/60 font-medium whitespace-nowrap">
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  )
}

export default function HeroSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmerGold {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.65); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }

        .hf { font-family: 'Bebas Neue', sans-serif; }
        .bf { font-family: 'DM Sans', sans-serif; }

        .fu1 { animation: fadeUp 0.5s ease 0.05s both; }
        .fu2 { animation: fadeUp 0.5s ease 0.12s both; }
        .fu3 { animation: fadeUp 0.5s ease 0.22s both; }
        .fu4 { animation: fadeUp 0.5s ease 0.32s both; }
        .fu5 { animation: fadeUp 0.5s ease 0.42s both; }

        .gold-text {
          background: linear-gradient(90deg, #c8922a, #f0b429, #c8922a);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerGold 3s linear infinite;
        }
        .pdot { animation: pulseDot 1.6s ease-in-out infinite; }
        .fimg { animation: floatSlow 5s ease-in-out infinite; }
      `}</style>

      <section className="bf relative w-full bg-[#0a0a0a] overflow-hidden pt-[64px] sm:pt-[72px]">

        {/* dot grid */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)', backgroundSize: '26px 26px' }} />

        {/* gold radial top glow */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full opacity-[0.18]"
          style={{ background: 'radial-gradient(ellipse, #c8922a 0%, transparent 68%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-10 lg:py-16">

          {/* ── "Next Batch" pill — centered top ── */}
          <div className="fu1 flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 text-white/75 text-[11.5px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
              <RiLiveLine className="text-green-400" size={14} />
              Next Batch Starting Soon
            </div>
          </div>

          {/* ── Main grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

            {/* ────── LEFT ────── */}
            <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">

              {/* Eyebrow */}
              <div className="fu2 inline-flex items-center gap-2 bg-[#c8922a]/10 border border-[#c8922a]/25 text-[#f0b429] px-3.5 py-1.5 rounded-full">
                <span className="pdot w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                <IoTrendingUp size={13} />
                <span className="text-[11px] font-bold uppercase tracking-widest">Stock Market Program · Batch 2025</span>
              </div>

              {/* Headline */}
              <h1 className="fu2 hf text-[clamp(60px,11vw,80px)] leading-[0.88] tracking-wide text-white m-0">
                LEARN<br />
                STOCK<br />
                MARKET<br />
                <span className="gold-text">THE RIGHT WAY</span>
              </h1>

              {/* Sub */}
              <p className="fu3 text-[15px] sm:text-[16px] text-white/45 leading-[1.75] max-w-[400px] m-0">
                Structured training from{' '}
                <strong className="text-white/80 font-semibold">zero to confident trader</strong>
                {' '}— live classes in simple Hindi-English. No prior experience needed.
              </p>

              {/* Inline stats — clean row, no floating cards */}
              <div className="fu3 flex flex-wrap gap-2.5 justify-center lg:justify-start">
                {[
                  { v: '500+', l: 'Students' },
                  { v: '20 Days', l: 'Program' },
                  { v: '4.9★', l: 'Rated' },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-2">
                    <span className="hf text-[20px] text-[#f0b429] leading-none">{s.v}</span>
                    <span className="text-[10px] text-white/35 font-bold uppercase tracking-widest">{s.l}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="fu4 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href="https://wa.me/917827433875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] active:scale-[0.98] text-white font-bold text-[15px] px-6 py-3.5 rounded-xl transition-all duration-200 no-underline hover:shadow-[0_8px_24px_rgba(34,197,94,0.35)]"
                >
                  <IoLogoWhatsapp size={19} />
                  Apply Now
                  <span className="bg-white/20 text-[12px] font-extrabold px-2 py-0.5 rounded-lg">₹15,000</span>
                  <HiArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-150" />
                </a>

                <a
                  href="https://www.youtube.com/@Nifty-Nitesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 active:scale-[0.98] text-white/70 font-semibold text-[14px] px-5 py-3.5 rounded-xl transition-all duration-200 no-underline"
                >
                  <FaYoutube className="text-red-500 text-lg" />
                  Watch on YouTube
                </a>
              </div>



            </div>

            {/* ────── RIGHT — image ────── */}
            <div className="fu2 flex justify-center items-center">
              <div className="relative w-[280px] sm:w-[340px] lg:w-full lg:max-w-[420px]">

                {/* Outer dashed ring */}
                <div aria-hidden="true" className="absolute -inset-5 rounded-full border border-dashed border-[#c8922a]/20 pointer-events-none" />

                {/* Gold atmosphere */}
                <div aria-hidden="true" className="absolute inset-[-20%] rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse, #c8922a12, transparent 65%)' }} />

                {/* Image card */}
                <div className="relative rounded-xl overflow-hidden border border-[#c8922a]/20">
                  <Image
                    src="/nitesh2.jpeg"
                    alt="Nifty Nitesh — Stock Market Trainer"
                    width={800}
                    height={800}
                    priority
                    className="w-full h-auto object-cover fimg"
                  />
                  {/* Dark gradient at bottom of image */}
                  <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.5), transparent)' }} />
                </div>

                {/* Stat badge — bottom left */}
                <div className="absolute -bottom-3 -left-4 sm:-left-6 flex items-center gap-2 bg-[#0a0a0a] border border-[#c8922a]/30 rounded-2xl px-3.5 py-2 shadow-xl">
                  <span className="hf text-[22px] sm:text-[26px] text-[#f0b429] leading-none">500+</span>
                  <span className="text-[9px] sm:text-[10px] text-white/40 font-bold uppercase tracking-widest leading-tight">Students<br />Trained</span>
                </div>

                {/* Stat badge — top right */}
                <div className="absolute -top-3 -right-3 sm:-right-5 flex items-center gap-2 bg-[#0a0a0a] border border-[#c8922a]/30 rounded-2xl px-3.5 py-2 shadow-xl">
                  <span className="hf text-[22px] sm:text-[26px] text-[#f0b429] leading-none">4.9★</span>
                  <span className="text-[9px] sm:text-[10px] text-white/40 font-bold uppercase tracking-widest leading-tight">Avg<br />Rating</span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Bottom fade into next section */}
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 right-0 h-16"
          style={{ background: 'linear-gradient(to bottom, transparent, #0a0a0a)' }} />
      </section>
    </>
  )
}