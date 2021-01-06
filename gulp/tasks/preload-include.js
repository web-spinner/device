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
      let attr = '';
      Object.keys(item).map(key => {
        if(item[key] !== ''){
          attr += ` ${key}='${item[key]}'`
        } else {
          attr += ` ${key} `
        }
      })
  
      let link = `<link ${attr.slice(1)}>\r\n`;

      fs.appendFile(filePath, link , ()=>{});
    })
  }
  done();
}

module.exports = preload;
