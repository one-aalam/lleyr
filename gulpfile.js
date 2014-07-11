// load gulp
var gulp = require('gulp'),
	gutl = require('gulp-util'),
	ghdown = require('github-download'),
	rimraf = require('rimraf'),
	run_in_sequence = require('run-sequence'),
	clean = require('gulp-clean'),
	chalk = require('chalk'),
	copy = require('ncp').ncp, 
	 // _g = require('gulp-load-plugins')(),
	
	tmpFolder = '.temp',
	
	g_sass = require('gulp-sass'),
	
	
	path = require('path'),
	  lr = require('tiny-lr'),
	  xp = require('express'),
	c_lr = require('connect-livereload')

 wiredep = require('wiredep').stream;

var PORT_EXPRESS = 4000,
	PORT_LR      = 35729,
	PATH_EXPRESS = __dirname,
	
	PATH_BUILD = 'build',
	PATH_TEST  = 'test',
	
	PATH_SRC   = 'client';



var pathSrc = {
			scripts: ['assets/js/**/*.coffee', '!client/external/**/*.coffee'],
	
			styles_sass:['assets/sass/**/*.scss', 'assets/css/**/*.scss'], 
			styles_less:['assets/less/**/*.less', 'assets/css/**/*.less'], 
			styles_styl:['assets/styl/**/*.styl', 'assets/css/**/*.styl'],
	
  			images: 'client/img/**/*',
			html: ['*.html', 'client/**/*.html'],
	
			styles_dep: ['client/components/**/*.css'],
			script_dep: ['client/components/**/*.js']
};

// Basic wrapper to encapsulate server setup
// and change notification utility
var Server = (function(){
	
	var app_xp = xp(),
		app_lr = lr();
	
	function Express(){
			app_xp.use(xp.query());
			app_xp.use(c_lr());
			app_xp.use(xp.static(PATH_EXPRESS));
		    app_xp.listen(PORT_EXPRESS, function(){
				gutl.log('Express: => ' + PORT_EXPRESS);
			});
		    return app_xp;
	}
	
	function TinyLiveReload(){
		 app_lr.listen(PORT_LR);
		 gutl.log('Tiny LR: => ' + PORT_LR);
		 return app_lr;
	}
	
	
	return {
		// Start Express and LiveReload server
		// @TODO Make more concise
		start: function(){
			Express();
			TinyLiveReload();
		},
		// Pass path information to LiveReload
		// server in order to refresh those files
		notify: function(event){
			var file = path.relative(PATH_EXPRESS, event.path); console.log(file);
				app_lr.changed({
					body:{
						files: [file]	
					}
				});
		}
	};
	
})();

	
	// Task: Lint
	gulp.task('lint', function() {
	    return gulp.src(pathSrc.scripts)
	        .pipe(jshint())
	        .pipe(jshint.reporter('default'));
	});


	// Task: Scripts
	gulp.task('scripts', function(){
		return gulp.src(pathSrc.scripts)
		   		   .pipe(_g.coffee())
				   .pipe(_g.concat('all.js'))
				   .pipe(gulp.dest('build/js'))
				   .pipe(_g.uglify())
				   .pipe(_g.rename('all.min.js'))
				   .pipe(gulp.dest('build/js'))
				   .on('error', gutl.log);
	});

	// Task: Styles
	gulp.task('styles', function(){ console.log('sassing..');
		return gulp.src(pathSrc.styles_sass)
		     	   .pipe(g_sass())
				   .pipe(gulp.dest(process.cwd() + '/build/css'));
	});
	gulp.task('styles:less', function(){
		return gulp.src(pathSrc.styles_less)
		     	   .pipe(_g.less())
				   .pipe(gulp.dest('build/css'));
	});
	gulp.task('styles:styl', function(){
		return gulp.src(pathSrc.styles_styl)
		     	   .pipe(_g.stylus({errors: true}))
				   .pipe(gulp.dest('build/css'));
	});

	//Task: Images
	gulp.task('images', function() {
	 	return gulp.src(pathSrc.images)
				.pipe(_g.imagemin({optimizationLevel: 5}))
				.pipe(gulp.dest('build/img'));
	});

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




	// Task: Bower/wiredep
	gulp.task('bower', function() {
  		
		gulp.src('client/css/*.css')
			.pipe(wiredep({
				directory: 'client/components',
				ignorePath: 'client/components/'
			}))
        	.pipe(gulp.dest('build/css'));
		
		gulp.src('client/js/*.js')
			.pipe(wiredep({
				directory: 'client/components',
				ignorePath: 'client/components/'
			}))
        	.pipe(gulp.dest('build/js'));

    	gulp.src(pathSrc.html)
			.pipe(wiredep({
				directory: 'client/components',
				ignorePath: 'client/'
			}))
        	.pipe(gulp.dest('build'));
	});

	// Task: Default
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
	});

	// clean, lint, sass, script, watch 

	// Task: Server start
    gulp.task('serve', function(){
		Server.start();
	});

	// Typical process of downloading something
	gulp.task('download',['flush:temp'], function(){
		
		// Check repo pattern before downloading
		console.log('Downloading boilerplate to' +   tmpFolder);
		ghdown({
			user:'one-aalam',
			repo:'lleyr-sass',
			ref:'master'
		}, // Prepare config separately
		tmpFolder
			  ).on('dir', function(dir){
				console.log(dir);
			}).on('file', function(file){
				console.log(file);
			}).on('error', function(err){
				console.log(err);
			}).on('end', function(){
				console.log(chalk.green('✔ Download complete!'));
				console.log(chalk.grey('Cleaning up...'));
				copy(tmpFolder, process.cwd(), function(err){
					if(err){
						console.log(err);
					}else{
						run_in_sequence('flush:temp', function(){
							finalize();
						});
					}
				});
			});
	});

	function finalize(){
		
	}

	//@TODO
	// Use gulp-changed, gulp-bower-files/ wiredep
