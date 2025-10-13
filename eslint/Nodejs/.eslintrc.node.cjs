/* eslint-disable no-undef */
module.exports = {
	root: true,
	env: { es2021: true, node: true },
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	extends: ["airbnb-base"],
	rules: {
		// Style
		"semi": ["error", "never"],
		"indent": ["error", "tab"],
		"no-tabs": "off",

		// Imports
		"import/prefer-default-export": "off",
		"import/extensions": ["error", "ignorePackages", { js: "never", mjs: "never" }],

		// Node
		"no-process-exit": "off",

		// Divers
		"class-methods-use-this": "off",
		"no-console": ["warn", { allow: ["warn", "error"] }],
		"no-useless-escape": "off",
		"no-underscore-dangle": ["error", { allow: ["_id"] }], // If Database is MongoDB

		// Longueur & style
		"max-len": ["warn", { code: 120, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreComments: true }],
		"arrow-body-style": "off",
	},

	overrides: [
		// Fichiers de conf & scripts
		{
			files: [
				"**/*.config.{js,cjs,mjs,ts}",
				"scripts/**/*.{js,ts}",
				"**/*.cjs",
				"**/*.mjs",
			],
			rules: {
				"global-require": "off",
				"import/no-extraneous-dependencies": [
					"error",
					{ devDependencies: true },
				],
				
			},
		},
		// Si tu as du TypeScript côté Node
		{
			files: ["**/*.ts"],
			excludedFiles: ["**/*.tsx"],
			parser: "@typescript-eslint/parser",
			parserOptions: { project: true },
			extends: ["airbnb-base", "airbnb-typescript/base"],
			plugins: ["@typescript-eslint"],
		},
		// Tests Node (vitest)
		{
			files: ["**/*.{test,spec}.{js,ts}"],
			plugins: ["vitest"],
			rules: {
				"no-unused-expressions": "off",
			},
		},
	],
};
