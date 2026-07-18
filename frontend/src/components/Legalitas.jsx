import { useState, useEffect } from 'react';
import { getLegalitasByUmkm } from '../services/api';
import './Legalitas.css';

function Legalitas({ umkmId }) {
  const [legalitas, setLegalitas] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLegalitasByUmkm(umkmId)
      .then((data) => setLegalitas(data))
      .finally(() => setLoading(false));
  }, [umkmId]);

  if (loading) return null;

  const nib = legalitas?.nib;
  const halal = legalitas?.halal;
  const pirt = legalitas?.pirt;
  const hki = legalitas?.hki;

  return (
    <section className="section-legalitas">
      <h2>Legalitas</h2>
      <div className="legalitas-grid">
        <div className="legalitas-item">
          <span className="label">NIB</span>
          <span className="value">{nib || 'Belum tersedia'}</span>
        </div>
        <div className="legalitas-item">
          <span className="label">Sertifikat Halal</span>
          <span className="value">{halal ? 'Sudah Bersertifikat' : 'Belum tersedia'}</span>
        </div>
        <div className="legalitas-item">
          <span className="label">PIRT</span>
          <span className="value">{pirt || 'Belum tersedia'}</span>
        </div>
        <div className="legalitas-item">
          <span className="label">HKI / Merek</span>
          <span className="value">{hki || 'Belum tersedia'}</span>
        </div>
      </div>
    </section>
  );
}

export default Legalitas;