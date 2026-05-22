# Investigación de UX y Diseño — DismaferWeb

## Referentes Mundiales: Mejores Sitios de Ferretería

### 1. Screwfix (Reino Unido) — screwfix.com
El referente global en UX para ferreterías online. Destaca por:
- **Búsqueda dominante:** barra de búsqueda como elemento más prominente del header
- **Click & Collect en 1 minuto** — propuesta de valor en hero
- **Catálogo de +300,000 productos** con filtros muy granulares
- **Paleta:** Amarillo `#FFCC00` + Azul oscuro `#003594` + Blanco
- **Sin fricción:** desde búsqueda hasta compra en menos de 3 clics
- **Mobile-first:** mayoría de tráfico desde móvil (contratistas en obra)

### 2. Toolstation (Reino Unido) — toolstation.com
- **+25,000 productos** con inventario en tiempo real por tienda
- Diseño muy similar a Screwfix — benchmark del sector
- Categorías visibles en homepage sin abrir menú
- **Paleta:** Azul `#003087` + Rojo `#E30016` + Blanco
- Mega menú para catálogo profundo

### 3. Ace Hardware (EE.UU.) — acehardware.com
- **"The Helpful Place"** — posicionamiento de cercanía y servicio
- Navegación ultra eficiente: cualquier producto en ≤ 3 clics
- **Paleta:** Rojo `#CC0000` + Gris oscuro + Blanco
- Homepage organizada: Hero → Categorías → Ofertas → Trust signals
- Reseñas de productos en homepage (trust signal #1 según Trustpilot)
- Localizador de tienda prominente (clave para negocio con físico)

### 4. Home Depot (EE.UU.) — homedepot.com
- Búsqueda con autocompletar en posición #1 del header
- **Paleta:** Naranja `#F96302` + Blanco + Gris oscuro
- Breadcrumbs en todas las páginas de categoría
- Reviews con calificación visible en todas las tarjetas de producto
- Banners de ofertas con countdown timer

### 5. Menards (EE.UU.) — menards.com
- Categorías organizadas en homepage (≥ 40% del catálogo visible)
- Mega menú con imágenes por subcategoría
- **Paleta:** Verde `#007A33` + Amarillo + Blanco

---

## Patrones de Diseño Clave (Hardware Stores)

### Homepage — Estructura Óptima

```
┌─────────────────────────────────────┐
│  HEADER                             │
│  Logo | Búsqueda (prominente) | CTA │
│  Nav: categorías principales         │
├─────────────────────────────────────┤
│  HERO                               │
│  Propuesta de valor principal       │
│  CTA primario (WhatsApp / Catálogo) │
│  CTA secundario (Ver productos)     │
├─────────────────────────────────────┤
│  CATEGORÍAS (≥ 40% del catálogo)    │
│  Grid visual con iconos/imágenes    │
├─────────────────────────────────────┤
│  MARCAS                             │
│  Logos de Truper, Stanley, etc.     │
│  (trust signal de producto)         │
├─────────────────────────────────────┤
│  POR QUÉ DISMAFER                   │
│  +20 años | Zona 9 | WhatsApp       │
│  "Si no lo tenemos, te lo          │
│   conseguimos"                      │
├─────────────────────────────────────┤
│  CONTACTO / CTA FINAL               │
│  Dirección + Mapa + WhatsApp        │
│  Horarios de atención               │
├─────────────────────────────────────┤
│  FOOTER                             │
│  Links | Redes | Legal              │
└─────────────────────────────────────┘
```

### Patrones UX Críticos

| Patrón | Justificación | Implementación |
|---|---|---|
| Búsqueda prominente | Convierte 2.5x más que navegación | Header, primer elemento visible |
| WhatsApp flotante | Canal de ventas #1 en Guatemala | Botón fijo bottom-right |
| Categorías con imagen | 40% del catálogo visible en home | Grid 2x3 en mobile, 3x2 en desktop |
| Logos de marcas | Genera confianza inmediata | Carrusel o grid horizontal |
| Mapa + dirección | Negocio físico = visitas presenciales | Sección contacto prominente |
| Horarios visibles | Reduce llamadas de "¿están abiertos?" | Header o footer |
| CTA único por sección | Evita parálisis de decisión | 1 botón primario por bloque |

### Trust Signals Prioritizados

1. **Años de experiencia** — "+20 años en el sector" (copy de impacto)
2. **Logos de marcas reconocidas** — Truper, Stanley, Tramontina
3. **Dirección física verificable** — Zona 9 con Google Maps
4. **Teléfono y WhatsApp visibles** — no esconder el contacto
5. **Horarios claros** — Lun–Vie 7–17:30, Sáb 7–14
6. **Slogan de garantía** — "Si no lo tenemos, te lo conseguimos"

---

## Paleta de Color: Validación de Mercado

La paleta de Dismafer (`#022E51` azul marino + `#F66C26` naranja) es **consistente con los líderes mundiales del sector**:

| Marca | Color primario | Color acento | Alineación con Dismafer |
|---|---|---|---|
| Home Depot | Blanco/Gris | Naranja `#F96302` | ✅ Naranja similar |
| Screwfix | Azul `#003594` | Amarillo | ✅ Azul oscuro similar |
| Toolstation | Azul `#003087` | Rojo | ✅ Azul oscuro similar |
| Dismafer | Azul marino `#022E51` | Naranja `#F66C26` | — |

**Conclusión:** Azul marino + Naranja es la combinación más reconocida en el sector de herramientas y construcción a nivel global. La paleta de Dismafer está correctamente posicionada.

---

## Psicología del Color en el Sector

| Color | Percepción | Uso en Dismafer |
|---|---|---|
| **Azul marino `#022E51`** | Confianza, solidez, profesionalismo | Fondos, headers, navegación |
| **Naranja `#F66C26`** | Energía, acción, creatividad, herramientas | CTAs, isotipo, highlights, precios |
| **Gris `#8C8D91`** | Neutralidad, tecnicismo | Texto secundario, bordes |
| **Blanco `#FFFFFF`** | Limpieza, espacio, legibilidad | Fondos de sección, texto sobre oscuro |

---

## Mobile First — Contexto Guatemala

El cliente de ferretería en Guatemala (contratistas, maestros de obra, particulares) accede principalmente desde **móvil Android** con conexión variable.

### Implicaciones de diseño:
- Botón WhatsApp siempre visible — es el canal de venta dominante
- Imágenes optimizadas con `@astrojs/image` (WebP automático)
- Fuentes del sistema como fallback mientras cargan Boldu y Montserrat
- Tap targets mínimo 48×48px (dedos en obra con guantes)
- Formularios cortos: nombre, teléfono y mensaje — sin fricción
- Número de teléfono como `<a href="tel:+50223390468">` (clic para llamar)

---

## Componentes UI Prioritarios

### Fase 1 — MVP
- [ ] Header con logo + nav + botón WhatsApp
- [ ] Hero con CTA principal
- [ ] Grid de categorías (6 categorías)
- [ ] Grid de marcas (logos)
- [ ] Sección "Por qué Dismafer" (trust signals)
- [ ] Mapa + contacto
- [ ] Footer
- [ ] Botón WhatsApp flotante

### Fase 2 — Catálogo
- [ ] Página de categoría con productos
- [ ] Tarjeta de producto
- [ ] Filtros de producto
- [ ] Formulario de cotización
- [ ] Página de búsqueda

### Fase 3 — Optimización
- [ ] Schema.org LocalBusiness
- [ ] Sitemap automático
- [ ] Open Graph para compartir en redes
- [ ] Lazy loading de imágenes
- [ ] Analytics (GA4 + FB Pixel via Partytown)

---

## Referencias y Fuentes

- [Ace Hardware UX — Baymard Institute](https://baymard.com/ux-benchmark/case-studies/ace-hardware)
- [Home Depot UX — Baymard Institute](https://baymard.com/ux-benchmark/case-studies/home-depot)
- [Screwfix](https://www.screwfix.com/)
- [Toolstation](https://www.toolstation.com/)
- [Hardware Store Color Palettes](https://colorany.com/color-palettes/hardware-store-color-palettes/)
- [Navy Blue & Orange Scheme](https://www.schemecolor.com/navy-blue-and-orange.php)
- [Ecommerce Homepage UX Best Practices](https://onilab.com/blog/ecommerce-homepage-ux)
- [Key Features Every Hardware Store Website Should Have](https://continuumdigital.ca/essential-features-for-a-hardware-store-website/)
