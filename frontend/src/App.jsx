import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DetailUmkm from './pages/DetailUmkm';
import Edukasi from './pages/Edukasi';
import DetailEdukasi from './pages/DetailEdukasi';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/umkm/:id" element={<DetailUmkm />} />
        <Route path="/edukasi" element={<Edukasi />} />
        <Route path="/edukasi/:id" element={<DetailEdukasi />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;