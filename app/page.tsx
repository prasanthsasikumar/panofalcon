import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-900 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-32 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-falcon-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Create your{' '}
              <span className="gradient-text">Virtual Tours 360</span>
              <br />in a breeze!
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Upload, share, and embed stunning 360° panoramic images. PanoFalcon makes it easy to create immersive virtual tours for your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/upload" className="btn-primary text-lg px-8 py-3.5 w-full sm:w-auto text-center">
                TRY NOW
              </Link>
              <Link href="/gallery" className="btn-secondary text-lg px-8 py-3.5 w-full sm:w-auto text-center flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                WATCH DEMO
              </Link>
            </div>
          </div>

          {/* Trusted by brands */}
          <div className="mt-16 sm:mt-24 text-center">
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-8">
              Trusted by top brands
            </p>
            <div className="flex items-center justify-center gap-8 sm:gap-16 opacity-40">
              <div className="text-gray-400 text-2xl font-bold">HP</div>
              <div className="text-gray-400 text-2xl font-bold">SAMSUNG</div>
              <div className="text-gray-400 text-2xl font-bold hidden sm:block">ADOBE</div>
              <div className="text-gray-400 text-2xl font-bold hidden sm:block">AIRBNB</div>
              <div className="text-gray-400 text-2xl font-bold hidden md:block">ZILLOW</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-16 sm:py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-falcon-400/20 to-falcon-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-falcon-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Create your Virtual Tour 360°</h3>
              <p className="text-gray-400 leading-relaxed">Upload your 360° images and create immersive virtual tours in minutes.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-accent-400/20 to-accent-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Share your creation in a breeze</h3>
              <p className="text-gray-400 leading-relaxed">Get a shareable link instantly. Share on social media or via direct link.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-falcon-400/20 to-falcon-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-falcon-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Embed tours on any website</h3>
              <p className="text-gray-400 leading-relaxed">Easily embed your 360° tours on any website with a simple embed code.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best 360 Viewer Section */}
      <section className="py-16 sm:py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              The best <span className="gradient-text">360 viewer</span> on the market
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Sleek, lightweight, 100% responsive, image-enhancing, and so much more!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Fast */}
            <div className="glass-card p-6 sm:p-8 text-center hover:border-falcon-500/30 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 mx-auto mb-5 bg-gradient-to-br from-falcon-400 to-falcon-600 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white text-lg font-bold mb-2">Fast</h3>
              <p className="text-gray-400 text-sm">Unmatched loading time for your 360 tours</p>
            </div>

            {/* Cross Devices */}
            <div className="glass-card p-6 sm:p-8 text-center hover:border-falcon-500/30 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 mx-auto mb-5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white text-lg font-bold mb-2">Cross Devices</h3>
              <p className="text-gray-400 text-sm">Works perfectly on all devices</p>
            </div>

            {/* Beautiful */}
            <div className="glass-card p-6 sm:p-8 text-center hover:border-falcon-500/30 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 mx-auto mb-5 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-white text-lg font-bold mb-2">Beautiful</h3>
              <p className="text-gray-400 text-sm">A modern 360 viewer designed by artists</p>
            </div>

            {/* Enhance Images */}
            <div className="glass-card p-6 sm:p-8 text-center hover:border-falcon-500/30 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 mx-auto mb-5 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-white text-lg font-bold mb-2">Enhance Images</h3>
              <p className="text-gray-400 text-sm">Image enhancement using AI</p>
            </div>
          </div>

          {/* Full screen preview CTA */}
          <div className="mt-12 text-center">
            <Link href="/gallery" className="inline-flex items-center gap-2 text-falcon-400 hover:text-falcon-300 font-medium transition-colors">
              CHECK IT OUT IN FULL SCREEN
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Harness the Power Section */}
      <section className="py-16 sm:py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Harness the power of <span className="gradient-text">360° technology</span> now!
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Modernize your business with PanoFalcon. Showcase your products and services with 360° imaging, and watch your business grow!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center hover:border-accent-500/30 transition-all">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-white text-xl font-bold mb-3">The WOW effect</h3>
              <p className="text-gray-400">Impress customers and raise brand awareness.</p>
            </div>

            <div className="glass-card p-8 text-center hover:border-accent-500/30 transition-all">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-white text-xl font-bold mb-3">Visitor retention</h3>
              <p className="text-gray-400">Increase visit durations on your website.</p>
            </div>

            <div className="glass-card p-8 text-center hover:border-accent-500/30 transition-all">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-white text-xl font-bold mb-3">More sales</h3>
              <p className="text-gray-400">Selling is easier with the perfect presentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Plan Section */}
      <section className="py-16 sm:py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="gradient-text">Free plan</span> for personal use
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              We provide a fast and free service for personal use. You don&apos;t need to register to use this service.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="glass-card p-8 text-center border-falcon-500/30">
              <div className="inline-flex items-center px-4 py-1.5 bg-falcon-500/20 rounded-full text-falcon-400 text-sm font-medium mb-6">
                Free
              </div>
              <h3 className="text-white text-2xl font-bold mb-2">Personal use only</h3>
              <div className="my-6 space-y-3">
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

      {/* Premium Plans Section */}
      <section className="py-16 sm:py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="gradient-text">premium plans</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Different plans for your unique ambitions
            </p>
          </div>

          {/* Plan Toggle */}
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
                  <span className="text-4xl font-bold text-white">$5</span>
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
              </div>
            </div>

            {/* Starter - Highlighted */}
            <div className="glass-card p-8 border-falcon-500/50 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-falcon-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                POPULAR
              </div>
              <div className="text-center mb-6">
                <h3 className="text-falcon-400 text-sm font-semibold uppercase tracking-wider mb-2">Starter</h3>
                <p className="text-gray-400 text-sm mb-4">Pro for small birds</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-white">$15</span>
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
              </div>
            </div>

            {/* Business */}
            <div className="glass-card p-8 hover:border-falcon-500/30 transition-all">
              <div className="text-center mb-6">
                <h3 className="text-falcon-400 text-sm font-semibold uppercase tracking-wider mb-2">Business</h3>
                <p className="text-gray-400 text-sm mb-4">Pro for big birds</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-white">$29</span>
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
                  <span>Hotspots and virtual tours</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-falcon-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority support</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-falcon-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>White-label solution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 sm:py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Key <span className="gradient-text">features</span>
              </h2>
              <p className="text-gray-400 mb-8">(In addition to the Amateur Plan)</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-falcon-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-falcon-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-lg">Commercial use allowed</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-falcon-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-falcon-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-lg">Logo customization</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-falcon-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-falcon-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-lg">Hotspots and virtual tours</span>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/auth" className="btn-primary inline-block text-lg px-8 py-3">
                  10 DAYS FREE · No credit card required
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="glass-card p-1 rounded-2xl">
                <div className="bg-gradient-to-br from-falcon-600/20 to-dark-900 rounded-xl aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-20 h-20 mx-auto text-falcon-400/50 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-500">360° Tour Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-dark-950 to-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to create your <span className="gradient-text">360° experience</span>?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of businesses already using PanoFalcon to showcase their spaces in immersive 360°.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/upload" className="btn-primary text-lg px-10 py-4 w-full sm:w-auto text-center">
              GET STARTED FREE
            </Link>
            <Link href="/pricing" className="btn-outline text-lg px-10 py-4 w-full sm:w-auto text-center">
              VIEW PRICING
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
