/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  'main-pink': '#6F2232',
		  'secondary-pink': '#950740',
		  'tertiary-pink': '#C3073F',
		  'main-black': '#1A1A1D',
		  'main-grey': '#4E4E50',
		},
	  },
	},
	plugins: [],
  };
  