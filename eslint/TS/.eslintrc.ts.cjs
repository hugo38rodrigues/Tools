/* eslint-disable no-undef */
module.exports = {
  root: true,
  env: { es2021: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true, // ou: ["packages/*/tsconfig.json"] en monorepo
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
  ],
  plugins: ["@typescript-eslint", "import"],
  settings: {
    "import/resolver": {
      typescript: {},
      node: { extensions: [".js", ".ts", ".d.ts"] },
    },
  },
	rules: {
		// Style
		"semi": ["error", "never"],
		"@typescript-eslint/semi": ["error", "never"], // s’applique aux fichiers TS/TSX
		"indent": ["error", "tab"],
		"no-tabs": "off",
		"jsx-quotes": ["error", "prefer-single"],

		// Imports
		"import/prefer-default-export": "off",
		"import/extensions": [
			"error",
			"ignorePackages",
			{ js: "never", mjs: "never", ts: "never", tsx: "never" }
		],

		// React (sera utile si tu as aussi du React dans le lot)
		"react/react-in-jsx-scope": "off",
		"react/jsx-props-no-spreading": "off",
		"react/require-default-props": "off",
		"react/prop-types": "off",
		"react/no-array-index-key": "off",
		"react/function-component-definition": [
			"error",
			{ namedComponents: "arrow-function", unnamedComponents: "arrow-function" }
		],
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],

		// TS (n’affecte que les fichiers TS/TSX)
		"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
		"@typescript-eslint/explicit-function-return-type": "off",

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
    {
      files: ["**/*.{test,spec}.ts"],
      plugins: ["vitest"],
      rules: {
        "no-unused-expressions": "off",
      },
    },
    {
      files: ["**/*.d.ts"],
      rules: {
        "import/no-duplicates": "off",
        "spaced-comment": "off",
      },
    },
  ],
};
