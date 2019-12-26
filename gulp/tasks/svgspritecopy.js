module.exports = function() {
    $.gulp.task('svgspritecopy', function()  {
        return $.gulp.src('./app/icons/sprite/sprite.svg')
        .pipe($.gulp.dest('./dist/build/icons/sprite/'));
    });
};
