var config = require('./config/grunt');

module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: config.config,
        testem: config.testem,
        browserSync: config.browsersync,
        watch: config.watch,
        clean: config.clean,
        copy: config.copy,
        jshint: config.jshint,
        sass: config.sass,
        browserify: config.browserify,
        replace: config.replace,
        shell: config.shell
    });

    grunt.loadNpmTasks('grunt-contrib-testem');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('build', ['jshint', 'clean', 'sass', 'browserify', 'replace']);
    grunt.registerTask('dev', ['build', 'browserSync', 'watch']);
    grunt.registerTask('test', ['build', 'testem:run:dev']);

    grunt.registerTask('server', ['shell:server']);

};
