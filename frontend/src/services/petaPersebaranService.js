import { supabase } from './supabase';

export const getPetaPersebaran = async () => {
    const { data, error } = await supabase
        .from('peta_persebaran')
        .select('*')
        .limit(1)
        .maybeSingle();

    if (error) throw new Error('SERVER_ERROR');
    return data;
};