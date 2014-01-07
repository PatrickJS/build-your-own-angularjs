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
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['jshint', 'jasmine']);
};
