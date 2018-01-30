module.exports = {
	from: false,
	plugins: {
		'postcss-cssnext': {},
		'postcss-nested': {},
		'lost': {},
		'css-mqpacker': {},
		'cssnano': {
			autoprefixer: false
		},
	},
}