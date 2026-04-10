'use client'

import Image from 'next/image'
import { IoPerson, IoBusiness, IoSchool, IoHome, IoWoman, IoMan, IoCheckmarkCircle } from 'react-icons/io5'

interface ForWhomCard {
  icon: React.ReactNode
  role: string
  description: string
  svg: string
}

const cards: ForWhomCard[] = [
  {
    icon: <IoPerson size={20} />,
    role: 'Working Professional',
    description: 'You work 9-5 and want to build a valuable high-income skill for your future.',
    svg: '/working-professional.svg',
  },
  {
    icon: <IoSchool size={20} />,
    role: 'College Student',
    description: 'You want to learn investing alongside studies for a strong financial future.',
    svg: '/college-student.svg',
  },
  {
    icon: <IoBusiness size={20} />,
    role: 'Small Business Owner',
    description: 'You run your business and want smarter financial decisions through market knowledge.',
    svg: '/small-business-owner.svg',
  },
  {
    icon: <IoHome size={20} />,
    role: 'Housewife / Homemaker',
    description: 'You manage the home and want to actively contribute to your family\'s security.',
    svg: '/housewife-homemaker.svg',
  },
  {
    icon: <IoMan size={20} />,
    role: 'Retired Person',
    description: 'You\'re retired and want to understand how to actively manage your wealth.',
    svg: '/retired-person.svg',
  },
  {
    icon: <IoWoman size={20} />,
    role: 'Freelancer',
    description: 'Your cash flow is irregular and you want to learn how to invest wisely.',
    svg: '/freelancer.svg',
  },
]

export default function ForWhomSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUp 0.6s ease both; }
        .bebas { font-family: 'Bebas Neue', sans-serif; }
        .body-font { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <section className="body-font relative w-full bg-white py-24 overflow-hidden">

        {/* Dot grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            opacity: 0.35,
          }}
        />

        {/* Bottom gold accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8922a]/50 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">

          {/* ── Header ── */}
          <div className="animate-fade-up text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#c8922a]/10 border border-[#c8922a]/30 text-[#c8922a] text-[12px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              <IoCheckmarkCircle size={13} />
              Right Fit?
            </div>
            <h2 className="bebas text-[clamp(42px,6vw,72px)] leading-[0.93] text-black tracking-wide m-0">
              Is This Program <br className="hidden sm:block" />
              <span className="text-[#c8922a]">For You?</span>
            </h2>
            <p className="mt-4 text-[17px] text-gray-500 max-w-lg mx-auto leading-relaxed">
              Specially designed for people at every stage of life — no prior experience needed.
            </p>
          </div>

          {/* ── Cards grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {cards.map((card, i) => (
              <div
                key={i}
                className="animate-fade-up group relative bg-white border-2 border-gray-100 hover:border-[#c8922a]/40 rounded-2xl p-6 transition-all duration-250 hover:shadow-[0_12px_40px_rgba(200,146,42,0.12)] hover:-translate-y-1 overflow-hidden cursor-default"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Hover top-left corner glow */}
                <div className="absolute top-0 left-0 w-20 h-20 rounded-br-full bg-[#c8922a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top row: emoji circle + icon */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#fff8e6] to-[#fef3c7] border border-[#c8922a]/20 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <Image src={card.svg} alt={card.role} width={40} height={40} />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#c8922a] group-hover:bg-[#c8922a]/10 group-hover:border-[#c8922a]/30 transition-all duration-200">
                    {card.icon}
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-[16px] font-bold text-black mb-2 leading-snug">
                  {card.role}
                </h3>
                <p className="text-[13.5px] text-gray-500 leading-relaxed m-0">
                  {card.description}
                </p>

                {/* Bottom slide-in gold line */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c8922a] to-[#f0b429] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" />
              </div>
            ))}
          </div>

          {/* ── Footer banner ── */}
          <div className="animate-fade-up flex flex-col sm:flex-row items-center justify-between gap-4 bg-black rounded-2xl px-7 py-5" style={{ animationDelay: '0.55s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#c8922a] flex items-center justify-center text-black flex-shrink-0">
                <IoCheckmarkCircle size={22} />
              </div>
              <p className="text-white text-[15px] font-semibold m-0">
                If you belong to any of these categories —{' '}
                <span className="text-[#f0b429]">this program is made for you.</span>
              </p>
            </div>
            <a
              href="https://wa.me/917827433875"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white text-[14px] font-bold px-5 py-2.5 rounded-xl transition-all duration-200 no-underline whitespace-nowrap"
            >
              Join Now →
            </a>
          </div>

        </div>
      </section>
    </>
  )
}