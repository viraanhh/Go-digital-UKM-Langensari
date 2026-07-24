import { supabase } from './supabase';

export const getFotoProdukByUmkm = async (umkmId) => {
    const { data, error } = await supabase
        .from('foto_produk')
        .select('id, foto_url')
        .eq('umkm_id', umkmId)
        .order('created_at', { ascending: true });

    if (error) throw new Error('SERVER_ERROR');
    return data;
};