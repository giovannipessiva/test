const path = require('path');

module.exports = {
	mode: "production",
	entry: [
		"./client/dist/test/client/src/Client.js",
		"./client/dist/test/client/src/Client2.js"
	],
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: {
					loader: "ts-loader",
					options: {
						configFile: "./client/tsconfig-client.json"
					}
				}
			}
		]
	},
	output: {
		filename: "test123.webpacked.js",
		library: "Test123",
		path: path.resolve(__dirname, "client/dist"), // path: "./client/dist"
	}
}