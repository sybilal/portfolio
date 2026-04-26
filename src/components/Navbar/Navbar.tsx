import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import styles from './Navbar.module.scss';

const navItems = [
  { label: 'Home', path: 'intro' },
  { label: 'Experience', path: 'experience' },
  { label: 'Skills', path: 'skills' },
  { label: 'Contact', path: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <a href="https://github.com/sybilal" className={styles.logo}>
          {/* <span className={styles.logoIcon}>S</span> */}
          sybilal.github.io
        </a>
        <div className={styles.navLinks}>
          {navItems.map((item) => (

            <a
              key={item.path}
              href={`#${item.path}`}
              className={styles.navLink}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className={styles.statusIndicator}>
          <span className={styles.statusDot} />
          Available in Berlin, open to relocation
        </div>

        <button
          className={`${styles.mobileMenuBtn} ${mobileOpen ? styles.open : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.path}
            href={`#${item.path}`}
            className={styles.navLink}>
            {item.label}
          </a>
          // <NavLink
          //   key={item.path}
          //   to={item.path}
          //   className={({ isActive }) =>
          //     `${styles.navLink} ${isActive ? styles.active : ''}`
          //   }
          // >
          //   {item.label}
          // </NavLink>
        ))}
      </div>
    </>
  );
}
