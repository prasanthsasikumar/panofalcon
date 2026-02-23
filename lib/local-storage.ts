// Local storage simulation for development
import { writeFile, mkdir, readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { generateUniqueFancyName } from './fancy-names';

const STORAGE_DIR = path.join(process.cwd(), 'public', 'uploads');
const DB_FILE = path.join(process.cwd(), 'local-db.json');

interface LocalPanorama {
  id: string;
  slug: string; // Fancy name for URL
  title: string;
  description?: string;
  image_url: string;
  thumbnail_url?: string;
  user_id?: string;
  created_at: string;
  views: number;
}

// Ensure storage directory exists with scalable structure
async function ensureStorageDir(userId?: string) {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  
  let storagePath = STORAGE_DIR;
  
  if (userId) {
    // Organize by user: uploads/{userId}/{year}/{month}/
    storagePath = path.join(STORAGE_DIR, userId, String(year), month);
  } else {
    // Public uploads: uploads/{year}/{month}/
    storagePath = path.join(STORAGE_DIR, String(year), month);
  }
  
  if (!existsSync(storagePath)) {
    await mkdir(storagePath, { recursive: true });
  }
  
  return storagePath;
}

// Read local database
async function readDB(): Promise<LocalPanorama[]> {
  try {
    if (!existsSync(DB_FILE)) {
      return [];
    }
    const data = await readFile(DB_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Write local database
async function writeDB(data: LocalPanorama[]) {
  await writeFile(DB_FILE, JSON.stringify(data, null, 2));
}

// Check if slug exists - exported for use in upload route
export async function slugExists(slug: string): Promise<boolean> {
  const db = await readDB();
  return db.some(p => p.slug === slug);
}

export async function saveFileLocally(file: File, slug: string, userId?: string) {
  const storagePath = await ensureStorageDir(userId);
  
  const buffer = Buffer.from(await file.arrayBuffer());
  const ext = path.extname(file.name);
  const filename = `${slug}${ext}`;
  const filepath = path.join(storagePath, filename);
  
  await writeFile(filepath, buffer);
  
  // Return relative URL from public folder
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  
  if (userId) {
    return `/uploads/${userId}/${year}/${month}/${filename}`;
  } else {
    return `/uploads/${year}/${month}/${filename}`;
  }
}

export async function savePanoramaLocally(
  panorama: Omit<LocalPanorama, 'created_at' | 'views'>,
  userId?: string
) {
  const db = await readDB();
  
  const newPanorama: LocalPanorama = {
    ...panorama,
    user_id: userId,
    created_at: new Date().toISOString(),
    views: 0,
  };
  
  db.push(newPanorama);
  await writeDB(db);
  
  return { success: true, data: newPanorama, slug: panorama.slug };
}

export async function getPanoramaLocally(idOrSlug: string): Promise<LocalPanorama | null> {
  const db = await readDB();
  
  // Try to find by slug first, then by id
  let panorama = db.find(p => p.slug === idOrSlug);
  if (!panorama) {
    panorama = db.find(p => p.id === idOrSlug);
  }
  
  return panorama || null;
}

export async function getAllPanoramasLocally(): Promise<LocalPanorama[]> {
  const db = await readDB();
  return db.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
}

export async function incrementViewsLocally(idOrSlug: string) {
  const db = await readDB();
  
  // Try to find by slug first, then by id
  let panorama = db.find(p => p.slug === idOrSlug);
  if (!panorama) {
    panorama = db.find(p => p.id === idOrSlug);
  }
  
  if (panorama) {
    panorama.views += 1;
    await writeDB(db);
  }
  
  return { success: true };
}

export const USE_LOCAL_STORAGE = !process.env.BLOB_READ_WRITE_TOKEN;
