# Guía de Marca — Dismafer

> Fuente oficial: [Manual de marca en Behance](https://www.behance.net/gallery/170135355/Manual-de-marca-Ferreteria-Dismafer)  
> Diseñador: **David Vargas** (jvargas@dismafer.shop)

---

## Filosofía de Marca

> *"En DISMAFER fusionamos los valores y experiencia de nuestro pasado con el empuje y la fuerza de las nuevas generaciones, para hacer más eficientes las plataformas en las que estamos en contacto contigo."*

---

## Logotipo

El logotipo es un **wordmark** donde la letra **A** es sustituida por un isotipo de casa, comunicando el concepto de hogar + ferretería.

```
Dism🏠fer
```

### Composición cromática del logotipo

| Segmento | Color | HEX |
|---|---|---|
| "Dism" | Blanco | `#FFFFFF` |
| "A" (isotipo casa) | Naranja | `#F66C26` |
| "fer" | Naranja | `#F66C26` |

### Versiones del logotipo

| Fondo | Logo |
|---|---|
| Blanco `#FFFFFF` | Logo en negro/oscuro |
| Azul marino `#022E51` | Logo blanco + casa naranja |
| Azul marino `#022E51` (variante) | Logo blanco + "fer" y casa en naranja |
| Negro `#000000` | Logo en blanco |

---

## Paleta de Colores

| Nombre | HEX | RGB | Rol |
|---|---|---|---|
| **Azul Marino** | `#022E51` | `2, 46, 81` | Primario — fondos principales, headers, secciones |
| **Naranja** | `#F66C26` | `246, 108, 38` | Acento — CTAs, isotipo, highlights, íconos |
| **Gris** | `#8C8D91` | `140, 141, 145` | Neutro — textos secundarios, bordes, fondos suaves |
| **Blanco** | `#FFFFFF` | `255, 255, 255` | Base — fondos claros, texto sobre oscuros |

### Uso de colores

- **Fondos de sección:** Alternar `#022E51` (oscuro) con `#FFFFFF` (claro)
- **Botones primarios (CTA):** Fondo `#F66C26`, texto `#FFFFFF`
- **Botones secundarios:** Borde `#022E51`, texto `#022E51`, fondo transparente
- **Texto principal sobre fondo claro:** `#022E51`
- **Texto secundario:** `#8C8D91`
- **Texto sobre fondo oscuro:** `#FFFFFF`

---

## Tipografía

### Títulos — Boldu Regular

Usada para headings, nombres de sección y elementos de impacto visual.

```
Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm
Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
0 1 2 3 4 5 6 7 8 9
&@$%{}! * ° " ; .
```

### Contenidos — Montserrat Classic

Usada para párrafos, descripciones de productos, labels y cualquier texto de cuerpo.

```
Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm
Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
0 1 2 3 4 5 6 7 8 9
&@$%{}! * ° " ; .
```

### Jerarquía tipográfica sugerida

| Nivel | Fuente | Peso | Uso |
|---|---|---|---|
| H1 | Boldu Regular | Regular | Título principal de página |
| H2 | Boldu Regular | Regular | Títulos de sección |
| H3 | Montserrat Classic | SemiBold | Subtítulos |
| Body | Montserrat Classic | Regular | Párrafos, descripciones |
| Caption | Montserrat Classic | Light | Etiquetas, metadata |
| CTA | Montserrat Classic | Bold | Botones, llamadas a acción |

---

## Variables CSS

```css
:root {
  /* Colores */
  --color-primary:    #022E51;
  --color-accent:     #F66C26;
  --color-neutral:    #8C8D91;
  --color-white:      #FFFFFF;

  /* Tipografías */
  --font-heading:     'Boldu', sans-serif;
  --font-body:        'Montserrat', sans-serif;
}
```
