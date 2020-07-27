'use strict';

const {series, watch} = require('gulp');
const paths           = require('../paths');
const html            = require('./html');
const css             = require('./css');
const scripts         = require('./scripts');
const webp            = require('./webp');
const images          = require('./images');
const favicons        = require('./favicons');
const sprite          = require('./sprite');
const fonts           = require('./fonts');
const includeFonts    = require('./fonts-include');
const build           = require('./build');
const browserSync     = require('./browser-sync');

const watchFiles = () => {
  watch(paths.watch.html, html);
  watch(paths.watch.css, css);
  watch(paths.watch.scripts, scripts);
  watch(paths.watch.img, series(webp, images, browserSync.reload));
  watch(paths.watch.sprite, series(sprite, browserSync.reload));
  watch(paths.watch.favicons, series(favicons, browserSync.reload));
  watch(paths.watch.fonts, series(fonts, includeFonts, browserSync.reload));
}

module.exports = watchFiles;
