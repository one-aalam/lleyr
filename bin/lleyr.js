#! /usr/bin/env node

var program = require('commander')
	, chalk = require('chalk')
	,  gulp = require('gulp')
	,  path = require('path')
	,	 fs = require('fs')
	, 	_ = require('lodash')
	,  rimraf = require('rimraf')
	, run_in_sequence = require('run-sequence')

	,  _inq = require('inquirer')
	,	_cl = function(msg, color){
		console.log(chalk[color] ? chalk[color](msg) : msg);
	}

	, gTask = require(path.join(path.dirname(fs.realpathSync(__filename)), '../gulpfile.js'))
	, pInfo = require('../package');


    // Prompt

	program
		.version('0.0.1')
		.usage('[options] <keywords>')
		.option('init', 'Bootstrap a new project')
		.option('-s, --serve', 'Open something')
		.option('-b, --build', 'Build something')
		.option('-t, --task', 'Run a task')
		.option('-p, --package', 'Package')
		.parse(process.argv);


    // Confirmation


	// Filesystem



	// Ask
      
	 var Ask = {
		 
	     toClean: function(fn, next){
				_inq.prompt([{
							type:'confirm',
							name:'default',
							message:'Current directory is not empty. Empty and Continue?',
							default:'yes'
						}],fn);
		 },
		 toInit: function(fn, next){
			 _inq.prompt([{
								type:'confirm',
								name:'default',
								message:'Proceed with SASS flavour?',
								default:'yes'
							}], fn);
		}
	 };

// build, production, serve, edit, nolr, onlyassets, init

	if(!program.args.length){
		program.help();
	}else{
		
		if(program.init){  console.log('hiya');
			
			// Check current directory
			var dirCurr   = fs.readdirSync('.'),
				filesCurr = _.filter(dirCurr, function(file){
								return file.substring(0,1) != '.' ;
							}),
				hasFiles = filesCurr.length;
			
			if(hasFiles){
				Ask.toClean(function(answer){
						if(answer.default){
							
							_cl('Cleaning current directory', 'grey');
						     gulp.start.apply(gulp,['flush:cwd']);
							
							Ask.toInit(function(answer){
								if(answer.default){
									_cl('Proceeding with SASS powered', 'magenta');
									gulp.start.apply(gulp,['download']);
								}else{
									_inq.prompt([{
										type:'list',
										name:'target',
										message:'Choose from below targets:',
										choices:['lless','styllus','defaullt']
									}], function(answer){
										console.log(answer);
									});
								}
							});
							
						}else{
							_cl('Nothing initialized', 'magenta');
						}
				});
			}else{
				
					gulp.start.apply(gulp,['download']);
								
			}
			
			
			
			//_cl('Bootstrap a new project!', 'grey');
			
		}
		if(program.serve){
			_cl('Server started successfully', 'green');
			gulp.start.apply(gulp,['download']);
		}
		
		if(program.package){
			_cl(pInfo.version);
		}
		
		if(program.task){
		}
		
		
		
		if(program.build){
			_cl('Server shut gracefully', 'red');
		}
	}