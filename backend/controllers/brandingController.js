const brandingModel = require('../models/brandingModel');

const getBranding = async (req, res) => {
    try {
        const branding = await brandingModel.getBrandingByUmkmId(req.params.id);
        res.status(200).json({ success: true, data: branding });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Gagal mengambil data branding', error: error.message });
    }
};

module.exports = { getBranding };