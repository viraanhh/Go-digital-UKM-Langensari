import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getKategori } from '../services/api';
import KategoriList from '../components/KategoriList';
import UmkmList from '../components/UmkmList';
import PetaPersebaran from '../components/PetaPersebaran';
import Reveal from '../components/Reveal';
import useTitle from '../hooks/useTitle';
import { pageVariants, pageTransition } from '../animations';
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
    <motion.div
      className="container"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <div className="home-header">
        <h1>UMKM Go Digital RW 06 Langensari</h1>
        <p className="home-subtitle">
          Kelurahan Langensari, sebuah wilayah di Ungaran, Semarang, memiliki potensi ekonomi beragam yang dapat dijelajahi melalui portal ini. Kenali lebih dekat UMKM di RW 06 yang menjadi penggerak roda ekonomi warga.
        </p>
      </div>

      <hr className="section-divider" />

      <Reveal>
        <PetaPersebaran />
      </Reveal>

      <hr className="section-divider" />

      <Reveal>
        <KategoriList
          kategoriList={kategoriList}
          activeKategori={kategoriFilter}
          onSelect={handleSelectKategori}
        />
      </Reveal>

      <Reveal delay={0.1}>
        <UmkmList kategoriFilter={kategoriFilter} />
      </Reveal>
    </motion.div>
  );
}

export default Home;