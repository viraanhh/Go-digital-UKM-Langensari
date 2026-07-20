import { useState, useEffect } from 'react';
import { getUmkm, getKategori } from '../services/api';
import UmkmCard from './UmkmCard';
import Spinner from './Spinner';
import ServerError from '../pages/ServerError';
import './UmkmList.css';

function UmkmList() {
  const [umkm, setUmkm] = useState([]);
  const [kategoriList, setKategoriList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverError, setServerError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [kategoriFilter, setKategoriFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    getUmkm()
      .then((data) => setUmkm(data))
      .catch(() => setServerError(true))
      .finally(() => setLoading(false));

    getKategori().then((data) => setKategoriList(data));
  }, []);

  const filteredUmkm = umkm
    .filter((item) => {
      const cocokNama = item.nama_usaha.toLowerCase().includes(searchTerm.toLowerCase());
      const cocokKategori = kategoriFilter === '' || item.kategori_id === Number(kategoriFilter);
      return cocokNama && cocokKategori;
    })
    .sort((a, b) => {
      if (sortOrder === 'az') return a.nama_usaha.localeCompare(b.nama_usaha);
      if (sortOrder === 'za') return b.nama_usaha.localeCompare(a.nama_usaha);
      return 0;
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

        <select
          value={kategoriFilter}
          onChange={(e) => setKategoriFilter(e.target.value)}
        >
          <option value="">Semua Kategori</option>
          {kategoriList.map((k) => (
            <option key={k.id} value={k.id}>{k.nama_kategori}</option>
          ))}
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Urutkan</option>
          <option value="az">Nama A-Z</option>
          <option value="za">Nama Z-A</option>
        </select>
      </div>

      {filteredUmkm.length === 0 ? (
        <p>Tidak ada UMKM yang cocok.</p>
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