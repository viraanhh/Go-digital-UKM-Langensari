import { formatNomorWA } from '../utils/formatWhatsapp';
import './Kontak.css';

function Kontak({ noWhatsapp }) {
  const nomorFormatted = formatNomorWA(noWhatsapp);

  return (
    <section className="section-kontak">
      <h2>Kontak</h2>
      {nomorFormatted ? (
        <a
          className="btn-whatsapp"
          href={`https://wa.me/${nomorFormatted}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 Hubungi via WhatsApp
        </a>
      ) : (
        <p className="info-kosong">Nomor kontak belum tersedia.</p>
      )}
    </section>
  );
}

export default Kontak;