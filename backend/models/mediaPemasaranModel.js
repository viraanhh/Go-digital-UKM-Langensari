const pool = require('../config/db');

const getMediaPemasaranByUmkmId = async (umkmId) => {
    const { rows } = await pool.query(
        'SELECT id, platform, url FROM media_pemasaran WHERE umkm_id = $1',
        [umkmId]
    );
    return rows;
};

module.exports = { getMediaPemasaranByUmkmId };