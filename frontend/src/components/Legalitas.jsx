import { useState, useEffect } from 'react';
import { getLegalitasByUmkm } from '../services/api';
import './Legalitas.css';

function isTerpenuhi(value) {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') return value.trim().toLowerCase() === 'true';
  return false;
}

function Legalitas({ umkmId }) {
  const [legalitas, setLegalitas] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLegalitasByUmkm(umkmId)
      .then((data) => setLegalitas(data))
      .finally(() => setLoading(false));
  }, [umkmId]);

  if (loading) return null;

  const items = [
    { key: 'nib', label: 'NIB', terpenuhi: isTerpenuhi(legalitas?.nib) },
    { key: 'halal', label: 'Sertifikat Halal', terpenuhi: isTerpenuhi(legalitas?.halal) },
    { key: 'pirt', label: 'PIRT', terpenuhi: isTerpenuhi(legalitas?.pirt) },
    { key: 'hki', label: 'HKI / Merek', terpenuhi: isTerpenuhi(legalitas?.hki) },
  ];

  const jumlahTerpenuhi = items.filter((item) => item.terpenuhi).length;
  const persentase = Math.round((jumlahTerpenuhi / items.length) * 100);

  return (
    <section className="section-legalitas">
      <h2>Legalitas</h2>

      <div className="legalitas-progress">
        <p className="progress-count">{jumlahTerpenuhi} / {items.length} Legalitas Terpenuhi</p>
        <div className="progress-bar-track">
          <div className="progress-bar-fill" style={{ width: `${persentase}%` }}></div>
        </div>
        <p className="progress-percentage">{persentase}%</p>
      </div>

      <ul className="legalitas-checklist">
        {items.map((item) => (
          <li key={item.key} className={item.terpenuhi ? 'terpenuhi' : 'belum-terpenuhi'}>
            <span className="check-icon">{item.terpenuhi ? '✓' : '✗'}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Legalitas;