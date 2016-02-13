/**
 * Created by Poka on 2/13/2016.
 */
var gulp = require('gulp');
//var coffee = require('gulp-coffee');
//var concat = require('gulp-concat');
//var uglify = require('gulp-uglify');
//var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var templateCache = require('gulp-angular-templatecache');

var basePaths = {
    src: './app/',
    destBuild: './.build/',
    destProd: './.prod/',
    bowerSrc: 'app/bower_components/'
};


var paths = {
    jsUsed: [],
    cssUsed: []
}

/*--------------------------------------------------
 * CLEAN
 *--------------------------------------------------*/
gulp.task('clean', function () {
    return del([basePaths.destBuild]);
});


gulp.task('default', ['clean', 'bower.js', 'bower.css', 'proxy'], function () {
    return gulp.src([
            './app/assets/**/*.*',
            './app/views/**/*.*',
            './app/*.*',
            './app/.htaccess',
            '!./app/assets/**/*.scss',
            '!./app/assets/**/*.map',
        ], {base: basePaths.src})
        .pipe(gulp.dest(basePaths.destBuild));
});

gulp.task('bower.js', ['bower.vendor.all'], function () {
    return gulp.src([
            './app/bower_components/**/*.min.js',
            '!./app/bower_components/**/demos/**',
            '!./app/bower_components/**/modules/**',
            '!./app/bower_components/**/documentation/**',
            '!./app/bower_components/**/examples/**',
            //'!./app/bower_components/**/*.min.js',
            '!./app/bower_components/**/*index.js',
        ], {base: basePaths.src})
        .pipe(gulp.dest(basePaths.destBuild));
});

gulp.task('bower.css', function () {
    return gulp.src([
            './app/bower_components/**/*.css',
            '!./app/bower_components/**/demos/**',
            '!./app/bower_components/**/modules/**',
            '!./app/bower_components/**/documentation/**',
            '!./app/bower_components/**/examples/**',
            '!./app/bower_components/**/*index.css',
        ], {base: basePaths.src})
        .pipe(gulp.dest(basePaths.destBuild));
});

gulp.task('bower.vendor.all', function () {
    return gulp.src([
            './app/bower_components/slider-revolution/src/**/*.*'
        ], {base: basePaths.src})
        .pipe(gulp.dest(basePaths.destBuild));
});

gulp.task('proxy', function () {
    return gulp.src([
            './app/proxy/**/*.*',
            './app/proxy/*.*',
            './app/proxy/.htaccess',
        ], {base: basePaths.src})
        .pipe(gulp.dest(basePaths.destBuild));
});

gulp.task('htmlTemplate', function () {
    return gulp.src([
            './app/views/**/*.html',
        ])
        .pipe(templateCache({
            standalone: true,
            base: function (file) {
                var filename = /[^/]*$/.exec( file.relative )[0];
                return 'views/' + filename;
            }
        }))
        .pipe(gulp.dest(basePaths.destBuild));
});


