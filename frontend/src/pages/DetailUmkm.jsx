import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getUmkmDetail } from '../services/api';
import ProdukUnggulan from '../components/ProdukUnggulan';
import './DetailUmkm.css';
import Legalitas from '../components/Legalitas';
import Branding from '../components/Branding';
import Kontak from '../components/Kontak';
import MediaPemasaran from '../components/MediaPemasaran';

function DetailUmkm() {
  const { id } = useParams();
  const [umkm, setUmkm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    getUmkmDetail(id)
      .then((result) => {
        if (result.success) {
          setUmkm(result.data);
        } else {
          setNotFound(true);
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Memuat data...</p>;

  if (notFound) {
    return (
      <div className="container detail-umkm">
        <Link className="back-link" to="/">← Kembali ke Home</Link>
        <p>UMKM tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="container detail-umkm">
      <Link className="back-link" to="/">← Kembali ke Home</Link>
      <h1>{umkm.nama_usaha}</h1>

      <div className="detail-content">
        <img
          src={umkm.foto_url || 'https://placehold.co/400x300?text=Belum+Ada+Foto'}
          alt={umkm.nama_usaha}
        />

        <div className="detail-info">
          <p><strong>Pemilik:</strong> {umkm.nama_pemilik || 'Data belum tersedia'}</p>
          <p><strong>Kategori:</strong> {umkm.nama_kategori || 'Data belum tersedia'}</p>
          <p><strong>Alamat:</strong> {umkm.alamat || 'Data belum tersedia'}</p>
          <p><strong>Deskripsi:</strong> {umkm.deskripsi || 'Data belum tersedia'}</p>
          <p><strong>Jam Operasional:</strong> {umkm.jam_operasional || 'Data belum tersedia'}</p>
          <p><strong>WhatsApp:</strong> {umkm.no_whatsapp || 'Data belum tersedia'}</p>
        </div>
      </div>

      <ProdukUnggulan umkmId={id} />
      <Legalitas umkmId={id} />
      <Branding umkmId={id} />
      <Kontak noWhatsapp={umkm.no_whatsapp} />
      <MediaPemasaran umkmId={id} />

      {umkm.latitude && umkm.longitude ? (
        <div className="detail-map">
          <p><strong>Lokasi:</strong></p>
          <iframe
            title={`Lokasi ${umkm.nama_usaha}`}
            width="100%"
            height="300"
            style={{ border: 0 }}
            src={`https://www.google.com/maps?q=${umkm.latitude},${umkm.longitude}&output=embed`}
          ></iframe>
          <a
            href={`https://www.google.com/maps?q=${umkm.latitude},${umkm.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buka di Google Maps →
          </a>
        </div>
      ) : (
        <div className="detail-map">
          <p><strong>Lokasi belum tersedia</strong></p>
          <p>Data koordinat UMKM akan segera diperbarui setelah proses pemetaan selesai.</p>
        </div>
      )}
    </div>
  );
}

export default DetailUmkm;