import { useState, useEffect } from 'react';
import { getProdukByUmkm } from '../services/api';
import './ProdukUnggulan.css';

function formatRupiah(harga) {
  if (harga === null || harga === undefined) return null;
  const angka = Number(harga);
  return `Rp${angka.toLocaleString('id-ID')}`;
}

function ProdukUnggulan({ umkmId }) {
  const [produk, setProduk] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProdukByUmkm(umkmId)
      .then((data) => setProduk(data))
      .finally(() => setLoading(false));
  }, [umkmId]);

  return (
    <section className="section-produk">
      <h2>Produk Unggulan</h2>

      {loading ? (
        <p>Memuat produk...</p>
      ) : produk.length === 0 ? (
        <p className="info-kosong">Data produk akan segera diperbarui.</p>
      ) : (
        <div className="produk-grid">
          {produk.map((item) => (
            <div key={item.id} className="produk-card">
              <img
                src={item.foto?.[0]?.foto_url || 'https://placehold.co/150x150?text=Produk'}
                alt={item.nama_produk}
              />
              <h4>{item.nama_produk}</h4>
              <p className="produk-harga">{formatRupiah(item.harga) || 'Harga belum tersedia'}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ProdukUnggulan;