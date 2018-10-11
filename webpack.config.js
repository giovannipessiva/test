const path = require('path');

module.exports = {
	entry: [
		".\\client\\dist\\test\\client\\src\\Client.js",
		".\\client\\dist\\test\\client\\src\\Client2.js"
	],
	output: {
		library: "Test123",
		path: path.resolve(__dirname, "client/dist"), // path: "./client/dist"
	}
}