module.exports = function() {
    $.gulp.task('libsJS:dev', () => {
        return $.gulp.src([
            'app/libs/jquery/dist/jquery.min.js', 
            'app/libs/svg4everybody/dist/svg4everybody.min.js'
        ])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('./dist/build/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src([
            'app/libs/jquery/dist/jquery.min.js',
            'app/libs/svg4everybody/dist/svg4everybody.min.js' 
    ])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gp.uglifyjs())
            .pipe($.gulp.dest('./dist/build/js/'));
    });

    $.gulp.task('js:copy', () => {
        return $.gulp.src(['./app/js/*.js',
                           '!./app/js/libs.min.js'])
            .pipe($.gulp.dest('./dist/build/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};
