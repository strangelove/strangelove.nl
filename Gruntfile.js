'use strict';

module.exports = function(grunt){
	grunt.initConfig({
		sass: {
			dev: {
				files: {
					'public/css/site.css': 'src/css/site.scss'
				}
			}
		},

		watch: {
			css: {
				files: [
					'src/css/*.scss',
					'src/css/**/*.scss'
				],
				tasks: ['sass:dev']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default', [
		'sass:dev',
		'watch'
	]);
};
