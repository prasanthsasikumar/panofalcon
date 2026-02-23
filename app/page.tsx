import Link from 'next/link';
import UserMenu from '@/components/UserMenu';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-falcon-50 via-white to-falcon-100 flex flex-col">
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
            <Link href="/gallery" className="text-gray-600 hover:text-falcon-600 transition">
              Gallery
            </Link>
            <Link href="/upload" className="btn-primary">
              Upload
            </Link>
            <UserMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20 flex-grow">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-falcon-100 rounded-full">
            <svg className="w-12 h-12 text-falcon-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Share Your World in 360°
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Upload, share, and explore stunning 360-degree panoramic images. 
            PanoFalcon makes it easy to capture and share immersive experiences with anyone, anywhere.
          </p>

          <div className="flex items-center justify-center space-x-4">
            <Link href="/upload" className="btn-primary text-lg px-8 py-3">
              Upload Panorama
            </Link>
            <Link href="/gallery" className="btn-secondary text-lg px-8 py-3">
              View Gallery
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-falcon-600 mb-2">Unlimited</div>
              <div className="text-gray-600">Storage</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-falcon-600 mb-2">Instant</div>
              <div className="text-gray-600">Sharing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-falcon-600 mb-2">100% Free</div>
              <div className="text-gray-600">Forever</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-32 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-falcon-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-falcon-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Easy Upload</h3>
            <p className="text-gray-600">
              Drag and drop your 360° images. We support equirectangular and cube map formats.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-falcon-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-falcon-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Sharing</h3>
            <p className="text-gray-600">
              Get a shareable link immediately. Share your panoramas on social media or embed them anywhere.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-falcon-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-falcon-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Immersive Viewing</h3>
            <p className="text-gray-600">
              Interactive 360° viewer with zoom, rotation, and fullscreen mode for the best experience.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="text-xl font-bold">PanoFalcon</span>
          </div>
          <p className="text-gray-400">
            Built with Next.js, Vercel, and ❤️ by the PanoFalcon Team.
          </p>
        </div>
      </footer>
    </div>
  );
}
