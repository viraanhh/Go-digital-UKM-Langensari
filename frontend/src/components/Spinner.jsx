import './Spinner.css';

function Spinner({ text = 'Memuat data...' }) {
  return (
    <div className="spinner-wrapper">
      <div className="spinner"></div>
      <p>{text}</p>
    </div>
  );
}

export default Spinner;