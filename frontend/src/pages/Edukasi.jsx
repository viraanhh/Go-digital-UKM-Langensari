import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEdukasi } from '../services/api';
import './Edukasi.css';
import Spinner from '../components/Spinner';
import useTitle from '../hooks/useTitle';

function ikonTipeKonten(tipe) {
  if (tipe === 'artikel') return '📄';
  if (tipe === 'image') return '🖼️';
  if (tipe === 'pdf') return '📕';
  return '📁';
}

function Edukasi() {
  useTitle(
    'Edukasi | UMKM Go Digital',
    'Materi edukasi hukum dan keuangan untuk pelaku UMKM RW 06 Langensari.'
  );

  const [edukasi, setEdukasi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [kategoriFilter, setKategoriFilter] = useState('');

  useEffect(() => {
    getEdukasi()
      .then((data) => setEdukasi(data))
      .finally(() => setLoading(false));
  }, []);

  const daftarKategori = [...new Set(edukasi.map((item) => item.kategori))].sort();

  const filteredEdukasi = edukasi.filter((item) =>
    kategoriFilter === '' || item.kategori === kategoriFilter
  );

  if (loading) return <Spinner text="Memuat materi edukasi..." />;

  return (
    <div className="container edukasi-list">
      <Link className="back-link" to="/">← Kembali ke Home</Link>
      <h1>Edukasi</h1>
      <p className="edukasi-subtitle">Materi pendampingan untuk pengembangan usaha UMKM.</p>

      <select value={kategoriFilter} onChange={(e) => setKategoriFilter(e.target.value)}>
        <option value="">Semua Kategori</option>
        {daftarKategori.map((kategori) => (
          <option key={kategori} value={kategori}>
            {kategori.charAt(0).toUpperCase() + kategori.slice(1)}
          </option>
        ))}
      </select>

      {filteredEdukasi.length === 0 ? (
        <p className="info-kosong">Belum ada materi edukasi.</p>
      ) : (
        <ul className="edukasi-items">
          {filteredEdukasi.map((item) => (
            <li key={item.id}>
              <Link to={`/edukasi/${item.id}`} className="edukasi-card">
                <span className="edukasi-card-icon">{ikonTipeKonten(item.tipe_konten)}</span>
                <div className="edukasi-card-body">
                  <h3 className="edukasi-card-title">{item.judul}</h3>
                  <span className="kategori-tag">{item.kategori}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Edukasi;