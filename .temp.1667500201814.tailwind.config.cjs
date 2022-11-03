/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontSize: {
			sm: ['15px', '20px'],
		}
		screens: {
			'sm': '375px',
			// => @media (min-width: 375px) { ... }

			'md': '960px',
			// => @media (min-width: 960px) { ... }

			'lg': '1440px',
			// => @media (min-width: 1440px) { ... }
		},
		colors: {
			'soft-orange': '#E9AB53',
			'soft-red': '#F15E50',
			'off-white': '#FFFDFA',
			'gray-blue': '#C5C6CE',
			'dark-gray': '#5D5F79',
			'dark-blue': '#000019',
		},
		extend: {
			backgroundImage: (theme) => ({
				hero: "url('./assets/img/image-web-3-desktop.jpg')"
			}),
		},
	},
	plugins: [],
}
