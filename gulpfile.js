const gulp = require('gulp');
const eslint = require('gulp-eslint');
const gulpIf = require('gulp-if');


function isFixed(file) {
  return file.eslint != null && file.eslint.fixed;
}

gulp.task('lint', function () {
  return gulp.src(['./client/src/components/*.jsx','!node_modules/**'])
      .pipe(eslint({fix:true}))
      .pipe(eslint.format())
      .pipe(gulpIf(isFixed, gulp.dest('../test/fixtures')))
      .pipe(eslint.failAfterError());
});

gulp.task('default', ['lint'], function () {});