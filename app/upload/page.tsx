'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import UserMenu from '@/components/UserMenu';

export default function UploadPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError(null);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith('image/')) {
      setFile(droppedFile);
      setError(null);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(droppedFile);
    } else {
      setError('Please drop an image file');
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDropZoneClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file || !title) {
      setError('Please provide both a file and title');
      return;
    }

    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('title', title);
      formData.append('description', description);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to view page
        router.push(data.viewUrl);
      } else {
        setError(data.error || 'Upload failed');
      }
    } catch (err) {
      setError('An error occurred during upload');
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-falcon-50 via-white to-falcon-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between gap-2">
          <Link href="/" className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-falcon-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="text-lg sm:text-2xl font-bold text-gray-900">PanoFalcon</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/gallery" className="text-sm sm:text-base text-gray-600 hover:text-falcon-600 transition">
              Gallery
            </Link>
            <UserMenu />
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-3 sm:px-4 py-6 sm:py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">Upload Panorama</h1>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
            Share your 360° experience with the world
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                360° Image *
              </label>
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={!preview ? handleDropZoneClick : undefined}
                className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-12 text-center hover:border-falcon-500 transition-colors cursor-pointer bg-white"
              >
                {preview ? (
                  <div className="space-y-3 sm:space-y-4">
                    <img
                      src={preview}
                      alt="Preview"
                      className="max-h-48 sm:max-h-64 mx-auto rounded-lg"
                    />
                    <p className="text-xs sm:text-sm text-gray-600 break-all px-2">{file?.name}</p>
                    <button
                      type="button"
                      onClick={() => {
                        setFile(null);
                        setPreview(null);
                      }}
                      className="text-sm text-falcon-600 hover:text-falcon-700"
                    >
                      Change image
                    </button>
                  </div>
                ) : (
                  <div>
                    <svg
                      className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="mt-3 sm:mt-4 text-sm text-gray-600">
                      <label htmlFor="file-upload" className="cursor-pointer text-falcon-600 hover:text-falcon-700 font-medium">
                        Upload a file
                      </label>
                      {' '}or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      PNG, JPG, JPEG up to 50MB
                    </p>
                    <input
                      ref={fileInputRef}
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="sr-only"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Give your panorama a title"
                className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-falcon-500 focus:border-transparent"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description (optional)
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Tell us about this panorama..."
                rows={4}
                className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-falcon-500 focus:border-transparent"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                type="submit"
                disabled={!file || !title || uploading}
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {uploading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Uploading...</span>
                  </>
                ) : (
                  <span>Upload & Share</span>
                )}
              </button>
              <Link href="/" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 text-center">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
