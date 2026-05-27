import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import astroPlugin from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import globals from 'globals';

export default [
  /* ── Ignorar directorios generados ──────────────────────────── */
  {
    ignores: [
      'dist/',
      '.astro/',
      'node_modules/',
      'coverage/',
      'test-results/',
      'playwright-report/',
      '.pnpmfile.cjs',
      'src/env.d.ts',
    ],
  },

  /* ── JS base ─────────────────────────────────────────────────── */
  js.configs.recommended,

  /* ── TypeScript (src/) ───────────────────────────────────────── */
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    plugins: { '@typescript-eslint': tsPlugin },
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
      globals: { ...globals.browser, ...globals.es2022 },
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    },
  },

  /* ── TypeScript (archivos de config raíz — env Node) ────────── */
  {
    files: ['*.ts', '*.mts', 'vitest.config.ts', 'playwright.config.ts'],
    plugins: { '@typescript-eslint': tsPlugin },
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
      globals: { ...globals.node, ...globals.es2022 },
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },

  /* ── Tests (Vitest + Playwright — parser TS + env Node) ─────── */
  {
    files: ['src/tests/**/*.ts', 'tests/**/*.ts', 'tests/**/*.spec.ts'],
    plugins: { '@typescript-eslint': tsPlugin },
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
      globals: { ...globals.node, ...globals.browser, ...globals.es2022 },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },

  /* ── Astro ───────────────────────────────────────────────────── */
  ...astroPlugin.configs.recommended,

  /* ── JSX a11y (aplica a .astro y .tsx) ──────────────────────── */
  {
    files: ['**/*.astro', '**/*.tsx'],
    plugins: { 'jsx-a11y': jsxA11y },
    rules: {
      ...jsxA11y.configs.recommended.rules,
      'jsx-a11y/anchor-is-valid': 'warn',
    },
  },

  /* ── Reglas globales ─────────────────────────────────────────── */
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',
      eqeqeq: ['error', 'always'],
    },
  },
];
