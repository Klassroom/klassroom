var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var jade = require('gulp-jade');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');

var target = {
  views_src: './client/views/**/*.jade',
  views_dist: './dist/',

  stylesheets_src: './client/stylesheets/**/*.scss',
  stylesheets_dist: './dist/stylesheets/'
}

gulp.task('views', function() {
  return gulp.src(target.views_src)
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest(target.views_dist))
    .pipe(notify('Views done!'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('stylesheets', function() {
  return gulp.src(target.stylesheets_src)
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest(target.stylesheets_dist))
    .pipe(notify('Stylesheets done!'))
    .pipe(browserSync.reload({stream: true}));
})

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'dist/'
    },
    options: {
      reloadDelay: 250
    },
    notify: false
  });
});

gulp.task('default', ['views', 'stylesheets', 'browserSync'], function() {
  gulp.watch(target.views_src, ['views']);
  gulp.watch(target.stylesheets_src, ['stylesheets']);
});