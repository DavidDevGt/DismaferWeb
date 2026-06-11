import { describe, it, expect } from 'vitest';
import {
  siteConfig,
  categories,
  getCategoryBySlug,
  brands,
  featuredBrands,
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

  it('consistencia: featuredBrands es subconjunto de brands', () => {
    const allBrandIds = new Set(brands.map((b) => b.id));
    featuredBrands.forEach((fb) => {
      expect(allBrandIds.has(fb.id)).toBe(true);
    });
  });
});
