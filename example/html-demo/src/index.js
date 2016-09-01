var tpl = require('./tpl.html');
var obj = {
	hello : 'hello'
}
document.querySelector('#app').innerHTML = tpl.replace(/\$\{test\}/g, obj.hello);

