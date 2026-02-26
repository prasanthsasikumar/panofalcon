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

  const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://panofalcon.flowsxr.com'}/view/${params.id}`;

  return (
    <div className="h-[100dvh] flex flex-col bg-gray-900">
      {/* Header */}
      <header className="bg-dark-950/90 backdrop-blur-xl border-b border-white/5 z-10">
        <div className="max-w-full mx-auto px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between gap-2">
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-falcon-400 to-falcon-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="text-lg sm:text-xl font-bold text-white">
              Pano<span className="text-falcon-400">Falcon</span>
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
            <div className="hidden md:block flex-1 min-w-0 mr-4">
              <h1 className="text-white font-semibold truncate">{panorama.title}</h1>
              {panorama.description && (
                <p className="text-gray-400 text-sm truncate">{panorama.description}</p>
              )}
            </div>
            
            <div className="flex items-center gap-2 ml-auto">
              <ShareButton shareUrl={shareUrl} />

              <Link
                href="/upload"
                className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition-colors text-sm sm:text-base"
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
      <div className="md:hidden bg-dark-950/90 backdrop-blur-xl border-t border-white/5 px-3 sm:px-4 py-2 sm:py-3">
        <h2 className="text-white font-semibold text-sm sm:text-base">{panorama.title}</h2>
        {panorama.description && (
          <p className="text-gray-400 text-xs sm:text-sm mt-1 line-clamp-2">{panorama.description}</p>
        )}
        <div className="flex items-center gap-3 mt-1.5 sm:mt-2 text-xs sm:text-sm text-gray-400">
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
