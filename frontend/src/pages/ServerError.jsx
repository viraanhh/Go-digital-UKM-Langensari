import { Link } from 'react-router-dom';
import './ErrorPage.css';

function ServerError() {
  return (
    <div className="container error-page">
      <h1>500</h1>
      <p>Terjadi kesalahan pada server.</p>
      <p>Silakan coba beberapa saat lagi.</p>
      <Link to="/">← Kembali ke Home</Link>
    </div>
  );
}

export default ServerError;