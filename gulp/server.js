var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "docs/"
        },
        files: ['docs/*.html','docs/css','docs/img/*.*','docs/js'],
        notify: false,
        open: false
    });
});