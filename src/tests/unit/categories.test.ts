import { describe, it, expect } from 'vitest';
import { categories, getCategoryBySlug } from '../../data/categories';

describe('Categories data', () => {
  describe('estructura del array', () => {
    it('debe tener exactamente 6 categorías', () => {
      expect(categories).toHaveLength(6);
    });

    it('debe incluir las 6 categorías requeridas por el negocio', () => {
      const slugs = categories.map((c) => c.slug);
      expect(slugs).toContain('herramienta-manual');
      expect(slugs).toContain('herramienta-electrica');
      expect(slugs).toContain('tuberia-pvc');
      expect(slugs).toContain('seguridad-industrial');
      expect(slugs).toContain('pinturas');
      expect(slugs).toContain('materiales-construccion');
    });

    it('todos los slugs deben ser únicos', () => {
      const slugs = categories.map((c) => c.slug);
      const uniqueSlugs = new Set(slugs);
      expect(uniqueSlugs.size).toBe(slugs.length);
    });

    it('todos los ids deben ser únicos', () => {
      const ids = categories.map((c) => c.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });
  });

  describe('integridad de campos', () => {
    it('cada categoría debe tener todos los campos requeridos', () => {
      categories.forEach((cat) => {
        expect(cat.id, `${cat.slug} debe tener id`).toBeTruthy();
        expect(cat.name, `${cat.slug} debe tener name`).toBeTruthy();
        expect(cat.slug, `${cat.slug} debe tener slug`).toBeTruthy();
        expect(cat.description, `${cat.slug} debe tener description`).toBeTruthy();
        expect(cat.color, `${cat.slug} debe tener color`).toBeTruthy();
        expect(cat.icon, `${cat.slug} debe tener icon`).toBeTruthy();
      });
    });

    it('los slugs no deben contener espacios ni mayúsculas', () => {
      categories.forEach((cat) => {
        expect(cat.slug).toMatch(/^[a-z0-9-]+$/);
      });
    });

    it('las descriptions deben tener al menos 10 caracteres', () => {
      categories.forEach((cat) => {
        expect(cat.description.length).toBeGreaterThanOrEqual(10);
      });
    });

    it('los colors deben ser clases Tailwind válidas', () => {
      categories.forEach((cat) => {
        expect(cat.color).toMatch(/^bg-/);
      });
    });
  });

  describe('getCategoryBySlug()', () => {
    it('debe retornar la categoría correcta para un slug válido', () => {
      const cat = getCategoryBySlug('herramienta-manual');
      expect(cat).toBeDefined();
      expect(cat?.name).toBe('Herramienta Manual');
      expect(cat?.slug).toBe('herramienta-manual');
    });

    it('debe retornar undefined para un slug inexistente', () => {
      expect(getCategoryBySlug('no-existe')).toBeUndefined();
    });

    it('debe retornar undefined para string vacío', () => {
      expect(getCategoryBySlug('')).toBeUndefined();
    });

    it('debe funcionar para cada uno de los 6 slugs válidos', () => {
      const validSlugs = [
        'herramienta-manual',
        'herramienta-electrica',
        'tuberia-pvc',
        'seguridad-industrial',
        'pinturas',
        'materiales-construccion',
      ];
      validSlugs.forEach((slug) => {
        const cat = getCategoryBySlug(slug);
        expect(cat, `debe encontrar categoría para slug: ${slug}`).toBeDefined();
        expect(cat?.slug).toBe(slug);
      });
    });
  });
});
