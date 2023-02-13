/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'NotoSans-ExtraLight': ['NotoSans-ExtraLight'],
				'NotoSans-Light': ['NotoSans-Light'],
				'NotoSans-Medium': ['NotoSans-Medium'],
				'NotoSans-SemiBold': ['NotoSans-SemiBold'],
			},
		},
	},
	plugins: [],
};
