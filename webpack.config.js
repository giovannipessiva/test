const path = require('path');

module.exports = {
	entry: [
		"./client/dist/Client.ts",
		"./client/dist/Client2.ts"
	],
	output: {
		path: path.resolve(__dirname, "client/dist"), // path: "./client/dist"
	}
}