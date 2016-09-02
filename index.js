"use strict";

var file2Utils   = require('./lib/');
var through = require("through2");

var utils = {
    'html' : file2Utils.file2str,
    'css'  : file2Utils.file2str,
    'json' : file2Utils.file2json
};


module.exports = function (fileName, opt) {

    var extension       = opt.extension || ['html', 'css', 'json'];
    var extensionFilter = new RegExp('.(' + extension.join('|') + ')$');
    var fileType        = extensionFilter.exec(fileName);

    if ( !fileType ) {
        return through();
    }

    var str        = '';
    var moduleBody = '';

    return through(
        function(chunk, enc, cb){

            str += chunk;

            cb && cb();
        },
        function(cb){
            try{

                var util = utils[ fileType[1] ];

                moduleBody = "module.exports = " + 

                        ( util ? util(str) : utils.file2str(str) )

                     + ";";
                
            }catch(e){

                this.emit('error', e);
                throw e;

            }

            this.push(moduleBody);
            cb && cb();

            /*这种写法不好不可取*/ 
            // this.queue(moduleBody);
            // this.queue(null);
            
        }
    );
}
