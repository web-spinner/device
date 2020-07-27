'use strict';

const pic       = require('./gulp/tasks/picture-helper');
const libs      = require('./gulp/tasks/libs');
const build     = require('./gulp/tasks/build');
const deploy    = require('./gulp/tasks/deploy');
const start     = require('./gulp/tasks/start');

exports.pic     = pic;
exports.libs    = libs;
exports.build   = build;
exports.deploy  = deploy;
exports.start   = start;
exports.default = start;
