const pool = require('../config/db');

// Ambil semua UMKM, sekaligus nama kategorinya
const getAllUmkm = async () => {
    const [rows] = await pool.query(`
        SELECT umkm.*, kategori_umkm.nama_kategori
        FROM umkm
        JOIN kategori_umkm ON umkm.kategori_id = kategori_umkm.id
    `);
    return rows;
};

// Ambil 1 UMKM berdasarkan id
const getUmkmById = async (id) => {
    const [rows] = await pool.query(`
        SELECT umkm.*, kategori_umkm.nama_kategori
        FROM umkm
        JOIN kategori_umkm ON umkm.kategori_id = kategori_umkm.id
        WHERE umkm.id = ?
    `, [id]);
    return rows[0]; // ambil objek pertama saja, bukan array
};

module.exports = { getAllUmkm, getUmkmById };