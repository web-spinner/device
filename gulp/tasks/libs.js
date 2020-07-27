'use strict';

const {series}    = require('gulp');
const cssLibs     = require('./css-libs');
const scriptsLibs = require('./scripts-libs');

const libs = series(cssLibs, scriptsLibs);

module.exports = libs;
