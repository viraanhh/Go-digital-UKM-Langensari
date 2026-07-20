import { supabase } from './supabase';

function flattenKategori(row) {
    const { kategori_umkm, ...rest } = row;
    return { ...rest, nama_kategori: kategori_umkm?.nama_kategori || null };
}

export const getUmkm = async () => {
    const { data, error } = await supabase
        .from('umkm')
        .select('*, kategori_umkm(nama_kategori)');
    if (error) throw new Error('SERVER_ERROR');
    return data.map(flattenKategori);
};

export const getUmkmDetail = async (id) => {
    const { data, error } = await supabase
        .from('umkm')
        .select('*, kategori_umkm(nama_kategori)')
        .eq('id', id)
        .maybeSingle();

    if (error) throw new Error('SERVER_ERROR');
    if (!data) return { success: false };
    return { success: true, data: flattenKategori(data) };
};