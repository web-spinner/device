'use strict';

const {src, dest}   = require('gulp');
const paths         = require('../paths');
const options       = require('../options');
const config        = require('../../_config');
const plumber       = require('gulp-plumber');
const sourcemaps    = require('gulp-sourcemaps');
const extender      = require('gulp-html-extend');
const fileinclude   = require('gulp-file-include');
const posthtml      = require('gulp-posthtml');
const picture       = require('./picture');
const htmlValidator = require('gulp-w3c-html-validator');
const htmlprettify  = require('gulp-html-prettify');
const htmlbeautify  = require('gulp-html-beautify');
const rename        = require('gulp-rename');
const browserSync   = require('./browser-sync');
const fixfav        = require('./fix-favicon-validate');

const html = () => {
  return src( paths.src.html)
    .pipe( plumber( options.plumber))
    .pipe( sourcemaps.init())
    .pipe( extender())
    .pipe( fileinclude())
    .pipe( picture(config.picture.toggle) )
    .pipe( fixfav() )
    .pipe( htmlValidator())
    .pipe( htmlValidator.reporter())
    .pipe( htmlprettify())
    .pipe( htmlbeautify())
    .pipe( rename({dirname: ''}) )
    .pipe( sourcemaps.write('./'))
    .pipe( dest( paths.build.html))
    .pipe( plumber.stop())
    .pipe( browserSync.stream());
}

module.exports = html;
