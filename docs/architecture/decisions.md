# Decisiones de Arquitectura — DismaferWeb

## Estado del Proyecto

> **Fase actual:** Investigación y definición de stack  
> **Stack seleccionado:** Astro 5 + Tailwind CSS v4 + pnpm

---

## Stack Tecnológico

### Por qué Astro 5

| Criterio | Astro 5 | WordPress (actual) | Next.js |
|---|---|---|---|
| JavaScript enviado al cliente | ~0 KB por defecto | Alto | 40–85 KB runtime React |
| Core Web Vitals | 100/100 alcanzable | Variable | Bueno con configuración |
| Curva de aprendizaje | Baja-media | Baja | Media-alta |
| Mantenimiento de contenido | CMS headless | Plugin WP | CMS headless |
| Velocidad de build | Muy rápido | N/A | Medio |
| Costo de hosting | Bajo (estático) | Hosting PHP | Variable |

**Decisión:** Astro 5 gana en rendimiento, costo y simplicidad para un sitio de ferretería que es principalmente contenido estático con algunos componentes interactivos.

### Stack completo

```
Astro 5
├── Tailwind CSS v4          → Estilos utilitarios, compatible con design tokens de la marca
├── TypeScript               → Tipado fuerte en todo el proyecto
├── pnpm                     → Package manager rápido y eficiente en disco
└── Integraciones opcionales
    ├── @astrojs/sitemap     → SEO local (crítico para búsquedas "ferretería zona 9")
    ├── @astrojs/image       → Optimización de imágenes de productos
    └── Partytown            → Scripts de terceros (GA4, FB Pixel) fuera del hilo principal
```

---

## Setup Inicial con pnpm

```bash
# Crear proyecto Astro con pnpm
pnpm create astro@latest dismafer-web

# Entrar al directorio
cd dismafer-web

# Agregar Tailwind CSS v4
pnpm astro add tailwind

# Agregar sitemap
pnpm astro add sitemap

# Agregar optimización de imágenes
pnpm astro add image

# Instalar dependencias
pnpm install

# Servidor de desarrollo
pnpm dev

# Build de producción
pnpm build

# Preview del build
pnpm preview
```

---

## Estructura de Carpetas

```
dismafer-web/
├── public/
│   ├── favicon.svg
│   ├── logo.svg                  # Logo Dismafer
│   └── fonts/                    # Boldu Regular + Montserrat
├── src/
│   ├── assets/
│   │   ├── images/               # Imágenes procesadas por Astro
│   │   └── icons/                # SVGs de íconos
│   ├── components/
│   │   ├── ui/                   # Componentes base reutilizables
│   │   │   ├── Button.astro
│   │   │   ├── Badge.astro
│   │   │   └── Card.astro
│   │   ├── layout/               # Header, Footer, Nav
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── MobileMenu.astro
│   │   ├── home/                 # Secciones exclusivas del homepage
│   │   │   ├── Hero.astro
│   │   │   ├── Categories.astro
│   │   │   ├── Brands.astro
│   │   │   ├── WhyUs.astro
│   │   │   └── ContactCTA.astro
│   │   └── product/              # Componentes de catálogo
│   │       ├── ProductCard.astro
│   │       ├── ProductGrid.astro
│   │       └── CategoryBanner.astro
│   ├── content/
│   │   └── products/             # Catálogo de productos (Markdown/MDX o JSON)
│   ├── layouts/
│   │   ├── BaseLayout.astro      # HTML base, meta tags, fuentes
│   │   └── PageLayout.astro      # Layout con header/footer
│   ├── pages/
│   │   ├── index.astro           # Homepage
│   │   ├── productos/
│   │   │   ├── index.astro       # Catálogo general
│   │   │   └── [categoria].astro # Herramienta eléctrica, manual, PVC…
│   │   ├── marcas.astro          # Showcase Truper, Stanley, etc.
│   │   ├── contacto.astro        # Formulario + mapa + WhatsApp
│   │   └── nosotros.astro        # Historia y valores Dismafer
│   └── styles/
│       └── global.css            # Variables CSS de marca + Tailwind base
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## Islands Architecture — Cuándo usar JavaScript

Astro envía 0 KB de JS por defecto. Solo se activa JavaScript donde el usuario lo necesita.

| Componente | Directiva | Razón |
|---|---|---|
| Menú móvil (hamburger) | `client:load` | Se necesita al instante en móvil |
| Botón WhatsApp flotante | `client:load` | Visible siempre, acción inmediata |
| Carrusel de marcas | `client:visible` | Solo cargar al entrar en viewport |
| Formulario de contacto | `client:idle` | Se activa cuando el browser está libre |
| Búsqueda de productos | `client:load` | Interacción crítica del usuario |

```astro
<!-- Ejemplo: menú móvil necesita JS inmediato -->
<MobileMenu client:load />

<!-- Carrusel de marcas: solo cuando el usuario llega ahí -->
<BrandsCarousel client:visible />

<!-- Formulario: carga diferida, no crítico al inicio -->
<ContactForm client:idle />
```

---

## Variables CSS de Marca

```css
/* src/styles/global.css */
@import "tailwindcss";

:root {
  /* Colores — Manual de marca Dismafer */
  --color-primary:     #022E51;   /* Azul marino */
  --color-accent:      #F66C26;   /* Naranja */
  --color-neutral:     #8C8D91;   /* Gris */
  --color-white:       #FFFFFF;

  /* Tipografías */
  --font-heading:      'Boldu', sans-serif;
  --font-body:         'Montserrat', sans-serif;

  /* Espaciado base */
  --section-padding:   5rem 1.5rem;
  --container-max:     1280px;
}
```

---

## Estructura de URLs

```
/                              → Homepage
/productos                     → Catálogo general
/productos/herramienta-manual  → Categoría
/productos/herramienta-electrica
/productos/tuberia-pvc
/productos/seguridad-industrial
/productos/pinturas
/marcas                        → Showcase de marcas (Truper, Stanley…)
/nosotros                      → Historia, valores, equipo
/contacto                      → Formulario + mapa + WhatsApp
```

---

## SEO Local — Prioridad Alta

Dismafer compite en búsquedas locales de Guatemala:

```astro
<!-- BaseLayout.astro — meta tags esenciales -->
<meta name="description" content="Ferretería en Zona 9, Ciudad de Guatemala. Herramientas Truper, Stanley, PVC y más. +502 2339-0468" />
<meta property="og:type" content="business.business" />

<!-- Schema.org LocalBusiness -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HardwareStore",
  "name": "Ferretería Dismafer",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2ª Calle 2-77",
    "addressLocality": "Zona 9, Ciudad de Guatemala",
    "addressCountry": "GT"
  },
  "telephone": "+502-2339-0468",
  "openingHours": ["Mo-Fr 07:00-17:30", "Sa 07:00-14:00"],
  "url": "https://dismafer.shop"
}
</script>
```

---

## Integraciones Pendientes de Decisión

| Integración | Prioridad | Opción A | Opción B |
|---|---|---|---|
| WhatsApp | Alta | `wa.me` link directo | WhatsApp Business API |
| Google Maps | Alta | Google Maps Embed | Leaflet.js (sin API key) |
| Analytics | Media | Google Analytics 4 | Plausible (privacy-first) |
| Facebook Pixel | Media | Script directo + Partytown | — |
| CMS para productos | Alta | Archivos Markdown/JSON | Sanity.io headless |
| Formulario contacto | Media | Formspree (gratuito) | Netlify Forms |

---

## Performance Targets

| Métrica | Target | Herramienta de medición |
|---|---|---|
| Lighthouse Performance | ≥ 95 | PageSpeed Insights |
| LCP (Largest Contentful Paint) | < 2.5s | Web Vitals |
| CLS (Cumulative Layout Shift) | < 0.1 | Web Vitals |
| FID / INP | < 100ms | Web Vitals |
| JS Bundle size | < 50 KB | Astro build output |
