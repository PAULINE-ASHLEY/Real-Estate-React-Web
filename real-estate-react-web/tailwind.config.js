/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		fontFamily: {
			roboto: ['roboto', 'ui-sans-serif', 'system-ui'],
			spectral: ['spectral', 'san-serif'],
		},
		colors: {
			yellow: '#FFB923',
			white: '#FFFFFF',
			black: '#000000',
			grey: '#808080',
			lightGrey: '#F5F5F5',
			snow: '#FBF9F5',
		},
		screens: {
			sm: '512px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			spacing: {
				'300px': '300px',
			},
		},
	},
	plugins: [],
};
