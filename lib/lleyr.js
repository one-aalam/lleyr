var program = require('commander')
	, chalk = require('chalk')
	,  gulp = require('gulp')
	, 	_ = require('lodash')
	,  rimraf = require('rimraf')
	, run_in_sequence = require('run-sequence')

	path = require('path'),
	fs = require('fs')

	,  _inq = require('inquirer')
	,	_cl = function(msg, color){
		console.log(chalk[color] ? chalk[color](msg) : msg);
	}
	
	, Term = require('./term')

	, run = require('./run')
	, boot = require('./bootstrap')

	, Liftoff = require('liftoff')

	, gTask = require(path.join(path.dirname(fs.realpathSync(__filename)), '../gulpfile.js'))
	, pInfo = require('../package');



//@TODO Commands

// lleyr create [projectname]
// lleyr init => build + [ --serve ]
// 		 init can be done with --base to select a different repo
//   Initialize a project from boilerplate
//		clean directory, 
//		download bolierplate
//      build and --serve
// lleyr build + [ --serve, --watch, --sync, --production ]
// Add-ons: --open, --edit, --zip
// lleyr doctor
// lleyr psi
// lleyr stats

	exports.launch = function(){ 
		// Listen for arguments
		var opts = require('nomnom').script('lleyr').parse(),
			_can = ['init', 'create', 'build'];
		
		// 
		var command = opts[0],
			aux		= opts._ ; 
		
		console.log(command);
		// Run/Execute - Special operations
		if(command && _.indexOf(_can, command) > -1){ 
			// Check Flags
			// Runner.run, Runner.trigger
			//run(command);
			// Clean, Download, Extract, Serve
			if(command == 'init'){
				boot.strap(opts);
			}
			
			if(command == 'create'){
				boot.create(opts); 
			}
			/*
			
			if(command == 'build'){
				
			}
			if(command == 'create'){
				
			}*/
		}else{
			_cl('Lleyr nevva met that fella :(..Try --help or -h', 'yellow');
		}
		
	}

	
	

   		   


/**
 * Run/Launch client
 */
    // Prompt
    // 
    /*

	program
		.version('0.0.2')
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

// 

	if(!program.args.length){
		program.help();
	}else{
		
		if(program.init){  
			
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
	}*/