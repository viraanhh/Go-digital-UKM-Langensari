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
          Temukan dan kenali usaha mikro, kecil, dan menengah di RW 06 Kelurahan Langensari.
        </p>
        <KategoriList
          kategoriList={kategoriList}
          activeKategori={kategoriFilter}
          onSelect={handleSelectKategori}
        />
      </div>

      <PetaPersebaran />

      <UmkmList kategoriFilter={kategoriFilter} />
    </div>
  );
}

export default Home;