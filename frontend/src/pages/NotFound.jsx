import { Link } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import './ErrorPage.css';

function NotFound() {
  useTitle('Halaman Tidak Ditemukan | UMKM Go Digital');

  return (
    <div className="container error-page">
      <h1>404</h1>
      <p>Halaman tidak ditemukan.</p>
      <Link to="/">← Kembali ke Home</Link>
    </div>
  );
}

export default NotFound;