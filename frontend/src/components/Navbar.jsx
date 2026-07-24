import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const tutupMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand" onClick={tutupMenu}>UMKM Go Digital</Link>

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
          <li><Link to="/" onClick={tutupMenu}>Home</Link></li>
          <li><Link to="/edukasi" onClick={tutupMenu}>Edukasi</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;