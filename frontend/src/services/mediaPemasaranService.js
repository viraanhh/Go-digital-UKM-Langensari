import { supabase } from './supabase';

export const getMediaPemasaranByUmkm = async (umkmId) => {
    const { data, error } = await supabase
        .from('media_pemasaran')
        .select('id, platform, url')
        .eq('umkm_id', umkmId);

    if (error) throw new Error('SERVER_ERROR');
    return data;
};