const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#5F4BD9',
				"primary-light": '#f8f7fd',
				secondary: '#B9B9B9',
				error: '#FF6868'
			}
		}
	},

	plugins: []
};

module.exports = config;
