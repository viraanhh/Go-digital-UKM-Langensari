import { Link } from 'react-router-dom';

function UmkmCard({ umkm }) {
  return (
    <div className="umkm-card">
      <img
        src={umkm.foto_url || 'https://placehold.co/220x140?text=Belum+Ada+Foto'}
        alt={umkm.nama_usaha}
      />
      <h3>{umkm.nama_usaha}</h3>
      <p><strong>Kategori:</strong> {umkm.nama_kategori}</p>
      <p><strong>Alamat:</strong> {umkm.alamat}</p>
      <Link to={`/umkm/${umkm.id}`}>
        <button>Lihat Detail</button>
      </Link>
    </div>
  );
}

export default UmkmCard;