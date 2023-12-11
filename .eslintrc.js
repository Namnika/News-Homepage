module.exports = {
	root: true,
	env: {
		commonjs: true,
		browser: true,
		es2021: true,
		jest: true
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended"
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
	parser: "babel-eslint",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: [],
	rules: {
		"react/react-in-jsx-scope": "off",
		"no-unused-vars": "off"
	}
};
