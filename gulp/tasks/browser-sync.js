'use strict';

const options     = require('../options');
const browserSync = require('browser-sync').create();

const initBrowserSync = () => {
  return browserSync.init(options.browserSync);
}

const streamBrowserSync = () => {
  return browserSync.stream();
}

const reloadBrowserSync = () => {
  return browserSync.reload();
}

module.exports.init = initBrowserSync;
module.exports.stream = streamBrowserSync;
module.exports.reload = reloadBrowserSync;
