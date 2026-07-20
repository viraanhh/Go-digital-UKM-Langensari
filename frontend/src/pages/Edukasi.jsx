import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEdukasi } from '../services/api';
import './Edukasi.css';
import Spinner from '../components/Spinner';
import useTitle from '../hooks/useTitle';

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

  const filteredEdukasi = edukasi.filter((item) =>
    kategoriFilter === '' || item.kategori === kategoriFilter
  );

  if (loading) return <Spinner text="Memuat materi edukasi..." />;

  return (
    <div className="container edukasi-list">
      <Link className="back-link" to="/">← Kembali ke Home</Link>
      <h1>Edukasi</h1>

      <select value={kategoriFilter} onChange={(e) => setKategoriFilter(e.target.value)}>
        <option value="">Semua</option>
        <option value="hukum">Hukum</option>
        <option value="keuangan">Keuangan</option>
        <option value="umum">Umum</option>
      </select>

      {filteredEdukasi.length === 0 ? (
        <p>Belum ada materi edukasi.</p>
      ) : (
        <ul className="edukasi-items">
          {filteredEdukasi.map((item) => (
            <li key={item.id}>
              <Link to={`/edukasi/${item.id}`}>{item.judul}</Link>
              <span className="kategori-tag">({item.kategori})</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Edukasi;