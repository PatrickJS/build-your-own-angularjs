'use strict';
module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      all: ['src/**/*.js'],
      options: {
        globals: {
          _: false,
          $: false
        }
      }
    },
    jasmine: {
      unit: {
        src: 'src/**/*.js',
        options: {
          specs: ['test/**/*_spec.js'],
          vendor: [
            'node_modules/lodash/lodash.js',
            'node_modules/jquery/jquery.js'
          ]
        }
      }
    },
    watch: {
      all: {
        files: ['src/**/*.js', 'test/**/*.js'],
        tasks: ['default']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'jasmine']);
};
