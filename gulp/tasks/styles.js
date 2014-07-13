
/*
gulp.task('css', function(){

	var sassFiles = gulp.src(appFiles.styles)
	.pipe(plugins.rubySass({
		style: sassStyle, sourcemap: sourceMap, precision: 2
	}))
	.on('error', function(err){
		new gutil.PluginError('CSS', err, {showStack: true});
	});

	return es.concat(gulp.src(vendorFiles.styles), sassFiles)
		.pipe(plugins.concat('style.min.css'))
		.pipe(plugins.autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4', 'Firefox >= 4'))
		.pipe(isProduction ? plugins.combineMediaQueries({
			log: true
		}) : gutil.noop())
		.pipe(isProduction ? plugins.cssmin() : gutil.noop())
		.pipe(plugins.size())
		.pipe(gulp.dest(paths.styles.dest));
});*/
