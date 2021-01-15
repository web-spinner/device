'use strict';

const {src, dest} = require('gulp');
const paths       = require('../paths');
const options     = require('../options');
const plumber     = require('gulp-plumber');
const ttf2woff    = require('gulp-ttf2woff');
const ttf2woff2   = require('gulp-ttf2woff2');
const rename      = require('gulp-rename');

const fonts = () => {
  src( paths.src.fonts)
    .pipe( plumber( options.plumber))
    .pipe( ttf2woff())
    .pipe( rename({dirname:''}))
    .pipe( dest( paths.build.fonts))
    .pipe( plumber.stop());
  return src( paths.src.fonts) 
    .pipe( plumber( options.plumber))
    .pipe( ttf2woff2())
    .pipe( rename({dirname:''}))
    .pipe( dest( paths.build.fonts))
    .pipe( plumber.stop());
}

module.exports = fonts;
