'use strict';

const {src, dest} = require('gulp');
const paths       = require('../paths');
const options     = require('../options');
const plumber     = require('gulp-plumber');
const sourcemaps  = require('gulp-sourcemaps');
const concat      = require('gulp-concat');
const csso        = require('gulp-csso');
const rename      = require('gulp-rename');

const cssLibs = ( done ) => {
  if ( paths.libs.css.length > 0 ) {
    src( paths.libs.css )
      .pipe( plumber( options.plumber))
      .pipe( sourcemaps.init())
      .pipe( concat('libs.css') )
      .pipe( dest(paths.build.css) )
      .pipe( csso() )
      .pipe( rename({suffix: '.min'}) )
      .pipe( sourcemaps.write('./'))
      .pipe( dest(paths.build.css) )
      .pipe( plumber.stop());
  }
  done();
}

module.exports = cssLibs;
