const express = require('express');
const router = express.Router();
const { getEdukasi, getEdukasiDetail } = require('../controllers/edukasiController');

router.get('/', getEdukasi);
router.get('/:id', getEdukasiDetail);

module.exports = router;