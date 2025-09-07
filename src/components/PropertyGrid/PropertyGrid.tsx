import properties from '../../data/properties'
import PropertyCard from '../PropertyCard/PropertyCard'
import styles from './PropertyGrid.module.css'

interface Props {
  showFilters?: boolean
}

export default function PropertyGrid({ showFilters = false }: Props) {
  const handleSubmit = (e: React.FormEvent) => e.preventDefault()

  return (
    <>
      {showFilters && (
        <form className={styles.toolbar} onSubmit={handleSubmit}>
          <select className={styles.select} aria-label="Ciudad">
            <option value="">Ciudad</option>
          </select>
          <select className={styles.select} aria-label="Tipo">
            <option value="">Tipo</option>
          </select>
          <input
            type="number"
            className={styles.price}
            placeholder="Mín. €"
            aria-label="Precio mínimo"
          />
          <input
            type="number"
            className={styles.price}
            placeholder="Máx. €"
            aria-label="Precio máximo"
          />
        </form>
      )}
      <section className={styles.grid}>
        {properties.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </section>
    </>
  )
}