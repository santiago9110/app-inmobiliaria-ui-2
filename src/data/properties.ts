export interface Property {
  id: number
  title: string
  price: string
  city: string
  type: string
  beds: number
  baths: number
  image: string
}

const properties: Property[] = [
  {
    id: 1,
    title: 'Loft moderno',
    price: '€120.000',
    city: 'Madrid',
    type: 'Loft',
    beds: 2,
    baths: 1,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Casa suburbana',
    price: '€230.000',
    city: 'Barcelona',
    type: 'House',
    beds: 4,
    baths: 3,
    image: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Apartamento céntrico',
    price: '€150.000',
    city: 'Valencia',
    type: 'Apartment',
    beds: 3,
    baths: 2,
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Villa con jardín',
    price: '€450.000',
    city: 'Sevilla',
    type: 'Villa',
    beds: 5,
    baths: 4,
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Estudio minimalista',
    price: '€90.000',
    city: 'Bilbao',
    type: 'Studio',
    beds: 1,
    baths: 1,
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Dúplex luminoso',
    price: '€200.000',
    city: 'Málaga',
    type: 'Duplex',
    beds: 3,
    baths: 2,
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80'
  }
]

export default properties