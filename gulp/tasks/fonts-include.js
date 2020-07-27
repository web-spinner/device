'use strict';

const config = require('../../_config');
const paths  = require('../paths');
const fs     = require('fs');

const includeFonts = done => {
  const file = paths.write.fonts;
  fs.writeFile(file, '', ()=>{});
  config.fonts.map(font => {
    let mixinFonts;
    let params = `"${ font.name }", "${ font.file }", "${ paths.styles.fonts }", "${ font.style }", "${ font.weight }"`;
    switch ( config.base.preprocessor ) {
      case 'sass':
        mixinFonts = '@include font(' + params + ')\r\n';
        break;
      case 'scss':
        mixinFonts = '@include font(' + params + ');\r\n';
        break;
      case 'less':
        mixinFonts = '.font(' + params + ');\r\n';
        break;
      case 'styl':
        mixinFonts = 'font(' + params + ');\r\n';
        break;
    }
    fs.appendFile(file, mixinFonts , ()=>{});
  })
  done();
}

module.exports = includeFonts;
