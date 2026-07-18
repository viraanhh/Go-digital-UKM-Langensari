import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getEdukasiDetail } from '../services/api';

function DetailEdukasi() {
  const { id } = useParams();
  const [edukasi, setEdukasi] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    getEdukasiDetail(id)
      .then((result) => {
        if (result.success) {
          setEdukasi(result.data);
        } else {
          setNotFound(true);
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Memuat...</p>;

  if (notFound) {
    return (
      <div className="container">
        <Link to="/edukasi">← Kembali ke Edukasi</Link>
        <p>Materi edukasi tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/edukasi">← Kembali ke Edukasi</Link>
      <h1>{edukasi.judul}</h1>
      <p><em>Kategori: {edukasi.kategori}</em></p>

      {edukasi.tipe_konten === 'artikel' && (
        <p>{edukasi.konten || 'Data belum tersedia'}</p>
      )}

      {edukasi.tipe_konten === 'image' && (
        edukasi.file_url
          ? <img src={edukasi.file_url} alt={edukasi.judul} style={{ maxWidth: '100%', borderRadius: '8px' }} />
          : <p>Gambar belum tersedia</p>
      )}

      {edukasi.tipe_konten === 'pdf' && (
        edukasi.file_url
          ? <iframe src={edukasi.file_url} title={edukasi.judul} width="100%" height="600px" style={{ border: 0 }}></iframe>
          : <p>Dokumen PDF belum tersedia</p>
      )}
    </div>
  );
}

export default DetailEdukasi;