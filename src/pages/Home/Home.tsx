import  Navbar from '../../components/Navbar/Navbar'
import  Hero  from '../../components/Hero/Hero'
import PropertyGrid  from '../../components/PropertyGrid/PropertyGrid'
import Footer  from '../../components/Footer/Footer'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Hero />
        <PropertyGrid />
      </main>
      <Footer />
    </>
  )
}