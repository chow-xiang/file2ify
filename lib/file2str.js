'use strict';

module.exports = function(str){
	return "'" + str.replace(/\'/g, "\\'").replace(/\r\n|\r|\n/g, "\\n") + "'" ;
}
