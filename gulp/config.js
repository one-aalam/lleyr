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
		dest: basePaths.dest + 'css/min/'
	},
	sprite: {
		src: basePaths.src + 'images/sprite/*'
	}
};

var appFiles = {
	styles: [paths.styles.src + '**/*.scss'],
	scripts: [paths.scripts.src + '**/*.coffee']
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