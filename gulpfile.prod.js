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
    dest: './.build/',
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
    return del([basePaths.dest]);
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
        .pipe(gulp.dest(basePaths.dest));
});


