'use client'

import { useState } from 'react'

const videos = [
    {
        id: 'x6cUif3yCJ0',
        title: 'Nifty Analysis & Trading Strategy',
        tag: 'Market Analysis',
        url: 'https://youtu.be/x6cUif3yCJ0?si=fEMKxIv3wEKwQoiI',
    },
    {
        id: 'Q6q4O1zB5JI',
        title: 'Options Market Basics for Beginners',
        tag: 'Options Trading',
        url: 'https://youtu.be/Q6q4O1zB5JI?si=q7BCaALjXklHulaE',
    },
    {
        id: 'PScdFqUAIqU',
        title: 'Stock Market Secrets Revealed',
        tag: 'Expert Insights',
        url: 'https://youtu.be/PScdFqUAIqU?si=5RCShS95_7c0Kpg7',
    },
    {
        id: '7q7q5HszqOo',
        title: 'Intraday Market Analysis Masterclass',
        tag: 'Masterclass',
        url: 'https://youtu.be/7q7q5HszqOo?si=GFUP_Z4Q4eUuJT2S',
    },
]

export default function YoutubeCardsSection() {
    const [hovered, setHovered] = useState<string | null>(null)

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .yt-fade-up { animation: fadeUp 0.6s ease both; }
        .bebas { font-family: 'Bebas Neue', sans-serif; }
        .body-font { font-family: 'DM Sans', sans-serif; }

        .yt-card-thumb {
          transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .yt-card:hover .yt-card-thumb {
          transform: scale(1.06);
        }
        .yt-play-btn {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .yt-card:hover .yt-play-btn {
          transform: scale(1.12);
          opacity: 1 !important;
        }
        .yt-card-overlay {
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.75) 0%,
            rgba(0, 0, 0, 0.15) 60%,
            transparent 100%
          );
          transition: opacity 0.3s ease;
        }
        .yt-card:hover .yt-card-overlay {
          opacity: 1;
        }
        .yt-tag {
          background: linear-gradient(135deg, #c8922a, #e8b85a);
        }
      `}</style>

            <section className="body-font relative w-full bg-white py-24 overflow-hidden">

                {/* Dot grid background */}
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
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8922a]/50 to-transparent" />

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

                    {/* Section header */}
                    <div className="yt-fade-up text-center mb-14">
                        <span className="yt-tag inline-block text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                            Free Learning
                        </span>
                        <h2 className="bebas text-5xl sm:text-6xl text-gray-900 leading-none tracking-wide">
                            Watch Our Free
                            <span className="text-[#c8922a]"> YouTube Videos</span>
                        </h2>
                        <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
                            Before joining the paid course, explore our free content — real strategies,
                            live market analysis, and expert insights. Subscribe and keep learning for free.
                        </p>

                        {/* YouTube channel link */}
                        <a
                            href="https://www.youtube.com/@Nifty-Nitesh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full border border-[#c8922a]/40 text-[#c8922a] text-sm font-semibold hover:bg-[#c8922a] hover:text-white transition-all duration-300"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                            </svg>
                            Visit @Nifty-Nitesh Channel
                        </a>
                    </div>

                    {/* Video Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-7">
                        {videos.map((video, i) => (
                            <a
                                key={video.id}
                                href={video.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="yt-card group block rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-400 bg-gray-900"
                                onMouseEnter={() => setHovered(video.id)}
                                onMouseLeave={() => setHovered(null)}
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                {/* Thumbnail wrapper */}
                                <div className="relative aspect-video overflow-hidden">
                                    {/* Thumbnail image */}
                                    <img
                                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                        alt={video.title}
                                        className="yt-card-thumb w-full h-full object-cover"
                                        loading="lazy"
                                        onError={(e) => {
                                            // Fallback to hqdefault if maxresdefault fails
                                            ; (e.target as HTMLImageElement).src =
                                                `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
                                        }}
                                    />

                                    {/* Dark gradient overlay */}
                                    <div className="yt-card-overlay absolute inset-0" />

                                    {/* Tag badge — top left */}
                                    <span className="yt-tag absolute top-3 left-3 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-lg">
                                        {video.tag}
                                    </span>

                                    {/* Play button — center */}
                                    <div className="yt-play-btn absolute inset-0 flex items-center justify-center opacity-90">
                                        <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-2xl ring-4 ring-white/20">
                                            <svg
                                                className="w-6 h-6 text-white ml-1"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Duration chip (decorative) */}
                                    <span className="absolute bottom-3 right-3 bg-black/70 text-white text-[11px] font-medium px-2 py-0.5 rounded-md">
                                        YouTube
                                    </span>
                                </div>

                                {/* Card footer */}
                                <div className="bg-white px-5 py-4 flex items-center justify-between gap-3">
                                    <div className="flex-1 min-w-0">
                                        <p className="text-gray-900 font-semibold text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-[#c8922a] transition-colors duration-200">
                                            {video.title}
                                        </p>
                                        <p className="mt-1 text-gray-400 text-xs">Nifty Nitesh • YouTube</p>
                                    </div>
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#c8922a]/10 group-hover:bg-[#c8922a] flex items-center justify-center transition-all duration-300">
                                        <svg
                                            className="w-3.5 h-3.5 text-[#c8922a] group-hover:text-white transition-colors duration-300"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="yt-fade-up text-center mt-12">
                        <p className="text-gray-400 text-sm">
                            100+ free videos available on our channel —{' '}
                            <a
                                href="https://www.youtube.com/@Nifty-Nitesh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#c8922a] font-semibold underline underline-offset-2 hover:text-[#e8b85a]"
                            >
                                Subscribe Now
                            </a>
                        </p>
                    </div>
                </div>

                {/* Bottom gold accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8922a]/50 to-transparent" />
            </section>
        </>
    )
}