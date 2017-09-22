module.exports = function () {
    $.gulp.task('styles:build', () => {
        return $.gulp.src('./app/sass/**/*.+(scss|sass)')
            .pipe($.gp.sass({
                'include css': true
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gp.csscomb())
            .pipe($.gp.csso())
            .pipe($.gulp.dest('./build/css/'))
    });

    $.gulp.task('styles:dev', () => {
        return $.gulp.src('app/sass/**/*.+(scss|sass)')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass({
                'include css': true
            }))
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'Stylus',
                    message: error.message
                };
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gulp.dest('./build/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};
