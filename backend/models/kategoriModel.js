const pool = require('../config/db');

// Ambil semua kategori
const getAllKategori = async () => {
    const [rows] = await pool.query('SELECT * FROM kategori_umkm');
    return rows;
};

module.exports = { getAllKategori };