'use strict';

module.exports = function(str){

	/*主要是为了format不符合json格式的数据*/ 
	return str.replace(/\'/g, '"');
}