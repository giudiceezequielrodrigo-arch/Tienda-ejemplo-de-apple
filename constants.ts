
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'm3-pro-14',
    name: 'MacBook Pro 14"',
    category: 'Mac',
    price: 1999,
    description: 'Chip M3 Pro, 18GB RAM, 512GB SSD. Rendimiento extremo en un diseño portátil.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800',
    specs: ['Chip M3 Pro', 'Liquid Retina XDR', 'Batería hasta 22h']
  },
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    category: 'iPhone',
    price: 999,
    description: 'Titanio. Chip A17 Pro. Un sistema de cámaras pro totalmente nuevo.',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=800',
    specs: ['Diseño de Titanio', 'USB-C', 'Botón de Acción']
  },
  {
    id: 'ipad-pro-m2',
    name: 'iPad Pro 12.9"',
    category: 'iPad',
    price: 1099,
    description: 'Pantalla Liquid Retina XDR con tecnología ProMotion y chip M2.',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800',
    specs: ['Chip M2', 'Thunderbolt', 'Apple Pencil (2.ª gen)']
  },
  {
    id: 'watch-ultra-2',
    name: 'Apple Watch Ultra 2',
    category: 'Watch',
    price: 799,
    description: 'El Apple Watch más capaz y resistente. Pensado para la aventura.',
    image: 'https://images.unsplash.com/photo-1434493907317-a46b53b81882?auto=format&fit=crop&q=80&w=800',
    specs: ['Caja de Titanio 49mm', 'GPS de doble frecuencia', 'Hasta 36h']
  },
  {
    id: 'airpods-pro-2',
    name: 'AirPods Pro (2.ª gen)',
    category: 'AirPods',
    price: 249,
    description: 'Cancelación activa de ruido hasta dos veces mejor que la generación anterior.',
    image: 'https://images.unsplash.com/photo-1588423770574-91993ca52ff8?auto=format&fit=crop&q=80&w=800',
    specs: ['Audio Adaptativo', 'Chip H2', 'Carga MagSafe']
  },
  {
    id: 'mac-studio',
    name: 'Mac Studio',
    category: 'Mac',
    price: 1999,
    description: 'Potencia compacta. Chip M2 Max o M2 Ultra para creadores.',
    image: 'https://images.unsplash.com/photo-1651055030277-2263ba798e6c?auto=format&fit=crop&q=80&w=800',
    specs: ['Hasta 24 núcleos CPU', 'Hasta 192GB RAM', 'Diseño compacto']
  },
  {
    id: 'studio-display',
    name: 'Studio Display',
    category: 'Accesorios',
    price: 1599,
    description: 'Pantalla Retina 5K de 27 pulgadas. Cámara de 12 Mpx con Encuadre Centrado.',
    image: 'https://images.unsplash.com/photo-1650346146740-410a5198d5a1?auto=format&fit=crop&q=80&w=800',
    specs: ['600 nits de brillo', 'Sistema de 6 altavoces', '3 puertos USB-C']
  }
];
