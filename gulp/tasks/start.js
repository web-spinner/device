'use strict';

const {series, parallel}  = require('gulp');
const build               = require('./build');
const watchFiles          = require('./watch-files');
const browserSync         = require('./browser-sync');

const start = series(build, parallel( watchFiles, browserSync.init));

module.exports = start;
