// develop path: "./"
// build path:  "dist"

// task order
//- Clean dist directory
//- Copy file to dist directory
//- Compile less, sass, coffee script into dist directory
//- Adjust html page file's extension to deployed file extension

var rootPath = 'public/',
    /**TODO: one place must manual specify distPath */
    distPath = 'undefined';

module.exports = function (grunt){
    // auto-load npm task components
    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),

        // clean directory
        clean: {
            build: [distPath]
        },

        // copy file to dist directory
        copy: {
            build: {
                files: [
                    {
                        src: ['assets/scripts/*', 'assets/stylesheets/*', 'assets/images/*', 'assets/fonts/*', '*.html'],
                        cwd: rootPath,
                        dest: distPath,
                        expand: true
                    }
                ]
            }
        },

        // less compiler
        less: {
            build: {
                expand: true,
                cwd: rootPath + 'assets/stylesheets/',
                src: ['*.less'],
                dest: distPath + 'assets/stylesheets',
                ext: '.css'
            }
        },

        autoprefixer: {
            options: {
                // Task-specific options go here.
            },
            build: {
                // Target-specific file lists and/or options go here.
                expand: true,
                flatten: true,
                src: distPath + 'assets/stylesheets/*.css',
                dest: distPath + 'assets/stylesheets/'
            }
        },

        // concat and compressor stylesheets
        cssmin: {
            build: {
                files: [{
                    'static/dist/assets/stylesheets/main.min.css': [rootPath + 'assets/stylesheets/*.css', distPath + 'assets/stylesheets/*.css']
                }]
            }
        },

        'string-replace': {
            deploy: {
                files: [{
                    expand: true,
                    cwd: distPath,
                    src: '*.html',
                    dest: distPath
                }],
                options: {
                    replacements: [{
                        //  remove livereload
                        pattern: /<script src="\/\/localhost:35729\/livereload.js"><\/script>/ig,
                        replacement: ''
                    },
                        {
                            //  remove less compiler
                            pattern: /<script src="assets\/scripts\/less.min.js"><\/script>/ig,
                            replacement: ''
                        },
                        {
                            //  replace link tag's rel="stylesheet/less" to rel="stylesheet"
                            pattern: /stylesheet\/less/ig,
                            replacement: 'stylesheet'
                        },
                        {
                            //  replace .less extension to .stylesheets extension
                             pattern: /.less"\/>/ig,
                            replacement: '.stylesheets"/>'
                        }]
                }
            }
        },

        watch: {
            css: {
                files: rootPath + 'assets/stylesheets/**',
                options: {
                    livereload: true
                }
            },
            js: {
                files: rootPath + 'assets/scripts/**',
                options: {
                    livereload: true
                }
            },
            html: {
                files: [ rootPath + '/*.html', rootPath + '/**/*.html', rootPath + '/**/**/*.html', rootPath + '/**/**/**/*.html', 'app/views/*'],
                options: {
                    livereload: true
                }
            }
        }
    });

    // define task
    grunt.registerTask('cleanDir', ['clean:build']); //ok
    grunt.registerTask('copyFileToDist', ['copy:build']); //ok
    grunt.registerTask('compileLess', ['less:build']); //ok
    grunt.registerTask('autoPrefixer', ['autoprefixer:build']); //ok
    grunt.registerTask('removeUnusedFile', ['string-replace:deploy']); //ok

    // main task
    grunt.registerTask('deploy', ['cleanDir', 'copyFileToDist', 'compileLess', 'autoPrefixer', 'removeUnusedFile']);
    grunt.registerTask('live', ['watch']);


};