import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Tutup menu otomatis setiap kali halaman berpindah
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">UMKM Go Digital</Link>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Buka menu navigasi"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isOpen ? 'navbar-menu-open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/edukasi">Edukasi</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;