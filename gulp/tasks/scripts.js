'use strict';

const {src, dest} = require('gulp');
const paths       = require('../paths');
const options     = require('../options');
const plumber     = require('gulp-plumber');
const sourcemaps  = require('gulp-sourcemaps');
const fileinclude = require('gulp-file-include');
const rename      = require('gulp-rename');
const uglify      = require('gulp-uglify');
const browserSync = require('./browser-sync');

const scripts = () => {
  return src( paths.src.scripts)
    .pipe( plumber( options.plumber))
    .pipe( sourcemaps.init())
    .pipe( fileinclude() )
    .pipe( dest( paths.build.scripts))
    .pipe( uglify() )
    .pipe( rename({suffix: '.min'}))
    .pipe( sourcemaps.write('./'))
    .pipe( dest( paths.build.scripts ))
    .pipe( plumber.stop())
    .pipe( browserSync.stream());
}

module.exports = scripts;
