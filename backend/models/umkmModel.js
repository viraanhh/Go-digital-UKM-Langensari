const pool = require('../config/db');

const getAllUmkm = async () => {
    const { rows } = await pool.query(`
        SELECT umkm.*, kategori_umkm.nama_kategori
        FROM umkm
        JOIN kategori_umkm ON umkm.kategori_id = kategori_umkm.id
    `);
    return rows;
};

const getUmkmById = async (id) => {
    const { rows } = await pool.query(`
        SELECT umkm.*, kategori_umkm.nama_kategori
        FROM umkm
        JOIN kategori_umkm ON umkm.kategori_id = kategori_umkm.id
        WHERE umkm.id = $1
    `, [id]);
    return rows[0];
};

module.exports = { getAllUmkm, getUmkmById };