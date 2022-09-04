/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				myGray: '#272727',
				myYellow: '#faa815',
				myFlax: '#ffe2ad'
			},
			fontFamily: {
				robotomono: ['Roboto Mono']
			}
		},
		fontFamily: {
			sans: ['Roboto Mono', 'sans-serif'],
			serif: ['Roboto Mono', 'saerif']
		}
	},
	plugins: []
};
