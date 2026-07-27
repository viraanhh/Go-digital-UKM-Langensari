import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import DetailUmkm from './pages/DetailUmkm';
import Edukasi from './pages/Edukasi';
import DetailEdukasi from './pages/DetailEdukasi';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/umkm/:id" element={<DetailUmkm />} />
          <Route path="/edukasi" element={<Edukasi />} />
          <Route path="/edukasi/:id" element={<DetailEdukasi />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;