import { defineConfig } from 'vitest/config';

/**
 * Vitest Unit Test Configuration — DismaferWeb
 *
 * Localmente:
 *   pnpm test              → run once
 *   pnpm test:watch        → watch mode
 *   pnpm test:coverage     → coverage report
 *
 * En CI los artefactos se suben automáticamente:
 *   - Coverage HTML:  coverage/
 *   - Coverage LCOV:  coverage/lcov.info  (para Codecov / badges)
 *   - JUnit XML:      test-results/junit-unit.xml
 */

const isCI = !!process.env.CI;

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',

    include: ['src/tests/**/*.test.ts', 'src/tests/**/*.spec.ts'],

    /* Reporters: verbose siempre; JUnit solo en CI */
    reporters: isCI ? ['verbose', ['junit', { suiteName: 'Unit — DismaferWeb' }]] : ['verbose'],

    outputFile: isCI ? { junit: 'test-results/junit-unit.xml' } : undefined,

    coverage: {
      provider: 'v8',

      /* Qué incluir */
      include: ['src/data/**', 'src/types/**'],
      exclude: ['src/tests/**', 'node_modules/**'],

      /* Reporters */
      reporter: isCI ? ['text', 'json', 'json-summary', 'html', 'lcov'] : ['text', 'json', 'html'],

      /* Umbrales de calidad — CI falla si no se alcanzan */
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 70,
        statements: 80,
      },

      /* Reporte HTML en coverage/ */
      reportsDirectory: 'coverage',
    },
  },
});
