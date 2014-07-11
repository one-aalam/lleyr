#! /usr/bin/env node


/**
 * Resolve module dependencies
 *
 */

 var lleyr = require('../lib/lleyr');
/**
 * Run the command-line client
 */
 	 lleyr.launch();

     

//Commands

// lleyr create [projectname]
// lleyr init => build + [ --serve ]
//   Initialize a project from boilerplate
//		clean directory, 
//		download bolierplate
//      build and --serve
// lleyr build + [ --serve, --watch, --sync ]
// lleyr doctor
// lleyr psi
// lleyr stats