var gulp = require('gulp');

module.exports = function(task){
	gulp.start.apply(gulp,[task]);
}