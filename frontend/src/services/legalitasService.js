import { supabase } from './supabase';

export const getLegalitasByUmkm = async (umkmId) => {
    const { data, error } = await supabase
        .from('legalitas')
        .select('*')
        .eq('umkm_id', umkmId)
        .maybeSingle();

    if (error) throw new Error('SERVER_ERROR');
    return data;
};