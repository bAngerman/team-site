var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

//sass
gulp.task('sass', function() {
  gulp.src(['css/*.scss'])
    .pipe(sass({outputStyle: 'compressed'}))
    .on('error', swallowError)
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/css/'));
  
  gulp.src(['css/*.scss'])
    .pipe(sass({outputStyle: 'expanded'}))
    .on('error', swallowError)
    .pipe(gulp.dest('css/'));
});

//js 
gulp.task('js', function() {
  gulp.src(['js/*.js'])
  .pipe(uglify())
  .on('error', swallowError)
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('dist/js/'));
});

gulp.task('watch', function() {
  gulp.watch('js/*.js', ['js']);
  gulp.watch('css/*.scss', ['sass']);
});

// no break on error
function swallowError (error) {

  // If you want details of the error in the console
  console.log(error.toString());

  this.emit('end');
}


//default
gulp.task('default', function() {
  gulp.start('sass');
  gulp.start('js');
});