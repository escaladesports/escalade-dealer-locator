const path = require('path')
const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const plugins = []
if (process.env.ANALYZE) {
	plugins.push(new BundleAnalyzerPlugin({
		analyzerMode: 'server',
		openAnalyzer: true
	}))
}
else if (process.env.NODE_ENV !== 'production'){
	plugins.push(new webpack.HotModuleReplacementPlugin())
}
else{
	console.log('Building in production...')
	plugins.push(
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.UglifyJsPlugin()
	)
}

module.exports = {
	devtool: 'eval',
	entry: [
		'./src/inject.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.js',
		publicPath: '/dev/'
	},
	plugins: plugins,
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [{
			test: /\.js?$/,
			use: [{
				loader: 'babel-loader'
			}],
			include: path.join(__dirname, '/')
		}]
	}
}
