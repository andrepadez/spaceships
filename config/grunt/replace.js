var config = require('../grunt').config;

var dev = { js: [], css: [] };

config.assets.dev.css.forEach(function(url){
    dev.css.push('<link rel="stylesheet" href="'+url+'">');
});

config.assets.dev.js.forEach(function(url){
    dev.js.push('<script async src="'+url+'"></script>');
});

module.exports = {
    dev: {
        src: ['<%= config.project.root %>index.html'],
        dest: ['<%= config.target.dev %>index.html'],
        replacements: [
            {
                from: '<!--CSS-Placeholder-->',
                to: dev.css.join('\n    ')
            },
            {
                from: '<!--JS-Placeholder-->',
                to: dev.js.join('\n\t')
            }
        ]
    }
};