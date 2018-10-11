module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"), 

        ts: {
            client: {
                tsconfig: "./client/tsconfig-client.json"
            },
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
 
    });

    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-babel");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");
    

    grunt.registerTask("task_compile", "Execute ts (cannot fail)", ["ts:client","ts:server","copy","clean:post"]);
    grunt.registerTask("l4w-build-pipeline", ["task_compile"]);
	grunt.registerTask("default","l4w-build-pipeline");
};
