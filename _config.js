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
  { href: 'fonts/gilroyextrabold.woff', as: 'font' },
  { href: 'fonts/gilroyextrabold.woff2', as: 'font' },
  { href: 'fonts/gilroylight.woff', as: 'font' },
  { href: 'fonts/gilroylight.woff2', as: 'font' },
  { href: 'fonts/OpenSans-Regular.woff', as: 'font' },
  { href: 'fonts/OpenSans-Regular.woff2', as: 'font' },
  { href: 'fonts/OpenSans-Light.woff', as: 'font' },
  { href: 'fonts/OpenSans-Light.woff2', as: 'font' },
]

const fonts = [
  {name: 'Gilroy', file: 'gilroylight', style: 'normal', weight: '300'},
  {name: 'Gilroy', file: 'gilroyextrabold', style: 'normal', weight: '400'},
  {name: 'Open Sans', file: 'OpenSans-Light', style: 'normal', weight: '300'},
  {name: 'Open Sans', file: 'OpenSans-Regular', style: 'normal', weight: '400'},
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
