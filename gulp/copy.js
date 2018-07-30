var gulp = require('gulp');

gulp.task('copy', function() {
  return gulp.src(['src/**/*', '!src/sass/**', '!src/sass', '!src/js', '!src/js/**'])
    .pipe(gulp.dest('docs/'))
});

gulp.task('copy:watch', function () {
  gulp.watch('src/**/*', ['copy']);
});