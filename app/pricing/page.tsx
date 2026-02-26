import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Pricing - PanoFalcon',
  description: 'Choose the perfect plan for your 360° virtual tour needs',
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-dark-900 flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
            Simple, transparent <span className="gradient-text">pricing</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Start free, upgrade when you&apos;re ready.
          </p>
        </div>
      </section>

      {/* Free Plan */}
      <section className="pb-16 sm:pb-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Our <span className="gradient-text">Free plan</span> for personal use
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              We provide a fast and free service for personal use. You don&apos;t need to register.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="glass-card p-8 text-center border-falcon-500/30">
              <div className="inline-flex items-center px-4 py-1.5 bg-falcon-500/20 rounded-full text-falcon-400 text-sm font-medium mb-6">
                Free
              </div>
              <h3 className="text-white text-2xl font-bold mb-2">Personal use only</h3>
              <div className="my-6 space-y-3 text-left">
                <div className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-falcon-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited 360 images upload</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-falcon-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>360° image sharing everywhere</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-falcon-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Easy website embedding</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>No dashboard access</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>No commercial use</span>
                </div>
              </div>
              <Link href="/upload" className="btn-primary w-full text-center block py-3 text-lg">
                UPLOAD NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Plans */}
      <section className="py-16 sm:py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Our <span className="gradient-text">premium plans</span>
            </h2>
            <p className="text-gray-400">Different plans for your unique ambitions</p>
          </div>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="text-white font-medium">Monthly</span>
            <div className="w-12 h-6 bg-falcon-600 rounded-full relative cursor-pointer">
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform" />
            </div>
            <span className="text-gray-400">Yearly</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Amateur */}
            <div className="glass-card p-8 hover:border-falcon-500/30 transition-all">
              <div className="text-center mb-6">
                <h3 className="text-falcon-400 text-sm font-semibold uppercase tracking-wider mb-2">Amateur</h3>
                <p className="text-gray-400 text-sm mb-4">For personal use</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-white">$5</span>
                  <span className="text-gray-400">/ month</span>
                </div>
              </div>
              <Link href="/auth" className="btn-primary w-full text-center block py-3 mb-2">
                TRY NOW
              </Link>
              <p className="text-center text-gray-500 text-xs mb-6">10 DAYS FREE · No credit card required</p>
              <div className="space-y-3 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-falcon-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>100 panorama uploads</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-falcon-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dashboard access</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-falcon-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Basic analytics</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-falcon-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom branding removed</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-falcon-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Email support</span>
                </div>
              </div>
            </div>

            {/* Starter - Popular */}
            <div className="glass-card p-8 border-falcon-500/50 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-falcon-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                POPULAR
              </div>
              <div className="text-center mb-6">
                <h3 className="text-falcon-400 text-sm font-semibold uppercase tracking-wider mb-2">Starter</h3>
                <p className="text-gray-400 text-sm mb-4">Pro for small birds</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-white">$15</span>
                  <span className="text-gray-400">/ month</span>
                </div>
              </div>
              <Link href="/auth" className="btn-primary w-full text-center block py-3 mb-2">
                TRY NOW
              </Link>
              <p className="text-center text-gray-500 text-xs mb-6">10 DAYS FREE · No credit card required</p>
              <div className="space-y-3 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-falcon-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>500 panorama uploads</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-falcon-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Commercial use allowed</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-falcon-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Logo customization</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-falcon-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced analytics</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-falcon-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Hotspots & info points</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-falcon-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority email support</span>
                </div>
              </div>
            </div>

            {/* Business */}
            <div className="glass-card p-8 hover:border-falcon-500/30 transition-all">
              <div className="text-center mb-6">
                <h3 className="text-falcon-400 text-sm font-semibold uppercase tracking-wider mb-2">Business</h3>
                <p className="text-gray-400 text-sm mb-4">Pro for big birds</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-white">$29</span>
                  <span className="text-gray-400">/ month</span>
                </div>
              </div>
              <Link href="/auth" className="btn-primary w-full text-center block py-3 mb-2">
                TRY NOW
              </Link>
              <p className="text-center text-gray-500 text-xs mb-6">10 DAYS FREE · No credit card required</p>
              <div className="space-y-3 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-falcon-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited panorama uploads</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-falcon-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Virtual tours with navigation</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-falcon-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>White-label solution</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-falcon-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>API access</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-falcon-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority support + phone</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-falcon-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom domain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 sm:py-24 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            Compare <span className="gradient-text">all features</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-gray-400 font-medium py-4 pr-4">Feature</th>
                  <th className="text-center text-gray-400 font-medium py-4 px-3">Free</th>
                  <th className="text-center text-gray-400 font-medium py-4 px-3">Amateur</th>
                  <th className="text-center text-falcon-400 font-medium py-4 px-3">Starter</th>
                  <th className="text-center text-gray-400 font-medium py-4 px-3">Business</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { feature: '360° Image Upload', free: true, amateur: true, starter: true, business: true },
                  { feature: 'Image Sharing', free: true, amateur: true, starter: true, business: true },
                  { feature: 'Website Embedding', free: true, amateur: true, starter: true, business: true },
                  { feature: 'Dashboard Access', free: false, amateur: true, starter: true, business: true },
                  { feature: 'Commercial Use', free: false, amateur: false, starter: true, business: true },
                  { feature: 'Logo Customization', free: false, amateur: false, starter: true, business: true },
                  { feature: 'Hotspots', free: false, amateur: false, starter: true, business: true },
                  { feature: 'Virtual Tours', free: false, amateur: false, starter: false, business: true },
                  { feature: 'White Label', free: false, amateur: false, starter: false, business: true },
                  { feature: 'API Access', free: false, amateur: false, starter: false, business: true },
                  { feature: 'Priority Support', free: false, amateur: false, starter: true, business: true },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="text-gray-300 py-3 pr-4">{row.feature}</td>
                    <td className="text-center py-3 px-3">
                      {row.free ? (
                        <svg className="w-5 h-5 text-falcon-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </td>
                    <td className="text-center py-3 px-3">
                      {row.amateur ? (
                        <svg className="w-5 h-5 text-falcon-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </td>
                    <td className="text-center py-3 px-3">
                      {row.starter ? (
                        <svg className="w-5 h-5 text-falcon-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </td>
                    <td className="text-center py-3 px-3">
                      {row.business ? (
                        <svg className="w-5 h-5 text-falcon-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-dark-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
          <div className="space-y-4">
            {[
              { q: 'Can I try premium features for free?', a: 'Yes! All premium plans come with a 10-day free trial. No credit card required.' },
              { q: 'Can I cancel anytime?', a: 'Absolutely. You can cancel your subscription at any time with no questions asked.' },
              { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.' },
              { q: 'Is there a limit on image size?', a: 'Free plan supports up to 50MB per image. Premium plans support up to 200MB per image.' },
              { q: 'Can I embed tours on my website?', a: 'Yes! All plans include the ability to embed your 360° tours on any website using a simple iframe code.' },
            ].map((faq, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Start creating stunning 360° virtual tours today. No credit card required.
          </p>
          <Link href="/upload" className="btn-primary text-lg px-10 py-4 inline-block">
            GET STARTED FREE
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
