'use strict';

const {src, dest}   = require('gulp');
const paths         = require('../paths');
const options       = require('../options');
const plumber       = require('gulp-plumber');
const posthtml      = require('gulp-posthtml');
const srcset        = require('posthtml-sugar-srcset');
const htmlprettify  = require('gulp-html-prettify');
const htmlbeautify  = require('gulp-html-beautify');

const pic = () => {
  return src( paths.helpers.pic.input)
    .pipe( plumber( options.plumber))
    .pipe( posthtml( [ srcset(options.srcset) ] ))
    .pipe( htmlprettify())
    .pipe( htmlbeautify())
    .pipe( dest( paths.helpers.pic.output))
    .pipe( plumber.stop());
}

module.exports = pic;
