import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-falcon-50 via-white to-falcon-100 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-falcon-100 rounded-full mb-8">
          <svg className="w-12 h-12 text-falcon-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Panorama Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          The panorama you're looking for doesn't exist or has been removed.
        </p>
        
        <div className="flex items-center justify-center space-x-4">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link href="/gallery" className="btn-secondary">
            Browse Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}
