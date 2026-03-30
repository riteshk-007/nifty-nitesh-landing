'use client'

import { useState } from 'react'
import { IoChevronDown, IoHelpCircle } from 'react-icons/io5'

const faqs = [
  {
    question: 'Complete beginner — will I understand?',
    answer: 'Yes. Day 1 starts from absolute zero. No prior knowledge needed — we build everything step by step.',
  },
  {
    question: 'What if I miss a live class?',
    answer: 'Every session is recorded. Watch anytime at your pace — nothing gets missed.',
  },
  {
    question: 'Trading or investing — what does this teach?',
    answer: 'Both fundamentals — charts, analysis, risk management. You decide your path afterward.',
  },
  {
    question: 'Is payment secure?',
    answer: 'Registration is direct via WhatsApp with our team. No hidden charges, full transparency.',
  },
  {
    question: 'Do I get a certificate?',
    answer: 'Yes — a completion certificate is issued after finishing all 20 sessions.',
  },
  {
    question: 'When is the next batch?',
    answer: "Seats are limited and fill fast. Register on WhatsApp — we'll send the date instantly.",
  },
]

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUp 0.55s ease both; }
        .animate-slide-down { animation: slideDown 0.2s ease both; }
        .bebas { font-family: 'Bebas Neue', sans-serif; }
        .body-font { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <section className="body-font relative w-full bg-black py-10 md:py-16 overflow-hidden">

        {/* Dot grid */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        {/* Subtle center glow */}
        <div aria-hidden="true" className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[180px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(ellipse, #f0b429, transparent 70%)' }} />

        <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8">

          {/* Header */}
          <div className="animate-fade-up text-center mb-10">
            <div className="inline-flex items-center gap-1.5 bg-[#f0b429]/10 border border-[#f0b429]/20 text-[#f0b429] text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
              <IoHelpCircle size={13} /> FAQ
            </div>
            <h2 className="bebas text-[clamp(38px,5.5vw,60px)] leading-[0.95] text-white tracking-wide m-0">
              Common <span className="text-[#c8922a]">Questions</span>
            </h2>
          </div>

          {/* Accordion */}
          <div className="animate-fade-up flex flex-col gap-2.5">
            {faqs.map((faq, i) => {
              const isOpen = open === i
              return (
                <div
                  key={i}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${isOpen
                    ? 'border-[#c8922a]/50 bg-white/[0.04]'
                    : 'border-white/8 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.035]'
                    }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer bg-transparent border-0 outline-none"
                  >
                    {/* Number + question */}
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <span className="bebas text-[14px] text-[#c8922a]/60 tracking-widest flex-shrink-0 w-5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className={`text-[14px] sm:text-[15px] font-600 font-semibold leading-snug transition-colors duration-150 ${isOpen ? 'text-white' : 'text-white/70'}`}>
                        {faq.question}
                      </span>
                    </div>

                    {/* Chevron */}
                    <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${isOpen ? 'bg-[#c8922a] text-black rotate-180' : 'bg-white/8 text-white/40'
                      }`}>
                      <IoChevronDown size={15} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="animate-slide-down px-5 pb-4 pl-[52px]">
                      <p className="text-[13.5px] text-white/50 leading-relaxed m-0">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="animate-fade-up mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4">
            <p className="text-[13px] text-white/40 m-0">Still have questions?</p>
            <a
              href="https://wa.me/917827433875"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white text-[13px] font-bold px-5 py-2.5 rounded-xl transition-all duration-200 no-underline whitespace-nowrap"
            >
              Chat on WhatsApp →
            </a>
          </div>

        </div>
      </section>
    </>
  )
}