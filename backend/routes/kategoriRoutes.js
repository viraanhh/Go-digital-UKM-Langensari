const express = require('express');
const router = express.Router();
const { getKategori } = require('../controllers/kategoriController');

router.get('/', getKategori);

module.exports = router;