// Generated on 2014-01-08 using generator-angular 0.7.1
'use strict';

module.exports = function(grunt) {
    var config = {
        pkg: grunt.file.readJSON('package.json'),
        typescript: {
            base: {
                src: [
                    'bower_components/typings/lodash/lodash.ts',
                    'src/dotNeTS/Exception.ts',
                    'src/dotNeTS/InvalidOperationException.ts',
                    'src/dotNeTS.Collections/IEnumerable.ts',
                    'src/dotNeTS.Collections/IList.ts',
                    'src/dotNeTS.Collections.Generic/Enumerable.ts',
                    'src/dotNeTS.Collections.Generic/List.ts'
                ],
                dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.js',
                options: {
                    module: 'amd',
                    sourcemap: true
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/<%= pkg.name %>-<%= pkg.version %>.min.js': [
                        'dist/<%= pkg.name %>-<%= pkg.version %>.js'
                    ]
                }
            }
        }

    };




    grunt.initConfig(config);
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-typescript');

    // Default task(s).
    grunt.registerTask('default', ['typescript', 'uglify']);

}