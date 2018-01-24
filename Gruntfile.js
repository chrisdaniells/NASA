module.exports = function(grunt) {
        
    grunt.initConfig({
        // Compilation Tools
        sass: {
            default: {
                files: {
                    'dist/css/app.css': 'src/scss/app.scss'
                }
            },
        }
    });
    
    // Load Packages
    grunt.loadNpmTasks('grunt-sass');

    
    // Grunt Tasks
    grunt.registerTask('default', [
        'sass',
    ]);
};