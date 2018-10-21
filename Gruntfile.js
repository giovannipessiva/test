const webpackConfig = require('./webpack.config.js');

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"), 

        ts: {
            server: {
                tsconfig: "./server/tsconfig-server.json"
            }
        },

        copy: {
            main: {
                files: [{
                    expand: true, 
                    cwd: ".", 
                    src: [
                        "./server/dist/**/*.js"
                    ],

                    dest: ".", 
                    rename: function(dest, src) {
                        return dest + "/" + src.replace(".js",".mjs");
                    }
                }]
            }
        },

        clean: {
            options: { 
                force: true
            },
            pre: {
                src: [
                    "./client/dist/**",
                    "./server/dist/**"
                ]
            },
            post: {
                src: [
                    "./server/dist/**/*.js"
                ]
            }
        },

        webpack: {
            prod: webpackConfig,
            dev: webpackConfig
        }
 
    });

    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-webpack");

    grunt.registerTask("test_compile", "Execute ts (cannot fail)", ["ts:server","copy","webpack","clean:post"]);
	grunt.registerTask("default","test_compile");
};
