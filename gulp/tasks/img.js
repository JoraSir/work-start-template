module.exports = function() {
    $.gulp.task('img:dev', () => {
        return $.gulp.src('./app/img/**/*.{png,jpg,gif,ico}')
            .pipe($.gulp.dest('./dist/build/img/'));
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src('./app/img/**/*.{png,jpg,gif,ico}')
            .pipe($.gp.tinypng('YOUR_API_KEY'))
            .pipe($.gulp.dest('./dist/build/img/'));
    });

   
    $.gulp.task('images:build', () => {
        return $.gulp.src('./app/img/**/*') 
        .pipe($.gp.imagemin([
            $.gp.imagemin.gifsicle({interlaced: true}),
            $.gp.imagemin.jpegtran({progressive: true}),
            $.imageminJpegRecompress({loops: 1, quality: "low"}),
            $.gp.imagemin.svgo({removeViewBox: true}),
            $.gp.imagemin.optipng({optimizationLevel: 5}),
            $.pngquant({quality: [0.65,0.7], speed: 5})
        ]))
            
            .pipe($.gulp.dest('./dist/build/img')); 
    });


    $.gulp.task('svg:copy', () => {
        return $.gulp.src('./app/img/*.svg')
            .pipe($.gulp.dest('./dist/build/img/'));
    });
};
