# 📦 ci/test-artifacts — DismaferWeb

Esta rama contiene todos los artefactos generados por los tests en cada CI run.
**No modificar manualmente** — es actualizada automáticamente por GitHub Actions.

## Estructura

```
ci/test-artifacts/
├── latest/                        ← Última ejecución (siempre actualizado)
│   ├── unit/
│   │   ├── coverage/              ← HTML report de cobertura (abrir index.html)
│   │   │   ├── index.html
│   │   │   ├── lcov-report/
│   │   │   └── ...
│   │   └── junit-unit.xml         ← JUnit XML de tests unitarios
│   └── e2e/
│       ├── playwright-report/     ← Reporte HTML interactivo (screenshots + videos)
│       │   └── index.html
│       └── test-results/
│           ├── desktop-chrome/    ← Screenshots + video + trace por test
│           ├── pixel-5/
│           └── iphone-12/
│
└── YYYY-MM-DD/                    ← Historial por fecha
    └── run-{number}/
        ├── unit/
        └── e2e/
```

## Ver el reporte de cobertura

```
ci/test-artifacts/latest/unit/coverage/index.html
```

## Ver el reporte E2E de Playwright

```
ci/test-artifacts/latest/e2e/playwright-report/index.html
```

## Ver un trace de Playwright

1. Descargar `ci/test-artifacts/latest/e2e/test-results/{device}/{test-name}/trace.zip`
2. Abrir en https://trace.playwright.dev (drag & drop)

---

> Generado automáticamente por `.github/workflows/ci.yml` — DismaferWeb
