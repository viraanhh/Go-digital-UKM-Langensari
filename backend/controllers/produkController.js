const produkModel = require('../models/produkModel');

const getProduk = async (req, res) => {
    try {
        const produk = await produkModel.getAllProduk();
        res.status(200).json({ success: true, data: produk });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Gagal mengambil data produk', error: error.message });
    }
};

const getProdukDetail = async (req, res) => {
    try {
        const produk = await produkModel.getProdukById(req.params.id);
        if (!produk) return res.status(404).json({ success: false, message: 'Produk tidak ditemukan' });
        res.status(200).json({ success: true, data: produk });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Gagal mengambil detail produk', error: error.message });
    }
};

const getProdukByUmkm = async (req, res) => {
    try {
        const produk = await produkModel.getProdukByUmkmId(req.params.id);
        res.status(200).json({ success: true, data: produk });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Gagal mengambil produk UMKM', error: error.message });
    }
};

module.exports = { getProduk, getProdukDetail, getProdukByUmkm };