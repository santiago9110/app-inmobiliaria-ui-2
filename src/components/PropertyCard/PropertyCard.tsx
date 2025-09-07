import type { Property } from '../../data/properties'
import styles from './PropertyCard.module.css'

interface Props {
  property: Property
}

export default function PropertyCard({ property }: Props) {
  return (
    <article className={styles.card}>
      <img
        src={property.image}
        alt={property.title}
        className={styles.media}
        loading="lazy"
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{property.title}</h3>
        <p className={styles.city}>
          {property.city} · {property.type}
        </p>
        <div className={styles.meta}>
          <span>{property.beds} bd</span>
          <span>{property.baths} ba</span>
        </div>
        <p className={styles.price}>{property.price}</p>
      </div>
    </article>
  )
}