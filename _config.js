'use strict';

const base = {
  project_dir:  'build', 
  source_dir:   'app', 
  preprocessor: 'scss', // Preprocessor sass, scss, less, styl
} 

const libs = {
  css: [
    'node_modules/normalize.css/normalize.css',
    //'node_modules/bootstrap/dist/css/bootstrap.css',
    //'node_modules/bootstrap/dist/css/bootstrap-reboot.css',
    //'node_modules/bootstrap/dist/css/bootstrap-grid.css',
  ],
  scripts: [
    'node_modules/picturefill/dist/picturefill.js',
    'node_modules/svgxuse/svgxuse.js',
    //`node_modules/jquery/dist/jquery.js`, // JQuery npm i jquery --save-dev
  ],
}

const preload = [
  { href: 'fonts/Roboto-Regular.woff', as: 'font' },
  { href: 'fonts/Roboto-Regular.woff2', as: 'font' },
  { href: 'fonts/Roboto-Bold.woff', as: 'font' },
  { href: 'fonts/Roboto-Bold.woff2', as: 'font' },
  { href: 'fonts/Roboto-Italic.woff', as: 'font' },
  { href: 'fonts/Roboto-Italic.woff2', as: 'font' },
  { href: 'fonts/Roboto-BoldItalic.woff', as: 'font' },
  { href: 'fonts/Roboto-BoldItalic.woff2', as: 'font' },
]

const fonts = [
  {name: 'Roboto', file: 'Roboto-Regular', style: 'normal', weight: '400'},
  {name: 'Roboto', file: 'Roboto-Bold', style: 'normal', weight: '700'},
  {name: 'Roboto', file: 'Roboto-Italic', style: 'italic', weight: '400'},
  {name: 'Roboto', file: 'Roboto-BoldItalic', style: 'italic', weight: '700'},
]

const picture = {
  breakpoints: [
    {
      width: 1050,
      suffix: '-desktop',
    },
    {
      width: 768,
      suffix: '-tablet',
    },
    {
      width: 320,
      suffix: '-mobile'
    },
  ],
  retina: {
    '1x': '',
    '2x': '@2x',
    '3x': '@3x',
  },
  toggle: true,
}

const pic = {
  replace: {
    large: '(min-width: 1050px)',
    medium: '(min-width: 768px)',
    small: '(min-width: 320px)',
  },
}

module.exports.base    = base;
module.exports.libs    = libs;
module.exports.preload = preload;
module.exports.fonts   = fonts;
module.exports.picture = picture;
module.exports.pic     = pic;
