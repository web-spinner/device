'use strict';

const {src, dest} = require('gulp');
const paths       = require('../paths');
const options     = require('../options');
const plumber     = require('gulp-plumber');
const img2webp    = require('gulp-webp');

const webp = () => {
  return src( paths.src.img )
    .pipe( plumber( options.plumber))
    .pipe( img2webp( options.webp ))
    .pipe( dest( paths.build.img ))
    .pipe( plumber.stop());
}

module.exports = webp;
