(function() {
    "use strict";

    module.exports = function (grunt) {
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),

            jshint: {
                files: [
                    'Gruntfile.js',
                    'src/app/server/**/*.js',
                    'src/app/client/**/*.js',
                    '!src/app/client/js/libs/*.js'
                ],
                options: {
                    reporter: require('jshint-stylish'),
                    globals: {
                        jQuery: true,
                        console: true,
                        module: true
                    }
                }
            },
            watch: {
                js: {
                    files: ['<%= jshint.files %>'],
                    tasks: ['jshint']
                },
                html: {
                    files: 'src/app/server/views/**/*.ejs'
                },
                css: {
                    files: 'src/app/client/css/*.css'
                },
                options: {
                    livereload: true
                }
            },
            copy: {
                dev_js: {
                    src: [
                        'bower_components/angular/angular.js',
                        'bower_components/jquery/dist/jquery.js',
                        'bower_components/bootstrap/dist/js/bootstrap.js',
                        'bower_components/angular-ui-router/release/angular-ui-router.js'
                    ],
                    dest: 'src/app/client/js/libs/',
                    expand: true,
                    flatten: true,
                    filter: 'isFile'
                },
                 dev_css:{
                       src: ['bower_components/bootstrap/dist/css/bootstrap.css'],
                       dest: 'src/app/client/css/',
                       expand: true,
                       flatten: true,
                       filter: 'isFile'
                   },
                dev_fonts: {
                    src: ['bower_components/bootstrap/dist/fonts/*'],
                    dest: 'src/app/client/fonts/',
                    expand: true,
                    flatten: true,
                    filter: 'isFile'
                }
            }
        });

        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-copy');


        grunt.registerTask('devel', ['watch']);

        grunt.registerTask('devel:init', ['copy:dev_js', 'copy:dev_css', 'copy:dev_fonts']);

        grunt.registerTask('default', ['jshint']);
    };
})();