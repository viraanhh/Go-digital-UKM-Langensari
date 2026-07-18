import { Link } from 'react-router-dom';
import KategoriList from '../components/KategoriList';
import UmkmList from '../components/UmkmList';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <div className="home-header">
        <h1>UMKM Go Digital RW 06 Langensari</h1>
        <KategoriList />
      </div>
      <UmkmList />
    </div>
  );
}

export default Home;