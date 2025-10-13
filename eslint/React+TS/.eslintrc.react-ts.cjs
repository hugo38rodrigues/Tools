/* eslint-disable no-undef */
module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true, // ou ["apps/web/tsconfig.json"] etc.
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks", "jsx-a11y", "import"],
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      typescript: {},
      node: { extensions: [".js", ".ts", ".tsx", ".d.ts"] },
    },
  },
	rules: {
		// Style
		"semi": ["error", "never"],
		"@typescript-eslint/semi": ["error", "never"],
		"indent": ["error", "tab"],
		"no-tabs": "off",
		"jsx-quotes": ["error", "prefer-single"],

		// Imports
		"import/prefer-default-export": "off",
		"import/extensions": ["error", "ignorePackages", { js: "never", mjs: "never", ts: "never", tsx: "never" }],

		// React
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

		// TS
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
      files: ["**/*.{test,spec}.{ts,tsx}"],
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
