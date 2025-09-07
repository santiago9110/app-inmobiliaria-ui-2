import { useRef } from 'react'
import properties from '../../data/properties'
import PropertyCard from '../../components/PropertyCard/PropertyCard'
import styles from './Home.module.css'

export default function Carousel() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    const track = trackRef.current
    if (!track) return
    const amount = track.offsetWidth * 0.8
    track.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section className={styles.carouselSection}>
      <div className={styles.carouselHeader}>
        <h2 className={styles.carouselTitle}>Propiedades destacadas</h2>
        <div className={styles.carouselControls}>
          <button aria-label="Anterior" onClick={() => scroll('left')} className={styles.carouselBtn}>&lt;</button>
          <button aria-label="Siguiente" onClick={() => scroll('right')} className={styles.carouselBtn}>&gt;</button>
        </div>
      </div>
      <div
        className={styles.carouselTrack}
        ref={trackRef}
        aria-roledescription="carousel"
        tabIndex={0}
      >
        {properties.map((property) => (
          <div className={styles.carouselSnap} key={property.id}>
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
    </section>
  )
}
