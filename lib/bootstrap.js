var ask = require('./ask'),
	run = require('./run'),
	
	path = require('path'),
	fs = require('fs'),
	chalk = require('chalk'),
	_ = require('lodash'),
	rimraf = require('rimraf'),
	
	_inq = require('inquirer'),
	_cl = function(msg, color){
		console.log(chalk[color] ? chalk[color](msg) : msg);
	};

function hasFiles(){
	// Check current directory
	var dirCurr   = fs.readdirSync('.'),
		filesCurr = _.filter(dirCurr, function(file){
								return file.substring(0,1) != '.' ;
					}),
	return filesCurr.length;
}

/**
 * Create a Lleyr project
 *
 *
 */

exports.create = function(){
	
}

/**
 * Download a starter pack
 *
 *
 */

exports.download = download = function(){
	
}

/**
 * Intialize a project
 *
 */

exports.strap = strap = function(){
	// Has Files...
	var hasFiles = hasFiles();
			
		if(hasFiles){
			ask.toClean(function(answer){
						if(answer.default){
							
							_cl('Cleaning current directory', 'grey');
						    run('flush:cwd');
							
							ask.toInit(function(answer){
								if(answer.default){
									_cl('Proceeding with SASS powered starter template', 'magenta');
									run('download');
								}else{
									
								}
							});
							
						}else{
							_cl('Nothing initialized', 'magenta');
						}
			});
		}
}