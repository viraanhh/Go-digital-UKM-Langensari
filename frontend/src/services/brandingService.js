import { supabase } from './supabase';

export const getBrandingByUmkm = async (umkmId) => {
    const { data, error } = await supabase
        .from('branding')
        .select('*')
        .eq('umkm_id', umkmId)
        .maybeSingle();

    if (error) throw new Error('SERVER_ERROR');
    return data;
};