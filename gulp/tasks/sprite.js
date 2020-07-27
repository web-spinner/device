'use strict';

const {src, dest} = require('gulp');
const paths       = require('../paths');
const options     = require('../options');
const plumber     = require('gulp-plumber');
const svgstore    = require('gulp-svgstore');
const rename      = require('gulp-rename');

const sprite = () => {
  return src( paths.src.sprite )
    .pipe( plumber( options.plumber))
    .pipe( svgstore( options.svgstore ))
    .pipe( rename('icons.svg', { dirname:'' }))
    .pipe( dest( paths.build.sprite ))
    .pipe( plumber.stop());
}

module.exports = sprite;
