'use strict';

module.exports = function(grunt){
	grunt.initConfig({
		concurrent: {
			dev: {
				tasks: ['nodemon', 'watch'],
				options: {
					logConcurrentOutput: true
				}
			}
		},

		mkdir: {
			all: {
				options: {
					create: ['public/css/']
				}
			}
		},

		nodemon: {
			dev: {}
		},

		sass: {
			dev: {
				files: {
					'public/css/site.css': 'src/css/site.scss'
				}
			}
		},

		symlink: {
			options: {
				overwrite: false
			},
			explicit: {
				files: [
					{ src: 'src/fonts', dest: 'public/fonts' },
					{ src: 'src/img', dest: 'public/img' }
				]
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

	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-symlink');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-mkdir');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default', [
		'symlink',
		'mkdir',
		'sass:dev',
		'concurrent:dev'
	]);
};
