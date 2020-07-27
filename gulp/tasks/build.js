'use strict';

const {series, parallel} = require('gulp');
const html               = require('./html');
const css                = require('./css');
const scripts            = require('./scripts');
const libs               = require('./libs');
const webp               = require('./webp');
const images             = require('./images');
const favicons           = require('./favicons');
const sprite             = require('./sprite');
const fonts              = require('./fonts');
const includeFonts       = require('./fonts-include');
const preload            = require('./preload-include');
const clean              = require('./clean');

const build = series([ clean, fonts, includeFonts, webp, images, favicons, sprite, libs, css, scripts, preload, html ]);

module.exports = build;
