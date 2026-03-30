'use client'

import { useState } from 'react'
import { IoFlame } from 'react-icons/io5'
import { IoMdClose } from 'react-icons/io'
import { HiArrowRight } from 'react-icons/hi'
import { RiTimeLine } from 'react-icons/ri'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes pulse-flame {
          0%, 100% { transform: scale(1) rotate(-3deg); filter: drop-shadow(0 0 6px #f97316); }
          50% { transform: scale(1.2) rotate(3deg); filter: drop-shadow(0 0 12px #f97316); }
        }

        @keyframes ticker {
          0% { opacity: 0; transform: translateY(-6px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .ann-bar {
          position: sticky;
          top: 80px;
          z-index: 40;
          width: 100%;
          background: #000000;
          border-bottom: 1px solid #1a1a1a;
          animation: ticker 0.4s ease forwards;
          overflow: hidden;
        }

        /* Top accent line */
        .ann-bar::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #f97316, #facc15, #fb923c, #f97316);
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        .ann-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          min-height: 52px;
        }

        /* Left badge */
        .ann-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(249, 115, 22, 0.12);
          border: 1px solid rgba(249, 115, 22, 0.3);
          border-radius: 999px;
          padding: 4px 12px 4px 8px;
          flex-shrink: 0;
        }

        .ann-badge .flame-icon {
          color: #f97316;
          font-size: 16px;
          animation: pulse-flame 1.8s ease-in-out infinite;
        }

        .ann-badge span {
          font-size: 11px;
          font-weight: 700;
          color: #f97316;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          font-family: -apple-system, 'Segoe UI', sans-serif;
          white-space: nowrap;
        }

        /* Center content */
        .ann-center {
          display: flex;
          align-items: center;
          gap: 16px;
          flex: 1;
          justify-content: center;
          flex-wrap: wrap;
        }

        .ann-text {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: -apple-system, 'Segoe UI', sans-serif;
        }

        .ann-text .clock-icon {
          color: #71717a;
          font-size: 15px;
          flex-shrink: 0;
        }

        .ann-text p {
          font-size: 14px;
          font-weight: 500;
          color: #e4e4e7;
          margin: 0;
          white-space: nowrap;
        }

        .ann-text p strong {
          color: #ffffff;
          font-weight: 700;
        }

        /* Separator dot */
        .ann-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #3f3f46;
          flex-shrink: 0;
        }

        /* CTA Button */
        .ann-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, #f97316, #facc15);
          color: #000000;
          font-size: 13px;
          font-weight: 800;
          font-family: -apple-system, 'Segoe UI', sans-serif;
          padding: 7px 18px;
          border-radius: 999px;
          text-decoration: none;
          white-space: nowrap;
          border: none;
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s;
          box-shadow: 0 0 20px rgba(249, 115, 22, 0.35);
          flex-shrink: 0;
          letter-spacing: 0.01em;
        }

        .ann-cta:hover {
          transform: translateY(-1px) scale(1.02);
          box-shadow: 0 0 28px rgba(249, 115, 22, 0.5);
          opacity: 0.95;
        }

        .ann-cta:active {
          transform: scale(0.98);
        }

        .ann-cta .arrow-icon {
          font-size: 15px;
          transition: transform 0.15s;
        }

        .ann-cta:hover .arrow-icon {
          transform: translateX(2px);
        }

        /* Seats indicator */
        .ann-seats {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }

        .seats-dots {
          display: flex;
          gap: 3px;
          align-items: center;
        }

        .seat-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }

        .seat-dot.filled {
          background: #f97316;
        }

        .seat-dot.empty {
          background: #27272a;
          border: 1px solid #3f3f46;
        }

        .seats-label {
          font-size: 12px;
          color: #71717a;
          font-family: -apple-system, 'Segoe UI', sans-serif;
          white-space: nowrap;
        }

        .seats-label strong {
          color: #f97316;
        }

        /* Close button */
        .ann-close {
          background: none;
          border: none;
          cursor: pointer;
          color: #52525b;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
          border-radius: 50%;
          transition: color 0.15s, background 0.15s;
          flex-shrink: 0;
        }

        .ann-close:hover {
          color: #e4e4e7;
          background: #1a1a1a;
        }

        /* ---- Mobile ---- */
        @media (max-width: 700px) {
          .ann-inner {
            flex-wrap: wrap;
            padding: 10px 14px;
            min-height: unset;
            gap: 8px;
          }

          .ann-badge {
            order: 0;
          }

          .ann-close {
            order: 1;
            margin-left: auto;
          }

          .ann-center {
            order: 2;
            width: 100%;
            justify-content: flex-start;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .ann-dot {
            display: none;
          }

          .ann-text p {
            font-size: 13px;
            white-space: normal;
            line-height: 1.5;
          }

          .ann-seats {
            order: 3;
          }

          .ann-cta {
            width: 100%;
            justify-content: center;
            padding: 9px 20px;
            font-size: 14px;
          }
        }

        @media (max-width: 400px) {
          .ann-badge span {
            display: none;
          }
        }
      `}</style>

      <div className="ann-bar" role="banner">
        <div className="ann-inner">

          {/* Left Badge */}
          <div className="ann-badge">
            <IoFlame className="flame-icon" />
            <span>Live Now</span>
          </div>

          {/* Center */}
          <div className="ann-center">
            <div className="ann-text">
              <RiTimeLine className="clock-icon" />
              <p>
                <strong>Next Batch Starting Soon</strong> — Seats filling fast!
              </p>
            </div>

            <div className="ann-dot" />

            {/* Seats visual */}
            <div className="ann-seats">
              <div className="seats-dots">
                {[1, 2, 3, 4, 5, 6, 7].map(i => (
                  <div key={i} className={`seat-dot ${i <= 5 ? 'filled' : 'empty'}`} />
                ))}
              </div>
              <span className="seats-label">
                Only <strong>3 seats</strong> left
              </span>
            </div>

            <div className="ann-dot" />

            {/* CTA */}
            <a href="#program" className="ann-cta">
              Register Now
              <HiArrowRight className="arrow-icon" />
            </a>
          </div>

          {/* Close */}
          <button
            onClick={() => setIsVisible(false)}
            className="ann-close"
            aria-label="Close announcement"
          >
            <IoMdClose />
          </button>

        </div>
      </div>
    </>
  )
}