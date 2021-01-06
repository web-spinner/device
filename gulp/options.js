'use strict';

const config      = require('../_config');
const project_dir = config.base.project_dir,
      source_dir  = config.base.source_dir;

const options = {
  browserSync: {
    server: { baseDir: `${project_dir}/` },
    port: 3000,
    notify: false,
    online: true,
  },
  plumber: {
    errorHandler: function(err) {
      console.error(err);
      this.end();
    }
  }, 
  autoprefixer: {
    cascade: true,
    grid: true 
  },
  imagemin: {
    interlaced: true,
    progressive: true,
    optimizationLevel: 3,
    svgoPlugins: [
      {
        removeViewBox: true
      }
    ]
  },
  webp: {
    quality: 70,
  },
  svgstore: {
    inlineSvg: true
  },
  srcset: config.pic,
  favicons: {
    appName: "Divice",
    appShortName: "Device",
    manifestRelativePaths: true,
    path: 'favicons/',
    html: `../../views/layouts/include/favicons.html`,
    display: "browser",
    orientation: "natural",
    pipeHTML: true,
    replace: true,
    icons: {

      android: true,          
      appleIcon: true,                  
      appleStartup: false,       
      coast: true,      
      favicons: true,      
      firefox: true,      
      windows: true,       
      yandex: true   
    },
  },
  babel: {
    presets: ['@babel/env']
  },
  ghpages: {
    src: [
      './**/*',
      '!./**/*.map'
    ] 
  },
};

module.exports = options;
