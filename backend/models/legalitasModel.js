const pool = require('../config/db');

const getLegalitasByUmkmId = async (umkmId) => {
    const { rows } = await pool.query('SELECT * FROM legalitas WHERE umkm_id = $1', [umkmId]);
    return rows[0] || null;
};

module.exports = { getLegalitasByUmkmId };