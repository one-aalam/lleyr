var basePaths = {
	src: 'assets/',
	dest: 'build/',
	temp:'.temp/',
	bower: 'bower_components/'
};
var paths = {
	images: {
		src: basePaths.src + 'images/',
		dest: basePaths.dest + 'images/min/'
	},
	scripts: {
		src: basePaths.src + 'js/',
		dest: basePaths.dest + 'js/min/'
	},
	styles: {
		src: basePaths.src + 'css/',
		src_sass: basePaths.src + 'sass/',
		src_less: basePaths.src + 'less/',
		src_styl: basePaths.src + 'styl/',
		dest: basePaths.dest + 'css/min/'
	},
	sprite: {
		src: basePaths.src + 'images/sprite/*'
	}
};

var appFiles = {
	sass: [paths.styles.src + '**/*.scss', paths.styles.src_sass + '**/*.scss' ],
	less: [paths.styles.src + '**/*.less', paths.styles.src_less + '**/*.scss'],
	styl: [paths.styles.src + '**/*.styl', paths.styles.src_styl + '**/*.scss'],
	
	coffee: [paths.scripts.src + '**/*.coffee']
};

var vendorFiles = {
	styles: '',
	scripts: ''
};

var spriteConfig = {
	imgName: 'sprite.png',
	cssName: '_sprite.scss',
	imgPath: paths.images.dest.replace('public', '') + 'sprite.png'
};

module.exports = {
		base: basePaths,
		src: appFiles,
		paths: paths,
		settings:{
			sprite: spriteConfig,
			sass:{
				style:'compact'
			},
			styleExt:'sass'
		}
};