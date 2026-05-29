import type { Brand } from '../types';

export const brands: Brand[] = [
  {
    id: 'truper',
    name: 'Truper',
    slug: 'truper',
    description:
      'Líder latinoamericano en herramientas manuales y eléctricas con más de 50 años de experiencia.',
    featured: true,
    country: 'México',
  },
  {
    id: 'stanley',
    name: 'Stanley',
    slug: 'stanley',
    description: 'Marca mundial de herramientas de calidad profesional, fundada en 1843.',
    featured: true,
    country: 'EE.UU.',
  },
  {
    id: 'tramontina',
    name: 'Tramontina',
    slug: 'tramontina',
    description: 'Herramientas y utensilios de alta calidad con más de 100 años de tradición.',
    featured: true,
    country: 'Brasil',
  },
];

export const featuredBrands = brands.filter((b) => b.featured);
