module.exports = function() {
    $.gulp.task('img:dev', () => {
        return $.gulp.src('./app/img/**/*.{png,jpg,gif,ico}')
            .pipe($.gulp.dest('./build/img/'));
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src('./app/img/**/*.{png,jpg,gif,ico}')
            .pipe($.gp.tinypng('YOUR_API_KEY'))
            .pipe($.gulp.dest('./build/img/'));
    });



    $.gulp.task('images:build', () => {
        return $.gulp.src('./app/img/**/*') 
            .pipe($.gp.cache($.gp.imagemin([ 
                $.gp.imagemin.gifsicle({interlaced: true}),
                $.gp.imagemin.jpegtran({progressive: true}),
                $.gp.imagemin.optipng({optimizationLevel: 5}),
                $.gp.imagemin.svgo({
                    plugins: [
                        {removeViewBox: true},
                        {cleanupIDs: false}
                    ]
                }),
            ])))
            .pipe($.gulp.dest('./build/img')); 
    });

    $.gulp.task('svg:copy', () => {
        return $.gulp.src('./app/img/*.svg')
            .pipe($.gulp.dest('./build/img/'));
    });
};
