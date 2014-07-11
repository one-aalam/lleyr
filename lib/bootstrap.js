var Run = require('./run'),
	Term = require('./term'),
	
	path = require('path'),
	fs = require('fs'),
	mkdirp = require('mkdirp'),
	
	_ = require('lodash'),
	rimraf = require('rimraf');
	


/**
 * Create a Lleyr project
 *
 *
 */

exports.create = function(o){
	var _name = o[1] || o.name,
		_dir = process.cwd();
	if(_name){
		Term.log('Creating directory: '+ _name,'yellow');
		mkdirp(_name, function(err){
			if(err){
				// Error
			}else{
				
				try {
  					process.chdir('./' + _name);
  					Term.log('Switched to directory: '+ process.cwd() ,'yellow');
				}
				catch (err) {
  					Term.log('chdir: ' + err);
				}
				
			}
		});
	}else{
		Term.log('Please provide a name for your project','red');
	}
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

exports.strap = strap = function(fn){
	// Has Files...
	var hasFiles = function(dir){
			// Check current directory
					var dirCurr   = fs.readdirSync(dir),
						filesCurr = _.filter(dirCurr, function(file){
								return file.substring(0,1) != '.' ;
						});
					return filesCurr.length;
		
		}('.');
		
	// Directory have files, have a clean start...
		if(hasFiles){
			Term.ask('CAN_CLEAN', function(answer){
						if(answer.default){
							
							// Clean directory
							Term.log('Cleaning current directory', 'grey');
						    Run('flush:cwd');
							
							Term.ask('CAN_CHOOSE_DEF',function(answer){
								if(answer.default){
									
									// Download starter
									Term.log('Proceeding with SASS powered starter template', 'magenta');
									Run('download');
									
									
								}else{
									
								}
							});
							
						}else{
							Term.log('Nothing initialized', 'magenta');
						}
			});
		}else{
			Term.ask('CAN_CHOOSE_DEF',function(answer){
								if(answer.default){
									
									// Download starter
									Term.log('Proceeding with SASS powered starter template', 'magenta');
									Run('download');
									fn();
									
								}else{
									
								}
			});
		}
}