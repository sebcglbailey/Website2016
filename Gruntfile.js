module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: 'src/js/dev/main.js',
        tasks: ['import'],
      },
      css: {
        files: 'src/css/dev/*.scss',
        tasks: ['sass']
      }
    },
    import: {
      options: {},
      dist: {
        src: 'src/js/dev/main.js',
        dest:'main.js'
      }
    },
    uglify: {
      my_target: {
        files: {
          'main.js': ['main.js']
        }
      }
    },
    postcss: {
      options: {
        map: {
            inline: false, // save all sourcemaps as separate files...
            annotation: 'src/css/maps/' // ...to the specified directory
        },
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'src/css/build/*.css'
      }
    },
    sass: {
        dist: {
            files: {
                'src/css/build/main.css': 'src/css/dev/main.scss',
                'src/css/build/home.css': 'src/css/dev/home.scss',
                'src/css/build/project.css': 'src/css/dev/project.scss',
                'src/css/build/cards.css': 'src/css/dev/cards.scss',
                'src/css/build/work.css': 'src/css/dev/work.scss',
                'src/css/build/about.css': 'src/css/dev/about.scss',
                'src/css/build/contact.css': 'src/css/dev/contact.scss'
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-import');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'postcss', 'import', 'uglify', 'watch']);

};