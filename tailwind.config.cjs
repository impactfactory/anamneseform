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
				"base-content": "#333",
				"primary": "#81050c",
				"primary-content": "#fff",
				"secondary": "#c9e7e4", 
				"info": "#fff"
			           }
			},
            {
		       dark: {
				 ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
				 "base-100": "#222",
				 "base-content": "#ededed",
				 "primary": "#81050c",
				 "secondary": "#50726e",
				 "secondary-content": "#ededed"
			          }
            }
			],
		},
	
	};
