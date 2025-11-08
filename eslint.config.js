import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// FlatCompat helps apply old-style shareable configs (plugin:xxx/recommended)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended
})

export default defineConfig([
  // Ignora arquivos de build, cache e MDX story docs (MDX parsed separately).
  globalIgnores(['dist', 'node_modules', '.storybook', 'storybook-static', '**/*.mdx']),

  // Configurações base para todos os arquivos
  {
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },

  // JavaScript/TypeScript comum
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ...js.configs.recommended,
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-duplicate-imports': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'eol-last': ['error', 'always']
    }
  },

  // TypeScript específico
  {
    files: ['**/*.{ts,tsx}'],
    // Use FlatCompat to reference the @typescript-eslint recommended config
    extends: [...compat.config({ extends: ['plugin:@typescript-eslint/recommended'] })],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn'
    }
  },

  // React específico
  {
    files: ['**/*.{jsx,tsx}'],
    // Use FlatCompat to pull in recommended react and hooks configs
    extends: [
      ...compat.config({
        extends: [
          'plugin:react/recommended',
          'plugin:react/jsx-runtime',
          'plugin:react-hooks/recommended',
          'plugin:jsx-a11y/recommended'
        ]
      })
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true }
      },
      globals: {
        ...globals.browser,
        ...globals.es2021
      }
    },
    rules: {
      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // JSX
      'react/prop-types': 'off',
      'react/jsx-key': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-undef': 'error',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',

      // Acessibilidade
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-role': 'warn'
    }
  },

  // Stories do Storybook
  {
    files: ['**/*.stories.{ts,tsx,mdx}'],
    // Lint story files with React/TS/JSX-a11y rules but avoid the Storybook
    // plugin due to version mismatches with the installed Storybook packages.
    // This ensures stories are still checked for general code quality and a11y.
    extends: [
      ...compat.config({
        extends: [
          'plugin:react/recommended',
          'plugin:react/jsx-runtime',
          'plugin:react-hooks/recommended',
          'plugin:jsx-a11y/recommended',
          'plugin:@typescript-eslint/recommended'
        ]
      })
    ],
    rules: {
      // Keep story-specific rules minimal; avoid storybook plugin rules to
      // prevent runtime plugin import errors. Teams that want storybook-specific
      // checks can either upgrade Storybook and the plugin, or add a separate
      // lint config for stories.
    }
  }
])
