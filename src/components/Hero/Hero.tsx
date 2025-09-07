import styles from './Hero.module.css'

export default function Hero() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>Encuentra tu próximo hogar</h1>
        <p>Explora las mejores propiedades de la ciudad</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            aria-label="Buscar"
            placeholder="Buscar propiedades"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Buscar
          </button>
        </form>
      </div>
    </section>
  )
}