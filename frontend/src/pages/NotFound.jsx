import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useTitle from '../hooks/useTitle';
import { pageVariants, pageTransition } from '../animations';
import './ErrorPage.css';

function NotFound() {
  useTitle('Halaman Tidak Ditemukan | UMKM Go Digital');

  return (
    <motion.div
      className="container error-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <h1>404</h1>
      <p>Halaman tidak ditemukan.</p>
      <Link to="/" className="back-link">← Kembali ke Beranda</Link>
    </motion.div>
  );
}

export default NotFound;