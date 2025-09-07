import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          Urban Nest
        </NavLink>
        <nav className={styles.nav} aria-label="Main navigation">
          <NavLink to="/" className={({isActive})=>isActive?`${styles.link} ${styles.active}`:styles.link}>
            Home
          </NavLink>
          <a href="#" className={styles.link}>Propiedades</a>
          <a href="#" className={styles.link}>Contacto</a>
        </nav>
      </div>
    </header>
  )
}
