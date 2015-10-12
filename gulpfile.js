var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    lost = require('lost'),
    sass = require('gulp-sass');

gulp.task('styles', function(){
    gulp.src(['scss/**/*.scss'])
        .pipe(sass())
        .pipe(sourcemaps.init())
        .pipe(postcss([
            lost(),
            autoprefixer()
        ]))
        .pipe(gulp.dest('css/'))
});

gulp.watch("scss/**/*.scss", ['styles']);

gulp.task('default', ['styles']);