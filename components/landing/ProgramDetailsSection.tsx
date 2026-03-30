'use client'

import { IoBook, IoTrendingUp, IoShieldCheckmark, IoTrophy, IoCalendar, IoCheckmark, IoLogoWhatsapp } from 'react-icons/io5'

const phases = [
  {
    phase: 'Phase 1',
    title: 'Foundation Building',
    duration: 'Days 1–5',
    description: 'Understand the basics of stock market and build rock-solid confidence from scratch.',
    icon: <IoBook size={20} />,
    topics: ['What is Stock Market?', 'How Indian Market Works', 'Types of Investments', 'Risk & Reward Understanding'],
  },
  {
    phase: 'Phase 2',
    title: 'Technical Analysis',
    duration: 'Days 6–10',
    description: 'Learn to read charts, identify patterns and find high-probability entry points.',
    icon: <IoTrendingUp size={20} />,
    topics: ['Chart Reading Basics', 'Candlestick Patterns', 'Support & Resistance', 'Moving Averages & Indicators'],
  },
  {
    phase: 'Phase 3',
    title: 'Risk Management',
    duration: 'Days 11–15',
    description: 'Master money management and risk control techniques used by professional traders.',
    icon: <IoShieldCheckmark size={20} />,
    topics: ['Position Sizing', 'Stop Loss Techniques', 'Portfolio Management', 'Psychology of Trading'],
  },
  {
    phase: 'Phase 4',
    title: 'Live Trading',
    duration: 'Days 16–20',
    description: 'Apply everything in the real market and gain hands-on practical experience.',
    icon: <IoTrophy size={20} />,
    topics: ['Live Market Analysis', 'Entry & Exit Strategies', 'Performance Tracking', 'Final Project & Review'],
  },
]

export default function ProgramDetailsSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fu { animation: fadeUp 0.55s ease both; }
        .bebas { font-family: 'Bebas Neue', sans-serif; }
        .bf { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <section className="bf relative w-full bg-black py-10 md:py-16 overflow-hidden" id="curriculum">

        {/* dot grid */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">

          {/* Header */}
          <div className="fu text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#c8922a]/10 border border-[#c8922a]/25 text-[#c8922a] text-[12px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              <IoCalendar size={12} /> 20-Day Curriculum
            </div>
            <h2 className="bebas text-[clamp(40px,6vw,68px)] leading-[0.93] text-white tracking-wide m-0">
              Program <span className="text-[#c8922a]">Curriculum</span>
            </h2>
            <p className="mt-4 text-[16px] text-white/50 max-w-lg mx-auto leading-relaxed">
              Step-by-step structured training — from zero to live trading in 20 days.
            </p>
          </div>

          {/* 2-col cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {phases.map((phase, i) => (
              <div
                key={i}
                className="fu group relative rounded-2xl border border-white/[0.08] overflow-hidden hover:border-[#c8922a]/40 transition-all duration-250 hover:-translate-y-1 cursor-default"
                style={{
                  animationDelay: `${i * 0.08}s`,
                  background: '#111',
                }}
              >
                {/* Gold top accent */}
                <div className="h-[2px] bg-gradient-to-r from-[#c8922a]/60 to-[#f0b429]/60 group-hover:from-[#c8922a] group-hover:to-[#f0b429] transition-all duration-200" />

                {/* Watermark number */}
                <span className="bebas absolute top-3 right-4 text-[56px] text-white/[0.04] leading-none select-none pointer-events-none">
                  0{i + 1}
                </span>

                <div className="p-6">
                  {/* Top row: badge + duration */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2 bg-[#c8922a]/10 border border-[#c8922a]/20 rounded-lg px-3 py-1.5">
                      <span className="text-[#c8922a]">{phase.icon}</span>
                      <span className="bebas text-[14px] text-[#c8922a] tracking-widest">{phase.phase}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <IoCalendar size={12} className="text-white/25" />
                      <span className="text-[12px] text-white/35 font-semibold">{phase.duration}</span>
                    </div>
                  </div>

                  {/* Title — white, bold, clearly visible */}
                  <h3 className="text-[18px] sm:text-[20px] font-bold text-white mb-2.5 leading-snug">
                    {phase.title}
                  </h3>

                  {/* Description — slightly muted but readable */}
                  <p className="text-[14px] text-white/60 leading-[1.7] mb-5">
                    {phase.description}
                  </p>

                  {/* Topic tags */}
                  <div className="flex flex-wrap gap-2">
                    {phase.topics.map((topic, ti) => (
                      <span key={ti}
                        className="inline-flex items-center gap-1 bg-[#c8922a]/10 border border-[#c8922a]/20 text-[#f0b429]/80 text-[11.5px] font-semibold px-2.5 py-1 rounded-lg"
                      >
                        <IoCheckmark size={10} className="text-[#c8922a]" />
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div className="fu flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-white/[0.07] px-6 py-5"
            style={{ background: '#0f0f0f', animationDelay: '0.4s' }}>
            <div>
              <p className="bebas text-[20px] sm:text-[22px] text-[#f0b429] leading-none tracking-wide m-0">
                Complete 20-Day Structured Program
              </p>
              <p className="text-[13px] text-white/35 mt-1.5 m-0">
                Live classes · Recordings included · Personal Mentorship
              </p>
            </div>
            <a
              href="https://wa.me/917827433875"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] active:scale-[0.98] text-white text-[14px] font-bold px-6 py-3 rounded-xl transition-all duration-200 no-underline whitespace-nowrap"
            >
              <IoLogoWhatsapp size={17} />
              Enroll Now
            </a>
          </div>

        </div>
      </section>
    </>
  )
}