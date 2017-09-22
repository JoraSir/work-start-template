global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    fs: require('fs'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});


$.gulp.task('dev', $.gulp.series(
    'clean',
    $.gulp.parallel('svg','styles:dev', 'pug', 'libsJS:dev', 'js:copy', 'img:dev', 'fonts','svg:copy'),
    'svgspritecopy'));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel('styles:build', 'pug', 'libsJS:build', 'js:copy', 'svg', 'images:build', 'fonts'),
    'svgspritecopy'));


$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel(
        'watch',
        'serve'
    )
));
