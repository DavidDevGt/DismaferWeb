# Iconografía — DismaferWeb

## Sistema de Iconos

DismaferWeb utiliza **Lucide Icons** a través de **astro-icon** para mantener una librería de iconos consistente, escalable y mantenible.

### Setup

```bash
pnpm add astro-icon @iconify-json/lucide
```

**Configuración en `astro.config.mjs`:**
```javascript
import icon from 'astro-icon';

export default defineConfig({
  integrations: [
    // ... otros integraciones
    icon(),
  ],
});
```

---

## Iconos en uso

### 1. Categorías de Productos (6 iconos)

Ubicación: `src/components/home/Categories.astro` y `src/pages/productos/index.astro`

| Categoría | Icono Lucide |
|---|---|
| Herramienta Manual | `lucide:wrench` |
| Herramienta Eléctrica | `lucide:drill` |
| Tubería y PVC | `lucide:cylinder` |
| Seguridad Industrial | `lucide:hard-hat` |
| Pinturas y Acabados | `lucide:paint-bucket` |
| Materiales de Construcción | `lucide:layers` |

**Uso:**
```astro
---
import { Icon } from 'astro-icon/components';

const categoryIcons = {
  'herramienta-manual': 'lucide:wrench',
  // ...
};
---

<Icon
  name={categoryIcons[category]}
  class="w-7 h-7 text-primary"
/>
```

### 2. Sección "¿Por qué Dismafer?" (WhyUs)

Ubicación: `src/components/home/WhyUs.astro`

| Concepto | Icono Lucide |
|---|---|
| Experiencia | `lucide:clock` |
| Calidad | `lucide:badge-check` |
| Atención | `lucide:message-circle` |
| Búsqueda | `lucide:search` |

### 3. Contacto (Ubicación, Horarios, Teléfono)

Ubicación: `src/pages/contacto.astro` y `src/components/home/ContactCTA.astro`

| Elemento | Icono Lucide |
|---|---|
| Dirección / Ubicación | `lucide:map-pin` |
| Horarios | `lucide:clock` |
| Teléfono | `lucide:phone` |
| Mapa placeholder | `lucide:map` |

---

## Iconos NO en Lucide (SVGs inline)

Se mantienen como SVGs inline los iconos de marca y navegación que no tienen equivalente en Lucide:

- **WhatsApp logo** — SVG personalizado (marca)
- **Flechas de navegación** — SVGs simples (chevron-right, arrow)
- **Checkmarks decorativos** — SVGs inline simples
- **Patrón de fondo (Hero)** — SVG pattern

---

## Cómo agregar nuevos iconos

### 1. Buscar icono disponible en Lucide

Acceso: https://lucide.dev

Ejemplos comunes:
```
lucide:user
lucide:settings
lucide:trash-2
lucide:edit
lucide:download
lucide:upload
lucide:share-2
lucide:star
lucide:heart
```

### 2. Importar Icon y usarlo

```astro
---
import { Icon } from 'astro-icon/components';
---

<Icon name="lucide:star" class="w-6 h-6" />
```

### 3. Si no existe en Lucide

Opciones:
- Usar SVG inline
- Buscar en otros paquetes Iconify (@iconify-json/[other-set])
- Crear SVG custom

---

## Tamaños recomendados

| Contexto | Clase Tailwind |
|---|---|
| Botones pequeños | `w-4 h-4` |
| Iconos en cards | `w-5 h-5` o `w-6 h-6` |
| Iconos grandes (sección) | `w-7 h-7` |
| Iconos hero / decorativos | `w-10 h-10` - `w-12 h-12` |

---

## Colores

Los iconos heredan color del texto. Ejemplos:

```astro
<!-- Primario -->
<Icon name="lucide:wrench" class="text-primary" />

<!-- Acento (naranja) -->
<Icon name="lucide:phone" class="text-accent" />

<!-- Blanco -->
<Icon name="lucide:clock" class="text-white" />

<!-- Con opacidad -->
<Icon name="lucide:map" class="text-primary/40" />
```

---

## Performance

- **Astro Icon** genera SVGs estáticos en build-time → sin costo en runtime
- Los iconos se inlinan como `<svg>` en el HTML (sin HTTP requests)
- Tamaño: ~2-3KB por icono en el bundle final (comprimido)

---

## Referencias

- **Lucide Icons:** https://lucide.dev
- **astro-icon docs:** https://www.astroicon.dev
- **Iconify JSON packages:** https://github.com/iconify/icon-sets

