# Contribuir a DismaferWeb

## Setup local

```bash
# Prerrequisitos: Node 22, pnpm 10
node --version   # v22.x.x
pnpm --version   # 10.x.x

# Clonar e instalar
git clone https://github.com/DavidDevGt/DismaferWeb.git
cd DismaferWeb
pnpm install

# Arrancar servidor de desarrollo
pnpm dev        # http://localhost:4321
```

## Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `pnpm dev` | Servidor de desarrollo con HMR |
| `pnpm build` | Build de producción |
| `pnpm preview` | Preview del build de producción |
| `pnpm check` | Type-check con Astro |
| `pnpm lint` | ESLint en todo el proyecto |
| `pnpm lint:fix` | ESLint con autofix |
| `pnpm format` | Prettier en todo el proyecto |
| `pnpm test` | Tests unitarios (Vitest) |
| `pnpm test:watch` | Tests en modo watch |
| `pnpm test:coverage` | Tests con reporte de cobertura |
| `pnpm test:e2e` | Tests E2E (requiere `playwright install chromium`) |
| `pnpm ci` | Pipeline completo local |

## Convenciones de commits

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>(<scope>): <descripción corta>

[cuerpo opcional]
```

**Tipos:**

| Tipo | Cuándo usarlo |
|------|---------------|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de bug |
| `docs` | Solo documentación |
| `style` | Formato, sin cambio de lógica |
| `refactor` | Refactor sin feat ni fix |
| `test` | Agregar o corregir tests |
| `chore` | Build, deps, CI, config |
| `perf` | Mejora de performance |

**Ejemplos:**
```
feat(productos): agregar filtro por marca en el catálogo
fix(header): corregir z-index del menú mobile
chore(deps): actualizar astro a 6.4.0
test(unit): agregar casos edge para getCategoryBySlug
```

## Flujo de trabajo

1. Crear rama desde `main`:
   ```bash
   git checkout -b feature/nombre-descriptivo
   # o
   git checkout -b fix/descripcion-del-bug
   ```

2. Hacer los cambios y verificar que todo pasa:
   ```bash
   pnpm lint && pnpm check && pnpm test && pnpm build
   ```

3. Commitear con el formato correcto

4. Abrir PR contra `main` usando el template provisto

## Estructura del proyecto

```
src/
├── components/
│   ├── home/        # Secciones de la homepage
│   ├── layout/      # Header, Footer, WhatsApp float
│   └── ui/          # Button, Badge, Section, Container
├── data/            # Datos del negocio (categorías, marcas, productos)
├── layouts/         # BaseLayout, PageLayout
├── pages/           # Rutas del sitio
├── styles/          # CSS global y tokens de diseño
├── tests/unit/      # Tests unitarios (Vitest)
└── types/           # Interfaces TypeScript
tests/e2e/           # Tests E2E (Playwright)
```

## Datos del negocio

Toda la información de contacto, categorías, marcas y productos está centralizada en `src/data/`.
**No hardcodear** datos de contacto en componentes — siempre importar desde `src/data/site.ts`.

## Preguntas

Abrir un [Issue](https://github.com/DavidDevGt/DismaferWeb/issues) con la etiqueta `question`.
