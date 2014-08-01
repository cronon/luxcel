module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      js: {
        src: 'src/js/*.js',
        dest: 'dist/assets/application.js'
      }
    },
    jade: {
      compile: {
        options: {
          pretty: true
        },
        src: 'src/index.jade',
        dest: 'dist/index.html'
      }
    },
    sass: {
      dev:{
        src:'src/stylesheets/application.scss',
        dest: 'dist/assets/application.css'
      }
    },
    watch: {
      sass: {
        files: 'src/stylesheets/*.scss',
        tasks: ['sass']
      },
      jade: {
        files: ['src/**/*.jade'],
        tasks: ['jade']
      },
      'concat:js': {
        files: ['src/js/*.js'],
        tasks: ['concat']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.registerTask('default', ['sass', 'jade', 'watch', 'concat']);
};
