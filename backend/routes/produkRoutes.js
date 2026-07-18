const express = require('express');
const router = express.Router();
const { getProduk, getProdukDetail } = require('../controllers/produkController');

router.get('/', getProduk);
router.get('/:id', getProdukDetail);

module.exports = router;