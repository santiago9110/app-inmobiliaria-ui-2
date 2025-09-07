import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Properties from '../pages/Properties/Properties'
import Contact from '../pages/Contact/Contact'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/properties', element: <Properties /> },
  { path: '/contact', element: <Contact /> }
])

export default router