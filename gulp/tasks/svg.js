module.exports = function() {
    $.gulp.task('svg', () => {
        return $.gulp.src('app/icons/svg/*.svg')
            .pipe($.gp.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe($.gp.cheerio({
                run: function($) {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                },
                parserOptions: { xmlMode: true }
            }))
            .pipe($.gp.replace('&gt;', '>'))
            .pipe($.gp.svgSprite({
                mode: {
                    symbol: {
                        sprite: "../sprite.svg",
                        render: {
                            scss: {
                                dest:'../../../sass/_sprite.scss',
                                template: "app/sass/templates/_sprite_template.scss"
                            }
                        },
                        example: true
                    }
                }
            }))
            .pipe($.gulp.dest('./app/icons/sprite/'));

    });
};
