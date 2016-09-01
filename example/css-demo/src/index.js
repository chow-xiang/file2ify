var tpl                   = require('./t.css');
var _style                = document.createElement('style');

_style.type='text/css';  

if(_style.styleSheet){         
	_style.styleSheet.cssText = tpl;
} else {  
	_style.innerHTML          = tpl; 
}

document.body.appendChild(_style);

