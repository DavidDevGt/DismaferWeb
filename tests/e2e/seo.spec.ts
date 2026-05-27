import { test, expect } from '@playwright/test';

const publicPages = [
  { path: '/', name: 'Homepage' },
  { path: '/productos', name: 'Productos' },
  { path: '/productos/herramienta-manual', name: 'Herramienta Manual' },
  { path: '/marcas', name: 'Marcas' },
  { path: '/nosotros', name: 'Nosotros' },
  { path: '/contacto', name: 'Contacto' },
];

test.describe('SEO — Meta tags y estructura', () => {
  for (const { path, name } of publicPages) {
    test(`${name} (${path}) — debe tener <title>`, async ({ page }) => {
      await page.goto(path);
      const title = await page.title();
      expect(title.length).toBeGreaterThan(10);
      expect(title).toContain('Dismafer');
    });

    test(`${name} (${path}) — debe tener meta description`, async ({ page }) => {
      await page.goto(path);
      const metaDesc = await page
        .locator('meta[name="description"]')
        .getAttribute('content');
      expect(metaDesc).toBeTruthy();
      expect(metaDesc!.length).toBeGreaterThan(50);
    });

    test(`${name} (${path}) — debe tener un solo H1`, async ({ page }) => {
      await page.goto(path);
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBe(1);
    });

    test(`${name} (${path}) — debe tener canonical link`, async ({ page }) => {
      await page.goto(path);
      const canonical = await page
        .locator('link[rel="canonical"]')
        .getAttribute('href');
      expect(canonical).toBeTruthy();
    });

    test(`${name} (${path}) — debe tener og:title`, async ({ page }) => {
      await page.goto(path);
      const ogTitle = await page
        .locator('meta[property="og:title"]')
        .getAttribute('content');
      expect(ogTitle).toBeTruthy();
    });
  }

  test('Homepage — Schema.org HardwareStore debe ser JSON válido', async ({ page }) => {
    await page.goto('/');
    const schemaText = await page
      .locator('script[type="application/ld+json"]')
      .textContent();
    expect(() => JSON.parse(schemaText!)).not.toThrow();
    const schema = JSON.parse(schemaText!);
    expect(schema['@type']).toBe('HardwareStore');
    expect(schema.name).toBe('Ferretería Dismafer');
    expect(schema.telephone).toBeTruthy();
    expect(schema.address).toBeDefined();
    expect(schema.openingHoursSpecification).toBeDefined();
  });

  test('Página 404 — debe tener noindex', async ({ page }) => {
    await page.goto('/404');
    const robots = await page
      .locator('meta[name="robots"]')
      .getAttribute('content');
    expect(robots).toContain('noindex');
  });

  test('Sitemap — debe existir y ser XML válido', async ({ page }) => {
    const response = await page.request.get('/sitemap-index.xml');
    expect(response.status()).toBe(200);
    const body = await response.text();
    expect(body).toContain('<?xml');
    expect(body).toContain('sitemap');
  });
});
