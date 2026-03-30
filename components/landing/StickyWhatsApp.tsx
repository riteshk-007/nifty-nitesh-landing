'use client'

import { IoLogoWhatsapp } from 'react-icons/io5'

export default function StickyWhatsApp() {
  return (
    <>
      <style>{`
        @keyframes bounceY {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-5px); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          50%       { box-shadow: 0 0 0 10px rgba(34,197,94,0); }
        }
        .wa-bounce { animation: bounceY 2.4s ease-in-out infinite; }
        .wa-glow   { animation: glowPulse 2.4s ease-in-out infinite; }
      `}</style>

      {/* hidden on mobile (lg:flex) */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-50 items-center gap-0 group wa-bounce">

        {/* Tooltip — slides in from right on hover */}
        <div className="mr-3 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
          <div className="bg-black border border-white/10 text-white text-[13px] font-semibold px-4 py-2 rounded-xl whitespace-nowrap shadow-xl">
            Chat with us on WhatsApp
            {/* Arrow */}
            <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0"
              style={{ borderLeft: '6px solid #000', borderTop: '5px solid transparent', borderBottom: '5px solid transparent' }} />
          </div>
        </div>

        {/* Button */}
        <a
          href="https://wa.me/917827433875"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="wa-glow w-14 h-14 rounded-full bg-[#22c55e] hover:bg-[#16a34a] flex items-center justify-center text-white border-2 border-white/20 transition-all duration-200 hover:scale-110 active:scale-95 no-underline"
        >
          <IoLogoWhatsapp size={26} />
        </a>
      </div>
    </>
  )
}