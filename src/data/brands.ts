import type { Brand } from '../types';

export const brands: Brand[] = [
  {
    id: 'truper',
    name: 'Truper',
    slug: 'truper',
    description: 'Líder latinoamericano en herramientas manuales y eléctricas con más de 50 años de experiencia.',
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
  {
    id: 'toolcraft',
    name: 'Toolcraft',
    slug: 'toolcraft',
    description: 'Herramientas profesionales con excelente relación calidad-precio.',
    featured: true,
    country: 'Alemania',
  },
  {
    id: 'power-tech',
    name: 'Power Tech',
    slug: 'power-tech',
    description: 'Herramientas eléctricas de potencia para uso profesional e industrial.',
    featured: true,
    country: 'Internacional',
  },
];

export const featuredBrands = brands.filter(b => b.featured);
