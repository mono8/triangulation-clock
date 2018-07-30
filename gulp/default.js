var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function() {
  runSequence('copy',
              'sass',
              'scripts',
              'server',
              'copy:watch',
              'sass:watch',
              'scripts:watch'
            );
});