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
          <p className={styles.text}>¿Querés vender, comprar o alquilar una propiedad? Escribinos a <a href="mailto:contacto@urbannest.com">contacto@urbannest.com</a> o completá el formulario y te contactamos.</p>
          <div style={{display: 'flex', gap: 32, justifyContent: 'center', margin: '40px 0', flexWrap: 'wrap'}}>
            <div style={{textAlign: 'center'}}>
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Dueño 1" style={{borderRadius: '50%', width: 120, height: 120, objectFit: 'cover', marginBottom: 12, border: '4px solid var(--brand)'}} />
              <h3 style={{margin: 0}}>Martín Gómez</h3>
              <p style={{color: 'var(--text-muted)', margin: 0}}>Co-fundador &amp; Ventas</p>
              <p style={{fontSize: 14, marginTop: 8}}>Especialista en propiedades urbanas y atención personalizada.</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Dueña 2" style={{borderRadius: '50%', width: 120, height: 120, objectFit: 'cover', marginBottom: 12, border: '4px solid var(--brand)'}} />
              <h3 style={{margin: 0}}>Lucía Fernández</h3>
              <p style={{color: 'var(--text-muted)', margin: 0}}>Co-fundadora &amp; Ventas</p>
              <p style={{fontSize: 14, marginTop: 8}}>Experta en asesoramiento y gestión de operaciones inmobiliarias.</p>
            </div>
          </div>
          <form style={{maxWidth: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16}}>
            <input type="text" placeholder="Nombre" style={{padding: 12, borderRadius: 8, border: '1px solid var(--line)'}} />
            <input type="email" placeholder="Email" style={{padding: 12, borderRadius: 8, border: '1px solid var(--line)'}} />
            <textarea placeholder="Mensaje" rows={4} style={{padding: 12, borderRadius: 8, border: '1px solid var(--line)'}} />
            <button type="submit" style={{background: 'var(--brand)', color: '#fff', border: 0, borderRadius: 8, padding: '12px 0', fontWeight: 700}}>Enviar</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}