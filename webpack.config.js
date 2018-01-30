const path = require('path')
const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const env = process.env.NODE_ENV
const plugins = []
let devtool = false

console.log(`Running webpack in ${env} environment...`)

if (env === 'production' || env === 'analyze') {
	plugins.push(
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new UglifyJsPlugin(),
	)
}
if (env === 'development'){
	plugins.push(new webpack.HotModuleReplacementPlugin())
	devtool = 'eval'
}
if (env === 'analyze') {
	plugins.push(new BundleAnalyzerPlugin({
		analyzerMode: 'server',
		openAnalyzer: true
	}))
}

module.exports = {
	devtool: devtool,
	entry: [
		'./src/inject.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.js',
		publicPath: '/dev/'
	},
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
	},
	plugins: plugins,
}
