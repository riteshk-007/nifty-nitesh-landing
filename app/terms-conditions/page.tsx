import Header from '@/components/landing/Header'
import Footer from '@/components/landing/Footer'

export default function TermsConditions() {
  return (
    <main className="w-full bg-white text-black min-h-screen">
      <Header />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-5 sm:px-8">
        <h1 className="text-4xl font-bold mb-8 text-[#c8922a]">Terms & Conditions</h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed font-sans">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold text-black mt-8">1. Acceptance of Terms</h2>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this websites particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
          
          <h2 className="text-2xl font-semibold text-black mt-8">2. Educational Purposes Only</h2>
          <p>All content provided on Nifty Nitesh is for educational and informational purposes only. We do not provide financial, investment, or trading advice. Trading in the stock market involves high risk, and you can lose substantial amounts of money. Any decisions you make based on our educational content are solely your responsibility.</p>
          
          <h2 className="text-2xl font-semibold text-black mt-8">3. Intellectual Property</h2>
          <p>All content, including videos, documents, text, and graphics, is the property of Nifty Nitesh and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without explicit written permission.</p>

          <h2 className="text-2xl font-semibold text-black mt-8">4. Modifications to Service</h2>
          <p>Nifty Nitesh reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice.</p>

          <h2 className="text-2xl font-semibold text-black mt-8">5. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at support@nifty-nitesh.com.</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
