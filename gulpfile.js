var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('dev', ['less'], function () {
	gulp.watch(['app/less/*.less'], ['less']);
});

gulp.task('less', function () {
	return gulp.src('./app/less/*.less')
	.pipe(less({
		paths: [ path.join(__dirname, 'less', 'includes') ]
	}))
	.pipe(gulp.dest('./app/css'));
});

gulp.task('default', ['less']);