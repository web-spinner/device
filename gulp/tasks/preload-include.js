'use strict';

const config  = require('../../_config');
const paths  = require('../paths');
const fs     = require('fs');

const preload = done => {
  const filePath = paths.write.preload;
  const file = fs.readFileSync(filePath)
  if(file == ''){
    fs.writeFile(filePath, '', ()=>{});
    config.preload.map(item => {
      let link = `<link rel="preload" href="${item.href}" as="${item.as}">\r\n`;
      fs.appendFile(filePath, link , ()=>{});
    })
  }
  done();
}

module.exports = preload;
