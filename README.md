# This is a simple loader for browserify, like webpack.

**file2ify** is extending features as much as possible like **file-loader**.

E.g:

    var tpl = require('./tpl.html');
    var obj = {
        hello : 'hello'
    }
    tpl.replace(/\$\{test\}/g, obj.hello);
    
It's to require a html file, rendering in js file.

**Setup:**

    npm install file2ify --production

**use like :**

    bundle.transform( file2ify, {
        extension : ['html', 'css', 'json'] //be able to require file's type
    } ).


or:

    "browserify": {
        "transform": [
            ["file2ify", { "extension" : ['html', 'css', 'json'] }]
        ]
    }

**examples :**

    npm run example

**Important:** 
1, It's updating now, so can be able to require file's type is `html`, `css`, `json`.
2, `css` return `String`.




 





