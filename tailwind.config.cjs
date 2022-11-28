/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"space": "#1e1e34",
				"rust": "#da2c43",
				"ultramarine": "#4a0ffa",
			},
		},
	},
	plugins: [],
}
