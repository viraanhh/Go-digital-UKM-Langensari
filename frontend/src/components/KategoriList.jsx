import { useState, useEffect } from 'react';
import { getKategori } from '../services/api';

function KategoriList() {
  const [kategori, setKategori] = useState([]);

  useEffect(() => {
    getKategori().then((data) => {
      setKategori(data);
    });
  }, []);

  if (kategori.length === 0) return null;

  return (
    <div className="kategori-list">
      {kategori.map((k) => (
        <span key={k.id} className="kategori-badge">{k.nama_kategori}</span>
      ))}
    </div>
  );
}

export default KategoriList;