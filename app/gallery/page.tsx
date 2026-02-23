import Link from 'next/link';
import { 
  USE_LOCAL_STORAGE, 
  getAllPanoramasLocally 
} from '@/lib/local-storage';

export default async function GalleryPage() {
  let panoramas;
  
  if (USE_LOCAL_STORAGE) {
    panoramas = await getAllPanoramasLocally();
  } else {
    const { getAllPanoramas } = await import('@/lib/db');
    panoramas = await getAllPanoramas(50);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-falcon-50 via-white to-falcon-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-falcon-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="text-2xl font-bold text-gray-900">PanoFalcon</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/gallery" className="text-falcon-600 font-medium">
              Gallery
            </Link>
            <Link href="/upload" className="btn-primary">
              Upload
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Gallery</h1>
          <p className="text-gray-600">
            Explore amazing 360° panoramas from around the world
          </p>
        </div>

        {panoramas.length === 0 ? (
          <div className="text-center py-20">
            <svg className="w-24 h-24 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No panoramas yet</h2>
            <p className="text-gray-600 mb-6">Be the first to share a 360° experience!</p>
            <Link href="/upload" className="btn-primary">
              Upload Panorama
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {panoramas.map((panorama) => (
              <Link
                key={panorama.id}
                href={`/view/${panorama.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-video bg-gray-200 overflow-hidden">
                  <img
                    src={panorama.image_url}
                    alt={panorama.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white font-medium">View in 360°</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-1">
                    {panorama.title}
                  </h3>
                  {panorama.description && (
                    <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                      {panorama.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{panorama.views || 0} views</span>
                    <span>{new Date(panorama.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export const revalidate = 60; // Revalidate every 60 seconds
