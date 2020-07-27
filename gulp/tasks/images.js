'use strict';

const {src, dest} = require('gulp');
const paths       = require('../paths');
const options     = require('../options');
const plumber     = require('gulp-plumber');
const imagemin    = require('gulp-imagemin');

const images = () => {
  return src( paths.src.img )
    .pipe( plumber( options.plumber))
    .pipe( imagemin( options.imagemin ))
    .pipe( dest( paths.build.img ))
    .pipe( plumber.stop());
}

module.exports = images;
