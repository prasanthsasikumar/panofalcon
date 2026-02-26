'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

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
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Share your <span className="gradient-text">360° photo</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Upload your panoramic image and share it with the world in seconds.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                360° Image *
              </label>
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={!preview ? handleDropZoneClick : undefined}
                className="glass-card border-dashed border-2 border-white/10 p-8 sm:p-12 text-center hover:border-falcon-500/50 transition-all cursor-pointer"
              >
                {preview ? (
                  <div className="space-y-4">
                    <img
                      src={preview}
                      alt="Preview"
                      className="max-h-48 sm:max-h-64 mx-auto rounded-xl"
                    />
                    <p className="text-sm text-gray-400 break-all px-2">{file?.name}</p>
                    <button
                      type="button"
                      onClick={() => {
                        setFile(null);
                        setPreview(null);
                      }}
                      className="text-sm text-falcon-400 hover:text-falcon-300 font-medium"
                    >
                      Change image
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-falcon-400/20 to-falcon-600/20 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-falcon-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <p className="text-gray-300 mb-2">
                      <label htmlFor="file-upload" className="cursor-pointer text-falcon-400 hover:text-falcon-300 font-medium">
                        Upload a file
                      </label>
                      {' '}or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
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
              <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                Title *
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Give your panorama a title"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-falcon-500 focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                Description (optional)
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Tell us about this panorama..."
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-falcon-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={!file || !title || uploading}
                className="btn-primary text-lg px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
              <Link href="/" className="btn-secondary text-lg px-8 py-3 text-center">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
