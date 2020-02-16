'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')

function scss () {
  return gulp.src('./assets/sass/master.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./static/css'))
}

function watch (done) {
  gulp.watch('./assets/sass/**/*.scss', scss)
  done()
}

exports.scss = scss
exports.default = gulp.series(scss, watch)
