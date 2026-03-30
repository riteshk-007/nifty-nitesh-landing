'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { IoRibbon } from 'react-icons/io5'

const certs = [
    { src: '/card1.jpg', alt: 'MindLuster — Stockholders Equity' },
    { src: '/card2.jpg', alt: 'NISM — Financial Literacy for Bharat' },
    { src: '/card3.jpg', alt: 'GTF / ISO — Technical Analysis' },
    { src: '/card4.jpg', alt: 'Introduction to Stock Markets' },
    { src: '/card5.jpg', alt: 'MindLuster — Financial Derivatives' },
    { src: '/card6.jpg', alt: 'Unstop — Shri Ram Trading Challenge' },
    { src: '/card7.jpg', alt: 'NISM — SEBI Investor Certification' },
    { src: '/card8.jpg', alt: 'GTF / ISO — Trading In The Zone' },
    { src: '/card9.jpg', alt: 'NISM / SEBI — Financial Literacy Quiz' },
]

export default function CertificatesSection() {
    const trackRef = useRef<HTMLDivElement>(null)
    const posRef = useRef(0)
    const rafRef = useRef(0)
    const SPEED = 0.6

    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        const tick = () => {
            posRef.current += SPEED
            const singleW = track.scrollWidth / 3
            if (posRef.current >= singleW) posRef.current -= singleW
            track.style.transform = `translateX(-${posRef.current}px)`
            rafRef.current = requestAnimationFrame(tick)
        }

        rafRef.current = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(rafRef.current)
    }, [])

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fu { animation: fadeUp 0.55s ease both; }
        .bebas { font-family: 'Bebas Neue', sans-serif; }
        .bf { font-family: 'DM Sans', sans-serif; }
      `}</style>

            <section className="bf relative w-full bg-white py-16 overflow-hidden" id="certifications">

                {/* dot grid */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0"
                    style={{ backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)', backgroundSize: '28px 28px', opacity: 0.4 }} />

                {/* Top + bottom gold lines */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8922a]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8922a]/60 to-transparent" />

                {/* Header */}
                <div className="fu relative z-10 text-center mb-10 px-5">
                    <div className="inline-flex items-center gap-2 bg-[#c8922a]/10 border border-[#c8922a]/30 text-[#c8922a] text-[12px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                        <IoRibbon size={12} /> Verified Certifications
                    </div>
                    <h2 className="bebas text-[clamp(36px,5.5vw,60px)] leading-[0.93] text-black tracking-wide m-0">
                        Nitesh Sir's <span className="text-[#c8922a]">Credentials</span>
                    </h2>
                    <p className="mt-3 text-[15px] text-gray-500 max-w-md mx-auto leading-relaxed">
                        Certified by NISM · SEBI · ISO · GTF — real market knowledge, verified credentials.
                    </p>
                </div>

                {/* Carousel wrapper */}
                <div className="relative overflow-hidden">

                    {/* Left + right white fade */}
                    <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10"
                        style={{ background: 'linear-gradient(to right, white, transparent)' }} />
                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10"
                        style={{ background: 'linear-gradient(to left, white, transparent)' }} />

                    {/* Track — never stops */}
                    <div
                        ref={trackRef}
                        className="flex gap-4 w-max py-2"
                        style={{ willChange: 'transform' }}
                    >
                        {[...certs, ...certs, ...certs].map((cert, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-[#c8922a]/40 shadow-sm hover:shadow-[0_6px_24px_rgba(200,146,42,0.12)] transition-all duration-200 bg-white"
                                style={{ width: '260px' }}
                            >
                                {/* Certificate image */}
                                <div className="relative w-full" style={{ aspectRatio: '16/10' }}>
                                    <Image
                                        src={cert.src}
                                        alt={cert.alt}
                                        fill
                                        className="object-cover"
                                        sizes="260px"
                                        draggable={false}
                                    />
                                </div>

                                {/* Label */}
                                <div className="px-3 py-2.5 border-t border-gray-100">
                                    <p className="text-[11.5px] text-gray-500 font-semibold leading-snug m-0 line-clamp-1">
                                        {cert.alt}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom credential pills */}
                <div className="fu relative z-10 flex justify-center mt-8 px-5" style={{ animationDelay: '0.15s' }}>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {['NISM Certified', 'SEBI Certified', 'ISO Certified', 'GTF Certified', '9+ Certificates'].map((label, i) => (
                            <span key={i}
                                className="inline-flex items-center gap-1.5 bg-[#c8922a]/8 border border-[#c8922a]/20 text-[#c8922a] text-[12px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full"
                            >
                                <IoRibbon size={11} />
                                {label}
                            </span>
                        ))}
                    </div>
                </div>

            </section>
        </>
    )
}