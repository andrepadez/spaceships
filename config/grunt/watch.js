module.exports = {
    js: {
        files: '<%= config.project.root %>**/*.js',
        tasks: ['browserify:dev', 'browserSync:reload']
    },
    css: {
        files: '<%= config.project.root %>**/*.scss',
        tasks: ['sass:dev']
    },
    html: {
        files: '<%= config.project.root %>**/*.html',
        tasks: ['clean:html', 'copy:html', 'replace:dev']
    }
};