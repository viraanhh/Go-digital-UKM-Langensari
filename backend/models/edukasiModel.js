const pool = require('../config/db');

const getAllEdukasi = async (kategori) => {
    if (kategori) {
        const [rows] = await pool.query('SELECT * FROM edukasi WHERE kategori = ?', [kategori]);
        return rows;
    }
    const [rows] = await pool.query('SELECT * FROM edukasi');
    return rows;
};

const getEdukasiById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM edukasi WHERE id = ?', [id]);
    return rows[0];
};

module.exports = { getAllEdukasi, getEdukasiById };