'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

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
        // Redirect to Google OAuth
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
          >
            🦅 PanoFalcon
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          {/* Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome to PanoFalcon
              </h1>
              <p className="text-gray-600">
                Sign in to upload and share your 360° panoramas
              </p>
            </div>

            {/* Google Sign In Button */}
            <button
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-4 border border-gray-300 rounded-lg shadow-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FcGoogle className="text-2xl" />
              <span>
                {isLoading ? 'Signing in...' : 'Continue with Google'}
              </span>
            </button>

            {/* Info */}
            <div className="mt-6 text-center text-sm text-gray-600">
              <p>
                By signing in, you agree to our{' '}
                <Link href="/terms" className="text-blue-600 hover:text-blue-700">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-blue-600 hover:text-blue-700">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mt-8 grid grid-cols-1 gap-4 text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="font-semibold text-gray-900 mb-1">Fast Uploads</h3>
              <p className="text-sm text-gray-600">
                Upload your panoramas in seconds
              </p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">🔗</div>
              <h3 className="font-semibold text-gray-900 mb-1">Shareable Links</h3>
              <p className="text-sm text-gray-600">
                Get memorable URLs like flying-falcon-42
              </p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">📊</div>
              <h3 className="font-semibold text-gray-900 mb-1">Track Views</h3>
              <p className="text-sm text-gray-600">
                See how many people viewed your panoramas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
