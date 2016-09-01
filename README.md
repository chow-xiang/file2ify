# This is a simple loader for browserify, like webpack.
---
**fileify** is extending features as much as possible like **file-loader**.

E.g:

    var tpl = require('./tpl.html');
    var obj = {
        hello : 'hello'
    }
    tpl.replace(/\$\{test\}/g, obj.hello);
    
It's to require a html file, rendering in js file.

**Setup:**
use like : 

    bundle.transform( fileify, {
        extension : ['html', 'css', 'json'] //be able to require file's type
    } ).

or: 

    browserify -t jadeify entry.js -o bundle.js

or:

    "browserify": {
        "transform": [
            ["fileify", { "extension" : ['html', 'css', 'json'] }]
        ]
    }


**Important:** 
1, It's updating now, so can be able to require file's type is `html`, `css`, `json`.
2, `css` return `String`.




 





