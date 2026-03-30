export default function CurriculumSection() {
  const classes = [
    { num: '01', title: 'Candle Formation', desc: 'Exciting & Base Candle — Strong Exciting Candle' },
    { num: '02', title: 'Demand & Supply Zones', desc: 'Candle Formation, Demand Zone, Supply Zone' },
    { num: '03', title: 'Leg-In / Base / Leg-Out', desc: 'Demand Zone — Entry Pattern Understanding' },
    { num: '04', title: 'Supply Zone: Entry & Stop Loss', desc: 'Using Supply Zone for trade setup' },
    { num: '05', title: 'Exceptional Marking', desc: 'Candle Breakdown Without Base · Wick to Wick' },
    { num: '06', title: 'Timeframe + Psychology', desc: 'Which Timeframe Is Powerful · Trading Psychology' },
    { num: '07', title: 'Logic Behind the Candle', desc: 'Price Action · Significant Gap' },
    { num: '08', title: 'Origin of Buying & Selling', desc: 'Distribution · Garbage Zones · Trend Understanding' },
    { num: '09', title: 'Multi-Timeframe Trading', desc: 'Trade Execution on Different Timeframes' },
    { num: '10', title: 'Trade Score + Target', desc: 'Mahabharat Framework · Target Setting' },
    { num: '11', title: 'Entry Types & Risk Per Trade', desc: 'Authenticity · Trading Style · Risk Management' },
    { num: '12', title: 'Aggressive vs Conservative', desc: 'EMA · Golden Crossover · Death Crossover' },
    { num: '13', title: 'Advanced Trend + EMA', desc: 'Deep Dive into EMA Line · Trend Confirmation' },
    { num: '14', title: 'Confirmation Entry', desc: 'Right Time to Take Entry — No Entry Without Confirmation' },
    { num: '15', title: 'Sector Analysis (Part 1)', desc: 'Which Sector Is Strong · Understanding Rotation' },
    { num: '16', title: 'Sector Analysis (Part 2)', desc: 'Deep Sector Study · Stock Selection From Sectors' },
    { num: '17', title: 'Gap Theory + Market Traps', desc: 'LOTL · Gap Fill · Avoiding Market Traps' },
    { num: '18', title: 'Putting It All Together', desc: 'Complete Revision · Doubt Solving · TDA Stocks' },
  ]

  return (
    <section className="w-full bg-[#f3f4f6] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#c8922a] font-dm-sans font-semibold text-sm uppercase mb-4">
            What&apos;s Inside
          </div>
          <h2 className="font-dm-serif-display text-5xl text-[#0f1f3d] mb-4">
            18 Power-Packed Classes
          </h2>
          <p className="font-dm-sans text-gray-600 text-lg max-w-2xl mx-auto">
            Not just theory — every class includes real market logic, price action, and practical application. Designed for beginners.
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {classes.map((cls, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#c8922a] hover:shadow-lg hover:border-[#f0b429] transition"
            >
              <div className="inline-block px-3 py-1 bg-[#0f1f3d] text-[#f0b429] rounded text-sm font-bebas-neue font-bold mb-3">
                {cls.num}
              </div>
              <h3 className="font-dm-sans font-bold text-[#0f1f3d] text-lg mb-2">
                {cls.title}
              </h3>
              <p className="font-dm-sans text-gray-600 text-sm">
                {cls.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-[#0f1f3d] text-white rounded-xl p-8 md:p-12 text-center">
          <p className="font-dm-sans text-lg mb-2">
            18 Classes + 1 Bonus Doubt Session
          </p>
          <h3 className="font-bebas-neue text-4xl md:text-5xl mb-6">
            Complete Foundation for Confident Trading
          </h3>
          <p className="font-dm-sans text-white/80 mb-8 max-w-2xl mx-auto">
            Learn the complete framework that teaches you to trade systematically, not emotionally.
          </p>
          <a
            href="https://wa.me/917827433875"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-4 rounded-lg font-dm-sans font-semibold transition"
          >
            Apply Now →
          </a>
        </div>
      </div>
    </section>
  )
}
