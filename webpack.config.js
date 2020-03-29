'use strict'
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
/*
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { GenerateSW } = require('workbox-webpack-plugin');
const manifest = require('./public/manifest.json');
const pwaPlugin = new WebpackPwaManifest(manifest);
const { InjectManifest } = require('workbox-webpack-plugin');

const workboxPlugin = new InjectManifest({
	//swSrc: './src/sw.js',
	//swDest: 'sw.js',
	swSrc: 'prebundle.js',
	entry: __dirname + "/src/sw.js",
	swDest: "worker.js"
});
 */

const CopyWebpackPlugin = require('copy-webpack-plugin');
const SWprecacheWebpackPlugin = require('sw-precache-webpack-plugin-loader');

module.exports = {
	entry: {
		index: ['./src/index.js']
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: '[name].js'
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: "/node_modules",
			//use: ['babel-loader'],
			loader: 'babel-loader',
			query: {
				compact: false
			}
		},
		{
			test: /\.html$/,
			use: [
				{
					loader: "html-loader",
					options: { minimize: true }
				}
			]
		},
		{
			test: /\.css$/,
			use: [MiniCssExtractPlugin.loader, 'css-loader']
		},
		{
			test: /\.scss$/,
			use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
		},
		{
			test : /\.json$/,
			loader : "json-loader"
		},
		{
			test: /\.(ico|png)$/,
			loader: 'file-loader'
		}]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './public/index.html', // public/index.html 파일을 읽는다.
			filename: 'index.html' // output으로 출력할 파일은 index.html 이다.
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css'
		})
		// ,pwaPlugin,workboxPlugin,
		,
		new CopyWebpackPlugin([{
			context: './public',
			//from: '*.*'
			from: '**/*'
		}]),
		new SWprecacheWebpackPlugin({
			staticFileGlobs: [
				path.join(path.resolve(__dirname, './build'), '**/*')
			],
			logger: function() {},
			filename: 'sw.js'
		})
	],
	devServer: {
		contentBase: './public',
		host: 'localhost',
		port: 8080
	}
};
