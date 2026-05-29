import { describe, it, expect } from 'vitest';
import {
  products,
  featuredProducts,
  getProductsByCategory,
  getProductBySlug,
} from '../../data/products';
import { categories } from '../../data/categories';
import { brands } from '../../data/brands';

describe('Products data', () => {
  describe('estructura del array', () => {
    it('debe tener al menos 12 productos', () => {
      expect(products.length).toBeGreaterThanOrEqual(12);
    });

    it('todos los ids deben ser únicos', () => {
      const ids = products.map((p) => p.id);
      expect(new Set(ids).size).toBe(ids.length);
    });

    it('todos los slugs deben ser únicos', () => {
      const slugs = products.map((p) => p.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    });
  });

  describe('integridad de campos', () => {
    it('cada producto debe tener todos los campos requeridos', () => {
      products.forEach((product) => {
        expect(product.id, `${product.slug}: id requerido`).toBeTruthy();
        expect(product.name, `${product.slug}: name requerido`).toBeTruthy();
        expect(product.slug, `${product.slug}: slug requerido`).toBeTruthy();
        expect(product.categoryId, `${product.slug}: categoryId requerido`).toBeTruthy();
        expect(product.brandId, `${product.slug}: brandId requerido`).toBeTruthy();
        expect(product.description, `${product.slug}: description requerida`).toBeTruthy();
        expect(
          product.shortDescription,
          `${product.slug}: shortDescription requerida`,
        ).toBeTruthy();
        expect(typeof product.featured).toBe('boolean');
        expect(typeof product.available).toBe('boolean');
        expect(Array.isArray(product.tags)).toBe(true);
      });
    });

    it('los slugs no deben contener espacios', () => {
      products.forEach((p) => {
        expect(p.slug).not.toContain(' ');
      });
    });

    it('shortDescription debe ser más corta o igual que description', () => {
      products.forEach((p) => {
        expect(p.shortDescription.length).toBeLessThanOrEqual(p.description.length);
      });
    });
  });

  describe('integridad referencial', () => {
    const categoryIds = new Set(categories.map((c) => c.id));
    const brandIds = new Set(brands.map((b) => b.id));

    it('todos los categoryId deben referenciar categorías existentes', () => {
      products.forEach((p) => {
        expect(
          categoryIds.has(p.categoryId),
          `Producto "${p.name}" tiene categoryId inválido: "${p.categoryId}"`,
        ).toBe(true);
      });
    });

    it('todos los brandId deben referenciar marcas existentes', () => {
      products.forEach((p) => {
        expect(
          brandIds.has(p.brandId),
          `Producto "${p.name}" tiene brandId inválido: "${p.brandId}"`,
        ).toBe(true);
      });
    });

    it('debe haber al menos 1 producto por categoría', () => {
      categories.forEach((cat) => {
        const catProducts = products.filter((p) => p.categoryId === cat.id);
        expect(
          catProducts.length,
          `Categoría "${cat.name}" no tiene productos`,
        ).toBeGreaterThanOrEqual(1);
      });
    });
  });

  describe('featuredProducts', () => {
    it('featuredProducts debe ser un subconjunto de products', () => {
      const productIds = new Set(products.map((p) => p.id));
      featuredProducts.forEach((fp) => {
        expect(productIds.has(fp.id)).toBe(true);
      });
    });

    it('todos los featuredProducts deben tener featured=true', () => {
      featuredProducts.forEach((p) => {
        expect(p.featured).toBe(true);
      });
    });

    it('debe haber al menos 1 producto destacado', () => {
      expect(featuredProducts.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('getProductsByCategory()', () => {
    it('debe retornar productos de la categoría correcta', () => {
      const herramientaManual = getProductsByCategory('herramienta-manual');
      herramientaManual.forEach((p) => {
        expect(p.categoryId).toBe('herramienta-manual');
      });
    });

    it('debe retornar array vacío para categoría inexistente', () => {
      const result = getProductsByCategory('categoria-que-no-existe');
      expect(result).toEqual([]);
    });

    it('todos los productos de herramienta-electrica deben pertenecer a esa categoría', () => {
      const electrica = getProductsByCategory('herramienta-electrica');
      electrica.forEach((p) => {
        expect(p.categoryId).toBe('herramienta-electrica');
      });
    });
  });

  describe('getProductBySlug()', () => {
    it('debe retornar el producto correcto para un slug válido', () => {
      const firstProduct = products[0];
      const found = getProductBySlug(firstProduct.slug);
      expect(found).toBeDefined();
      expect(found?.id).toBe(firstProduct.id);
      expect(found?.name).toBe(firstProduct.name);
    });

    it('debe retornar undefined para slug inexistente', () => {
      expect(getProductBySlug('producto-que-no-existe')).toBeUndefined();
    });

    it('debe retornar undefined para string vacío', () => {
      expect(getProductBySlug('')).toBeUndefined();
    });
  });
});
