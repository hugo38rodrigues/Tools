module.exports = {
  env: {
    es2021: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: "2022",
    sourceType: "	module"
  },
  extends: [
    "airbnb-base"
  ],
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".mjs",
          ".json"
        ]
      }
    }
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

		// Divers
		"class-methods-use-this": "off",
		"no-console": ["warn", { allow: ["warn", "error"] }],
		"no-useless-escape": "off",
		"no-underscore-dangle": ["error", { allow: ["_id"] }], // If Database is MongoDB

		// Longueur & style
		"max-len": ["warn", { code: 120, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreComments: true }],
		"arrow-body-style": "off",
	}

}
