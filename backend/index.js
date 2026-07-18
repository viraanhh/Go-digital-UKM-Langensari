require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pool = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

const kategoriRoutes = require('./routes/kategoriRoutes');
app.use('/api/kategori', kategoriRoutes);

const umkmRoutes = require('./routes/umkmRoutes');
app.use('/api/umkm', umkmRoutes);

const produkRoutes = require('./routes/produkRoutes');
app.use('/api/produk', produkRoutes);

const edukasiRoutes = require('./routes/edukasiRoutes');
app.use('/api/edukasi', edukasiRoutes);

// Route percobaan, untuk mastiin server & database nyambung
app.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT 1 + 1 AS hasil');
        res.json({
            message: 'Server jalan dan database terkoneksi!',
            testQuery: rows[0].hasil
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server jalan, tapi database GAGAL terkoneksi',
            error: error.message
        });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});