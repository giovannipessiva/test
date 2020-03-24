const path = require("path");

module.exports = {
	mode: "production",
	entry: [
		"./client/src/Client.ts"
	],
	output: {
		filename: "test123.webpacked.js",
		library: "Test123",
		path: path.resolve(__dirname, "client/dist"),
	},
	devtool: "inline-source-map",
	resolve: {
		extensions: [
			".ts",
			".js"
		],
		alias: {
			'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
		}
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: [/node_modules/],
				loader: "ts-loader",
				options: {
					configFile: "client/tsconfig-client.json",
					logLevel: "info"
				}
			}
		]
	}
}