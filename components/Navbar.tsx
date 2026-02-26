'use client';

import { useState } from 'react';
import Link from 'next/link';
import UserMenu from './UserMenu';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-falcon-400 to-falcon-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white">
              Pano<span className="text-falcon-400">Falcon</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Pricing
            </Link>
            <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Gallery
            </Link>
            <Link href="/upload" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Share 360°
            </Link>
            <UserMenu />
            <Link href="/upload" className="btn-primary text-sm px-5 py-2">
              TRY NOW
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <UserMenu />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 mt-2 pt-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link
                href="/pricing"
                className="text-gray-300 hover:text-white transition-colors font-medium px-3 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/gallery"
                className="text-gray-300 hover:text-white transition-colors font-medium px-3 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/upload"
                className="text-gray-300 hover:text-white transition-colors font-medium px-3 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Share 360°
              </Link>
              <Link
                href="/upload"
                className="btn-primary text-sm px-5 py-2 text-center w-fit"
                onClick={() => setMobileMenuOpen(false)}
              >
                TRY NOW
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
