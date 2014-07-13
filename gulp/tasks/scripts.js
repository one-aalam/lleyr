/*

gulp.task('scripts', function(){

	gulp.src(vendorFiles.scripts.concat(appFiles.scripts))
		.pipe(plugins.concat('app.js'))
		.pipe(isProduction ? plugins.uglify() : gutil.noop())
		.pipe(plugins.size())
		.pipe(gulp.dest(paths.scripts.dest));
		
});*/