import { NextResponse } from 'next/server';
import { 
  USE_LOCAL_STORAGE, 
  getAllPanoramasLocally, 
  getPanoramaLocally 
} from '@/lib/local-storage';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const limit = searchParams.get('limit');

  try {
    if (USE_LOCAL_STORAGE) {
      // Use local storage
      if (id) {
        const panorama = await getPanoramaLocally(id);
        if (!panorama) {
          return NextResponse.json(
            { error: 'Panorama not found' },
            { status: 404 }
          );
        }
        return NextResponse.json(panorama);
      }

      const panoramas = await getAllPanoramasLocally();
      const limitNum = limit ? parseInt(limit) : 50;
      return NextResponse.json(panoramas.slice(0, limitNum));
    } else {
      // Use Supabase database
      const { getAllPanoramas, getPanorama } = await import('@/lib/db');
      
      if (id) {
        const panorama = await getPanorama(id);
        if (!panorama) {
          return NextResponse.json(
            { error: 'Panorama not found' },
            { status: 404 }
          );
        }
        return NextResponse.json(panorama);
      }

      const panoramas = await getAllPanoramas(limit ? parseInt(limit) : 50);
      return NextResponse.json(panoramas);
    }
  } catch (error) {
    console.error('Error fetching panoramas:', error);
    return NextResponse.json(
      { error: 'Failed to fetch panoramas' },
      { status: 500 }
    );
  }
}
