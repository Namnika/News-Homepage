module.exports = {
	root: true,
	env: {
		commonjs: true,
		browser: true,
		es2021: true,
		jest: true
	},
	globals: {
		__dirname: true,
		process: true
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
		"plugin:react/jsx-runtime",
		"plugin:testing-library/react",
		"plugin:jest-dom/recommended"
	],
	overrides: [
		{
			env: {
				node: true
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script"
			}
		}
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: ["react", "testing-library", "jest-dom"],
	rules: {
		"react/react-in-jsx-scope": "off",
		"testing-library/await-async-queries": "error",
		"testing-library/no-debugging-utils": "warn",
		"jest-dom/prefer-checked": "error",
		"jest-dom/prefer-enabled-disabled": "error",
		"jest-dom/prefer-required": "error",
		"jest-dom/prefer-to-have-attribute": "error"
	}
};
