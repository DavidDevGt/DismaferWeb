import type { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'herramienta-manual',
    name: 'Herramienta Manual',
    slug: 'herramienta-manual',
    description: 'Llaves, martillos, destornilladores, alicates, metros y todo lo que necesitas para trabajar con tus manos.',
    icon: 'M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243zm0 0L12 12',
    color: 'bg-blue-50',
    productCount: 120,
  },
  {
    id: 'herramienta-electrica',
    name: 'Herramienta Eléctrica',
    slug: 'herramienta-electrica',
    description: 'Taladros, esmeriles, sierras circulares, pulidoras y equipos eléctricos de las mejores marcas.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    color: 'bg-orange-50',
    productCount: 85,
  },
  {
    id: 'tuberia-pvc',
    name: 'Tubería y PVC',
    slug: 'tuberia-pvc',
    description: 'Tubería de agua, drenaje y presión, accesorios PVC, codos, tees, uniones y válvulas.',
    icon: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
    color: 'bg-cyan-50',
    productCount: 95,
  },
  {
    id: 'seguridad-industrial',
    name: 'Seguridad Industrial',
    slug: 'seguridad-industrial',
    description: 'Equipos de protección personal: cascos, guantes, lentes, mascarillas, chalecos y botas de seguridad.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    color: 'bg-yellow-50',
    productCount: 60,
  },
  {
    id: 'pinturas',
    name: 'Pinturas y Acabados',
    slug: 'pinturas',
    description: 'Pinturas, esmaltes, barnices, selladores, rodillos, brochas y accesorios de pintura.',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    color: 'bg-purple-50',
    productCount: 45,
  },
  {
    id: 'materiales-construccion',
    name: 'Materiales de Construcción',
    slug: 'materiales-construccion',
    description: 'Clavos, tornillos, alambre, varilla, cemento, block y todo lo necesario para tu obra.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    color: 'bg-stone-50',
    productCount: 110,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}
