module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      options: {
        separator: '\n\n//-------------------------------------------------------\n',
        banner: '\n\n//-------------------------------------------------------\n'
      },
      dist: {
        src: [ 'components/scripts/*.js'],
        dest: 'builds/development/js/script.js',
      }
    },
    
     sass: {
    		dist: {
  	    	options: {
  	      	style: 'compressed'
      	},
  	    files: [
  	      {
  	        src: 'components/sass/style.scss',
  	        dest: 'builds/development/css/style.css'
  	      }
      		]
    		} //dist
  	}, //sass

  
    uglify: {
      my_target: {
        files: {
          'dest/output.min.js': ['components/scripts/*.js']
        }
      }
    }


  }); //initConfig
  //grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', [ 'sass',  'uglify' ]);
}; //wapper function

