'use client'

import { IoSchool, IoTrendingUp, IoPeople, IoPlay, IoStar, IoFlash, IoEye, IoRocket } from 'react-icons/io5'
import { FaYoutube, FaQuoteLeft } from 'react-icons/fa6'
import Image from 'next/image'

const stats = [
  { icon: <IoPeople size={20} />, value: '500+', label: 'Traders Trained', sub: 'Across India' },
  { icon: <IoPlay size={20} />, value: '100+', label: 'Live Sessions', sub: 'Interactive Learning' },
  { icon: <IoTrendingUp size={20} />, value: '6+', label: 'Years Experience', sub: 'Real Market Trading' },
  { icon: <IoStar size={20} />, value: '4.8★', label: 'Avg Rating', sub: 'Verified Feedback' },
]

export default function AboutSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-up { animation: fadeUp 0.6s ease both; }
        .anim-left  { animation: slideLeft  0.65s ease both; }
        .anim-right { animation: slideRight 0.65s ease both; }
        .bebas { font-family: 'Bebas Neue', sans-serif; }
        .body-font { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <section className="body-font relative w-full bg-white overflow-hidden">

        {/* Dot grid */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)', backgroundSize: '28px 28px', opacity: 0.35 }} />

        {/* ═══════════════════════════════
            PART 1 — Story Banner (black)
        ════════════════════════════════ */}
        <div className="relative bg-black py-10 md:py-16 overflow-hidden">
          {/* gold glow */}
          <div aria-hidden="true" className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] opacity-15 rounded-full"
            style={{ background: 'radial-gradient(ellipse, #f0b429, transparent 70%)' }} />

          <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <div className="animate-fade-up inline-flex items-center gap-2 bg-[#f0b429]/10 border border-[#f0b429]/25 text-[#f0b429] text-[12px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <IoFlash size={12} /> Our Story
            </div>

            <h2 className="animate-fade-up bebas text-[clamp(36px,5.5vw,64px)] leading-[0.95] text-white tracking-wide mb-6">
              From WhatsApp Group <br className="hidden sm:block" />
              <span className="text-[#c8922a]">to Trusted Platform</span>
            </h2>

            <p className="animate-fade-up text-[16px] text-white/55 leading-relaxed max-w-2xl mx-auto mb-6">
              Nifty Nitesh started with one simple belief:{' '}
              <span className="text-white/80 font-semibold italic">
                "Traders don't need more indicators — they need real market understanding."
              </span>
            </p>
            <p className="animate-fade-up text-[15px] text-white/45 leading-relaxed max-w-2xl mx-auto mb-0">
              After years of navigating market noise, Nitesh began sharing his personal trading frameworks with a small community. Word spread fast — and what started as a WhatsApp group turned into a full-fledged trading education platform trusted by thousands across India. Today, we help retail traders understand institutional price action, master demand-supply concepts, and trade with structure, not guesswork.
            </p>

            {/* Quote */}
            <div className="animate-fade-up mt-10 relative inline-block bg-white/[0.04] border border-white/10 rounded-2xl px-8 py-6 max-w-xl mx-auto">
              <FaQuoteLeft className="absolute top-4 left-5 text-[#c8922a]/40 text-2xl" />
              <p className="text-[16px] text-white/80 italic leading-relaxed m-0">
                "Help people trade like professionals — with process, logic, and discipline."
              </p>
              <p className="mt-3 text-[12px] text-[#f0b429] font-bold uppercase tracking-widest m-0">
                — Nifty Nitesh, Founder
              </p>
            </div>
          </div>

          {/* Stat strip */}
          <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 mt-14">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10 border border-white/10 rounded-2xl overflow-hidden">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center py-5 px-3 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-200 cursor-default">
                  <div className="w-8 h-8 rounded-full bg-[#c8922a]/15 border border-[#c8922a]/25 flex items-center justify-center text-[#f0b429] mb-2">
                    {s.icon}
                  </div>
                  <span className="bebas text-[28px] sm:text-[32px] text-[#f0b429] leading-none tracking-wide">{s.value}</span>
                  <span className="text-[11px] text-white/50 font-semibold uppercase tracking-widest mt-1 text-center">{s.label}</span>
                  <span className="text-[10px] text-white/25 font-medium text-center">{s.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════
            PART 2 — Mission & Vision (white)
        ════════════════════════════════ */}
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-10 md:py-16">
          <div className="animate-fade-up text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#c8922a]/10 border border-[#c8922a]/30 text-[#c8922a] text-[12px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              <IoRocket size={12} /> Mission & Vision
            </div>
            <h2 className="bebas text-[clamp(38px,5vw,60px)] leading-[0.95] text-black tracking-wide m-0">
              Our <span className="text-[#c8922a]">Mission & Vision</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Mission */}
            <div className="anim-left group relative bg-white border-2 border-gray-100 hover:border-[#c8922a]/40 rounded-2xl p-7 overflow-hidden hover:shadow-[0_10px_36px_rgba(200,146,42,0.1)] hover:-translate-y-1 transition-all duration-250">
              <div className="absolute top-0 right-0 w-28 h-28 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'radial-gradient(circle, #c8922a18, transparent 70%)' }} />
              <div className="w-11 h-11 rounded-xl bg-[#c8922a]/10 border border-[#c8922a]/25 flex items-center justify-center text-[#c8922a] mb-5">
                <IoEye size={22} />
              </div>
              <h3 className="bebas text-[24px] text-black tracking-wide mb-3">Our Mission & Framework</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed m-0">
                To teach Indian traders how to build a repeatable edge using real concepts — not signals or shortcuts. We simplify complex trading ideas into actionable systems like our unique <strong>Mahabharat Framework</strong> for trade scoring, making institutional price action accessible to everyday traders.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c8922a] to-[#f0b429] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" />
            </div>

            {/* Vision */}
            <div className="anim-right group relative bg-white border-2 border-gray-100 hover:border-[#c8922a]/40 rounded-2xl p-7 overflow-hidden hover:shadow-[0_10px_36px_rgba(200,146,42,0.1)] hover:-translate-y-1 transition-all duration-250" style={{ animationDelay: '0.1s' }}>
              <div className="absolute top-0 right-0 w-28 h-28 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'radial-gradient(circle, #c8922a18, transparent 70%)' }} />
              <div className="w-11 h-11 rounded-xl bg-[#c8922a]/10 border border-[#c8922a]/25 flex items-center justify-center text-[#c8922a] mb-5">
                <IoRocket size={22} />
              </div>
              <h3 className="bebas text-[24px] text-black tracking-wide mb-3">Our Vision</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed m-0">
                To become India's most trusted trader-led platform for demand-supply & price action learning — and build a new generation of confident, self-reliant retail traders.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c8922a] to-[#f0b429] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" />
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════
            PART 3 — Meet Nitesh (white, 2-col)
        ════════════════════════════════ */}
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 pb-24">

          <div className="animate-fade-up text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#c8922a]/10 border border-[#c8922a]/30 text-[#c8922a] text-[12px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              <IoPeople size={12} /> The Mentor
            </div>
            <h2 className="bebas text-[clamp(38px,5vw,60px)] leading-[0.95] text-black tracking-wide m-0">
              Meet <span className="text-[#c8922a]">Nitesh Kumar</span> (Nifty Nitesh)
            </h2>
            <p className="mt-3 text-[14px] text-gray-400 uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
              Founder · Full-Time Trader · Mentor
              <span className="text-gray-300">|</span>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#0a66c2] hover:underline flex items-center gap-1">
                LinkedIn Profile
              </a>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Image */}
            <div className="anim-left flex justify-center">
              <div className="relative w-full max-w-[340px]">
                {/* Rotating ring */}
                <div className="absolute -inset-4 rounded-full border-2 border-dashed border-[#c8922a]/20" />
                {/* Gold blob bg */}
                <div className="absolute inset-0 rounded-3xl"
                  style={{ background: 'linear-gradient(145deg, #fff8e6, #fef3c7)', borderRadius: '40% 60% 60% 40% / 55% 45% 55% 45%' }} />
                {/* Gold gradient border */}
                <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-[#c8922a]/50 to-[#f0b429]/20 overflow-hidden">
                  <div className="rounded-3xl overflow-hidden bg-white">
                    <Image
                      src="/nifty-nitesh.jpeg"
                      alt="Nifty Nitesh — Founder & Trading Mentor"
                      width={340}
                      height={400}
                      className="w-full h-auto object-cover object-top"
                      priority
                    />
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black text-[#f0b429] text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
                  <IoFlash size={12} className="text-green-400" />
                  Founder & Chief Trading Strategist
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="anim-right flex flex-col gap-5" style={{ animationDelay: '0.1s' }}>
              <p className="text-[15px] text-gray-500 leading-relaxed m-0">
                Nitesh has spent the last <strong className="text-black">6+ years</strong> studying how markets really move — beyond indicators and noise. He's known for breaking down smart money concepts, demand zones, and institutional footprints in a way that <strong className="text-black">new traders actually understand and apply</strong>.
              </p>
              <p className="text-[15px] text-gray-500 leading-relaxed m-0">
                From trading live markets to mentoring <strong className="text-black">500+ traders</strong>, his focus remains the same: helping people trade with process, logic, and discipline.
              </p>

              {/* Mini stat row */}
              <div className="grid grid-cols-3 gap-3 mt-1">
                {[
                  { val: '6+', label: 'Years Trading' },
                  { val: '500+', label: 'Students' },
                  { val: 'Price Action', label: 'Expert' },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col items-center bg-gray-50 border border-gray-100 rounded-xl py-3 px-2 hover:border-[#c8922a]/30 hover:bg-[#c8922a]/5 transition-all duration-200 cursor-default">
                    <span className="bebas text-[22px] text-[#c8922a] leading-none tracking-wide">{s.val}</span>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mt-1 text-center">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="https://www.youtube.com/@Nifty-Nitesh"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2.5 bg-black hover:bg-[#111] text-white text-[14px] font-bold px-6 py-3.5 rounded-xl transition-all duration-200 no-underline w-fit"
              >
                <FaYoutube className="text-red-500 text-lg" />
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}