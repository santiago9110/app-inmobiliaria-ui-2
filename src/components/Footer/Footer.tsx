import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© 2024 Urban Nest</p>
        <div className={styles.links}>
          <a href="#" aria-label="Instagram">
            Instagram
          </a>
          <a href="#" aria-label="Facebook">
            Facebook
          </a>
          <a href="#" aria-label="Twitter">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}