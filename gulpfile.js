var gulp = require('gulp'),
    minify = require('gulp-minifier'),
    htmlhint = require("gulp-htmlhint");

gulp.task('pack', function() {
  return gulp.src('www/src/**/*')
    .pipe(minify({
      minify: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      minifyJS: true,
      minifyCSS: true
    }))
    .pipe(gulp.dest('www/release'));
});

gulp.task('html-lint', function() {
  return gulp.src('www/src/*.html')
    .pipe(htmlhint())
    .pipe(htmlhint.failReporter());
});