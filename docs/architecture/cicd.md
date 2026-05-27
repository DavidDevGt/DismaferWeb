# CI/CD — DismaferWeb

## Pipeline Overview

```
Push / PR
    │
    ├── 🔍 typecheck        → astro check (TypeScript strict)
    ├── 🧪 unit-tests       → Vitest 69 tests + coverage ≥ 80%
    ├── 🏗️ build            → astro build → sube dist/ como artifact
    ├── 🎭 e2e (matrix×3)   → Playwright Desktop + Pixel5 + iPhone12
    │       ├── screenshots en CADA test (CI=true)
    │       ├── video completo por test (CI=true)
    │       └── trace completo por test (CI=true)
    │
    ├── 💾 save-to-repo     → descarga todos los artefactos y hace push
    │       └── → rama ci/test-artifacts
    │
    └── ✅ quality-gate     → resumen final, falla si algún job falló
```

## Workflows

| Archivo | Trigger | Propósito |
|---------|---------|-----------|
| `ci.yml` | push / PR a main | Pipeline principal de calidad |
| `preview.yml` | PR abierto/actualizado | Comenta en el PR con métricas y links |

## Rama ci/test-artifacts

Todos los artefactos se guardan **dentro del repositorio** en la rama `ci/test-artifacts`.
Esta rama es actualizada automáticamente en cada CI run por el job `save-to-repo`.

```
ci/test-artifacts/
├── README.md
├── latest/                              ← siempre apunta al último run
│   ├── unit/
│   │   ├── coverage/
│   │   │   ├── index.html               ← abrir en browser para ver cobertura
│   │   │   ├── lcov-report/
│   │   │   ├── coverage-final.json
│   │   │   └── coverage-summary.json
│   │   └── junit-unit.xml
│   └── e2e/
│       ├── desktop-chrome/
│       │   ├── index.html               ← reporte Playwright interactivo
│       │   └── test-results/
│       │       └── {test-name}/
│       │           ├── test-failed-1.png    ← screenshot
│       │           ├── video.webm           ← video completo
│       │           └── trace.zip            ← trace para playwright.dev/trace
│       ├── pixel-5/                     ← idem Mobile Chrome
│       └── iphone-12/                   ← idem Mobile Safari
│
└── YYYY-MM-DD/
    └── run-{number}/
        ├── meta.json                    ← sha, branch, actor, resultados
        ├── unit/
        └── e2e/
```

## Ver los reportes

### Cobertura de código
```
ci/test-artifacts/latest/unit/coverage/index.html
```

### Reporte E2E interactivo (con screenshots y videos embebidos)
```
ci/test-artifacts/latest/e2e/desktop-chrome/index.html
ci/test-artifacts/latest/e2e/pixel-5/index.html
ci/test-artifacts/latest/e2e/iphone-12/index.html
```

### Inspeccionar un trace de Playwright
1. Descargar `ci/test-artifacts/latest/e2e/{device}/test-results/{test}/trace.zip`
2. Arrastrar a https://trace.playwright.dev

## Artefactos también en GitHub Actions

Además de estar en el repo, todos los artefactos también se suben como GitHub Actions artifacts:

| Nombre | Contenido | Retención |
|--------|-----------|-----------|
| `coverage-html-{run}` | HTML report de cobertura | 30 días |
| `junit-unit-{run}` | JUnit XML unit tests | 30 días |
| `dist-{run}` | Build estático completo | 7 días |
| `playwright-report-{device}-{run}` | HTML interactivo Playwright | 30 días |
| `playwright-artifacts-{device}-{run}` | Screenshots + Videos + Traces | 14 días |
| `junit-e2e-{device}-{run}` | JUnit XML E2E | 30 días |

## Capturas configuradas en CI

```typescript
// playwright.config.ts
screenshot: 'on',   // captura CADA step en CI
video: 'on',        // video completo por test en CI
trace: 'on',        // trace completo (inspeccionable) en CI
```

## Quality Gates (Vitest)

Los tests fallan si la cobertura baja de los umbrales:

| Métrica | Umbral | Actual |
|---------|--------|--------|
| Lines | ≥ 80% | **100%** ✅ |
| Functions | ≥ 80% | **100%** ✅ |
| Statements | ≥ 80% | **100%** ✅ |
| Branches | ≥ 70% | **100%** ✅ |

## Scripts locales

```bash
pnpm test:ci          # Vitest + coverage + umbrales (idéntico a CI)
pnpm test:e2e:ci      # Playwright con screenshots/videos/traces
pnpm ci               # Pipeline completo: check → test:ci → build → test:e2e:ci

pnpm test:e2e:debug   # Playwright en modo debug (paso a paso)
pnpm test:e2e:headed  # Playwright con browser visible
pnpm test:e2e:report  # Abrir el último HTML report
```

## Comentario automático en PRs

El workflow `preview.yml` posta un comentario en cada PR con:
- Número de páginas generadas y tamaño del build
- Estado de los unit tests
- Links directos a los artefactos en `ci/test-artifacts`
- Link al workflow run de GitHub Actions
