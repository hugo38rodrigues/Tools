import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import importPlugin from 'eslint-plugin-import'

export default [
	js.configs.recommended,
	{
		ignores: ['node_modules', '.next', 'out', 'dist'],
	},
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				project: true,
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: { jsx: true },
			},
			globals: {
				document: 'readonly',
				window: 'readonly',
				navigator: 'readonly',
				console: 'readonly',
				process: 'readonly',
				React: 'readonly',
			},
		},
		plugins: {
			'@typescript-eslint': typescript,
			'react': react,
			'react-hooks': reactHooks,
			'jsx-a11y': jsxA11y,
			'import': importPlugin,
		},
		settings: {
			react: { version: 'detect' },
			'import/resolver': {
				typescript: {},
				node: { extensions: ['.js', '.ts', '.tsx', '.d.ts'] },
			},
		},
		rules: {
			// Style
			'semi': ['error', 'never'],
			'@typescript-eslint/semi': ['error', 'never'],
			'indent': ['error', 'tab'],
			'no-tabs': 'off',
			'jsx-quotes': ['error', 'prefer-single'],

			// Imports
			'import/prefer-default-export': 'off',
			'import/extensions': ['error', 'ignorePackages', { js: 'never', mjs: 'never', ts: 'never', tsx: 'never' }],

			// React
			'react/react-in-jsx-scope': 'off',
			'react/jsx-props-no-spreading': 'off',
			'react/require-default-props': 'off',
			'react/prop-types': 'off',
			'react/no-array-index-key': 'off',
			'react/function-component-definition': [
				'error',
				{ namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
			],
			'react/jsx-indent': ['error', 'tab'],
			'react/jsx-indent-props': ['error', 'tab'],

			// React Hooks
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',

			// TypeScript
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'@typescript-eslint/explicit-function-return-type': 'off',
			'no-unused-vars': 'off',

			// Divers
			'class-methods-use-this': 'off',
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'no-useless-escape': 'off',
			'no-underscore-dangle': ['error', { allow: ['_id'] }],

			// Longueur & style
			'max-len': ['warn', { code: 120, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreComments: true }],
			'arrow-body-style': 'off',
		},
	},
	{
		files: ['**/*.{test,spec}.{ts,tsx}'],
		rules: {
			'no-unused-expressions': 'off',
		},
	},
	{
		files: ['**/*.d.ts'],
		rules: {
			'import/no-duplicates': 'off',
		},
	},
]
