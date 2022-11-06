/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		screens: {
			'sm': '375px',
			// => @media (min-width: 375px) { ... }

			'md': '960px',
			// => @media (min-width: 960px) { ... }

			'lg': '1200px',
			// => @media (min-width: 1440px) { ... }
		},
		colors: {
			'soft-orange': 'hsl(35, 77%, 62%);',
			'soft-red': 'hsl(5, 85%, 63%);',
			'off-white': 'hsl(36, 100%, 99%);',
			'gray-blue': 'hsl(233, 8%, 79%);',
			'dark-gray': 'hsl(236, 13%, 42%);',
			'dark-blue': 'hsl(240, 100%, 5%);',
		},
		extend: {
			backgroundImage: (theme) => ({
				hero: "url('/image-web-3-desktop.jpg')",
				herom: "url('/image-web-3-mobile.jpg')",
			}),
		},
	},
	plugins: [],
}
