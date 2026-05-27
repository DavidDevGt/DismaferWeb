import { test, expect } from '@playwright/test';

test.describe('Accesibilidad básica', () => {
  test('Homepage — imágenes deben tener alt o aria-hidden', async ({ page }) => {
    await page.goto('/');
    const images = page.locator('img');
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      const ariaHidden = await img.getAttribute('aria-hidden');
      expect(
        alt !== null || ariaHidden === 'true',
        `Imagen sin alt ni aria-hidden en posición ${i}`
      ).toBe(true);
    }
  });

  test('Links de WhatsApp deben tener aria-label o texto visible', async ({ page }) => {
    await page.goto('/');
    const waLinks = page.locator('a[href*="wa.me"]');
    const count = await waLinks.count();
    expect(count).toBeGreaterThanOrEqual(1);

    for (let i = 0; i < count; i++) {
      const link = waLinks.nth(i);
      const ariaLabel = await link.getAttribute('aria-label');
      const textContent = await link.textContent();
      expect(
        (ariaLabel && ariaLabel.length > 0) || (textContent && textContent.trim().length > 0),
        `Link de WhatsApp ${i} sin texto accesible`
      ).toBe(true);
    }
  });

  test('Header debe tener role o landmark semántico', async ({ page }) => {
    await page.goto('/');
    const header = page.locator('header');
    await expect(header).toBeVisible();
  });

  test('Main debe existir como landmark', async ({ page }) => {
    await page.goto('/');
    const main = page.locator('main');
    await expect(main).toBeVisible();
  });

  test('Footer debe existir como landmark', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('Menú de navegación debe tener aria-label', async ({ page }) => {
    await page.goto('/');
    const navWithLabel = page.locator('nav[aria-label]');
    const count = await navWithLabel.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test('Homepage — el título H1 debe ser legible (no vacío)', async ({ page }) => {
    await page.goto('/');
    const h1Text = await page.locator('h1').textContent();
    expect(h1Text?.trim().length).toBeGreaterThan(3);
  });
});
