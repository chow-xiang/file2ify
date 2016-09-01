'use strict';

var fileify    = require('../index.js');
var path       = require('path');
var fs         = require('fs');

var through    = require("through2");
var browserify = require('browserify');

var dest       = require('vinyl-fs').dest;
var source     = require('vinyl-source-stream');  
var buffer     = require('vinyl-buffer');


// var dest       = function(outputPath){

// 	var str = '';

// 	return through(
// 	    function(chunk){
// 	    	str += chunk;
// 	    },
// 	    function(cb){

// 	        process.nextTick(function(){
// 	        	saveFile(outputPath, str);
// 	        });

// 	        cb && cb();
// 	    }
// 	);

// 	function saveFile(outputPath, str){

// 		var name      = path.basename(outputPath);
// 		var buildPath = outputPath.split(name)[0];

//     	if (!fs.existsSync(buildPath)){
// 		    fs.mkdirSync(buildPath);
// 		}

// 		fs.open(outputPath, 'w', function(err, fd){

// 			if (err) throw err;

// 			fs.write(fd, str, function (err) {

// 			  if (err) throw err;
// 			  console.log(name + 'is saved!');

// 			})

// 		});

// 	}
// };


var examples = [
	'html',
	'json',
	'css'
];


for(var i=0;i<examples.length;i++){

	var dirName    = examples[i] + '-demo';
	var srcPath    = path.join(__dirname, './' + dirName + '/src/index.js');
	var outputPath = path.join(__dirname, './' + dirName + '/build/index.js');

	var name      = path.basename(outputPath);
	var buildPath = outputPath.split(name)[0];

	browserify(srcPath).
		/*transform*/ 
		transform( fileify, {
			
		} ).
		/*打包*/ 
		bundle().
		pipe(source(name)).
		pipe(buffer()).
		/*输出*/ 
		pipe( dest(buildPath) );

}
