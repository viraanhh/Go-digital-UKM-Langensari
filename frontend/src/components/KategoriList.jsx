import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../animations';
import './KategoriList.css';

function KategoriList({ kategoriList, activeKategori, onSelect }) {
  if (kategoriList.length === 0) return null;

  return (
    <motion.div
      className="kategori-list"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.button
        type="button"
        variants={staggerItem}
        className={`kategori-chip ${activeKategori === '' ? 'kategori-chip-active' : ''}`}
        onClick={() => onSelect('')}
      >
        Semua
      </motion.button>
      {kategoriList.map((k) => (
        <motion.button
          type="button"
          variants={staggerItem}
          key={k.id}
          className={`kategori-chip ${activeKategori === k.id ? 'kategori-chip-active' : ''}`}
          onClick={() => onSelect(k.id)}
        >
          {k.nama_kategori}
        </motion.button>
      ))}
    </motion.div>
  );
}

export default KategoriList;