import { createClient } from '@/lib/supabase/server';

export interface Panorama {
  id: string;
  slug: string;
  title: string;
  description?: string;
  image_url: string;
  thumbnail_url?: string;
  user_id?: string;
  created_at: string;
  views: number;
}

export async function savePanorama(panorama: Omit<Panorama, 'created_at' | 'views'>) {
  try {
    const supabase = createClient();
    
    const { data, error } = await supabase
      .from('panoramas')
      .insert({
        id: panorama.id,
        slug: panorama.slug,
        title: panorama.title,
        description: panorama.description || null,
        image_url: panorama.image_url,
        thumbnail_url: panorama.thumbnail_url || null,
        user_id: panorama.user_id || null,
      })
      .select()
      .single();

    if (error) {
      console.error('Error saving panorama:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error saving panorama:', error);
    return { success: false, error };
  }
}

export async function getPanorama(idOrSlug: string): Promise<Panorama | null> {
  try {
    const supabase = createClient();
    
    // Try to find by slug first, then by id
    let { data, error } = await supabase
      .from('panoramas')
      .select('*')
      .eq('slug', idOrSlug)
      .single();

    if (error || !data) {
      // Try by id
      const result = await supabase
        .from('panoramas')
        .select('*')
        .eq('id', idOrSlug)
        .single();
      
      data = result.data;
      error = result.error;
    }

    if (error) {
      console.error('Error getting panorama:', error);
      return null;
    }
    
    return data as Panorama;
  } catch (error) {
    console.error('Error getting panorama:', error);
    return null;
  }
}

export async function getAllPanoramas(limit: number = 50): Promise<Panorama[]> {
  try {
    const supabase = createClient();
    
    const { data, error } = await supabase
      .from('panoramas')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error getting panoramas:', error);
      return [];
    }

    return data as Panorama[];
  } catch (error) {
    console.error('Error getting panoramas:', error);
    return [];
  }
}

export async function getUserPanoramas(userId: string, limit: number = 50): Promise<Panorama[]> {
  try {
    const supabase = createClient();
    
    const { data, error } = await supabase
      .from('panoramas')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error getting user panoramas:', error);
      return [];
    }

    return data as Panorama[];
  } catch (error) {
    console.error('Error getting user panoramas:', error);
    return [];
  }
}

export async function incrementViews(idOrSlug: string) {
  try {
    const supabase = createClient();
    
    // First get the panorama to find out which field we're querying by
    const panorama = await getPanorama(idOrSlug);
    
    if (!panorama) {
      return { success: false, error: 'Panorama not found' };
    }

    const { error } = await supabase
      .from('panoramas')
      .update({ views: panorama.views + 1 })
      .eq('id', panorama.id);

    if (error) {
      console.error('Error incrementing views:', error);
      return { success: false, error };
    }

    return { success: true };
  } catch (error) {
    console.error('Error incrementing views:', error);
    return { success: false, error };
  }
}
