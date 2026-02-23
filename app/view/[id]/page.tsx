import { notFound } from 'next/navigation';
import Link from 'next/link';
import PanoramaViewer from '@/components/PanoramaViewer';
import ShareButton from '@/components/ShareButton';
import { 
  USE_LOCAL_STORAGE, 
  getPanoramaLocally, 
  incrementViewsLocally 
} from '@/lib/local-storage';

export default async function ViewPage({ params }: { params: { id: string } }) {
  let panorama;
  
  if (USE_LOCAL_STORAGE) {
    panorama = await getPanoramaLocally(params.id);
    if (panorama) {
      await incrementViewsLocally(params.id);
    }
  } else {
    const { getPanorama, incrementViews } = await import('@/lib/db');
    panorama = await getPanorama(params.id);
    if (panorama) {
      await incrementViews(params.id);
    }
  }

  if (!panorama) {
    notFound();
  }

  const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/view/${params.id}`;

  return (
    <div className="h-screen flex flex-col bg-gray-900">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-md border-b border-gray-800 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-falcon-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="text-xl font-bold text-white">PanoFalcon</span>
          </Link>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <h1 className="text-white font-semibold">{panorama.title}</h1>
              {panorama.description && (
                <p className="text-gray-400 text-sm">{panorama.description}</p>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              <ShareButton shareUrl={shareUrl} />

              <Link
                href="/upload"
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Upload
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Panorama Viewer */}
      <div className="flex-1 relative">
        <PanoramaViewer imageUrl={panorama.image_url} autoRotate={true} />
      </div>

      {/* Mobile info */}
      <div className="md:hidden bg-black/80 backdrop-blur-md border-t border-gray-800 px-4 py-3">
        <h2 className="text-white font-semibold">{panorama.title}</h2>
        {panorama.description && (
          <p className="text-gray-400 text-sm mt-1">{panorama.description}</p>
        )}
        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
          <span>{panorama.views} views</span>
          <span>•</span>
          <span>{new Date(panorama.created_at).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  let panorama;
  
  if (USE_LOCAL_STORAGE) {
    panorama = await getPanoramaLocally(params.id);
  } else {
    const { getPanorama } = await import('@/lib/db');
    panorama = await getPanorama(params.id);
  }

  if (!panorama) {
    return {
      title: 'Panorama Not Found',
    };
  }

  return {
    title: `${panorama.title} - PanoFalcon`,
    description: panorama.description || 'View this amazing 360° panorama',
    openGraph: {
      title: panorama.title,
      description: panorama.description || 'View this amazing 360° panorama',
      images: [panorama.image_url],
    },
    twitter: {
      card: 'summary_large_image',
      title: panorama.title,
      description: panorama.description || 'View this amazing 360° panorama',
      images: [panorama.image_url],
    },
  };
}
