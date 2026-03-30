'use client'

import { IoPeople, IoTime, IoStar, IoVideocam, IoLocation } from 'react-icons/io5'

const stats = [
  { icon: <IoPeople size={18} />, number: '500+', label: 'Students Trained' },
  { icon: <IoTime size={18} />, number: '20 Days', label: 'Structured Program' },
  { icon: <IoStar size={18} />, number: '4.9★', label: 'Average Rating' },
  { icon: <IoVideocam size={18} />, number: 'Live', label: 'Online Classes' },
  { icon: <IoLocation size={18} />, number: 'Pan India', label: 'Available' },
]

export default function TrustBar() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }
        .bebas { font-family: 'Bebas Neue', sans-serif; }
      `}</style>

      <section className="relative w-full bg-[#0a0a0a] overflow-hidden">

        {/* Top gold line */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#c8922a]/50 to-transparent" />

        <div className="marquee-track">
          {[...stats, ...stats, ...stats, ...stats].map((stat, i) => (
            <div key={i} className="flex items-center">

              {/* Stat item */}
              <div className="flex items-center gap-4 px-10 py-5 group cursor-default select-none">
                {/* Icon square */}
                <div className="w-10 h-10 rounded-xl bg-[#c8922a]/10 border border-[#c8922a]/20 flex items-center justify-center text-[#c8922a] flex-shrink-0 group-hover:bg-[#c8922a]/20 group-hover:border-[#c8922a]/40 transition-all duration-200">
                  {stat.icon}
                </div>
                {/* Text */}
                <div className="flex flex-col gap-0.5">
                  <span className="bebas text-[24px] text-[#f0b429] leading-none tracking-wide">
                    {stat.number}
                  </span>
                  <span className="text-[11px] text-white/35 font-semibold uppercase tracking-[0.1em] whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
              </div>

              {/* Vertical divider */}
              <div className="h-8 w-px bg-white/[0.08] flex-shrink-0" />

            </div>
          ))}
        </div>

        {/* Bottom gold line */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#c8922a]/50 to-transparent" />

      </section>
    </>
  )
}