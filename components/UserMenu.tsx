'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import type { User } from '@supabase/supabase-js';

export default function UserMenu() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await fetch('/api/auth/signout', { method: 'POST' });
      window.location.href = '/';
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  if (loading) {
    return (
      <div className="w-8 h-8 bg-white/10 rounded-full animate-pulse" />
    );
  }

  if (!user) {
    return (
      <Link
        href="/auth"
        className="px-4 py-2 text-sm text-gray-300 hover:text-white border border-white/10 rounded-full hover:bg-white/10 transition-all font-medium"
      >
        Sign In
      </Link>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-white/10 transition-colors"
      >
        {user.user_metadata?.avatar_url ? (
          <img
            src={user.user_metadata.avatar_url}
            alt={user.user_metadata?.full_name || 'User'}
            className="w-8 h-8 rounded-full"
            onError={(e) => {
              // If image fails to load, replace with generic icon
              e.currentTarget.style.display = 'none';
              if (e.currentTarget.nextElementSibling) {
                (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
              }
            }}
          />
        ) : null}
        <div 
          className="w-8 h-8 bg-gradient-to-br from-falcon-600 to-falcon-400 rounded-full flex items-center justify-center text-white"
          style={{ display: user.user_metadata?.avatar_url ? 'none' : 'flex' }}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="text-sm font-medium text-gray-300 hidden sm:inline">
          {user.user_metadata?.full_name || user.email}
        </span>
      </button>

      {showDropdown && (
        <>
          {/* Backdrop to close dropdown */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setShowDropdown(false)}
          />
          
          {/* Dropdown menu */}
          <div className="absolute right-0 mt-2 w-56 bg-dark-800 rounded-xl shadow-lg border border-white/10 py-1 z-20">
            <div className="px-4 py-3 border-b border-white/10">
              <p className="text-sm font-medium text-white">
                {user.user_metadata?.full_name || 'User'}
              </p>
              <p className="text-xs text-gray-400 truncate">
                {user.email}
              </p>
            </div>
            
            <Link
              href="/gallery"
              className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-white/10 hover:text-white"
              onClick={() => setShowDropdown(false)}
            >
              My Panoramas
            </Link>
            
            <button
              onClick={() => {
                setShowDropdown(false);
                handleSignOut();
              }}
              className="block w-full text-left px-4 py-2.5 text-sm text-red-400 hover:bg-white/10"
            >
              Sign Out
            </button>
          </div>
        </>
      )}
    </div>
  );
}
