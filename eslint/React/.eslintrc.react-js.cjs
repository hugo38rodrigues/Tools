/* eslint-disable no-undef */
module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  extends: [
    "airbnb",        // inclut airbnb + react + jsx-a11y
    "airbnb/hooks",
  ],
  plugins: ["react", "react-hooks", "jsx-a11y", "import"],
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      node: { extensions: [".js", ".jsx"] },
    },
  },
	rules: {
		// Style
		"semi": ["error", "never"],
		"indent": ["error", "tab"],
		"no-tabs": "off",
		"jsx-quotes": ["error", "prefer-single"],

		// Imports
		"import/prefer-default-export": "off",
		"import/extensions": ["error", "ignorePackages", { js: "never", mjs: "never" }],

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
      files: ["**/*.{test,spec}.{js,jsx}"],
      plugins: ["vitest"],
      rules: {
        "no-unused-expressions": "off",
      },
    },
  ],
};
