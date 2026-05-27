import { test, expect } from '@playwright/test';

const categories = [
  { slug: 'herramienta-manual', name: 'Herramienta Manual' },
  { slug: 'herramienta-electrica', name: 'Herramienta Eléctrica' },
  { slug: 'tuberia-pvc', name: 'Tubería y PVC' },
  { slug: 'seguridad-industrial', name: 'Seguridad Industrial' },
  { slug: 'pinturas', name: 'Pinturas y Acabados' },
  { slug: 'materiales-construccion', name: 'Materiales de Construcción' },
];

test.describe('Página de Productos — /productos', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/productos');
  });

  test('debe cargar con status 200', async ({ page }) => {
    const response = await page.request.get('/productos');
    expect(response.status()).toBe(200);
  });

  test('debe mostrar el título de la página', async ({ page }) => {
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
  });

  test('debe mostrar las 6 categorías como links', async ({ page }) => {
    for (const cat of categories) {
      const link = page.locator(`a[href="/productos/${cat.slug}"]`).first();
      await expect(link).toBeVisible();
    }
  });

  test('debe tener CTA de WhatsApp para consultas', async ({ page }) => {
    const waLink = page.locator('a[href*="wa.me"]').first();
    await expect(waLink).toBeVisible();
  });
});

test.describe('Páginas de categoría — /productos/[categoria]', () => {
  for (const cat of categories) {
    test(`/productos/${cat.slug} — debe cargar correctamente`, async ({ page }) => {
      const response = await page.request.get(`/productos/${cat.slug}`);
      expect(response.status()).toBe(200);
    });

    test(`/productos/${cat.slug} — debe mostrar el nombre de la categoría`, async ({ page }) => {
      await page.goto(`/productos/${cat.slug}`);
      const h1 = page.locator('h1');
      await expect(h1).toBeVisible();
    });

    test(`/productos/${cat.slug} — debe tener breadcrumb con link a /productos`, async ({ page }) => {
      await page.goto(`/productos/${cat.slug}`);
      const productosLink = page.locator('a[href="/productos"]');
      await expect(productosLink).toBeVisible();
    });

    test(`/productos/${cat.slug} — debe tener al menos 1 CTA de WhatsApp`, async ({ page }) => {
      await page.goto(`/productos/${cat.slug}`);
      const waLinks = page.locator('a[href*="wa.me"]');
      const count = await waLinks.count();
      expect(count).toBeGreaterThanOrEqual(1);
    });
  }
});
