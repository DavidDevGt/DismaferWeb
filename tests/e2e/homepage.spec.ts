import { test, expect } from '@playwright/test';

test.describe('Homepage — /', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('debe cargar con status 200', async ({ page }) => {
    const response = await page.request.get('/');
    expect(response.status()).toBe(200);
  });

  test('debe tener el título correcto', async ({ page }) => {
    await expect(page).toHaveTitle(/Ferretería Dismafer/);
  });

  test('meta description debe contener palabras clave del negocio', async ({ page }) => {
    const metaDesc = await page.locator('meta[name="description"]').getAttribute('content');
    expect(metaDesc).toContain('Guatemala');
    expect(metaDesc).toBeTruthy();
  });

  test('Hero — debe mostrar el headline principal', async ({ page }) => {
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    const text = await h1.textContent();
    expect(text).toMatch(/ferretería/i);
  });

  test('Hero — debe tener CTA de WhatsApp visible', async ({ page }) => {
    const waLink = page.locator('a[href*="wa.me"]').first();
    await expect(waLink).toBeVisible();
  });

  test('Hero — link de WhatsApp debe apuntar al número correcto', async ({ page }) => {
    const waLinks = page.locator('a[href*="wa.me/50258330848"]');
    const count = await waLinks.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test('Categorías — debe mostrar las 6 categorías', async ({ page }) => {
    // Espera que haya links a las 6 categorías
    const categoryLinks = [
      '/productos/herramienta-manual',
      '/productos/herramienta-electrica',
      '/productos/tuberia-pvc',
      '/productos/seguridad-industrial',
      '/productos/pinturas',
      '/productos/materiales-construccion',
    ];
    for (const href of categoryLinks) {
      const link = page.locator(`a[href="${href}"]`);
      await expect(link).toBeVisible();
    }
  });

  test('Marcas — debe mostrar marcas principales', async ({ page }) => {
    const pageContent = await page.content();
    expect(pageContent).toContain('Truper');
    expect(pageContent).toContain('Stanley');
  });

  test('debe tener Schema.org LocalBusiness en el HTML', async ({ page }) => {
    const schema = await page.locator('script[type="application/ld+json"]').textContent();
    expect(schema).toContain('HardwareStore');
    expect(schema).toContain('Ferretería Dismafer');
    expect(schema).toContain('+502-2339-0468');
  });

  test('debe tener el botón flotante de WhatsApp', async ({ page }) => {
    // El botón flotante es fixed, siempre visible
    const floatBtn = page.locator('a[href*="wa.me"][class*="fixed"]');
    await expect(floatBtn).toBeAttached();
  });

  test('debe tener Open Graph tags', async ({ page }) => {
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    expect(ogTitle).toBeTruthy();
    expect(ogTitle).toMatch(/Dismafer/i);

    const ogDesc = await page.locator('meta[property="og:description"]').getAttribute('content');
    expect(ogDesc).toBeTruthy();
  });
});
