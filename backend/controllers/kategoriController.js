const kategoriModel = require('../models/kategoriModel');

const getKategori = async (req, res) => {
    try {
        const kategori = await kategoriModel.getAllKategori();
        res.status(200).json({
            success: true,
            data: kategori
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Gagal mengambil data kategori',
            error: error.message
        });
    }
};

module.exports = { getKategori };