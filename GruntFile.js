// Generated on 2014-01-08 using generator-angular 0.7.1
'use strict';

module.exports = function (grunt) {
    var config = {
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            dev: {
                configFile: 'karma.conf.js',
                singleRun: false
            },
            src: {
                configFile: 'karma.conf.js',
                singleRun: true
            },
            dist: {
                options: {
                    files: [
                              'bower_components/lodash/dist/lodash.js',
                              'dist/<%= pkg.name %>.min.js',
                              'test/spec/**/*.js',

                    ],
                    browsers: ['Firefox'],
                    singleRun: true,
                    frameworks: ['jasmine'],
                    port: 9899,
                }


            }

        },
        typescript: {
            base: {
                src: [
                    'bower_components/typings/lodash/lodash.ts',
                    'src/dotNeTS/Exception.ts',
                    'src/**/*.ts'
                ],
                dest: 'dist/<%= pkg.name %>.js',
                options: {
                    module: 'amd',
                    target: 'es5',
                    sourcemap: true,
                    declaration: true
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': [
                        'dist/<%= pkg.name %>.js'
                    ]
                }
            }
        },
        watch: {
            scripts: {
                files: ['**/*.ts'],
                tasks: [
                    'typescript',
                    'karma:src',
                   
                ],
                options: {
                    spawn: false,
                },
            },
        }


    };

    grunt.initConfig(config);
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['karma:src', 'typescript', 'uglify', 'karma:dist']);
    grunt.registerTask('build', ['default']);
    grunt.registerTask('test', ['karma:dev']);




}