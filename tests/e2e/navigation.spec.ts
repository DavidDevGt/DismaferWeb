import { test, expect } from '@playwright/test';

test.describe('Navegación', () => {
  test('Header debe estar visible en todas las páginas', async ({ page }) => {
    const pages = ['/', '/productos', '/marcas', '/nosotros', '/contacto'];
    for (const path of pages) {
      await page.goto(path);
      const header = page.locator('header');
      await expect(header).toBeVisible();
    }
  });

  test('Footer debe estar visible en todas las páginas', async ({ page }) => {
    const pages = ['/', '/productos', '/marcas', '/nosotros', '/contacto'];
    for (const path of pages) {
      await page.goto(path);
      const footer = page.locator('footer');
      await expect(footer).toBeVisible();
    }
  });

  test('Logo en header debe llevar al homepage', async ({ page }) => {
    await page.goto('/contacto');
    await page.locator('header a[href="/"]').first().click();
    await expect(page).toHaveURL('/');
  });

  test('Nav — link Productos debe navegar a /productos', async ({ page }) => {
    await page.goto('/');
    await page.locator('header a[href="/productos"]').first().click();
    await expect(page).toHaveURL('/productos');
  });

  test('Nav — link Marcas debe navegar a /marcas', async ({ page }) => {
    await page.goto('/');
    await page.locator('header a[href="/marcas"]').first().click();
    await expect(page).toHaveURL('/marcas');
  });

  test('Nav — link Nosotros debe navegar a /nosotros', async ({ page }) => {
    await page.goto('/');
    await page.locator('header a[href="/nosotros"]').first().click();
    await expect(page).toHaveURL('/nosotros');
  });

  test('Nav — link Contacto debe navegar a /contacto', async ({ page }) => {
    await page.goto('/');
    await page.locator('header a[href="/contacto"]').first().click();
    await expect(page).toHaveURL('/contacto');
  });

  test('Mobile — menú hamburguesa debe funcionar', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 }); // iPhone
    await page.goto('/');

    const menuButton = page.locator('#menu-toggle');
    const mobileMenu = page.locator('#mobile-menu');

    // Menu empieza oculto
    await expect(mobileMenu).toBeHidden();

    // Click abre el menú
    await menuButton.click();
    await expect(mobileMenu).toBeVisible();

    // Click cierra el menú
    await menuButton.click();
    await expect(mobileMenu).toBeHidden();
  });

  test('Breadcrumbs — página de categoría debe tener breadcrumb', async ({ page }) => {
    await page.goto('/productos/herramienta-manual');
    const breadcrumb = page.locator('nav[aria-label="Breadcrumb"], nav:has(a[href="/"])');
    await expect(breadcrumb).toBeVisible();
  });

  test('Ruta inexistente debe mostrar página 404', async ({ page }) => {
    await page.goto('/esta-pagina-no-existe');
    await expect(page).toHaveURL('/esta-pagina-no-existe');
    const content = await page.content();
    expect(content).toMatch(/404|no encontrada/i);
  });
});
