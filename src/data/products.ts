import type { Product } from '../types';

export const products: Product[] = [
  // Herramienta Manual
  {
    id: 'martillo-carpintero-truper',
    name: 'Martillo de Carpintero 16 oz',
    slug: 'martillo-carpintero-truper',
    categoryId: 'herramienta-manual',
    brandId: 'truper',
    description: 'Martillo de carpintero con mango de fibra de vidrio, cabeza de acero forjado de 16 oz. Ideal para clavar y extraer clavos con mínimo esfuerzo.',
    shortDescription: 'Martillo 16 oz mango fibra de vidrio',
    featured: true,
    tags: ['martillo', 'carpintero', 'clavar'],
    available: true,
  },
  {
    id: 'juego-destornilladores-stanley',
    name: 'Juego de Destornilladores Stanley 6 piezas',
    slug: 'juego-destornilladores-stanley',
    categoryId: 'herramienta-manual',
    brandId: 'stanley',
    description: 'Set de 6 destornilladores con puntas planas y Phillips, mangos ergonómicos bimateria para máximo torque y confort.',
    shortDescription: 'Set 6 destornilladores mango ergonómico',
    featured: true,
    tags: ['destornillador', 'set', 'stanley'],
    available: true,
  },
  {
    id: 'llave-mixta-truper-12',
    name: 'Llave Mixta 12mm Truper',
    slug: 'llave-mixta-truper-12',
    categoryId: 'herramienta-manual',
    brandId: 'truper',
    description: 'Llave mixta de acero cromo-vanadio 12mm. Un extremo de boca fija y otro de corona para mayor versatilidad.',
    shortDescription: 'Llave mixta acero cromo-vanadio 12mm',
    featured: false,
    tags: ['llave', 'mixta', 'truper'],
    available: true,
  },
  // Herramienta Eléctrica
  {
    id: 'taladro-percutor-truper',
    name: 'Taladro Percutor 1/2" 750W Truper',
    slug: 'taladro-percutor-truper',
    categoryId: 'herramienta-electrica',
    brandId: 'truper',
    description: 'Taladro percutor de 750W con mandril de 1/2", función percutora para concreto, velocidad variable y reversa. Incluye maletín.',
    shortDescription: 'Taladro percutor 750W velocidad variable',
    featured: true,
    tags: ['taladro', 'percutor', 'concreto'],
    available: true,
  },
  {
    id: 'esmeril-angular-4.5-power-tech',
    name: 'Esmeril Angular 4½" 800W Power Tech',
    slug: 'esmeril-angular-4-5-power-tech',
    categoryId: 'herramienta-electrica',
    brandId: 'power-tech',
    description: 'Esmeril angular de 4½" con motor de 800W. Ideal para cortar, desbastar y pulir metal. Incluye disco de corte y disco de desbaste.',
    shortDescription: 'Esmeril angular 4½" 800W con disco',
    featured: true,
    tags: ['esmeril', 'angular', 'corte'],
    available: true,
  },
  // Tubería y PVC
  {
    id: 'tubo-pvc-agua-1-pulgada',
    name: 'Tubo PVC Agua Fría 1" (6m)',
    slug: 'tubo-pvc-agua-1-pulgada',
    categoryId: 'tuberia-pvc',
    brandId: 'truper',
    description: 'Tubería PVC para agua fría de 1 pulgada, longitud 6 metros. Resistente a presión, libre de plomo, para instalaciones domésticas e industriales.',
    shortDescription: 'Tubo PVC 1" agua fría 6 metros',
    featured: false,
    tags: ['tubo', 'pvc', 'agua', 'plomería'],
    available: true,
  },
  {
    id: 'codo-pvc-90-1-2',
    name: 'Codo PVC 90° 1/2"',
    slug: 'codo-pvc-90-1-2',
    categoryId: 'tuberia-pvc',
    brandId: 'truper',
    description: 'Codo de PVC 90 grados para tubería de 1/2". Para instalaciones de agua fría y caliente.',
    shortDescription: 'Codo PVC 90° 1/2" agua',
    featured: false,
    tags: ['codo', 'pvc', 'accesorio'],
    available: true,
  },
  // Seguridad Industrial
  {
    id: 'casco-seguridad-truper',
    name: 'Casco de Seguridad Industrial Truper',
    slug: 'casco-seguridad-truper',
    categoryId: 'seguridad-industrial',
    brandId: 'truper',
    description: 'Casco de seguridad industrial con suspension de 4 puntos, ventilado, certificado ANSI Z89.1. Disponible en blanco, amarillo, naranja y azul.',
    shortDescription: 'Casco seguridad ANSI Z89.1 certificado',
    featured: true,
    tags: ['casco', 'epp', 'seguridad'],
    available: true,
  },
  {
    id: 'guantes-nitrilo-truper',
    name: 'Guantes de Trabajo Nitrilo Truper (par)',
    slug: 'guantes-nitrilo-truper',
    categoryId: 'seguridad-industrial',
    brandId: 'truper',
    description: 'Guantes de trabajo recubiertos de nitrilo negro en palma y dedos. Dorso de algodón ventilado, agarre en seco y mojado. Tallas S, M, L, XL.',
    shortDescription: 'Guantes nitrilo trabajo agarre mojado/seco',
    featured: false,
    tags: ['guantes', 'nitrilo', 'protección'],
    available: true,
  },
  // Pinturas
  {
    id: 'pintura-latex-blanco-5gl',
    name: 'Pintura Látex Interior Blanco 5 galones',
    slug: 'pintura-latex-blanco-5gl',
    categoryId: 'pinturas',
    brandId: 'truper',
    description: 'Pintura látex para interior, base agua, acabado mate. Excelente cubrimiento, fácil aplicación, secado rápido. Rinde aproximadamente 35 m²/galón.',
    shortDescription: 'Pintura látex interior mate 5 galones',
    featured: false,
    tags: ['pintura', 'látex', 'interior', 'blanco'],
    available: true,
  },
  // Materiales de construcción
  {
    id: 'clavos-2-pulgadas-caja',
    name: 'Clavos de Acero 2" (caja 1kg)',
    slug: 'clavos-2-pulgadas-caja',
    categoryId: 'materiales-construccion',
    brandId: 'truper',
    description: 'Clavos de acero galvanizado de 2 pulgadas. Caja de 1 kilogramo, aproximadamente 200 piezas. Para construcción y carpintería.',
    shortDescription: 'Clavos acero galvanizado 2" caja 1kg',
    featured: false,
    tags: ['clavos', 'acero', 'construcción'],
    available: true,
  },
  {
    id: 'tornillos-drywall-6x1-bolsa',
    name: 'Tornillos Drywall 6x1" (bolsa 100 pzas)',
    slug: 'tornillos-drywall-6x1-bolsa',
    categoryId: 'materiales-construccion',
    brandId: 'truper',
    description: 'Tornillos para drywall fosfatados 6x1 pulgada. Bolsa con 100 piezas. Cabeza bugle, punta fina para tabla yeso.',
    shortDescription: 'Tornillos drywall 6x1" bolsa 100 piezas',
    featured: false,
    tags: ['tornillos', 'drywall', 'tabla yeso'],
    available: true,
  },
];

export const featuredProducts = products.filter(p => p.featured);

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(p => p.categoryId === categoryId);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
