const API_URL = import.meta.env.VITE_API_URL;

export const getKategori = async () => {
    const response = await fetch(`${API_URL}/kategori`);
    const result = await response.json();
    return result.data;
};

export const getUmkm = async () => {
    try {
        const response = await fetch(`${API_URL}/umkm`);
        if (!response.ok) throw new Error('Server error');
        const result = await response.json();
        return result.data;
    } catch (error) {
        throw new Error('SERVER_ERROR');
    }
};

export const getUmkmDetail = async (id) => {
    try {
        const response = await fetch(`${API_URL}/umkm/${id}`);
        if (!response.ok) throw new Error('Server error');
        const result = await response.json();
        return result;
    } catch (error) {
        throw new Error('SERVER_ERROR');
    }
};

export const getEdukasi = async () => {
    const response = await fetch(`${API_URL}/edukasi`);
    const result = await response.json();
    return result.data;
};

export const getEdukasiDetail = async (id) => {
    const response = await fetch(`${API_URL}/edukasi/${id}`);
    const result = await response.json();
    return result;
};

export const getProdukByUmkm = async (umkmId) => {
    const response = await fetch(`${API_URL}/umkm/${umkmId}/produk`);
    const result = await response.json();
    return result.data;
};

export const getLegalitasByUmkm = async (umkmId) => {
    const response = await fetch(`${API_URL}/umkm/${umkmId}/legalitas`);
    const result = await response.json();
    return result.data;
};

export const getBrandingByUmkm = async (umkmId) => {
    const response = await fetch(`${API_URL}/umkm/${umkmId}/branding`);
    const result = await response.json();
    return result.data;
};

export const getMediaPemasaranByUmkm = async (umkmId) => {
    const response = await fetch(`${API_URL}/umkm/${umkmId}/media-pemasaran`);
    const result = await response.json();
    return result.data;
};