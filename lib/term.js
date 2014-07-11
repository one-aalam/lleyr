/**
 * In and Out to terminal
 *
 *
 */

var chalk = require('chalk')
	, _inq = require('inquirer')
	, _prompts = {
		'CAN_CLEAN': {
							type:'confirm',
							name:'default',
							message:'Current directory is not empty. Empty and Continue?',
							default:'yes'
					},
		'CAN_CHOOSE_DEF' :{
								type:'confirm',
								name:'default',
								message:'Proceed with SASS flavour?',
								default:'yes'
		},
		'CHOOSE_FROM' : {
										type:'list',
										name:'target',
										message:'Choose from below targets:',
										choices:['lless','styllus','defaullt']
						}
		
	}

	, _ask = function(q_key, fn){
		_inq.prompt([_prompts[q_key]],fn);
	}

	, _cl = function(msg, color){
		console.log(chalk[color] ? chalk[color](msg) : msg);
	};



exports.log = _cl ;
exports.ask = _ask ;