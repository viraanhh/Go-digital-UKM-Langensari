import { Link } from 'react-router-dom';
import AvatarFoto from './AvatarFoto';

function UmkmCard({ umkm }) {
  return (
    <div className="umkm-card">
      <AvatarFoto
        src={umkm.logo_url || umkm.foto_url}
        nama={umkm.nama_usaha}
        className="umkm-card-thumb"
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