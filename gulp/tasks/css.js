'use strict';

const {src, dest}  = require('gulp');
const config       = require('../../_config');
const preprocessor = config.base.preprocessor; 
const paths        = require('../paths');
const options      = require('../options');
const plumber      = require('gulp-plumber');
const sourcemaps   = require('gulp-sourcemaps');
const sass         = require('gulp-sass');
const scss         = require('gulp-sass');
const less         = require('gulp-less');
const styl         = require('gulp-stylus');
const group_media  = require('gulp-group-css-media-queries');
const postcss      = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csso         = require('gulp-csso');
const rename       = require('gulp-rename');
const browserSync  = require('./browser-sync');

const css = () => {
  return src( paths.src.css)
    .pipe( plumber( options.plumber))
    .pipe( sourcemaps.init())
    .pipe( eval( preprocessor)())
    .pipe( group_media())
    .pipe( postcss([autoprefixer( options.autoprefixer)]))
    .pipe( dest( paths.build.css))
    .pipe( csso())
    .pipe( rename({suffix: '.min'}))
    .pipe( sourcemaps.write('./'))
    .pipe( dest( paths.build.css))
    .pipe( plumber.stop())
    .pipe( browserSync.stream());
}

module.exports = css;
