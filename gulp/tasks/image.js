var gulp  = require('gulp'),
	clean = require('gulp-clean'),
	config = require('../config');

/*
	gulp.task('images:min', function() {
	 	return gulp.src(pathSrc.images)
				.pipe(_g.imagemin({optimizationLevel: 5}))
				.pipe(gulp.dest('build/img'));
	});*/

/*
	Sprite Generator
*/
/*
gulp.task('sprite', function () {
	var spriteData = gulp.src(config.paths.sprite.src).pipe(plugins.spritesmith({
		imgName: config.settings.sprite.imgName,
		cssName: config.settings.sprite.cssName,
		imgPath: config.settings.sprite.imgPath,
		cssOpts: {
			functions: false
		},
		cssVarMap: function (sprite) {
			sprite.name = 'sprite-' + sprite.name;
		}
	}));
	spriteData.img.pipe(gulp.dest(config.paths.images.dest));
	spriteData.css.pipe(gulp.dest(config.paths.styles.src));
});*/