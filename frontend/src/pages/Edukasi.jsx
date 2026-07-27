import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getEdukasi } from '../services/api';
import './Edukasi.css';
import Spinner from '../components/Spinner';
import useTitle from '../hooks/useTitle';
import { pageVariants, pageTransition, staggerContainer, staggerItem } from '../animations';

const IKON_KATEGORI = {
  hukum: '⚖️',
  keuangan: '💰',
  kesehatan: '🩺',
  umum: '📌',
};

function ikonKategori(kategori) {
  return IKON_KATEGORI[kategori] || '📁';
}

function Edukasi() {
  useTitle(
    'Edukasi | UMKM Go Digital',
    'Materi edukasi hukum dan keuangan untuk pelaku UMKM RW 06 Langensari.'
  );

  const [edukasi, setEdukasi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [kategoriFilter, setKategoriFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getEdukasi()
      .then((data) => setEdukasi(data))
      .finally(() => setLoading(false));
  }, []);

  const daftarKategori = [...new Set(edukasi.map((item) => item.kategori))].sort();

  const filteredEdukasi = edukasi.filter((item) => {
    const cocokKategori = kategoriFilter === '' || item.kategori === kategoriFilter;
    const cocokJudul = item.judul.toLowerCase().includes(searchTerm.toLowerCase());
    return cocokKategori && cocokJudul;
  });

  if (loading) return <Spinner />;

  return (
    <motion.div
      className="container edukasi-list"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <Link className="back-link" to="/">← Kembali ke Beranda</Link>
      <h1>Edukasi</h1>
      <p className="edukasi-subtitle">
        Materi pendampingan untuk pengembangan usaha UMKM, mencakup aspek hukum,
        keuangan, kesehatan, dan pengetahuan umum yang bermanfaat bagi pelaku usaha
        di RW 06 Langensari.
      </p>

      <div className="edukasi-search-box">
        <span className="edukasi-search-icon">🔍</span>
        <input
          type="text"
          placeholder="Cari judul materi..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <motion.div
        className="edukasi-filter-chips"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          type="button"
          variants={staggerItem}
          className={`edukasi-chip ${kategoriFilter === '' ? 'edukasi-chip-active' : ''}`}
          onClick={() => setKategoriFilter('')}
        >
          Semua
        </motion.button>
        {daftarKategori.map((kategori) => (
          <motion.button
            type="button"
            variants={staggerItem}
            key={kategori}
            className={`edukasi-chip ${kategoriFilter === kategori ? 'edukasi-chip-active' : ''}`}
            onClick={() => setKategoriFilter(kategori)}
          >
            {ikonKategori(kategori)} {kategori.charAt(0).toUpperCase() + kategori.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      {filteredEdukasi.length === 0 ? (
        <p className="info-kosong">Belum ada materi edukasi.</p>
      ) : (
        <motion.ul
          className="edukasi-items"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {filteredEdukasi.map((item) => (
            <motion.li key={item.id} variants={staggerItem}>
              <Link to={`/edukasi/${item.id}`} className="edukasi-card">
                <span className="edukasi-card-icon">{ikonKategori(item.kategori)}</span>
                <div className="edukasi-card-body">
                  <h3 className="edukasi-card-title">{item.judul}</h3>
                  <span className="kategori-tag">{item.kategori}</span>
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  );
}

export default Edukasi;