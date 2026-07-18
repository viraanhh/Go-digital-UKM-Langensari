const umkmModel = require('../models/umkmModel');

const getUmkm = async (req, res) => {
    try {
        const umkm = await umkmModel.getAllUmkm();
        res.status(200).json({ success: true, data: umkm });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Gagal mengambil data UMKM', error: error.message });
    }
};

const getUmkmDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const umkm = await umkmModel.getUmkmById(id);

        if (!umkm) {
            return res.status(404).json({ success: false, message: 'UMKM tidak ditemukan' });
        }

        res.status(200).json({ success: true, data: umkm });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Gagal mengambil detail UMKM', error: error.message });
    }
};

module.exports = { getUmkm, getUmkmDetail };