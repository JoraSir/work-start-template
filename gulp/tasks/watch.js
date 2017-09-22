module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./app/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./app/sass/**/*.+(scss|sass)', $.gulp.series('styles:dev'));
        $.gulp.watch('./app/img/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('./app/js/**/*.js', $.gulp.series('libsJS:dev', 'js:copy'));
        $.gulp.watch(['./app/img/**/*.{png,jpg,gif}',
                     './app/img/content/**/*.{png,jpg,gif}'], $.gulp.series('img:dev'));
    });
};