import { NextResponse } from 'next/server';
import { 
  USE_LOCAL_STORAGE, 
  saveFileLocally, 
  savePanoramaLocally,
  slugExists 
} from '@/lib/local-storage';
import { generateUniqueFancyName } from '@/lib/fancy-names';
import { createClient } from '@/lib/supabase/server';

// Conditionally import Vercel services
async function uploadToVercel(file: File, slug: string) {
  const { put } = await import('@vercel/blob');
  // Try public access first, fall back to private if needed
  try {
    return await put(`panoramas/${slug}/${file.name}`, file, {
      access: 'public',
    });
  } catch (error: any) {
    // If public access fails, use default (private) access
    if (error.message?.includes('private store')) {
      return await put(`panoramas/${slug}/${file.name}`, file);
    }
    throw error;
  }
}

async function saveToDatabase(data: any) {
  const { savePanorama } = await import('@/lib/db');
  return await savePanorama(data);
}

export async function POST(request: Request) {
  try {
    // Get user from Supabase session (optional - anonymous uploads allowed)
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    const userId = user?.id;

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    if (!title) {
      return NextResponse.json(
        { error: 'Title is required' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'File must be an image' },
        { status: 400 }
      );
    }

    // Generate unique ID for backwards compatibility
    const id = `pano_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Generate unique fancy slug
    const slug = await generateUniqueFancyName(slugExists);
    
    let imageUrl: string;
    
    // Use local storage in development, Vercel Blob in production
    if (USE_LOCAL_STORAGE) {
      console.log('📁 Using local storage (development mode)');
      console.log(`🎯 Generated fancy slug: ${slug}`);
      if (userId) {
        console.log(`👤 User authenticated: ${userId}`);
      } else {
        console.log('👤 Anonymous upload');
      }
      
      imageUrl = await saveFileLocally(file, slug, userId);
      
      // Save to local JSON database
      const result = await savePanoramaLocally({
        id,
        slug,
        title,
        description,
        image_url: imageUrl,
      }, userId);

      if (!result.success) {
        return NextResponse.json(
          { error: 'Failed to save panorama metadata' },
          { status: 500 }
        );
      }
    } else {
      console.log('☁️ Using cloud storage (production mode)');
      console.log(`🎯 Generated fancy slug: ${slug}`);
      if (userId) {
        console.log(`👤 User authenticated: ${userId}`);
      } else {
        console.log('👤 Anonymous upload');
      }
      
      // Upload to Vercel Blob
      const blob = await uploadToVercel(file, slug);
      imageUrl = blob.url;

      // Save metadata to Supabase database
      const result = await saveToDatabase({
        id,
        slug,
        title,
        description,
        image_url: imageUrl,
        user_id: userId,
      });

      if (!result.success) {
        return NextResponse.json(
          { error: 'Failed to save panorama metadata' },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      id,
      slug,
      url: imageUrl,
      viewUrl: `/view/${slug}`,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload panorama' },
      { status: 500 }
    );
  }
}
