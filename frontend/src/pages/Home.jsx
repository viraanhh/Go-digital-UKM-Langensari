import { useState, useEffect } from 'react';
import { getKategori } from '../services/api';
import KategoriList from '../components/KategoriList';
import UmkmList from '../components/UmkmList';
import PetaPersebaran from '../components/PetaPersebaran';
import useTitle from '../hooks/useTitle';
import './Home.css';

function Home() {
  useTitle(
    'UMKM Go Digital RW 06 Langensari',
    'Portal informasi UMKM RW 06 Kelurahan Langensari, Ungaran Barat.'
  );

  const [kategoriList, setKategoriList] = useState([]);
  const [kategoriFilter, setKategoriFilter] = useState('');

  useEffect(() => {
    getKategori().then((data) => setKategoriList(data));
  }, []);

  function handleSelectKategori(id) {
    setKategoriFilter((prev) => (prev === id ? '' : id));
  }

  return (
    <div className="container">
      <div className="home-header">
        <h1>UMKM Go Digital RW 06 Langensari</h1>
        <p className="home-subtitle">
        Kelurahan Langensari terletak di Kecamatan Ungaran Barat, Kabupaten
        Semarang, tidak jauh dari pusat Kota Ungaran. Wilayah ini memiliki potensi
        ekonomi yang cukup beragam, mulai dari kuliner rumahan, produk fashion,
        jasa, hingga kerajinan tangan yang dijalankan oleh warga sekitar. Melalui
        portal ini, kenali lebih dekat berbagai Usaha Mikro, Kecil, dan Menengah
        (UMKM) di RW 06 yang menjadi salah satu penggerak roda ekonomi warga.
        </p>
      </div>

      <PetaPersebaran />

      <KategoriList
        kategoriList={kategoriList}
        activeKategori={kategoriFilter}
        onSelect={handleSelectKategori}
      />

      <UmkmList kategoriFilter={kategoriFilter} />
    </div>
  );
}

export default Home;