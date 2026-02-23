import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const supabase = createClient();
    
    // Get the origin from the request URL as fallback
    const { origin } = new URL(request.url);
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || origin;
    
    console.log('Site URL:', siteUrl); // Debug log
    console.log('Env var:', process.env.NEXT_PUBLIC_SITE_URL); // Debug log
    
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${siteUrl}/auth/callback`,
      },
    });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ url: data.url });
  } catch (error) {
    console.error('Google auth error:', error);
    return NextResponse.json(
      { error: 'Failed to initiate Google sign in' },
      { status: 500 }
    );
  }
}
