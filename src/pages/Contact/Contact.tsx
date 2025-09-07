import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className="container">
          <h1 className={styles.title}>Contacto</h1>
          <p className={styles.text}>Escribinos a contacto@urbannest.com</p>
        </div>
      </main>
      <Footer />
    </>
  )
}