module.exports = function() {
    $.gulp.task('svgspritecopy', function()  {
        return $.gulp.src('./app/icons/sprite/sprite.svg')
        .pipe($.gulp.dest('./build/icons/sprite/'));
    });
};
