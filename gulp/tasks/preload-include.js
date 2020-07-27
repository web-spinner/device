'use strict';

const config  = require('../../_config');
const paths  = require('../paths');
const fs     = require('fs');

const preload = done => {
  const file = paths.write.preload;
  fs.writeFile(file, '', ()=>{});
  config.preload.map(item => {
    let link = `<link rel="preload" href="${item.href}" as="${item.as}">\r\n`;
    fs.appendFile(file, link , ()=>{});
  })
  done();
}

module.exports = preload;
