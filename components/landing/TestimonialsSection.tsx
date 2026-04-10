"use client"
import { useState } from "react";
import { FaXTwitter, FaRetweet, FaRegHeart, FaHeart, FaRegComment, FaRegBookmark, FaBookmark } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { HiDotsHorizontal } from "react-icons/hi";

interface Testimonial {
  quote: string;
  author: string;
  handle: string;
  role: string;
  initials: string;
  avatarColor: string;
  timestamp: string;
  likes: number;
  retweets: number;
  replies: number;
  bookmarks: number;
  verified: boolean;
}

interface TweetCardProps {
  t: Testimonial;
}

const testimonials: Testimonial[] = [
  {
    quote: "Just completed @NiftyNitesh's 20-day stock market program! From zero knowledge to understanding charts, demand zones, and systematic trading. Agar aap beginner ho toh yeh program must hai! 🚀📈 #StockMarket #NiftyNitesh",
    author: "Rahul Mehta",
    handle: "rahul_trader92",
    role: "IT Professional, Pune",
    initials: "RM",
    avatarColor: "from-violet-500 to-indigo-600",
    timestamp: "2h",
    likes: 24,
    retweets: 8,
    replies: 3,
    bookmarks: 14,
    verified: false,
  },
  {
    quote: "Finally found a course that doesn't confuse beginners! Nitesh Sir explains everything in simple Hindi-English mix. Day 1 se Day 20 tak structure perfect tha. No more YouTube rabbit holes! 💯 #StockMarketIndia",
    author: "Priya Sharma",
    handle: "priya_stocks",
    role: "Student, Mumbai",
    initials: "PS",
    avatarColor: "from-pink-500 to-rose-500",
    timestamp: "5h",
    likes: 31,
    retweets: 12,
    replies: 5,
    bookmarks: 19,
    verified: true,
  },
  {
    quote: "After struggling with random and unstructured trades, joined this program. Ab mujhe demand/supply zones, entry/exit points sab samajh aa gaya. Systematic approach ne sab badal diya! Thank you @NiftyNitesh 🙏",
    author: "Amit Kumar",
    handle: "amit_investor",
    role: "Working Professional, Delhi",
    initials: "AK",
    avatarColor: "from-emerald-500 to-teal-600",
    timestamp: "8h",
    likes: 45,
    retweets: 15,
    replies: 7,
    bookmarks: 28,
    verified: false,
  },
  {
    quote: "Best investment in myself! 20 days with Nitesh Sir taught me more than 6 months of self-study. Candle patterns se leke trade setup tak — everything crystal clear now. Batch was 🌟🌟🌟🌟🌟",
    author: "Sneha Patel",
    handle: "sneha_finance",
    role: "Bank Employee, Ahmedabad",
    initials: "SP",
    avatarColor: "from-amber-500 to-orange-500",
    timestamp: "12h",
    likes: 28,
    retweets: 9,
    replies: 4,
    bookmarks: 17,
    verified: false,
  },
  {
    quote: "Started as complete beginner, now confident in technical analysis. The Mahabharat framework for trade scoring is brilliant! Live classes were super interactive aur doubt-clearing sessions ne bahut help ki. Highly recommend! 💪📊",
    author: "Vikram Singh",
    handle: "vikram_trades",
    role: "Business Owner, Jaipur",
    initials: "VS",
    avatarColor: "from-sky-500 to-blue-600",
    timestamp: "1d",
    likes: 52,
    retweets: 18,
    replies: 9,
    bookmarks: 33,
    verified: true,
  },
  {
    quote: "Random YouTube videos pe time waste mat karo. Yeh structured program exactly wahi hai jo beginners ko chahiye. Simple language, practical examples, aur real market logic. Worth every rupee! 💰 #LearnStocks #India",
    author: "Kavita Reddy",
    handle: "kavita_stocks",
    role: "Teacher, Hyderabad",
    initials: "KR",
    avatarColor: "from-fuchsia-500 to-purple-600",
    timestamp: "1d",
    likes: 37,
    retweets: 11,
    replies: 6,
    bookmarks: 22,
    verified: false,
  },
];

function formatCount(n: number): string {
  if (n >= 1000) return (n / 1000).toFixed(1) + "K";
  return n.toString();
}

function TweetCard({ t }: TweetCardProps) {
  const [liked, setLiked] = useState(false);
  const [retweeted, setRetweeted] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(t.likes);
  const [rtCount, setRtCount] = useState(t.retweets);

  const handleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };
  const handleRT = () => {
    setRetweeted((prev) => !prev);
    setRtCount((prev) => (retweeted ? prev - 1 : prev + 1));
  };

  return (
    <div className="tweet-card">
      {/* Top Row */}
      <div className="tweet-header">
        <div className="avatar-wrap">
          <div className={`avatar bg-gradient-to-br ${t.avatarColor}`}>
            {t.initials}
          </div>
        </div>
        <div className="author-info">
          <div className="author-name-row">
            <span className="author-name">{t.author}</span>
            {t.verified && (
              <RiVerifiedBadgeFill className="verified-icon" />
            )}
            <span className="author-handle">@{t.handle}</span>
            <span className="dot">·</span>
            <span className="timestamp">{t.timestamp}</span>
          </div>
          <span className="author-role">{t.role}</span>
        </div>
        <button className="more-btn">
          <HiDotsHorizontal />
        </button>
      </div>

      {/* Tweet Body */}
      <div className="tweet-body">
        <p className="tweet-text">{t.quote}</p>
      </div>

      {/* Divider */}
      <div className="tweet-divider" />

      {/* Actions Row */}
      <div className="tweet-actions">
        <button className="action-btn reply-btn">
          <FaRegComment />
          <span>{t.replies}</span>
        </button>
        <button
          className={`action-btn retweet-btn ${retweeted ? "active" : ""}`}
          onClick={handleRT}
        >
          <FaRetweet />
          <span>{formatCount(rtCount)}</span>
        </button>
        <button
          className={`action-btn like-btn ${liked ? "active" : ""}`}
          onClick={handleLike}
        >
          {liked ? <FaHeart /> : <FaRegHeart />}
          <span>{formatCount(likeCount)}</span>
        </button>
        <button
          className={`action-btn bookmark-btn ${bookmarked ? "active" : ""}`}
          onClick={() => setBookmarked((p) => !p)}
        >
          {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
          <span>{t.bookmarks}</span>
        </button>
        <button className="action-btn share-btn">
          <FiShare />
        </button>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Chirp:wght@400;500;700&family=Sora:wght@400;500;600;700;800&display=swap');

        .testimonials-section {
          width: 100%;
          background: #000000;
          padding: 80px 0 96px;
          position: relative;
          overflow: hidden;
          font-family: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* Subtle grid background */
        .testimonials-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        .ts-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        /* ---- Header ---- */
        .ts-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .ts-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(29, 161, 242, 0.12);
          border: 1px solid rgba(29, 161, 242, 0.3);
          border-radius: 999px;
          padding: 6px 18px;
          margin-bottom: 20px;
        }

        .ts-eyebrow svg {
          color: #1d9bf0;
          font-size: 15px;
        }

        .ts-eyebrow span {
          color: #1d9bf0;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .ts-title {
          font-size: clamp(28px, 4.5vw, 52px);
          font-weight: 800;
          color: #e7e9ea;
          line-height: 1.15;
          margin: 0 0 16px;
          letter-spacing: -0.02em;
        }

        .ts-title .highlight {
          color: #1d9bf0;
        }

        .ts-sub {
          font-size: 16px;
          color: #71767b;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* ---- Grid ---- */
        .ts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #2f3336;
          border: 1px solid #2f3336;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 40px;
        }

        @media (max-width: 900px) {
          .ts-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 580px) {
          .ts-grid {
            grid-template-columns: 1fr;
            border-radius: 12px;
          }
        }

        /* ---- Tweet Card ---- */
        .tweet-card {
          background: #000000;
          padding: 16px 16px 0;
          transition: background 0.15s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .tweet-card:hover {
          background: #080808;
        }

        /* Header */
        .tweet-header {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 12px;
        }

        .avatar-wrap {
          flex-shrink: 0;
        }

        .avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.02em;
        }

        .author-info {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .author-name-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 4px;
        }

        .author-name {
          font-size: 15px;
          font-weight: 700;
          color: #e7e9ea;
          white-space: nowrap;
        }

        .verified-icon {
          color: #1d9bf0;
          font-size: 16px;
          flex-shrink: 0;
        }

        .author-handle {
          font-size: 14px;
          color: #71767b;
          white-space: nowrap;
        }

        .dot {
          color: #71767b;
          font-size: 14px;
        }

        .timestamp {
          font-size: 14px;
          color: #71767b;
          white-space: nowrap;
        }

        .author-role {
          font-size: 12px;
          color: #71767b;
        }

        .more-btn {
          background: none;
          border: none;
          color: #71767b;
          cursor: pointer;
          padding: 4px;
          border-radius: 50%;
          font-size: 18px;
          display: flex;
          align-items: center;
          transition: color 0.15s, background 0.15s;
          flex-shrink: 0;
        }

        .more-btn:hover {
          color: #1d9bf0;
          background: rgba(29, 155, 240, 0.1);
        }

        /* X Logo in top right */
        .tweet-card .x-logo-badge {
          position: absolute;
          top: 12px;
          right: 12px;
        }

        /* Body */
        .tweet-body {
          flex: 1;
          margin-bottom: 12px;
        }

        .tweet-text {
          font-size: 15px;
          color: #e7e9ea;
          line-height: 1.65;
          margin: 0;
          word-break: break-word;
        }

        /* Divider */
        .tweet-divider {
          height: 1px;
          background: #2f3336;
          margin: 0 -16px;
        }

        /* Actions */
        .tweet-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 4px 0 4px;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 999px;
          font-size: 13px;
          font-family: inherit;
          font-weight: 400;
          color: #71767b;
          transition: color 0.15s, background 0.15s;
        }

        .action-btn svg {
          font-size: 17px;
        }

        .action-btn span {
          font-size: 13px;
          min-width: 16px;
        }

        .reply-btn:hover {
          color: #1d9bf0;
          background: rgba(29, 155, 240, 0.1);
        }

        .retweet-btn:hover {
          color: #00ba7c;
          background: rgba(0, 186, 124, 0.1);
        }

        .retweet-btn.active {
          color: #00ba7c;
        }

        .like-btn:hover {
          color: #f91880;
          background: rgba(249, 24, 128, 0.1);
        }

        .like-btn.active {
          color: #f91880;
        }

        .bookmark-btn:hover {
          color: #1d9bf0;
          background: rgba(29, 155, 240, 0.1);
        }

        .bookmark-btn.active {
          color: #1d9bf0;
        }

        .share-btn:hover {
          color: #1d9bf0;
          background: rgba(29, 155, 240, 0.1);
        }

        /* ---- Bottom Strip ---- */
        .ts-bottom-strip {
          background: #16181c;
          border: 1px solid #2f3336;
          border-radius: 16px;
          padding: 28px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          text-align: center;
        }

        .strip-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .strip-x-icon {
          font-size: 24px;
          color: #e7e9ea;
        }

        .strip-text {
          font-size: 18px;
          font-weight: 700;
          color: #e7e9ea;
        }

        .strip-sub {
          font-size: 14px;
          color: #71767b;
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .strip-pill {
          background: rgba(255,255,255,0.06);
          border: 1px solid #2f3336;
          border-radius: 999px;
          padding: 4px 14px;
          font-size: 13px;
          color: #71767b;
        }

        .strip-cta {
          margin-top: 4px;
          background: #1d9bf0;
          color: #fff;
          border: none;
          border-radius: 999px;
          padding: 10px 28px;
          font-size: 15px;
          font-weight: 700;
          font-family: inherit;
          cursor: pointer;
          transition: background 0.15s;
        }

        .strip-cta:hover {
          background: #1a8cd8;
        }

        @media (max-width: 480px) {
          .testimonials-section {
            padding: 56px 0 64px;
          }
          .tweet-actions .action-btn span {
            display: none;
          }
          .ts-bottom-strip {
            padding: 24px 20px;
          }
          .strip-text {
            font-size: 16px;
          }
        }
      `}</style>

      <section className="testimonials-section">
        <div className="ts-inner">
          {/* Header */}
          <div className="ts-header">
            <div className="ts-eyebrow">
              <FaXTwitter />
              <span>Sample Testimonials</span>
            </div>
            <h2 className="ts-title">
              What Students Are Saying{" "}
              <span className="highlight">on X</span>
            </h2>
            <p className="ts-sub">
              Sample experiences from some of our 500+ students across India who learned with us.
            </p>
          </div>

          {/* Tweets Grid */}
          <div className="ts-grid">
            {testimonials.map((t, i) => (
              <TweetCard key={i} t={t} />
            ))}
          </div>

          {/* Bottom Strip */}
          <div className="ts-bottom-strip">
            <div className="strip-row">
              <FaXTwitter className="strip-x-icon" />
              <span className="strip-text">
                Join 500+ Students Learning Stock Market the Right Way
              </span>
            </div>
            <div className="strip-sub">
              <span className="strip-pill">⭐ 4.9 Rating</span>
              <span className="strip-pill">🇮🇳 Pan India</span>
              <span className="strip-pill">📈 Real Results</span>
              <span className="strip-pill">💬 Hindi + English</span>
            </div>
            <button className="strip-cta">Enroll in Next Batch →</button>
          </div>

          {/* Disclaimer text */}
          <div className="mt-8 text-center text-[#71767b] text-[12px] max-w-3xl mx-auto leading-relaxed">
            *Note: These are sample testimonials. Individual learning outcomes may vary. This is an educational program focused on building trading skills, and does not guarantee profits or success in the stock market.
          </div>
        </div>
      </section>
    </>
  );
}