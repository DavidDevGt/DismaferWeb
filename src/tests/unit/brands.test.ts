import { describe, it, expect } from 'vitest';
import { brands, featuredBrands } from '../../data/brands';

describe('Brands data', () => {
  describe('estructura del array', () => {
    it('debe tener al menos 5 marcas', () => {
      expect(brands.length).toBeGreaterThanOrEqual(5);
    });

    it('debe incluir las marcas principales de Dismafer', () => {
      const names = brands.map(b => b.name);
      expect(names).toContain('Truper');
      expect(names).toContain('Stanley');
      expect(names).toContain('Tramontina');
      expect(names).toContain('Toolcraft');
      expect(names).toContain('Power Tech');
    });

    it('todos los ids deben ser únicos', () => {
      const ids = brands.map(b => b.id);
      expect(new Set(ids).size).toBe(ids.length);
    });

    it('todos los slugs deben ser únicos', () => {
      const slugs = brands.map(b => b.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    });
  });

  describe('integridad de campos', () => {
    it('cada marca debe tener todos los campos requeridos', () => {
      brands.forEach(brand => {
        expect(brand.id, `${brand.name}: id requerido`).toBeTruthy();
        expect(brand.name, `${brand.name}: name requerido`).toBeTruthy();
        expect(brand.slug, `${brand.name}: slug requerido`).toBeTruthy();
        expect(brand.description, `${brand.name}: description requerida`).toBeTruthy();
        expect(brand.country, `${brand.name}: country requerido`).toBeTruthy();
        expect(typeof brand.featured).toBe('boolean');
      });
    });

    it('los slugs no deben contener espacios ni mayúsculas', () => {
      brands.forEach(brand => {
        expect(brand.slug).toMatch(/^[a-z0-9-]+$/);
      });
    });
  });

  describe('featuredBrands', () => {
    it('featuredBrands debe ser un subconjunto de brands', () => {
      const brandIds = new Set(brands.map(b => b.id));
      featuredBrands.forEach(fb => {
        expect(brandIds.has(fb.id)).toBe(true);
      });
    });

    it('todas las marcas en featuredBrands deben tener featured=true', () => {
      featuredBrands.forEach(brand => {
        expect(brand.featured).toBe(true);
      });
    });

    it('Truper debe estar en featuredBrands (marca principal de Dismafer)', () => {
      const truper = featuredBrands.find(b => b.name === 'Truper');
      expect(truper).toBeDefined();
    });
  });
});
