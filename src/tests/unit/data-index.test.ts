import { describe, it, expect } from 'vitest';
import {
  siteConfig,
  categories,
  getCategoryBySlug,
  brands,
  featuredBrands,
  products,
  featuredProducts,
  getProductsByCategory,
  getProductBySlug,
} from '../../data/index';

describe('Data index barrel export', () => {
  it('debe exportar siteConfig', () => {
    expect(siteConfig).toBeDefined();
    expect(typeof siteConfig).toBe('object');
  });

  it('debe exportar categories como array', () => {
    expect(Array.isArray(categories)).toBe(true);
    expect(categories.length).toBeGreaterThan(0);
  });

  it('debe exportar getCategoryBySlug como función', () => {
    expect(typeof getCategoryBySlug).toBe('function');
  });

  it('debe exportar brands como array', () => {
    expect(Array.isArray(brands)).toBe(true);
    expect(brands.length).toBeGreaterThan(0);
  });

  it('debe exportar featuredBrands como array', () => {
    expect(Array.isArray(featuredBrands)).toBe(true);
  });

  it('debe exportar products como array', () => {
    expect(Array.isArray(products)).toBe(true);
    expect(products.length).toBeGreaterThan(0);
  });

  it('debe exportar featuredProducts como array', () => {
    expect(Array.isArray(featuredProducts)).toBe(true);
  });

  it('debe exportar getProductsByCategory como función', () => {
    expect(typeof getProductsByCategory).toBe('function');
  });

  it('debe exportar getProductBySlug como función', () => {
    expect(typeof getProductBySlug).toBe('function');
  });

  it('consistencia: featuredBrands es subconjunto de brands', () => {
    const allBrandIds = new Set(brands.map(b => b.id));
    featuredBrands.forEach(fb => {
      expect(allBrandIds.has(fb.id)).toBe(true);
    });
  });

  it('consistencia: featuredProducts es subconjunto de products', () => {
    const allProductIds = new Set(products.map(p => p.id));
    featuredProducts.forEach(fp => {
      expect(allProductIds.has(fp.id)).toBe(true);
    });
  });
});
