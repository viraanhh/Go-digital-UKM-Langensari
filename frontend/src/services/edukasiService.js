import { supabase } from './supabase';

export const getEdukasi = async () => {
    const { data, error } = await supabase.from('edukasi').select('*');
    if (error) throw new Error('SERVER_ERROR');
    return data;
};

export const getEdukasiDetail = async (id) => {
    const { data, error } = await supabase
        .from('edukasi')
        .select('*')
        .eq('id', id)
        .maybeSingle();

    if (error) throw new Error('SERVER_ERROR');
    if (!data) return { success: false };
    return { success: true, data };
};