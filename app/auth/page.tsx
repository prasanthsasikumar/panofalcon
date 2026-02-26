'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import Navbar from '@/components/Navbar';

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      
      const response = await fetch('/api/auth/google', {
        method: 'POST',
      });
      
      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Sign in error:', error);
      alert('Failed to sign in with Google');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <div className="pt-32 sm:pt-40 pb-16 sm:pb-24">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          {/* Card */}
          <div className="glass-card p-8 sm:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-falcon-400 to-falcon-600 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome to PanoFalcon
              </h1>
              <p className="text-gray-400">
                Sign in to upload and manage your 360° panoramas
              </p>
            </div>

            {/* Google Sign In Button */}
            <button
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3.5 px-4 rounded-xl shadow-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FcGoogle className="text-2xl" />
              <span>
                {isLoading ? 'Signing in...' : 'Continue with Google'}
              </span>
            </button>

            {/* Info */}
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>
                By signing in, you agree to our{' '}
                <Link href="#" className="text-falcon-400 hover:text-falcon-300">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="#" className="text-falcon-400 hover:text-falcon-300">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mt-8 grid grid-cols-1 gap-4 text-center">
            <div className="glass-card p-5">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="font-semibold text-white mb-1">Fast Uploads</h3>
              <p className="text-sm text-gray-400">
                Upload your panoramas in seconds
              </p>
            </div>
            
            <div className="glass-card p-5">
              <div className="text-2xl mb-2">🔗</div>
              <h3 className="font-semibold text-white mb-1">Shareable Links</h3>
              <p className="text-sm text-gray-400">
                Get memorable URLs like flying-falcon-42
              </p>
            </div>
            
            <div className="glass-card p-5">
              <div className="text-2xl mb-2">📊</div>
              <h3 className="font-semibold text-white mb-1">Track Views</h3>
              <p className="text-sm text-gray-400">
                See how many people viewed your panoramas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
