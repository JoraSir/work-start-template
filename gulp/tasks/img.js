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
            .pipe($.gp.image({
                pngquant: false,
                optipng: true,
                zopflipng: true,
                advpng: true,
                jpegRecompress: true,
                jpegoptim: true,
                mozjpeg: false,
                gifsicle: true,
                svgo: {
                    enable: ['removeViewBox'], 
                    disable: ['cleanupIDs']
                },
                concurrent: 10

            }))
            .pipe($.gulp.dest('./build/img')); 
    });


    $.gulp.task('svg:copy', () => {
        return $.gulp.src('./app/img/*.svg')
            .pipe($.gulp.dest('./build/img/'));
    });
};
