const pool = require('../config/db');

const getAllProduk = async () => {
    const [rows] = await pool.query(`
        SELECT produk.*, umkm.nama_usaha
        FROM produk
        JOIN umkm ON produk.umkm_id = umkm.id
    `);
    return rows;
};

const getProdukById = async (id) => {
    const [produkRows] = await pool.query('SELECT * FROM produk WHERE id = ?', [id]);
    if (produkRows.length === 0) return null;

    const [fotoRows] = await pool.query(
        'SELECT id, foto_url, urutan FROM foto_produk WHERE produk_id = ? ORDER BY urutan',
        [id]
    );

    return { ...produkRows[0], foto: fotoRows };
};

const getProdukByUmkmId = async (umkmId) => {
    const [produkRows] = await pool.query('SELECT * FROM produk WHERE umkm_id = ?', [umkmId]);

    for (const produk of produkRows) {
        const [fotoRows] = await pool.query(
            'SELECT id, foto_url, urutan FROM foto_produk WHERE produk_id = ? ORDER BY urutan',
            [produk.id]
        );
        produk.foto = fotoRows;
    }

    return produkRows;
};

module.exports = { getAllProduk, getProdukById, getProdukByUmkmId };