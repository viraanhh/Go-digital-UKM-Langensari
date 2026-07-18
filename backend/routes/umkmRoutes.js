const express = require('express');
const router = express.Router();
const { getUmkm, getUmkmDetail } = require('../controllers/umkmController');
const { getLegalitas } = require('../controllers/legalitasController');
const { getBranding } = require('../controllers/brandingController');
const { getProdukByUmkm } = require('../controllers/produkController');
const { getMediaPemasaran } = require('../controllers/mediaPemasaranController');

router.get('/', getUmkm);
router.get('/:id', getUmkmDetail);
router.get('/:id/legalitas', getLegalitas);
router.get('/:id/branding', getBranding);
router.get('/:id/produk', getProdukByUmkm);
router.get('/:id/media-pemasaran', getMediaPemasaran);

module.exports = router;