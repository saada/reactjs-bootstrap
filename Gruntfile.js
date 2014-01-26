'use strict';
module.exports = function(grunt){
  grunt.initConfig({
    react: {
      dynamic_mappings: {
        files: [
          {
            expand: true,
            cwd: 'jsx',
            src: ['*.jsx'],
            dest: 'js',
            ext: '.js'
          }
        ]
      }
    },

    uglify: {
      'dist/reactjs-bootstrap.min.js':[
        'js/*.js'
      ],
    },

    watch: {
      jsx: {
        files: 'jsx/*.jsx',
        tasks: ['react', 'uglify'],
        options: {
          livereload: false,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['react','uglify']);
};
