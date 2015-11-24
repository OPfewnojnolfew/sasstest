const gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sasspath = 'app';
/**
 * SASS
 * @param  {[type]}
 * @return {[type]}       [description]
 */
gulp.task('sass', () => {
    return gulp.src(`${sasspath}/main.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(rename(function(path) {
            path.extname = '.css';
            return path;
        }))
        .pipe(gulp.dest(sasspath));
});

gulp.task('watch', function() {
    gulp.watch(`${sasspath}/**/*.scss`, ['sass']);
});

gulp.task('default', ['sass', 'watch']);
