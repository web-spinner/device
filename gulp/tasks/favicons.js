'use strict';

const {src,dest} = require('gulp');
const paths      = require('../paths');
const options    = require('../options');
const plumber    = require('gulp-plumber');
const fav        = require("favicons").stream;
const rename     = require("gulp-rename");
const fs         = require('fs');

const checkFile = () => {
  const file = fs.readFileSync(paths.src.fav_include)
  if(file == '') {
    return false
  }
  else {
    return true
  }
}

const favicons = () => {
  if(!checkFile()){
    src(paths.src.favicons)
      .pipe( plumber( options.plumber))
      .pipe( fav(options.favicons))
      .pipe( dest(paths.build.favicons))
      .pipe( plumber.stop());
  }
  return src(paths.copy.favicons.from)
    .pipe( plumber( options.plumber))
    .pipe(rename({dirname: ''}))
    .pipe( dest(paths.copy.favicons.to))
    .pipe( plumber.stop());
}

module.exports = favicons;
