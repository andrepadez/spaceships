var fs = require('fs');
var path = require('path');

var config = module.exports = {
    config: {
        // js and css files to be included in the build
        assets   :  {
            dev: {
                css  : [
                    '<%= config.target.dev %>/build/compiled_layout.css'
                ], 
                js: [
                    'dist/dev/build/<%= pkg.name %>.js'
                ]
            }
        },

        // where the development takes place
        project: {
            root: 'project/'
        },

        // production build output folders
        target: { 
            dev   : 'dist/dev/'
        }
    }
};
var modulePath = path.join(__dirname, './grunt'); 

fs.readdirSync(modulePath).forEach(function(file){
    config[file.slice(0, -3)] = require(path.join(modulePath, file));
});

