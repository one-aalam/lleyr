	// I need...
	var gulp  = require('gulp'),
		clean = require('gulp-clean');

	var tmpFolder = '.temp';

	//module.exports = require('require-dir')();

	gulp.task('flush', function(){
		return gulp.src('build',{read: false})
		           .pipe(clean());
	});
	gulp.task('flush:cwd', function(){
		return gulp.src(process.cwd() + '/**/*',{read: false})
		           .pipe(clean({force: true}));
	});
	gulp.task('flush:temp', function(){
		return gulp.src(tmpFolder,{read: false})
		           .pipe(clean({force:true}));
	});


