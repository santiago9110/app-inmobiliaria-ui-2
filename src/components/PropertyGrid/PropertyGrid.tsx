import properties from '../../data/properties'
import PropertyCard from '../PropertyCard/PropertyCard'
import styles from './PropertyGrid.module.css'

export default function PropertyGrid() {
  return (
    <section className={styles.grid}>
      {properties.map((p) => (
        <PropertyCard key={p.id} property={p} />
      ))}
    </section>
  )
}