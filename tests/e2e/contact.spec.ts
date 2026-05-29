import { test, expect } from '@playwright/test';

test.describe('Página de Contacto — /contacto', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contacto');
  });

  test('debe cargar con status 200', async ({ page }) => {
    const response = await page.request.get('/contacto');
    expect(response.status()).toBe(200);
  });

test('debe mostrar el número de WhatsApp clickeable', async ({ page }) => {
    const waLink = page.locator('a[href*="wa.me/50258330848"]');
    await expect(waLink.first()).toBeVisible();
  });

  test('debe mostrar el número de teléfono como link clickeable', async ({ page }) => {
    const telLink = page.locator('a[href*="tel:+502"]');
    await expect(telLink.first()).toBeVisible();
    const href = await telLink.first().getAttribute('href');
    expect(href).toContain('2339');
  });

    test('debe mostrar los horarios de atención', async ({ page }) => {
     const content = await page.content();
     expect(content).toMatch(/08:00|8:00/);
     expect(content).toMatch(/Lunes|lunes/i);
     expect(content).toMatch(/Sábado|sabado/i);
     expect(content).toMatch(/Cerrado/i);
   });

  test('debe tener título de la página SEO correcto', async ({ page }) => {
    await expect(page).toHaveTitle(/Contacto.*Dismafer|Dismafer.*Contacto/i);
  });
});
