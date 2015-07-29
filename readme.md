# laravel-elixir-imagemin-wrapper

This is imagemin wrapper for Laravel Elixir 3.0. It is basically same with [nathan's implementation](https://github.com/nathanmac/laravel-elixir-imagemin), I just made it compatible with Elixir 3.0 and did some tweaks.

## Install

```
npm install laravel-elixir-imagemin-wrapper --save
```

## Usage

### Example *Gulpfile*:

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-imagemin-wrapper');

elixir(function(mix) {
   mix.imagemin();
});
```

This will scan your `resources/assets/img` directory for all image files. Instead, if you only want to process a single image, you may do:

```javascript
mix.imagemin('bootstrap.png');
```

Finally, if you'd like to output to a different directory than the default `public/img`, then you may override this as well.

```javascript
mix.imagemin('bootstrap.png', 'public/img/foo/bar/');
```

#### Advanced example

In third argument you could pass imagemin options.

```javascript
mix.imagemin('bootstrap.png', 'public/img', { optimizationLevel: 3, progressive: true, interlaced: true });
```

### Change Image Directory

You can change your default image directory in elixir config. You can do that in your gulpfile like so :

```javascript
elixir.config.imagePath = 'your-img-folder';
```

or in your elixir.json :

```json
{
    "imagePath": "your-img-folder"
}
```
