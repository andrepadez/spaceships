var config = require('../grunt').config;

module.exports = {
    dev: {
        options: {
            browserifyOptions: {
                debug: true
            }
        },
        files: {
            '<%= config.target.dev %>build/<%= pkg.name %>.js': '<%= config.project.root %>**/*.js'
        }
    }

};