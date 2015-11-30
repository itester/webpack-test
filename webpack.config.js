var path = require('path');
module.exports = {
	/*entry: path.resolve(__dirname, 'app/main.jsx'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},*/
	entry: {
		bundle: './app/main.jsx',
		tutorial: './tutorial/main.js'
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js'
	},
	module: {/*
		preLoaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'jshint-loader'
			}
		],*/
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
};