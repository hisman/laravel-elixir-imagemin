var gulp   = require('gulp');
var Elixir = require('laravel-elixir');

var config = Elixir.config;

var _ = require('underscore');

/*
 |----------------------------------------------------------------
 | Minify images
 |----------------------------------------------------------------
 |
 | This task will minify PNG, JPEG, GIF and SVG images using
 | imagemin processor.
 |
 */

 if (typeof config.imagePath != 'string'){
    config.imagePath = 'img';
 }

 Elixir.extend('imagemin', function(src, output, options) {
    var paths = prepGulpPaths(src, output);

    options = _.extend({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }, options);

    new Elixir.Task('imagemin', function() {
        this.log(paths.src, paths.output);

        return (
            gulp.src(paths.src.path)
            .pipe(imagemin(options))
            .pipe(gulp.dest(paths.output.baseDir))
        );
    })
    .watch(config.get('assets.img') + '/**/*.+(jpg|jpeg|png|gif|svg)');
});

/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|array} src
 * @param  {string|null}  output
 * @return {object}
 */
var prepGulpPaths = function(src, output) {
    src = src || '**/*';

    return new Elixir.GulpPaths()
        .src(src, config.get('assets.img'))
        .output(output || config.get('public.img'));
}