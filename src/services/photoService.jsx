import { supabase } from '../lib/supabase';

export async function getPhotos() {
    const { data, error } = await supabase
        .from('photos')
        .select(`
            *,
            albums (
                id,
                name
            )
        `)
    
    if (error) throw error

    return data
}