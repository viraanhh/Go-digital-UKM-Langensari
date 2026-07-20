const pool = require('../config/db');

const getAllKategori = async () => {
    const { rows } = await pool.query('SELECT * FROM kategori_umkm');
    return rows;
};

module.exports = { getAllKategori };