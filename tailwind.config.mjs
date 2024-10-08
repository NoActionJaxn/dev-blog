/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: [
		{
			pattern: /scale-./,
		}
	],
	theme: {
		extend: {
			fontFamily: {
				'sans': 'montserrat, "sans-serif"',
				'oswald': 'oswald, "sans-serif"',
			},
			gridTemplateRows: {
				layout: 'auto 1fr auto',
			},
			transitionProperty: {
				transform: 'transform',
			}
		},
	},
	plugins: [],
}
