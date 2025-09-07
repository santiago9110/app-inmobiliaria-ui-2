import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <header className={styles.nav}>
      <div className={`${styles.inner} container`}>
        <NavLink to="/" className={styles.brand}>
          Urban Nest
        </NavLink>
        <nav className={styles.links} aria-label="Main navigation">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/properties"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Properties
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}