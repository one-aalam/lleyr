var gulp = require('gulp');

	// Task: Clean
	gulp.task('flush', function(){
		return gulp.src('build',{read: false})
		           .pipe(_g.clean());
	});
	gulp.task('flush:cwd', function(){
		return gulp.src(process.cwd() + '/**/*',{read: false})
		           .pipe(clean({force: true}));
	});
	gulp.task('flush:temp', function(){
		return gulp.src(tmpFolder,{read: false})
		           .pipe(clean({force:true}));
	});
