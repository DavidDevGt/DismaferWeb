# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage.spec.ts >> Homepage — / >> debe tener el título correcto
- Location: tests/e2e/homepage.spec.ts:13:3

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
TimeoutError: page.goto: Timeout 30000ms exceeded.
Call log:
  - navigating to "http://localhost:4321/", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Saltar al contenido principal" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - banner [ref=e3]:
    - generic [ref=e5]:
      - link "Dismafer - Inicio" [ref=e6] [cursor=pointer]:
        - /url: /
        - generic [ref=e7]:
          - text: Dism
          - img [ref=e8]
          - text: fer
      - button "Abrir menú" [ref=e13]:
        - img [ref=e14]
  - main [ref=e16]:
    - generic [ref=e17]:
      - img [ref=e19]
      - generic [ref=e22]:
        - generic [ref=e25]: +20 años sirviendo a Guatemala · Zona 9
        - heading "De TODO en Ferretería" [level=1] [ref=e26]:
          - text: De TODO en
          - generic [ref=e27]: Ferretería
        - paragraph [ref=e28]:
          - text: Herramientas, materiales de construcción, PVC y seguridad industrial.
          - strong [ref=e29]: Si no lo tenemos, te lo conseguimos.
        - generic [ref=e30]:
          - link "Escríbenos por WhatsApp" [ref=e31] [cursor=pointer]:
            - /url: https://wa.me/50258330848?text=Hola%2C%20me%20interesa%20informaci%C3%B3n%20sobre%20sus%20productos
            - img [ref=e32]
            - text: Escríbenos por WhatsApp
          - link "Ver productos" [ref=e34] [cursor=pointer]:
            - /url: /productos
            - text: Ver productos
            - img [ref=e35]
        - generic [ref=e37]:
          - generic [ref=e38]:
            - img [ref=e39]
            - text: Más de 20 años de experiencia
          - generic [ref=e41]:
            - img [ref=e42]
            - text: "Marcas líderes: Truper, Stanley, Tramontina"
          - generic [ref=e44]:
            - img [ref=e45]
            - text: Atención Lun-Vie 8:00-17:00
    - generic [ref=e48]:
      - generic [ref=e49]:
        - text: Catálogo
        - heading "Todo lo que necesitas" [level=2] [ref=e50]
        - paragraph [ref=e51]: Más de 500 productos en 6 categorías principales. Si no lo tenemos, te lo conseguimos.
      - generic [ref=e52]:
        - link "Herramienta Manual Llaves, martillos, destornilladores, alicates, metros y todo lo que necesitas para trabajar con tus manos. Ver productos" [ref=e53] [cursor=pointer]:
          - /url: /productos/herramienta-manual
          - img [ref=e55]
          - generic [ref=e57]:
            - heading "Herramienta Manual" [level=3] [ref=e58]
            - paragraph [ref=e59]: Llaves, martillos, destornilladores, alicates, metros y todo lo que necesitas para trabajar con tus manos.
          - generic [ref=e60]:
            - text: Ver productos
            - img [ref=e61]
        - link "Herramienta Eléctrica Taladros, esmeriles, sierras circulares, pulidoras y equipos eléctricos de las mejores marcas. Ver productos" [ref=e63] [cursor=pointer]:
          - /url: /productos/herramienta-electrica
          - img [ref=e65]
          - generic [ref=e67]:
            - heading "Herramienta Eléctrica" [level=3] [ref=e68]
            - paragraph [ref=e69]: Taladros, esmeriles, sierras circulares, pulidoras y equipos eléctricos de las mejores marcas.
          - generic [ref=e70]:
            - text: Ver productos
            - img [ref=e71]
        - link "Tubería y PVC Tubería de agua, drenaje y presión, accesorios PVC, codos, tees, uniones y válvulas. Ver productos" [ref=e73] [cursor=pointer]:
          - /url: /productos/tuberia-pvc
          - img [ref=e75]
          - generic [ref=e77]:
            - heading "Tubería y PVC" [level=3] [ref=e78]
            - paragraph [ref=e79]: Tubería de agua, drenaje y presión, accesorios PVC, codos, tees, uniones y válvulas.
          - generic [ref=e80]:
            - text: Ver productos
            - img [ref=e81]
        - 'link "Seguridad Industrial Equipos de protección personal: cascos, guantes, lentes, mascarillas, chalecos y botas de seguridad. Ver productos" [ref=e83] [cursor=pointer]':
          - /url: /productos/seguridad-industrial
          - img [ref=e85]
          - generic [ref=e87]:
            - heading "Seguridad Industrial" [level=3] [ref=e88]
            - paragraph [ref=e89]: "Equipos de protección personal: cascos, guantes, lentes, mascarillas, chalecos y botas de seguridad."
          - generic [ref=e90]:
            - text: Ver productos
            - img [ref=e91]
        - link "Pinturas y Acabados Pinturas, esmaltes, barnices, selladores, rodillos, brochas y accesorios de pintura. Ver productos" [ref=e93] [cursor=pointer]:
          - /url: /productos/pinturas
          - img [ref=e95]
          - generic [ref=e97]:
            - heading "Pinturas y Acabados" [level=3] [ref=e98]
            - paragraph [ref=e99]: Pinturas, esmaltes, barnices, selladores, rodillos, brochas y accesorios de pintura.
          - generic [ref=e100]:
            - text: Ver productos
            - img [ref=e101]
        - link "Materiales de Construcción Clavos, tornillos, alambre, varilla, cemento, block y todo lo necesario para tu obra. Ver productos" [ref=e103] [cursor=pointer]:
          - /url: /productos/materiales-construccion
          - img [ref=e105]
          - generic [ref=e107]:
            - heading "Materiales de Construcción" [level=3] [ref=e108]
            - paragraph [ref=e109]: Clavos, tornillos, alambre, varilla, cemento, block y todo lo necesario para tu obra.
          - generic [ref=e110]:
            - text: Ver productos
            - img [ref=e111]
    - generic [ref=e114]:
      - generic [ref=e115]:
        - text: Marcas
        - heading "Las mejores marcas del mercado" [level=2] [ref=e116]
      - generic [ref=e117]:
        - generic [ref=e118]:
          - generic [ref=e119]: Truper
          - generic [ref=e120]: México
        - generic [ref=e121]:
          - generic [ref=e122]: Stanley
          - generic [ref=e123]: EE.UU.
        - generic [ref=e124]:
          - generic [ref=e125]: Tramontina
          - generic [ref=e126]: Brasil
      - paragraph [ref=e127]:
        - text: ¿Buscas una marca en específico?
        - link "Consúltanos por WhatsApp" [ref=e128] [cursor=pointer]:
          - /url: https://wa.me/50258330848
    - generic [ref=e130]:
      - generic [ref=e131]:
        - text: ¿Por qué Dismafer?
        - heading "Tu ferretería de confianza en Zona 9" [level=2] [ref=e132]
      - generic [ref=e133]:
        - generic [ref=e134]:
          - img [ref=e136]
          - generic [ref=e138]:
            - heading "+20 años de experiencia" [level=3] [ref=e139]
            - paragraph [ref=e140]: Desde 1995 sirviendo a contratistas, maestros de obra y familias guatemaltecas en Zona 9.
        - generic [ref=e141]:
          - img [ref=e143]
          - generic [ref=e145]:
            - heading "Marcas de confianza" [level=3] [ref=e146]
            - paragraph [ref=e147]: Truper, Stanley, Tramontina y más. Solo trabajamos con marcas que garantizan calidad.
        - generic [ref=e148]:
          - img [ref=e150]
          - generic [ref=e152]:
            - heading "Atención por WhatsApp" [level=3] [ref=e153]
            - paragraph [ref=e154]: Cotiza, consulta disponibilidad y haz tu pedido sin salir de tu obra. Respuesta en minutos.
        - generic [ref=e155]:
          - img [ref=e157]
          - generic [ref=e159]:
            - heading "Si no lo tenemos, lo conseguimos" [level=3] [ref=e160]
            - paragraph [ref=e161]: No te dejamos sin tu material. Si un producto no está en stock, lo buscamos por ti.
    - generic [ref=e164]:
      - generic [ref=e165]:
        - text: Formulario
        - heading "Cuéntanos tu necesidad" [level=2] [ref=e166]
        - paragraph [ref=e167]: Completa el formulario y nos pondremos en contacto en menos de 2 horas.
      - generic [ref=e168]:
        - generic [ref=e169]:
          - generic [ref=e170]: Nombre completo *
          - textbox "Nombre completo requerido" [ref=e171]:
            - /placeholder: Tu nombre
        - generic [ref=e172]:
          - generic [ref=e173]: Correo electrónico *
          - textbox "Correo electrónico requerido" [ref=e174]:
            - /placeholder: tu@email.com
        - generic [ref=e175]:
          - generic [ref=e176]: Teléfono o WhatsApp *
          - textbox "Teléfono o WhatsApp requerido" [ref=e177]:
            - /placeholder: (502) XXXX-XXXX
        - generic [ref=e178]:
          - generic [ref=e179]: Categoría de interés *
          - combobox "Categoría de interés requerido" [ref=e180]:
            - option "Selecciona una categoría" [selected]
            - option "Herramienta Manual"
            - option "Herramienta Eléctrica"
            - option "Tubería y PVC"
            - option "Seguridad Industrial"
            - option "Pinturas y Acabados"
            - option "Materiales de Construcción"
            - option "Otro"
        - generic [ref=e181]:
          - generic [ref=e182]: Tu mensaje o pregunta *
          - textbox "Tu mensaje o pregunta requerido" [ref=e183]:
            - /placeholder: Cuéntanos qué necesitas...
        - generic [ref=e184]:
          - checkbox "He leído y acepto la política de privacidad y que Dismafer se comunique conmigo *" [ref=e185] [cursor=pointer]
          - generic [ref=e186] [cursor=pointer]:
            - text: He leído y acepto la
            - link "política de privacidad" [ref=e187]:
              - /url: /privacidad
            - text: y que Dismafer se comunique conmigo *
        - generic [ref=e188]:
          - button "Enviar mensaje" [ref=e189]
          - button "Limpiar" [ref=e190]
    - generic [ref=e193]:
      - generic [ref=e194]:
        - text: Visítanos
        - heading "Estamos en el corazón de Zona 9" [level=2] [ref=e195]
        - generic [ref=e196]:
          - generic [ref=e197]:
            - img [ref=e199]
            - generic [ref=e201]:
              - paragraph [ref=e202]: Dirección
              - paragraph [ref=e203]:
                - text: 2ª Calle 2-73, Zona 9
                - text: Ciudad de Guatemala, Guatemala
              - link "Ver en Google Maps →" [ref=e204] [cursor=pointer]:
                - /url: https://maps.google.com/?q=Ferreteria+Dismafer+2a+Calle+2-73+Zona+9+Guatemala
          - generic [ref=e205]:
            - img [ref=e207]
            - generic [ref=e209]:
              - paragraph [ref=e210]: Horarios
              - paragraph [ref=e211]: "Lunes – Viernes: 8:00 – 17:00"
              - paragraph [ref=e212]: "Sábado: 8:00 – 14:00"
              - paragraph [ref=e213]: "Domingo: Cerrado"
          - generic [ref=e214]:
            - img [ref=e216]
            - generic [ref=e218]:
              - paragraph [ref=e219]: Teléfono
              - link "(502) 2339-0468" [ref=e220] [cursor=pointer]:
                - /url: tel:+50223390468
        - link "Escríbenos por WhatsApp" [ref=e221] [cursor=pointer]:
          - /url: https://wa.me/50258330848?text=Hola%2C%20me%20interesa%20informaci%C3%B3n%20sobre%20sus%20productos
          - img [ref=e222]
          - text: Escríbenos por WhatsApp
      - iframe [ref=e224]
  - contentinfo [ref=e225]:
    - generic [ref=e227]:
      - generic [ref=e228]:
        - link "Dismafer - Inicio" [ref=e229] [cursor=pointer]:
          - /url: /
          - generic [ref=e230]:
            - text: Dism
            - img [ref=e231]
            - text: fer
        - paragraph [ref=e235]: Más de 20 años siendo la ferretería de confianza en Zona 9, Ciudad de Guatemala. Herramientas, materiales y soluciones para tu proyecto.
        - generic [ref=e236]:
          - link "Facebook de Dismafer" [ref=e237] [cursor=pointer]:
            - /url: https://www.facebook.com/dismaferz9/
            - img [ref=e238]
          - link "WhatsApp de Dismafer" [ref=e240] [cursor=pointer]:
            - /url: https://wa.me/50258330848?text=Hola%2C%20me%20interesa%20informaci%C3%B3n%20sobre%20sus%20productos
            - img [ref=e241]
      - generic [ref=e243]:
        - heading "Productos" [level=3] [ref=e244]
        - list [ref=e245]:
          - listitem [ref=e246]:
            - link "Herramienta Manual" [ref=e247] [cursor=pointer]:
              - /url: /productos/herramienta-manual
          - listitem [ref=e248]:
            - link "Herramienta Eléctrica" [ref=e249] [cursor=pointer]:
              - /url: /productos/herramienta-electrica
          - listitem [ref=e250]:
            - link "Tubería y PVC" [ref=e251] [cursor=pointer]:
              - /url: /productos/tuberia-pvc
          - listitem [ref=e252]:
            - link "Seguridad Industrial" [ref=e253] [cursor=pointer]:
              - /url: /productos/seguridad-industrial
          - listitem [ref=e254]:
            - link "Pinturas y Acabados" [ref=e255] [cursor=pointer]:
              - /url: /productos/pinturas
          - listitem [ref=e256]:
            - link "Materiales de Construcción" [ref=e257] [cursor=pointer]:
              - /url: /productos/materiales-construccion
      - generic [ref=e258]:
        - heading "Información" [level=3] [ref=e259]
        - list [ref=e260]:
          - listitem [ref=e261]:
            - link "Sobre Nosotros" [ref=e262] [cursor=pointer]:
              - /url: /nosotros
          - listitem [ref=e263]:
            - link "Nuestras Marcas" [ref=e264] [cursor=pointer]:
              - /url: /marcas
          - listitem [ref=e265]:
            - link "Contacto" [ref=e266] [cursor=pointer]:
              - /url: /contacto
        - heading "Horarios" [level=3] [ref=e267]
        - list [ref=e268]:
          - listitem [ref=e269]:
            - generic [ref=e270]: Lun — Vie
            - generic [ref=e271]: 08:00 – 17:00
          - listitem [ref=e272]:
            - generic [ref=e273]: Sábado
            - generic [ref=e274]: 08:00 – 14:00
          - listitem [ref=e275]:
            - generic [ref=e276]: Domingo
            - generic [ref=e277]: Cerrado
      - generic [ref=e278]:
        - heading "Contacto" [level=3] [ref=e279]
        - list [ref=e280]:
          - listitem [ref=e281]:
            - img [ref=e282]
            - generic [ref=e285]:
              - text: 2ª Calle 2-73, Zona 9
              - text: Ciudad de Guatemala
          - listitem [ref=e286]:
            - img [ref=e287]
            - link "(502) 2339-0468" [ref=e289] [cursor=pointer]:
              - /url: tel:+50223390468
        - link "Contactar ahora" [ref=e290] [cursor=pointer]:
          - /url: https://wa.me/50258330848?text=Hola%2C%20me%20interesa%20informaci%C3%B3n%20sobre%20sus%20productos
          - img [ref=e291]
          - text: Contactar ahora
    - generic [ref=e294]:
      - paragraph [ref=e295]: © 2026 Ferretería Dismafer. Todos los derechos reservados.
      - paragraph [ref=e296]:
        - text: 2ª Calle 2-73, Zona 9, Ciudad de Guatemala, Guatemala •
        - link "(502) 2339-0468" [ref=e297] [cursor=pointer]:
          - /url: tel:+50223390468
  - link "Chatear por WhatsApp" [ref=e298] [cursor=pointer]:
    - /url: https://wa.me/50258330848?text=Hola%2C%20me%20interesa%20informaci%C3%B3n%20sobre%20sus%20productos
    - img [ref=e299]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Homepage — /', () => {
  4  |   test.beforeEach(async ({ page }) => {
> 5  |     await page.goto('/');
     |                ^ TimeoutError: page.goto: Timeout 30000ms exceeded.
  6  |   });
  7  | 
  8  |   test('debe cargar con status 200', async ({ page }) => {
  9  |     const response = await page.request.get('/');
  10 |     expect(response.status()).toBe(200);
  11 |   });
  12 | 
  13 |   test('debe tener el título correcto', async ({ page }) => {
  14 |     await expect(page).toHaveTitle(/Ferretería Dismafer/);
  15 |   });
  16 | 
  17 |   test('meta description debe contener palabras clave del negocio', async ({ page }) => {
  18 |     const metaDesc = await page.locator('meta[name="description"]').getAttribute('content');
  19 |     expect(metaDesc).toContain('Guatemala');
  20 |     expect(metaDesc).toBeTruthy();
  21 |   });
  22 | 
  23 |   test('Hero — debe mostrar el headline principal', async ({ page }) => {
  24 |     const h1 = page.locator('h1');
  25 |     await expect(h1).toBeVisible();
  26 |     const text = await h1.textContent();
  27 |     expect(text).toMatch(/ferretería/i);
  28 |   });
  29 | 
  30 |   test('Hero — debe tener CTA de WhatsApp visible', async ({ page }) => {
  31 |     const waLink = page.locator('main a[href*="wa.me"]').first();
  32 |     await expect(waLink).toBeVisible();
  33 |   });
  34 | 
  35 |   test('Hero — link de WhatsApp debe apuntar al número correcto', async ({ page }) => {
  36 |     const waLinks = page.locator('a[href*="wa.me/50258330848"]');
  37 |     const count = await waLinks.count();
  38 |     expect(count).toBeGreaterThanOrEqual(1);
  39 |   });
  40 | 
  41 |   test('Categorías — debe mostrar las 6 categorías', async ({ page }) => {
  42 |     const categoryLinks = [
  43 |       '/productos/herramienta-manual',
  44 |       '/productos/herramienta-electrica',
  45 |       '/productos/tuberia-pvc',
  46 |       '/productos/seguridad-industrial',
  47 |       '/productos/pinturas',
  48 |       '/productos/materiales-construccion',
  49 |     ];
  50 |     for (const href of categoryLinks) {
  51 |       const link = page.locator(`a[href="${href}"]`).first();
  52 |       await expect(link).toBeVisible();
  53 |     }
  54 |   });
  55 | 
  56 |   test('Marcas — debe mostrar marcas principales', async ({ page }) => {
  57 |     const pageContent = await page.content();
  58 |     expect(pageContent).toContain('Truper');
  59 |     expect(pageContent).toContain('Stanley');
  60 |   });
  61 | 
  62 |   test('debe tener Schema.org LocalBusiness en el HTML', async ({ page }) => {
  63 |     const schema = await page.locator('script[type="application/ld+json"]').textContent();
  64 |     expect(schema).toContain('HardwareStore');
  65 |     expect(schema).toContain('Ferretería Dismafer');
  66 |     expect(schema).toContain('+502-2339-0468');
  67 |   });
  68 | 
  69 |   test('debe tener el botón flotante de WhatsApp', async ({ page }) => {
  70 |     // El botón flotante es fixed, siempre visible
  71 |     const floatBtn = page.locator('a[href*="wa.me"][class*="fixed"]');
  72 |     await expect(floatBtn).toBeAttached();
  73 |   });
  74 | 
  75 |   test('debe tener Open Graph tags', async ({ page }) => {
  76 |     const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
  77 |     expect(ogTitle).toBeTruthy();
  78 |     expect(ogTitle).toMatch(/Dismafer/i);
  79 | 
  80 |     const ogDesc = await page.locator('meta[property="og:description"]').getAttribute('content');
  81 |     expect(ogDesc).toBeTruthy();
  82 |   });
  83 | });
  84 | 
```