const pool = require('../config/db');

const getAllEdukasi = async (kategori) => {
    if (kategori) {
        const { rows } = await pool.query('SELECT * FROM edukasi WHERE kategori = $1', [kategori]);
        return rows;
    }
    const { rows } = await pool.query('SELECT * FROM edukasi');
    return rows;
};

const getEdukasiById = async (id) => {
    const { rows } = await pool.query('SELECT * FROM edukasi WHERE id = $1', [id]);
    return rows[0];
};

module.exports = { getAllEdukasi, getEdukasiById };