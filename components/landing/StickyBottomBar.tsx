'use client'

import { useEffect, useState } from 'react'
import { IoLogoWhatsapp, IoInformationCircle } from 'react-icons/io5'

export default function StickyBottomBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;600;700&display=swap');
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .slide-up { animation: slideUp 0.35s cubic-bezier(0.22,1,0.36,1); }
        .body-font { font-family: 'DM Sans', sans-serif; }
      `}</style>

      {/* Mobile only */}
      <div className="body-font slide-up fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        {/* Gold top border */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#c8922a] to-transparent" />

        <div className="bg-black/95 backdrop-blur-sm px-4 py-3 flex items-center gap-2.5">

          {/* WhatsApp — primary */}
          <a
            href="https://wa.me/917827433875"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] active:scale-95 text-white text-[14px] font-bold px-4 py-3 rounded-xl transition-all duration-150 no-underline"
          >
            <IoLogoWhatsapp size={18} />
            Apply Now
          </a>

          {/* Details — secondary */}
          <a
            href="#program"
            className="inline-flex items-center justify-center gap-1.5 bg-white/8 hover:bg-white/12 active:scale-95 border border-white/10 text-white/70 text-[13px] font-semibold px-4 py-3 rounded-xl transition-all duration-150 no-underline whitespace-nowrap"
          >
            <IoInformationCircle size={17} />
            Details
          </a>

        </div>

        {/* Safe area spacer for iOS */}
        <div className="bg-black/95 h-safe-bottom" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }} />
      </div>
    </>
  )
}