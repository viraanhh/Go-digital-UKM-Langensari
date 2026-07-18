const edukasiModel = require('../models/edukasiModel');

const getEdukasi = async (req, res) => {
    try {
        const { kategori } = req.query;
        const edukasi = await edukasiModel.getAllEdukasi(kategori);
        res.status(200).json({ success: true, data: edukasi });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Gagal mengambil data edukasi', error: error.message });
    }
};

const getEdukasiDetail = async (req, res) => {
    try {
        const edukasi = await edukasiModel.getEdukasiById(req.params.id);
        if (!edukasi) return res.status(404).json({ success: false, message: 'Materi edukasi tidak ditemukan' });
        res.status(200).json({ success: true, data: edukasi });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Gagal mengambil detail edukasi', error: error.message });
    }
};

module.exports = { getEdukasi, getEdukasiDetail };