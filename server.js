'use strict';

const browserSync = require('browser-sync');

browserSync({
	notify: false,
	port: 8000,
	ui: {
		port: 8001
	},
	files: ['./test/**/*.*'],
	server: {
		baseDir: './',
		directory: true
	}
});