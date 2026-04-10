'use client'

import { IoWarning, IoTrendingDown, IoSad, IoCloseCircle, IoAlertCircle } from 'react-icons/io5'
import { HiArrowDown } from 'react-icons/hi'

interface ProblemCard {
  icon: React.ReactNode
  number: string
  title: string
  description: string
}

const problems: ProblemCard[] = [
  {
    icon: <IoWarning size={22} />,
    number: '01',
    title: 'Random YouTube Learning',
    description: 'Fragmented videos with no structure — you forget quickly and stay confused forever.',
  },
  {
    icon: <IoTrendingDown size={22} />,
    number: '02',
    title: 'Blindly Following Tips',
    description: 'Copying random WhatsApp tips without understanding the actual strategy behind them.',
  },
  {
    icon: <IoSad size={22} />,
    number: '03',
    title: 'Confidence Loss',
    description: 'Getting discouraged early and giving up the market way too early to ever see gains.',
  },
  {
    icon: <IoCloseCircle size={22} />,
    number: '04',
    title: 'No Risk Management',
    description: 'No stop-loss plan. Emotional trading leads to poor decisions under pressure.',
  },
  {
    icon: <IoAlertCircle size={22} />,
    number: '05',
    title: 'Wrong Entry Timing',
    description: 'Poor buy/sell timing leads to missed opportunities and lack of clarity.',
  },
]

export default function ProblemSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceY {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }
        .animate-fade-up { animation: fadeUp 0.6s ease both; }
        .animate-bounce-y { animation: bounceY 1.6s ease-in-out infinite; }
        .bebas { font-family: 'Bebas Neue', sans-serif; }
        .body-font { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <section className="body-font relative w-full bg-white py-24 overflow-hidden">

        {/* Subtle dot grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            opacity: 0.35,
          }}
        />

        {/* Top gold accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c8922a] to-transparent opacity-60" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">

          {/* ── Header ── */}
          <div className="animate-fade-up text-center mb-16">
            {/* Pill label */}
            <div className="inline-flex items-center gap-2 bg-[#c8922a]/10 border border-[#c8922a]/30 text-[#c8922a] text-[12px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              <IoWarning size={13} />
              Sound Familiar?
            </div>

            <h2 className="bebas text-[clamp(42px,6vw,72px)] leading-[0.93] text-black tracking-wide m-0">
              Are You Making <br className="hidden sm:block" />
              <span className="text-[#c8922a]">These Mistakes?</span>
            </h2>
            <p className="mt-4 text-[17px] text-gray-500 max-w-xl mx-auto leading-relaxed">
              90% of beginners make these mistakes — and stay stuck and confused for years.
            </p>
          </div>

          {/* ── Cards grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {problems.map((p, i) => (
              <div
                key={i}
                className="animate-fade-up group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#c8922a]/50 hover:shadow-[0_8px_32px_rgba(200,146,42,0.12)] hover:-translate-y-1 transition-all duration-250 overflow-hidden"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Big number watermark */}
                <span className="absolute -top-3 -right-1 bebas text-[72px] text-gray-100 leading-none select-none pointer-events-none">
                  {p.number}
                </span>

                {/* Icon */}
                <div className="relative z-10 w-11 h-11 rounded-xl bg-[#c8922a]/10 border border-[#c8922a]/25 flex items-center justify-center text-[#c8922a] mb-5 group-hover:bg-[#c8922a]/20 transition-colors duration-200">
                  {p.icon}
                </div>

                {/* Content */}
                <h3 className="relative z-10 text-[16px] font-700 font-bold text-black mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="relative z-10 text-[13.5px] text-gray-500 leading-relaxed m-0">
                  {p.description}
                </p>

                {/* Bottom gold line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c8922a] to-[#f0b429] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" />
              </div>
            ))}

            {/* 6th card — CTA card */}
            <div className="animate-fade-up relative bg-black rounded-2xl p-6 flex flex-col justify-between overflow-hidden" style={{ animationDelay: '0.45s' }}>
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle at 80% 20%, #f0b429 0%, transparent 60%)',
                }}
              />
              <div className="relative z-10">
                <p className="bebas text-[28px] text-[#f0b429] leading-tight tracking-wide mb-3">
                  All of this can be fixed.
                </p>
                <p className="text-[13px] text-white/60 leading-relaxed">
                  A structured program designed to eliminate every mistake above — step by step.
                </p>
              </div>
              <div className="relative z-10 mt-5 flex items-center gap-2 text-[#f0b429] font-bold text-[14px]">
                Keep scrolling
                <HiArrowDown className="animate-bounce-y text-lg" />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}