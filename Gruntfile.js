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
					create: ['public/css/', 'public/js/']
				}
			}
		},

		nodemon: {
			dev: {}
		},

		sass: {
			dev: {
				files: {
					'public/css/site.css': 'src/css/site.scss',
					'public/css/cases/litedark.css': 'src/css/cases/litedark.scss'
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
			},
			js: {
				files: [
					'src/js/*.js',
					'src/js/**/*.js'
				],
				tasks: ['wrapup:dev']
			}
		},

		wrapup: {
			dev: {
				requires: {
					'./src/js/site.js': true
				},
				options: {
					'output': './public/js/site.js'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-symlink');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-mkdir');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-wrapup');

	grunt.registerTask('default', [
		'symlink',
		'mkdir',
		'sass:dev',
		'wrapup:dev',
		'concurrent:dev'
	]);
};
