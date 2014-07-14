var gulp  = require('gulp'),
	gutil = require('gulp-util'),
	es	  = require('event-stream'),
	concat = require('gulp-concat'),
	sass = require('gulp-ruby-sass'),
	less = require('gulp-less'),
	styl = require('gulp-stylus')
	cssmin = require('gulp-cssmin'),
	combineMQ = require('gulp-combine-media-queries'),
	size = require('gulp-size'),
	autoprefix = require('gulp-autoprefixer'),
	config = require('../config');
// Config
var isProduction = false;


	gulp.task('styles:sass', function(){ 
		console.log('Sassing your piece of art...');
		var srcSASS=  gulp.src(config.src.sass)
		     	   .pipe(sass({
					   style:'expanded', 
					   sourcemap: true, 
					   sourcemapPath: '../scss', 
					   trace: false,
					   precision: 2
				   }));
		es.concat(gulp.src(''), srcSASS)
		  //.pipe(concat('styles.min.css'))
		  .pipe(autoprefix(
			  			'last 2 version', 
			  				'safari 5', 
			  				'ie 8', 'ie 9', 
			  				'opera 12.1', 
			  				'ios 6', 
			  				'android 4', 
			  				'Firefox >= 4'
		  		))
			.pipe(isProduction ? combineMQ({
				log: true
			}) : gutil.noop())
			.pipe(isProduction ? cssmin() : gutil.noop())
			.pipe(size())
			.pipe(gulp.dest(config.paths.styles.dest));
	});

	/*
	gulp.task('styles:less', function(){
		console.log('Lessing your piece of art...');
		return gulp.src(config.src.less)
		     	   .pipe(less())
				   .pipe(gulp.dest(config.paths.styles.dest));
	});
	gulp.task('styles:styl', function(){
		console.log('Stylusing your piece of art...');
		return gulp.src(config.src.styl)
		     	   .pipe(_g.stylus({errors: true}))
				   .pipe(gulp.dest(config.paths.styles.dest));
	});*/

	gulp.task('css',['styles:sass'], function(){
		console.log('Styled...Totally!');
	});
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
