import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getUmkmDetail } from '../services/api';
import AvatarFoto from '../components/AvatarFoto';
import Produk from '../components/Produk';
import Legalitas from '../components/Legalitas';
import Kontak from '../components/Kontak';
import Spinner from '../components/Spinner';
import ServerError from './ServerError';
import useTitle from '../hooks/useTitle';
import './DetailUmkm.css';

function DetailUmkm() {
  const { id } = useParams();
  const [umkm, setUmkm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [serverError, setServerError] = useState(false);

  useEffect(() => {
    getUmkmDetail(id)
      .then((result) => {
        if (result.success) {
          setUmkm(result.data);
        } else {
          setNotFound(true);
        }
      })
      .catch(() => setServerError(true))
      .finally(() => setLoading(false));
  }, [id]);

  useTitle(
    umkm ? `${umkm.nama_usaha} | UMKM Go Digital` : 'Memuat... | UMKM Go Digital'
  );

  if (serverError) return <ServerError />;
  if (loading) return <Spinner text="Memuat data UMKM..." />;

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

      <div className="umkm-header">
        <AvatarFoto
          src={umkm.logo_url || umkm.foto_url}
          nama={umkm.nama_usaha}
          className="umkm-avatar"
        />
        <div className="umkm-header-info">
          <h1>{umkm.nama_usaha}</h1>
          <p className="umkm-header-meta">
            {umkm.nama_kategori || 'Kategori belum tersedia'} • {umkm.alamat || 'Alamat belum tersedia'}
          </p>
        </div>
      </div>

      <Produk umkmId={id} />
      <Legalitas umkmId={id} />
      <Kontak noWhatsapp={umkm.no_whatsapp} />

      <section className="detail-lokasi">
        <h2>Lokasi</h2>
        {umkm.google_maps_url ? (
          <a
            href={umkm.google_maps_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-buka-maps"
          >
            📍 Buka di Google Maps
          </a>
        ) : (
          <p className="info-kosong">Lokasi belum tersedia via Google Maps.</p>
        )}
      </section>
    </div>
  );
}

export default DetailUmkm;