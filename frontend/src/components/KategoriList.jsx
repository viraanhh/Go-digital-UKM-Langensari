import './KategoriList.css';

function KategoriList({ kategoriList, activeKategori, onSelect }) {
  if (kategoriList.length === 0) return null;

  return (
    <div className="kategori-list">
      <button
        type="button"
        className={`kategori-chip ${activeKategori === '' ? 'kategori-chip-active' : ''}`}
        onClick={() => onSelect('')}
      >
        Semua
      </button>
      {kategoriList.map((k) => (
        <button
          type="button"
          key={k.id}
          className={`kategori-chip ${activeKategori === k.id ? 'kategori-chip-active' : ''}`}
          onClick={() => onSelect(k.id)}
        >
          {k.nama_kategori}
        </button>
      ))}
    </div>
  );
}

export default KategoriList;