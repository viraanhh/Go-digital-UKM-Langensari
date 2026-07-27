import './Spinner.css';

function Spinner({ text = '' }) {
  return (
    <div className="spinner-wrapper">
      <div className="spinner"></div>
      {text && <p>{text}</p>}
    </div>
  );
}

export default Spinner;