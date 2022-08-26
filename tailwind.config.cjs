/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['src/**/*.{svelte,ts,html}'],
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		styled: true,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: "",
		themes: [
			{
			  aqua: {
				...require("daisyui/src/colors/themes")["[data-theme=autumn]"],
				"base-100": "#fcf3ee",
				"primary": "#81050c",/*
				"secondary": "#b7d9d5",*/
			           }
			},
            {
		       dark: {
				 ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
				 "primary": "#81050c",
			          }
            }
			],
		},
	
	};
