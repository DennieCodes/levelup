module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:jest/recommended',
		'plugin:jest/style',
		'plugin:testing-library/react',
		'next',
		'next/core-web-vitals',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['react', '@typescript-eslint'],

	settings: {
		react: {
			version: 'detect',
		},
	},

	overrides: [
		{
			files: ['*.ts', '*.tsx'], // Your TypeScript files extension

			// You should extend TypeScript plugins here,
			// instead of extending them outside the `overrides`.
			// If you don't want to extend any rules, you don't need an `extends` attribute.
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
			rules: {
				'@typescript-eslint/require-await': 'error',
			},

			parserOptions: {
				project: ['./tsconfig.json'],
				ecmaFeatures: {
					jsx: true,
				},
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
	],

	rules: {
		'@typescript-eslint/explicit-module-boundary-types': 'off',
	},
};
