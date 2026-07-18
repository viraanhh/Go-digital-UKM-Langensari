const legalitasModel = require('../models/legalitasModel');

const getLegalitas = async (req, res) => {
    try {
        const legalitas = await legalitasModel.getLegalitasByUmkmId(req.params.id);
        res.status(200).json({ success: true, data: legalitas });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Gagal mengambil data legalitas', error: error.message });
    }
};

module.exports = { getLegalitas };