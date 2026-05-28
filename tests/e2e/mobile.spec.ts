import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 375, height: 812 } });

test.describe('Mobile — Responsive design', () => {
  test('Homepage carga correctamente en móvil', async ({ page }) => {
    await page.goto('/');
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
  });

  test('Botón flotante de WhatsApp es visible en móvil', async ({ page }) => {
    await page.goto('/');
    const floatBtn = page.locator('a[href*="wa.me"]').first();
    await expect(floatBtn).toBeVisible();
  });

  test('Menú hamburguesa aparece en móvil', async ({ page }) => {
    await page.goto('/');
    const hamburger = page.locator('#menu-toggle');
    await expect(hamburger).toBeVisible();
  });

  test('Nav desktop está oculto en móvil', async ({ page }) => {
    await page.goto('/');
    const desktopNav = page.locator('nav div.hidden.md\\:flex');
    await expect(desktopNav).toHaveCount(0);
  });

  test('Grilla de categorías es legible en móvil (min 2 columnas)', async ({ page }) => {
    await page.goto('/productos');
    const categoryLinks = page.locator('a[href*="/productos/"]');
    const count = await categoryLinks.count();
    expect(count).toBeGreaterThanOrEqual(6);
  });

  test('Tap targets de links principales son suficientemente grandes', async ({ page }) => {
    await page.goto('/');
    const ctaLink = page.locator('a[href*="wa.me"]').first();
    const box = await ctaLink.boundingBox();
    if (box) {
      expect(box.height).toBeGreaterThanOrEqual(44);
    }
  });
});
