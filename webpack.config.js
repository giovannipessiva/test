const path = require('path');

module.exports = {
	mode: "production",
	entry: [
		".\\client\\dist\\test\\client\\src\\Client.js"
	],
	output: {
		filename: "test123.webpacked.js",
		library: "Test123",
		path: path.resolve(__dirname, "client/dist"), // path: "./client/dist"
	}
}