import { supabase } from './supabase';

export const getKategori = async () => {
    const { data, error } = await supabase.from('kategori_umkm').select('*');
    if (error) throw new Error('SERVER_ERROR');
    return data;
};