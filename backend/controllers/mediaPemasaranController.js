const mediaPemasaranModel = require('../models/mediaPemasaranModel');

const getMediaPemasaran = async (req, res) => {
    try {
        const media = await mediaPemasaranModel.getMediaPemasaranByUmkmId(req.params.id);
        res.status(200).json({ success: true, data: media });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Gagal mengambil data media pemasaran', error: error.message });
    }
};

module.exports = { getMediaPemasaran };