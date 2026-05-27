# E2E Artifacts

Los screenshots, videos y traces de Playwright se generan únicamente en GitHub Actions
(este entorno cloud bloquea la descarga de binarios de Chromium).

- **Run:** `run-local-001`
- **Commit:** `c466aa0`
- **Fecha:** `2026-05-27`

En cada CI run de GitHub Actions se suben aquí automáticamente:
- `playwright-report/` — reporte HTML interactivo (screenshots embebidos)
- `test-results/desktop-chrome/` — screenshots + video + trace por test
- `test-results/pixel-5/` — idem para Mobile Chrome
- `test-results/iphone-12/` — idem para Mobile Safari
