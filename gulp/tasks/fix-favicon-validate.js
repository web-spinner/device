'use strict';

const dom = require('gulp-dom');

const fixFaviconsValidate = () => {
  return dom(function(){
    const meta = this.querySelectorAll('meta[name]:not([content])');
    const link = this.querySelectorAll('link[media]');
    Object.keys(meta).forEach(key => meta[key].setAttribute('content', 'yes'));
    Object.keys(link).forEach(key => link[key].removeAttribute('media'));
    return this;
  })
}

module.exports = fixFaviconsValidate;
