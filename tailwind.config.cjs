/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['src/**/*.{svelte,ts,html}'],
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
