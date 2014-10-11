module.exports = {
    // development mode
    dev: {
        options: {
            style: 'expanded'
        },
        files: {
            '<%= config.target.dev %>/build/compiled_layout.css': '<%= config.project.root %>layout.scss'
        }
    }
};