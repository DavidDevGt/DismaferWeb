# Guía de Setup — Astro 5 + pnpm

## ¿Por qué Astro 5?

Astro es un **web framework para sitios orientados a contenido**. Envía **cero JavaScript al cliente por defecto** — solo se activa JS donde el usuario lo necesita (Islands Architecture). Para un sitio de ferretería con catálogo estático, esto resulta en:

- **100/100 en Core Web Vitals** alcanzable desde el día 1
- Páginas que cargan 40% más rápido que React/Next.js equivalente
- SEO nativo sin configuración extra
- Costo de hosting mínimo (puede ser totalmente estático)

### Astro 5 vs alternativas

| | Astro 5 | Next.js 15 | WordPress |
|---|---|---|---|
| JS al cliente | 0 KB default | 40–85 KB runtime | Alto |
| Core Web Vitals | ≥ 95 nativo | Bueno con config | Variable |
| Build | Muy rápido | Medio | N/A |
| Hosting | Static/Edge barato | Node.js o Vercel | PHP server |
| Curva aprendizaje | Media | Media-alta | Baja |
| Ideal para | Contenido + catálogo | Apps interactivas | Blogs/CMS |

---

## Conceptos Clave de Astro 5

### Islands Architecture

La página se renderiza como HTML estático. Solo los componentes marcados con `client:*` cargan JavaScript:

```astro
<!-- HTML puro — 0 JS -->
<Header />
<ProductGrid />

<!-- JS solo para este componente -->
<SearchBar client:load />        <!-- Carga inmediata -->
<BrandsCarousel client:visible /> <!-- Carga al entrar en viewport -->
<ContactForm client:idle />       <!-- Carga cuando el browser está libre -->
```

### Server Islands (Astro 5+)

Permiten combinar HTML estático con contenido dinámico del servidor sin bloquear el render:

```astro
<!-- El resto de la página carga instantáneo -->
<!-- Este componente se hidrata desde el servidor en paralelo -->
<FeaturedProducts server:defer>
  <ProductSkeleton slot="fallback" />
</FeaturedProducts>
```

### Content Layer

Sistema para gestionar catálogo de productos con validación de schema:

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    category: z.enum(['herramienta-manual', 'herramienta-electrica', 'pvc', 'seguridad', 'pintura']),
    brand: z.string(),
    description: z.string(),
    image: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { products };
```

---

## Instalación Paso a Paso

### Prerequisitos

```bash
# Node.js 18+ requerido
node --version

# Instalar pnpm si no está instalado
npm install -g pnpm

# Verificar pnpm
pnpm --version
```

### Crear el proyecto

```bash
# Crear nuevo proyecto Astro
pnpm create astro@latest dismafer-web

# El wizard preguntará:
# ✓ How would you like to start your project? → Empty
# ✓ Install dependencies? → Yes
# ✓ Initialize a git repository? → Yes (o No si ya tienes repo)
# ✓ TypeScript? → Yes (Strict)

cd dismafer-web
```

### Agregar integraciones

```bash
# Tailwind CSS v4
pnpm astro add tailwind

# Sitemap automático (SEO local)
pnpm astro add sitemap

# Optimización de imágenes
pnpm astro add image

# Iniciar servidor de desarrollo
pnpm dev
# → http://localhost:4321
```

### Configuración base

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dismafer.shop',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  image: {
    domains: ['dismafer.shop'],
  },
});
```

---

## Scripts pnpm

```json
// package.json
{
  "scripts": {
    "dev":     "astro dev",
    "build":   "astro build",
    "preview": "astro preview",
    "check":   "astro check",
    "lint":    "eslint src --ext .astro,.ts,.tsx"
  }
}
```

---

## Componente Astro — Anatomía

```astro
---
// Frontmatter: TypeScript del lado servidor
// Este código NUNCA llega al navegador
import { getCollection } from 'astro:content';
import ProductCard from '../components/product/ProductCard.astro';

const products = await getCollection('products', ({ data }) => data.featured);
---

<!-- Template: HTML con componentes -->
<section class="py-16 bg-white">
  <h2 class="text-3xl font-heading text-primary">Productos Destacados</h2>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
    {products.map(product => (
      <ProductCard product={product.data} />
    ))}
  </div>
</section>

<style>
  /* CSS scoped al componente — no contamina otros elementos */
  section { max-width: var(--container-max); margin: 0 auto; }
</style>
```

---

## Tailwind v4 + Tokens de Marca

```css
/* src/styles/global.css */
@import "tailwindcss";

/* Design tokens de Dismafer — Manual de marca */
@theme {
  --color-primary:   #022E51;
  --color-accent:    #F66C26;
  --color-neutral:   #8C8D91;

  --font-heading:    'Boldu', sans-serif;
  --font-body:       'Montserrat', sans-serif;
}
```

Uso en componentes:
```astro
<!-- Los tokens están disponibles como clases Tailwind -->
<h1 class="font-heading text-primary">Ferretería Dismafer</h1>
<button class="bg-accent text-white hover:bg-accent/90">
  Ver catálogo
</button>
```

---

## Recursos Oficiales

- [Documentación oficial Astro](https://docs.astro.build/)
- [Astro 5 — Release notes](https://astro.build/blog/astro-5/)
- [Islands Architecture](https://docs.astro.build/en/concepts/islands/)
- [Server Islands](https://docs.astro.build/en/guides/server-islands/)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Tailwind CSS v4 + Astro](https://tailwindcss.com/docs/guides/astro)
- [Estructura de proyecto Astro](https://docs.astro.build/en/basics/project-structure/)
