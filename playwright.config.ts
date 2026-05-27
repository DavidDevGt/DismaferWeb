import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright E2E Test Configuration — DismaferWeb
 *
 * Localmente:
 *   pnpm exec playwright install chromium
 *   pnpm test:e2e
 *
 * En CI los artefactos se suben automáticamente:
 *   - Screenshots:    test-results/**
 *   - Videos:         test-results/**
 *   - Traces:         test-results/**
 *   - HTML Report:    playwright-report/
 *   - JUnit XML:      test-results/junit-e2e.xml
 *   - JSON Results:   test-results/results.json
 */

const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './tests/e2e',

  /* Paralelismo */
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 2 : undefined,

  /* Directorio de artefactos (screenshots, videos, traces) */
  outputDir: 'test-results',

  /* Reporters */
  reporter: [
    /* Siempre: lista en consola */
    ['list', { printSteps: true }],

    /* Siempre: reporte HTML interactivo */
    ['html', { outputFolder: 'playwright-report', open: 'never' }],

    /* CI: JUnit para integración con GitHub Actions / Slack */
    ...(isCI
      ? ([
          ['junit', { outputFile: 'test-results/junit-e2e.xml', suiteName: 'E2E — DismaferWeb' }],
          ['json', { outputFile: 'test-results/results.json' }],
        ] as const)
      : []),
  ],

  use: {
    baseURL: 'http://localhost:4321',

    /* Capturas: siempre en CI, solo en falla en local */
    screenshot: isCI ? 'on' : 'only-on-failure',

    /* Video: siempre en CI, solo en falla en local */
    video: isCI ? 'on' : 'retain-on-failure',

    /* Trace: siempre en CI (permite ver cada acción paso a paso) */
    trace: isCI ? 'on' : 'on-first-retry',

    /* Timeouts */
    actionTimeout: 10_000,
    navigationTimeout: 30_000,

    /* Locale Guatemala */
    locale: 'es-GT',
    timezoneId: 'America/Guatemala',
  },

  /* Timeouts globales */
  timeout: 30_000,
  expect: { timeout: 5_000 },

  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Chrome (Pixel 5)',
      use: {
        ...devices['Pixel 5'],
        hasTouch: true,
      },
    },
    {
      name: 'Mobile Safari (iPhone 12)',
      use: {
        ...devices['iPhone 12'],
        hasTouch: true,
      },
    },
  ],

  /* Servidor de preview — se construye antes de los tests */
  webServer: {
    command: 'pnpm build && pnpm preview',
    url: 'http://localhost:4321',
    reuseExistingServer: !isCI,
    timeout: 120_000,
    stdout: 'pipe',
    stderr: 'pipe',
  },
});
