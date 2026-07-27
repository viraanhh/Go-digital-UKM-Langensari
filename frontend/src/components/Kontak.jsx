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
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-1.746-.874-2.888-1.56-4.035-3.54-.305-.526.305-.489.873-1.627.098-.198.05-.372-.05-.52-.099-.15-.669-1.61-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.052 3.133 4.977 4.27 2.926 1.137 2.926.758 3.874.657.949-.1 1.984-.815 2.263-1.61.28-.795.28-1.463.198-1.611-.087-.148-.297-.223-.667-.4z" />
            <path d="M12.05 2C6.532 2 2.06 6.472 2.06 12c0 1.94.545 3.76 1.492 5.31L2 22l4.812-1.516A9.94 9.94 0 0 0 12.05 22C17.568 22 22 17.528 22 12S17.568 2 12.05 2zm0 18.13c-1.79 0-3.478-.526-4.902-1.437l-.352-.223-2.86.9.906-2.798-.23-.362a8.086 8.086 0 0 1-1.29-4.21c0-4.482 3.643-8.13 8.128-8.13 4.485 0 8.128 3.648 8.128 8.13 0 4.483-3.643 8.13-8.128 8.13z" />
          </svg>
          Hubungi via WhatsApp
        </a>
      ) : (
        <p className="info-kosong">Nomor kontak belum tersedia.</p>
      )}
    </section>
  );
}

export default Kontak;