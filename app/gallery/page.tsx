import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
    <div className="min-h-screen bg-dark-900 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-14">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Explore amazing 360° panoramas from around the world
            </p>
          </div>

          {panoramas.length === 0 ? (
            <div className="text-center py-16 sm:py-24">
              <div className="glass-card max-w-md mx-auto p-12">
                <svg className="w-20 h-20 mx-auto text-gray-600 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h2 className="text-2xl font-bold text-white mb-3">No panoramas yet</h2>
                <p className="text-gray-400 mb-6">Be the first to share a 360° experience!</p>
                <Link href="/upload" className="btn-primary inline-block px-8 py-3">
                  Upload Panorama
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {panoramas.map((panorama) => (
                <Link
                  key={panorama.id}
                  href={`/view/${panorama.id}`}
                  className="group glass-card overflow-hidden hover:border-falcon-500/30 transition-all hover:-translate-y-1"
                >
                  <div className="relative aspect-video bg-dark-800 overflow-hidden">
                    <img
                      src={panorama.image_url}
                      alt={panorama.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-white font-medium flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View in 360°
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="font-bold text-lg text-white mb-1 line-clamp-1">
                      {panorama.title}
                    </h3>
                    {panorama.description && (
                      <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                        {panorama.description}
                      </p>
                    )}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{panorama.views || 0} views</span>
                      <span>{new Date(panorama.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export const revalidate = 60;
