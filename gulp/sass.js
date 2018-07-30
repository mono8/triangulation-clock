var gulp         = require('gulp');
var sass         = require('gulp-sass');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var csso = require('gulp-csso');
 
gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.{sass, scss}')
    .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(csso())
    .pipe(gulp.dest('docs/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('src/sass/**/*.*', ['sass']);
});