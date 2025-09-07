import Navbar from '../../components/Navbar/Navbar'
import PropertyGrid from '../../components/PropertyGrid/PropertyGrid'
import Footer from '../../components/Footer/Footer'
import styles from './Properties.module.css'

export default function Properties() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className="container">
          <h1 className={styles.title}>Propiedades</h1>
          <PropertyGrid showFilters />
        </div>
      </main>
      <Footer />
    </>
  )
}