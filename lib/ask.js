var _inq = require('inquirer');

// @Expose API
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
		},
		forChoices = function(fn, next){
			_inq.prompt([{
										type:'list',
										name:'target',
										message:'Choose from below targets:',
										choices:['lless','styllus','defaullt']
									}], fn);
		}
};

module.exports = Ask;