# CI/CD — DismaferWeb

## Pipeline Overview

```
Push / PR
    │
    ├── 🔍 typecheck       → astro check (TypeScript)
    ├── 🧪 unit-tests      → Vitest + coverage (umbral 80%)
    ├── 🏗️ build           → astro build → sube dist/ como artifact
    └── 🎭 e2e (matrix)    → Playwright (Desktop + Pixel5 + iPhone12)
            │
            └── ✅ quality-gate → resumen final, falla si algún job falló
```

## Workflows

| Archivo | Trigger | Propósito |
|---------|---------|-----------|
| `ci.yml` | push / PR a main | Pipeline principal de calidad |
| `preview.yml` | PR abierto/actualizado | Comenta en el PR con métricas |

## Artefactos generados (GitHub Actions)

Todos los artefactos se retienen en GitHub Actions y pueden descargarse desde la pestaña **Actions → workflow run → Artifacts**.

| Artefacto | Contenido | Retención |
|-----------|-----------|-----------|
| `coverage-report-{run}` | HTML report de cobertura con línea a línea | 30 días |
| `junit-unit-{run}` | XML JUnit de tests unitarios | 30 días |
| `dist-{run}` | Build estático completo (12 páginas) | 7 días |
| `playwright-report-{project}-{run}` | Reporte HTML interactivo de Playwright | 30 días |
| `playwright-artifacts-{project}-{run}` | Screenshots + Videos + Traces por test | 14 días |
| `junit-e2e-{project}-{run}` | XML JUnit de tests E2E | 30 días |

## Quality Gates

El job `quality-gate` falla si **cualquiera** de los 4 jobs anteriores falla:

- **typecheck** → 0 errores TypeScript
- **unit-tests** → 69 tests pasando, cobertura ≥ 80% lines/functions/statements
- **build** → 12 páginas generadas, 0 errores
- **e2e** → todos los specs pasan en los 3 viewports

## Reporters configurados

### Vitest (tests unitarios)
- `verbose` — salida detallada en consola
- `junit` → `test-results/junit-unit.xml`
- Coverage reporters: `text`, `json`, `json-summary`, `html`, `lcov`

### Playwright (tests E2E)
- `list` — salida con timestamps en consola
- `html` → `playwright-report/` (reporte interactivo con screenshots/videos)
- `junit` → `test-results/junit-e2e.xml`
- `json` → `test-results/results.json`

Capturas en CI:
- `screenshot: 'on'` — captura de cada step
- `video: 'on'` — video completo de cada test
- `trace: 'on'` — trace completo (inspeccionable en `playwright.dev/trace`)

## Correr localmente igual que CI

```bash
# Equivalente completo al pipeline de CI
pnpm ci

# Jobs individuales
pnpm check            # typecheck
pnpm test:ci          # unit tests + coverage con umbrales
pnpm build            # build
pnpm test:e2e:ci      # e2e con capturas y videos
```

## Ver reportes localmente

```bash
# Coverage HTML
open coverage/index.html

# Playwright HTML report
pnpm test:e2e:report
# o directamente:
open playwright-report/index.html

# Ver un trace específico
pnpm exec playwright show-trace test-results/<test-name>/trace.zip
```

## Matrix de E2E

Los tests E2E corren en **3 proyectos en paralelo**:

| Proyecto | Viewport | User Agent |
|---------|---------|-----------|
| Desktop Chrome | 1280×720 | Chrome latest |
| Mobile Chrome (Pixel 5) | 393×851 | Chrome Android |
| Mobile Safari (iPhone 12) | 390×844 | Safari iOS |

Cada proyecto genera sus propios artefactos (report, screenshots, videos, traces).
