module.exports = {
    html: {
        expand: true,
        cwd: '<%= config.project.root %>',
        src: ['**/*.html'],
        dest: '<%= config.target.dev %>'
    }
};