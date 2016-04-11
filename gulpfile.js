var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass(
      'app.scss',
      'public/css/foundation.css',
      {
        includePaths: [
            'node_modules/motion-ui/src',
            'vendor/zurb/foundation/scss/'
        ],
        outputStyle: 'expanded'
      }
    );

    mix.copy('node_modules/motion-ui/dist/motion-ui.js', 'resources/assets/js/foundation');
    mix.copy('vendor/zurb/foundation/js/*.js', 'resources/assets/js/foundation');
    mix.scripts(
      [
        'jquery-2.2.2.js',
        'foundation/motion-ui.js',
        'foundation/foundation.core.js',
        'foundation/foundation.abide.js',
        'foundation/foundation.accordion.js',
        'foundation/foundation.accordionMenu.js',
        'foundation/foundation.drilldown.js',
        'foundation/foundation.dropdown.js',
        'foundation/foundation.dropdownMenu.js',
        'foundation/foundation.equalizer.js',
        'foundation/foundation.interchange.js',
        'foundation/foundation.magellan.js',
        'foundation/foundation.offcanvas.js',
        'foundation/foundation.orbit.js',
        'foundation/foundation.responsiveMenu.js',
        'foundation/foundation.responsiveToggle.js',
        'foundation/foundation.reveal.js',
        'foundation/foundation.slider.js',
        'foundation/foundation.sticky.js',
        'foundation/foundation.tabs.js',
        'foundation/foundation.toggler.js',
        'foundation/foundation.tooltip.js',
        'foundation/foundation.util.box.js',
        'foundation/foundation.util.keyboard.js',
        'foundation/foundation.util.mediaQuery.js',
        'foundation/foundation.util.motion.js',
        'foundation/foundation.util.nest.js',
        'foundation/foundation.util.timerAndImageLoader.js',
        'foundation/foundation.util.touch.js',
        'foundation/foundation.util.triggers.js'
      ],
      'public/js/foundation.js'
    );

    mix.copy('resources/assets/fonts/foundation-icons.*', 'public/fonts');

    mix.version(['css/foundation.css', 'js/foundation.js']);

    mix.copy('resources/assets/fonts/foundation-icons.*', 'public/build/fonts');
});
