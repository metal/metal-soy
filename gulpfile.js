'use strict';

var compileSoy = require('metal-tools-soy/lib/pipelines/compileSoy');
var gulp = require('gulp');
var metal = require('gulp-metal');
var replace = require('gulp-replace');

var options = {
	bundleFileName: 'soy.js',
	moduleName: 'metal-soy',
	soyDest: 'test',
	soySrc: ['test/**/*.soy']
};
metal.registerTasks(options);

gulp.task('soy', function() {
	return gulp.src('test/**/*.soy')
		.pipe(compileSoy(options))
		.pipe(replace('metal-soy', '../..'))
		.pipe(gulp.dest('test'));
});
