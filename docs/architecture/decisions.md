# Decisiones de Arquitectura — DismaferWeb

## Estado del Proyecto

> **Fase actual:** Investigación y definición  
> Stack tecnológico pendiente de decisión con el cliente.

---

## Contexto

El sitio actual (`dismafer.shop`) corre sobre WordPress + WooCommerce. Este proyecto busca rediseñar y posiblemente migrar o extender esa plataforma para mejorar experiencia de usuario, rendimiento y mantenibilidad.

---

## Requerimientos identificados

### Funcionales
- [ ] Catálogo de productos con categorías y búsqueda
- [ ] Página de cotización / contacto
- [ ] Integración con WhatsApp (+502 5833-0848)
- [ ] Información de contacto y ubicación (mapa)
- [ ] Horarios de atención
- [ ] Showcase de marcas (Truper, Stanley, etc.)

### No funcionales
- [ ] Carga rápida en móvil (mayoría de clientes en Guatemala acceden desde móvil)
- [ ] SEO optimizado para búsquedas locales ("ferretería zona 9 Guatemala")
- [ ] Fácil actualización de productos por el equipo de Dismafer
- [ ] Diseño responsive

---

## Opciones de Stack (por definir)

| Opción | Pros | Contras |
|---|---|---|
| Mantener WordPress + WooCommerce | Sin migración de datos, cliente familiarizado | Deuda técnica, rendimiento limitado |
| Next.js + headless CMS (Sanity/Contentful) | Rendimiento, SEO, moderna | Mayor complejidad, curva de aprendizaje cliente |
| Astro + CMS headless | Excelente rendimiento estático, SEO | Menos ecosistema e-commerce nativo |
| Remix + Shopify | E-commerce robusto, escalable | Costo mensual Shopify |

---

## Decisiones tomadas

_Ninguna tomada aún — pendiente de reunión con cliente._

---

## Integraciones requeridas

| Integración | Prioridad | Notas |
|---|---|---|
| WhatsApp Business API | Alta | Canal principal de ventas |
| Google Maps | Alta | Mostrar ubicación Zona 9 |
| Google Analytics / GA4 | Media | Métricas de visitas |
| Facebook Pixel | Media | Remarketing |
| Pasarela de pago | Baja | Si se implementa e-commerce |

---

## Estructura de URLs propuesta

```
/                          → Inicio
/productos                 → Catálogo general
/productos/{categoria}     → Herramienta eléctrica, manual, PVC, etc.
/productos/{categoria}/{slug} → Detalle de producto
/marcas                    → Showcase de marcas
/contacto                  → Formulario + mapa + WhatsApp
/nosotros                  → Historia, valores, equipo
```

---

## Paleta técnica de referencia

Ver [Guía de Marca](../brand/guidelines.md) para variables CSS, colores y tipografías.

```css
/* Variables base confirmadas del manual de marca */
--color-primary:  #022E51;   /* Azul marino */
--color-accent:   #F66C26;   /* Naranja */
--color-neutral:  #8C8D91;   /* Gris */
--color-white:    #FFFFFF;

--font-heading:   'Boldu', sans-serif;
--font-body:      'Montserrat', sans-serif;
```
