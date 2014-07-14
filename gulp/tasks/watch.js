/*
gulp.task('default', function(){
		Server.start();
		gutl.log(gutl.colors.cyan("See, I can run without params..."));
		
		// Watch .html files
        gulp.watch(pathSrc.html);

        // Watch .scss files
        gulp.watch(pathSrc.styles, ['styles']);

        // Watch .js files
        gulp.watch(pathSrc.scripts, ['scripts']);

        // Watch image files
        gulp.watch(pathSrc.images, ['images']);
	});*/
/*
var changeEvent = function(evt) {
	gutil.log('File', gutil.colors.cyan(evt.path.replace(new RegExp('/.*(?=/' + basePaths.src + ')/'), '')), 'was', gutil.colors.magenta(evt.type));
};



gulp.task('watch', ['sprite', 'css', 'scripts'], function(){
	gulp.watch(appFiles.styles, ['css']).on('change', function(evt) {
		changeEvent(evt);
	});
	gulp.watch(paths.scripts.src + '*.js', ['scripts']).on('change', function(evt) {
		changeEvent(evt);
	});
	gulp.watch(paths.sprite.src, ['sprite']).on('change', function(evt) {
		changeEvent(evt);
	});
});*/
