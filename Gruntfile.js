module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    watch: {
      options: {
        livereload: true,
      },
      express: {
        files:  [ 'index.html', 'app.js', "routes/*.js" , "public/js/*.js"],
        tasks:  [ 'express:dev' ],
        options: {
          spawn: false
        }
      }
    },
    express: {
      options: {
        // Override defaults here
      },
      dev: {
        options: {
          script: 'app.js'
        }
      }
    }
  });

  grunt.registerTask('default', ['express:dev','watch']);
};
