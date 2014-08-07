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
					'public/css/home.css': 'src/css/home.scss',
					'public/css/cases/ing.css': 'src/css/cases/ing.scss',
					'public/css/cases/kpmg.css': 'src/css/cases/kpmg.scss',
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
				tasks: ['wrapup']
			}
		},

		wrapup: {
			home: {
				requires: {
					'./src/js/home.js': true
				},
				options: {
					'output': './public/js/home.js'
				}
			},
			ing: {
				requires: {
					'./src/js/ing.js': true
				},
				options: {
					'output': './public/js/ing.js'
				}
			},
			kpmg: {
				requires: {
					'./src/js/kpmg.js': true
				},
				options: {
					'output': './public/js/kpmg.js'
				}
			},
			litedark: {
				requires: {
					'./src/js/litedark.js': true
				},
				options: {
					'output': './public/js/litedark.js'
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
		'wrapup',
		'concurrent:dev'
	]);

	grunt.registerTask('build', [
		'symlink',
		'mkdir',
		'sass:dev',
		'wrapup'
	]);
};
