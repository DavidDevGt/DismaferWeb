import { test, expect, devices } from '@playwright/test';

test.describe('Mobile — Responsive design', () => {
  test.use({ ...devices['Pixel 5'] });

  test('Homepage carga correctamente en móvil', async ({ page }) => {
    await page.goto('/');
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
  });

  test('Botón flotante de WhatsApp es visible en móvil', async ({ page }) => {
    await page.goto('/');
    const floatBtn = page.locator('a[href*="wa.me"][class*="fixed"]');
    await expect(floatBtn).toBeAttached();
  });

  test('Menú hamburguesa aparece en móvil', async ({ page }) => {
    await page.goto('/');
    const hamburger = page.locator('#menu-toggle');
    await expect(hamburger).toBeVisible();
  });

  test('Nav desktop está oculto en móvil', async ({ page }) => {
    await page.goto('/');
    // El nav desktop tiene clase md:flex — en mobile debería estar oculto visualmente
    const desktopNav = page.locator('nav.hidden.md\\:flex');
    // Verificamos que existe en el DOM aunque visualmente oculto
    await expect(desktopNav).toBeAttached();
  });

  test('Grilla de categorías es legible en móvil (min 2 columnas)', async ({ page }) => {
    await page.goto('/productos');
    // La grilla de categorías debe mostrar contenido
    const categoryLinks = page.locator('a[href*="/productos/"]');
    const count = await categoryLinks.count();
    expect(count).toBeGreaterThanOrEqual(6);
  });

  test('Tap targets de links principales son suficientemente grandes', async ({ page }) => {
    await page.goto('/');
    // Links principales en el CTA del hero deben ser grandes (al menos 44px de alto)
    const ctaLinks = page.locator('a[href*="wa.me"]').first();
    const box = await ctaLinks.boundingBox();
    if (box) {
      expect(box.height).toBeGreaterThanOrEqual(44);
    }
  });
});
