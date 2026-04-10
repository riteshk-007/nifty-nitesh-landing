import Header from '@/components/landing/Header'
import Footer from '@/components/landing/Footer'

export default function RefundPolicy() {
  return (
    <main className="w-full bg-white text-black min-h-screen">
      <Header />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-5 sm:px-8">
        <h1 className="text-4xl font-bold mb-8 text-[#c8922a]">Refund Policy</h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed font-sans">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold text-black mt-8">1. General Policy</h2>
          <p>At Nifty Nitesh, we strive to deliver high-quality educational programs. However, due to the digital nature of our educational content and live sessions, all sales are considered final.</p>
          
          <h2 className="text-2xl font-semibold text-black mt-8">2. No Refunds</h2>
          <p>Once a purchase is made and access is granted to the program, private WhatsApp group, or live session links, we do not offer refunds, exchanges, or cancellations. By purchasing our program, you agree to this strict no-refund policy.</p>
          
          <h2 className="text-2xl font-semibold text-black mt-8">3. Exceptional Circumstances</h2>
          <p>Refunds may only be considered in the rare event of duplicate payments. In such cases, the duplicate payment will be refunded to the original payment method within 5-7 business days.</p>

          <h2 className="text-2xl font-semibold text-black mt-8">4. Contact Us</h2>
          <p>If you believe you have been charged in error or have questions about our refund policy, please contact us immediately at support@nifty-nitesh.com.</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
