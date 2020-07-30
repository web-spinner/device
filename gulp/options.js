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
    manifestRelativePaths: true,
    path: 'favicons/',
    html: `../../${source_dir}/views/layouts/include/favicons.html`,
    "display": "fullscreen",
    "orientation": "any",
    pipeHTML: true,
    replace: true,
  },
  ghpages: {
    src: [
      './**/*',
      '!./**/*.map'
    ] 
  },
};

module.exports = options;
