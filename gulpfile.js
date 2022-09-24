const gulp = require('gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser');

gulp.task('build', function() {
    return gulp.src(
        [
            './src/Locations.js',
            './src/Markers.js',
            './src/Map.js',
        ]
    )
        .pipe(concat('script.js'))
        .pipe(terser())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('default', ['build']);

gulp.task('watch', function() {
    gulp.watch('./src/*.js', ['build']);
});
