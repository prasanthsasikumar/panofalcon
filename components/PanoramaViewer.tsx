'use client';

import { useEffect, useRef, useState } from 'react';

interface PanoramaViewerProps {
  imageUrl: string;
  autoRotate?: boolean;
}

export default function PanoramaViewer({ imageUrl, autoRotate = true }: PanoramaViewerProps) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!viewerRef.current) return;

    // Load Pannellum dynamically
    const loadPannellum = async () => {
      try {
        // Load CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css';
        document.head.appendChild(link);

        // Load JS
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js';
        script.async = true;
        
        script.onload = () => {
          if (viewerRef.current && (window as any).pannellum) {
            (window as any).pannellum.viewer(viewerRef.current, {
              type: 'equirectangular',
              panorama: imageUrl,
              autoLoad: true,
              autoRotate: autoRotate ? -2 : 0,
              compass: false,
              showControls: true,
              showFullscreenCtrl: true,
              showZoomCtrl: true,
              mouseZoom: true,
              draggable: true,
              disableKeyboardCtrl: false,
              hfov: 100,
              pitch: 0,
              yaw: 0,
              minHfov: 50,
              maxHfov: 120,
              hotSpotDebug: false,
              onLoad: () => {
                setIsLoading(false);
              },
              onError: (err: any) => {
                console.error('Panorama load error:', err);
                setError(true);
                setIsLoading(false);
              },
            });
          }
        };

        script.onerror = () => {
          setError(true);
          setIsLoading(false);
        };

        document.body.appendChild(script);

        return () => {
          document.head.removeChild(link);
          document.body.removeChild(script);
        };
      } catch (err) {
        console.error('Failed to load panorama viewer:', err);
        setError(true);
        setIsLoading(false);
      }
    };

    loadPannellum();
  }, [imageUrl, autoRotate]);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            <p className="mt-4 text-white">Loading panorama...</p>
          </div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="text-center text-white">
            <svg className="w-16 h-16 mx-auto mb-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-lg">Failed to load panorama</p>
          </div>
        </div>
      )}

      <div ref={viewerRef} className="w-full h-full" />
      
      {!isLoading && !error && (
        <div className="absolute bottom-4 right-4 bg-black/60 text-white text-sm px-4 py-2 rounded-lg backdrop-blur-sm">
          🖱️ Drag to look around • Scroll to zoom
        </div>
      )}
    </div>
  );
}
