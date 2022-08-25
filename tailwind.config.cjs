/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['src/**/*.{svelte,ts,html}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
			  mytheme: {
				"base-100": "#fcf3ee",
				"primary": "#81050c",
				"secondary": "#b7d9d5",
			           }
			},
			],
		},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	};
