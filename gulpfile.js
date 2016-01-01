var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var ngAnnotate = require('gulp-ng-annotate');
var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');
var jade = require('gulp-jade');
var clean = require('gulp-clean');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

var target = {
  views_src: './public/views/**/*.jade',
  views_dist: './dist/',

  stylesheets_src: './public/stylesheets/**/**/*.scss',
  stylesheets_dist: './dist/stylesheets/',

  dashboard_scripts_src: [
    './public/scripts/dashboard/dashboard.js',
    './public/scripts/dashboard/routes/*.js',
    './public/scripts/dashboard/controllers/*.js',
    './public/scripts/dashboard/filters/*.js',
    './public/scripts/dashboard/directives/*.js',
    './public/scripts/dashboard/services/*.js'
  ],
  scripts_dist: './dist/scripts/',

  image_src: './public/assets/images/*',
  image_dist: './dist/images/'
};

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
});

gulp.task('dashboard-script', function() {
  return gulp.src(target.dashboard_scripts_src)
    .pipe(plumber())
    .pipe(concat('dashboard.js'))
    .pipe(gulp.dest(target.scripts_dist))
    .pipe(notify('Scripts done!'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', ['dashboard-script']);

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './dist',
      index: 'dashboard.html'
    },
    options: {
      reloadDelay: 250
    },
    notify: false
  });
});

gulp.task('images', function () {
  return gulp.src(target.image_src)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(target.image_dist));
});

gulp.task('default', ['views', 'stylesheets', 'scripts', 'browserSync'], function() {
  gulp.watch(target.views_src, ['views']);
  gulp.watch(target.stylesheets_src, ['stylesheets']);
  gulp.watch(target.scripts_src, ['scripts']);
});