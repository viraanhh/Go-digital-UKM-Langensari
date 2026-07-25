import { useState, useEffect } from 'react';
import { getUmkm } from '../services/api';
import UmkmCard from './UmkmCard';
import Spinner from './Spinner';
import ServerError from '../pages/ServerError';
import './UmkmList.css';

function UmkmList({ kategoriFilter }) {
  const [umkm, setUmkm] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverError, setServerError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [rtFilter, setRtFilter] = useState('');

  useEffect(() => {
    getUmkm()
      .then((data) => setUmkm(data))
      .catch(() => setServerError(true))
      .finally(() => setLoading(false));
  }, []);

  const daftarRt = [...new Set(umkm.map((item) => item.rt))]
    .filter((rt) => rt !== null)
    .sort((a, b) => a - b);

  const filteredUmkm = umkm.filter((item) => {
    const cocokNama = item.nama_usaha.toLowerCase().includes(searchTerm.toLowerCase());
    const cocokKategori = kategoriFilter === '' || item.kategori_id === kategoriFilter;
    const cocokRt = rtFilter === '' || item.rt === Number(rtFilter);
    return cocokNama && cocokKategori && cocokRt;
  });

  if (serverError) return <ServerError />;
  if (loading) return <Spinner text="Memuat data UMKM..." />;

  return (
    <div className="umkm-list">
      <h2>Daftar UMKM</h2>

      <div className="umkm-filter">
        <input
          type="text"
          placeholder="Cari nama UMKM..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select value={rtFilter} onChange={(e) => setRtFilter(e.target.value)}>
          <option value="">Semua RT</option>
          {daftarRt.map((rt) => (
            <option key={rt} value={rt}>RT {String(rt).padStart(2, '0')}</option>
          ))}
        </select>
      </div>

      {filteredUmkm.length === 0 ? (
        <p className="info-kosong">Tidak ada UMKM yang cocok.</p>
      ) : (
        <div className="umkm-grid">
          {filteredUmkm.map((item) => (
            <UmkmCard key={item.id} umkm={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default UmkmList;