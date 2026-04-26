import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Contact from '../../pages/Contact';
import Experience from '../../pages/Experience';
import Home from '../../pages/Home';
import Skills from '../../pages/Skills';
import Footer from '../Footer';
import Navbar from '../Navbar';
import ScrollProgress from '../ScrollProgress';
import styles from './Layout.module.scss';

export default function Layout() {
  const { pathname } = useLocation();

  // scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className={styles.layout}>
      <ScrollProgress />
      <Navbar />
      <main className={styles.main} key={pathname}>
        <div className={styles.pageTransition}>
          <Home />
          <Experience />
          <Skills />
          <Contact />
          {/* <Outlet /> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
