'use strict';

const {src, dest} = require('gulp');
const paths       = require('../paths');
const options     = require('../options');
const plumber     = require('gulp-plumber');
const sourcemaps  = require('gulp-sourcemaps');
const concat      = require('gulp-concat');
const uglify      = require('gulp-uglify');
const rename      = require('gulp-rename');

const scriptslibs = ( done ) => {
  if( paths.libs.scripts.length > 0 ) {
    src( paths.libs.scripts )
      .pipe( plumber( options.plumber))
      .pipe( sourcemaps.init())
      .pipe( concat('libs.js') )
      .pipe( dest( paths.build.scripts ) )
      .pipe( uglify() )
      .pipe( rename({suffix: '.min'}) )
      .pipe( sourcemaps.write('./'))
      .pipe( dest( paths.build.scripts ) )
      .pipe( plumber.stop());
  }
  done();
}

module.exports = scriptslibs;
