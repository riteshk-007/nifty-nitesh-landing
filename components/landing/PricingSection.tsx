'use client'

import {
    IoCheckmarkCircle,
    IoLogoWhatsapp,
    IoFlash,
    IoShieldCheckmark,
    IoTime,
    IoPeople,
    IoVideocam,
    IoRibbon,
} from 'react-icons/io5'

const includes = [
    { icon: <IoVideocam size={16} />, text: '20 Live Online Classes' },
    { icon: <IoTime size={16} />, text: 'Lifetime Recording Access' },
    { icon: <IoPeople size={16} />, text: 'Personal Mentorship from Nitesh Sir' },
    { icon: <IoShieldCheckmark size={16} />, text: 'Risk Management Framework' },
    { icon: <IoRibbon size={16} />, text: 'Certificate of Completion' },
    { icon: <IoFlash size={16} />, text: 'Private Student WhatsApp Group' },
    { icon: <IoCheckmarkCircle size={16} />, text: 'Chart Reading & Technical Analysis' },
    { icon: <IoCheckmarkCircle size={16} />, text: 'Live Market Practice Sessions' },
]

export default function PricingSection() {
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
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          50%       { box-shadow: 0 0 0 12px rgba(34,197,94,0); }
        }
        .fu { animation: fadeUp 0.55s ease both; }
        .bebas { font-family: 'Bebas Neue', sans-serif; }
        .bf { font-family: 'DM Sans', sans-serif; }
        .gold-shine {
          background: linear-gradient(90deg, #c8922a, #f0b429, #c8922a);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerGold 3s linear infinite;
        }
        .wa-glow { animation: glowPulse 2s ease-in-out infinite; }
      `}</style>

            <section id="pricing" className="bf relative w-full bg-black py-10 md:py-16 overflow-hidden">

                {/* dot grid */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0"
                    style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

                {/* gold glow */}
                <div aria-hidden="true" className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full opacity-15"
                    style={{ background: 'radial-gradient(ellipse, #f0b429, transparent 70%)' }} />

                <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">

                    {/* Header */}
                    <div className="fu text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-[#f0b429]/10 border border-[#f0b429]/25 text-[#f0b429] text-[12px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                            <IoFlash size={12} /> Program Pricing
                        </div>
                        <h2 className="bebas text-[clamp(40px,6vw,68px)] leading-[0.93] text-white tracking-wide m-0">
                            One Investment. <span className="gold-shine">Lifetime Edge.</span>
                        </h2>
                        <p className="mt-4 text-[16px] text-white/45 max-w-md mx-auto leading-relaxed">
                            Everything you need to go from confused beginner to confident trader — in 20 days.
                        </p>
                    </div>

                    {/* Card */}
                    <div className="fu max-w-2xl mx-auto" style={{ animationDelay: '0.1s' }}>
                        <div className="relative rounded-3xl overflow-hidden border border-[#c8922a]/30"
                            style={{ background: 'linear-gradient(160deg, #111 0%, #0d0d0d 100%)' }}>

                            {/* Gold top line */}
                            <div className="h-[3px] bg-gradient-to-r from-transparent via-[#f0b429] to-transparent" />

                            {/* Popular badge */}
                            <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-[#c8922a] text-black text-[11px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full">
                                <IoFlash size={11} /> Most Popular
                            </div>

                            <div className="p-7 sm:p-10">

                                {/* Price block */}
                                <div className="mb-8">
                                    <p className="text-[13px] text-white/35 font-semibold uppercase tracking-widest mb-2">20-Day Complete Program</p>
                                    <div className="flex items-end gap-3 flex-wrap">
                                        <span className="text-[22px] text-white/20 line-through font-bold">₹25,000</span>
                                        <span className="bebas text-[clamp(54px,9vw,80px)] gold-shine leading-none">₹15,000</span>
                                        <span className="mb-2 inline-flex items-center gap-1 bg-green-500/15 border border-green-500/30 text-green-400 text-[12px] font-bold px-3 py-1 rounded-full">
                                            Save ₹10,000
                                        </span>
                                    </div>
                                    <p className="text-[13px] text-white/30 mt-1">One-time payment · No hidden charges</p>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-white/[0.07] mb-7" />

                                {/* Includes */}
                                <p className="text-[12px] text-white/40 font-bold uppercase tracking-widest mb-4">What's Included</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                    {includes.map((item, i) => (
                                        <div key={i} className="flex items-center gap-2.5">
                                            <div className="w-6 h-6 rounded-full bg-[#c8922a]/15 border border-[#c8922a]/30 flex items-center justify-center text-[#f0b429] flex-shrink-0">
                                                {item.icon}
                                            </div>
                                            <span className="text-[13.5px] text-white/65">{item.text}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-white/[0.07] mb-7" />

                                {/* CTA */}
                                <a
                                    href="https://wa.me/917827433875"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="wa-glow flex items-center justify-center gap-2.5 bg-[#22c55e] hover:bg-[#16a34a] active:scale-[0.98] text-white font-bold text-[16px] px-6 py-4 rounded-2xl transition-all duration-200 no-underline"
                                >
                                    <IoLogoWhatsapp size={22} />
                                    Register on WhatsApp — ₹15,000
                                </a>

                                {/* Trust row */}
                                <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-[12px] text-white/25">
                                    <span className="flex items-center gap-1"><IoShieldCheckmark size={13} className="text-green-400" /> Secure Payment</span>
                                    <span className="flex items-center gap-1"><IoTime size={13} className="text-[#f0b429]" /> Limited Seats</span>
                                    <span className="flex items-center gap-1"><IoRibbon size={13} className="text-[#c8922a]" /> Certificate Included</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* EMI note */}
                    <p className="fu text-center text-[13px] text-white/25 mt-5" style={{ animationDelay: '0.2s' }}>
                        Need installment option?{' '}
                        <a href="https://wa.me/917827433875" target="_blank" rel="noopener noreferrer"
                            className="text-[#c8922a] hover:text-[#f0b429] transition-colors no-underline font-semibold">
                            Chat with us on WhatsApp
                        </a>
                    </p>

                </div>
            </section>
        </>
    )
}