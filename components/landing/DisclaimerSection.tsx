'use client'

import { IoAlertCircle } from 'react-icons/io5'

export default function DisclaimerSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');
        .body-font { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <section className="body-font w-full bg-white py-10 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="flex gap-3 items-start bg-gray-50 border border-gray-200 rounded-xl px-5 py-4">
            <IoAlertCircle size={18} className="text-[#c8922a] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#c8922a] mb-1.5">Important Disclaimer</p>
              <p className="text-[12px] text-gray-400 leading-relaxed m-0">
                This program is for educational purposes only. Nifty Nitesh does not provide financial or investment advice. Stock market investments are subject to market risks. Past performance is not indicative of future results. Nifty Nitesh is not a SEBI-registered investment advisor. Always consult a certified financial advisor before making investment decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}