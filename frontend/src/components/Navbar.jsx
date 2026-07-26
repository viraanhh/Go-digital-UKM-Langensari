import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const tutupMenu = () => setIsOpen(false);

  function navLinkClass({ isActive }) {
    return isActive ? 'nav-active' : '';
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <ul className={`navbar-menu ${isOpen ? 'navbar-menu-open' : ''}`}>
          <li>
            <NavLink to="/" end onClick={tutupMenu} className={navLinkClass}>
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink to="/edukasi" onClick={tutupMenu} className={navLinkClass}>
              Edukasi
            </NavLink>
          </li>
        </ul>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Buka menu navigasi"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;