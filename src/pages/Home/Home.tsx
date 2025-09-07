import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import styles from './Home.module.css'
import Carousel from './Carousel'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Encuentra tu hogar ideal</h1>
            <p className={styles.heroSubtitle}>Propiedades seleccionadas para vos en las mejores zonas urbanas.</p>
            <form className={styles.heroForm} onSubmit={e => e.preventDefault()}>
              <input className={styles.heroInput} type="text" placeholder="Buscar ciudad, tipo, etc." aria-label="Buscar" />
              <button className={styles.heroBtn} type="submit">Buscar</button>
            </form>
          </div>
        </section>
        <Carousel />
      </main>
      <Footer />
    </>
  )
}