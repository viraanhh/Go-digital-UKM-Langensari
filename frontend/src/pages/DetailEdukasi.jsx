import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import { getEdukasiDetail } from '../services/api';
import Spinner from '../components/Spinner';
import useTitle from '../hooks/useTitle';
import Lightbox from '../components/Lightbox';
import './DetailEdukasi.css';

function DetailEdukasi() {
  const { id } = useParams();
  const [edukasi, setEdukasi] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

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

  useTitle(
    edukasi ? `${edukasi.judul} | UMKM Go Digital` : 'Memuat... | UMKM Go Digital'
  );

  if (loading) return <Spinner />;

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
        edukasi.konten ? (
          <div className="artikel-content">
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
              {edukasi.konten}
            </ReactMarkdown>
          </div>
        ) : (
          <p>Data belum tersedia</p>
        )
      )}

      {edukasi.tipe_konten === 'image' && (
        edukasi.file_url ? (
          <div className="edukasi-media-wrapper">
            <div className="edukasi-image-grid">
              {edukasi.file_url.split(',').map((url, index) => (
                <img
                  key={index}
                  src={url.trim()}
                  alt={`${edukasi.judul} - ${index + 1}`}
                  className="edukasi-image"
                  onClick={() => setLightboxIndex(index)}
                />
              ))}
            </div>
          </div>
        ) : (
          <p>Gambar belum tersedia</p>
        )
      )}

      {edukasi.tipe_konten === 'pdf' && (
        edukasi.file_url ? (
          <div className="edukasi-media-wrapper">
            <iframe src={edukasi.file_url} title={edukasi.judul} className="edukasi-pdf" />
          </div>
        ) : (
          <p>Dokumen PDF belum tersedia</p>
        )
      )}

      {lightboxIndex !== null && (
        <Lightbox
          images={edukasi.file_url.split(',').map((url) => url.trim())}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}

export default DetailEdukasi;