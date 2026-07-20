import { supabase } from './supabase';

export const getProdukByUmkm = async (umkmId) => {
    const { data, error } = await supabase
        .from('produk')
        .select('*, foto_produk(id, foto_url, urutan)')
        .eq('umkm_id', umkmId);

    if (error) throw new Error('SERVER_ERROR');

    return data.map((item) => {
        const { foto_produk, ...rest } = item;
        return { ...rest, foto: foto_produk || [] };
    });
};