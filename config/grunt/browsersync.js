module.exports = {
    bsFiles: {
        src : ['<%= config.target.dev %>**'], 
    },
    options: {
        watchTask: true,
        server: {
            baseDir: './',
            index: '<%= config.target.dev %>index.html'
        }
    }
};