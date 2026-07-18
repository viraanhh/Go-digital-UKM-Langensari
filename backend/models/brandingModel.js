const pool = require('../config/db');

const getBrandingByUmkmId = async (umkmId) => {
    const [rows] = await pool.query('SELECT * FROM branding WHERE umkm_id = ?', [umkmId]);
    return rows[0] || null;
};

module.exports = { getBrandingByUmkmId };