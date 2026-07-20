import { Link } from 'react-router-dom';
import KategoriList from '../components/KategoriList';
import UmkmList from '../components/UmkmList';
import useTitle from '../hooks/useTitle';
import './Home.css';

function Home() {
  useTitle(
    'UMKM Go Digital RW 06 Langensari',
    'Portal informasi UMKM RW 06 Kelurahan Langensari, Ungaran Barat.'
  );

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