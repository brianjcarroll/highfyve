module.exports = function(grunt) { 
  'use strict';

  grunt.initConfig({
    less: {
      dev: {
        files: [
          {
            expand: false,
            flatten: false,
            src: [ 'css/*.less' ],
            dest: 'css/_main.css'
          }
        ]
      }
    },

    autoprefixer: {
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'css/*.css',
        dest: 'css'
      }
    }
  });

  // Load required modules
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Task definitions
  grunt.registerTask('default', [
    'less',
    'autoprefixer'
  ]);
};