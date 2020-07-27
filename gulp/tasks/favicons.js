'use strict';

const {src,dest} = require('gulp');
const paths      = require('../paths');
const options    = require('../options');
const plumber    = require('gulp-plumber');
const fav        = require("favicons").stream;

const favicons = () => {
  return src(paths.src.favicons)
    .pipe( plumber( options.plumber))
    .pipe( fav(options.favicons))
    .pipe( dest(paths.build.favicons))
    .pipe( plumber.stop());
}

module.exports = favicons;
