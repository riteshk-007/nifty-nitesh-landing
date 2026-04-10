import Header from '@/components/landing/Header'
import Footer from '@/components/landing/Footer'

export default function PrivacyPolicy() {
  return (
    <main className="w-full bg-white text-black min-h-screen">
      <Header />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-5 sm:px-8">
        <h1 className="text-4xl font-bold mb-8 text-[#c8922a]">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed font-sans">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold text-black mt-8">1. Information We Collect</h2>
          <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, phone number.</p>
          
          <h2 className="text-2xl font-semibold text-black mt-8">2. How We Use Collected Information</h2>
          <p>Nifty Nitesh collect and use Users personal information for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To improve customer service</li>
            <li>To personalize user experience</li>
            <li>To process payments</li>
            <li>To send periodic emails and WhatsApp messages regarding their order or inquiries</li>
          </ul>

          <h2 className="text-2xl font-semibold text-black mt-8">3. How We Protect Your Information</h2>
          <p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>

          <h2 className="text-2xl font-semibold text-black mt-8">4. Sharing Your Personal Information</h2>
          <p>We do not sell, trade, or rent Users personal identification information to others.</p>

          <h2 className="text-2xl font-semibold text-black mt-8">5. Contacting Us</h2>
          <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at support@nifty-nitesh.com.</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
