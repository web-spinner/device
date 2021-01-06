'use strict';

const config       = require('../_config');

const project_dir  = config.base.project_dir, 
      source_dir   = config.base.source_dir, 
      preprocessor = config.base.preprocessor,
      libs         = config.libs;

const paths = {
  build: {
    html:     `${project_dir}/`,
    picture:  `${source_dir}`,
    css:      `${project_dir}/css`,
    scripts:  `${project_dir}/js`,
    img:      `${project_dir}/img`,
    favicons: `${source_dir}/favicons/build`,    
    sprite:   `${project_dir}/img`,
    fonts:    `${project_dir}/fonts`,
  },
  src: {
    html: [
      `${source_dir}/**/*.html`, 
      `!${source_dir}/views/page.html`,
      `!${source_dir}/views/layouts/**/*.html`,
      `!${source_dir}/blocks/**/*.html`
    ],
    picture: `${source_dir}/**/*.html`,
    css: `${source_dir}/styles/${preprocessor}/main.${preprocessor}`,
    scripts: `${source_dir}/js/app.js`,
    img: [
      `${source_dir}/img/**/*.{jpg,png,svg,gif,ico,webp}`,
      `!${source_dir}/img/src/**/*`,
      `!${source_dir}/img/sprite/*`,
    ],
    favicons: [
      `${source_dir}/favicons/*.{gif,svg,png}`,
      `!${source_dir}/favicons/src/*`,
    ],
    fav_include: `${source_dir}/views/layouts/include/favicons.html`,
    sprite: `${source_dir}/img/sprite/*.svg`,
    fonts: `${source_dir}/fonts/**/*.{ttf,otf,eot,woff,woff2,svg}`,
    file_fonts: `${source_dir}/styles/${preprocessor}/base/_fonts.${preprocessor}`,
  },
  copy: {
    favicons: {
      from: `${source_dir}/favicons/build/*.{png,xml,ico,json,webapp}`,
      to: `${project_dir}/favicons`,
    }
  },
  watch: {
    html: [
      `${source_dir}/**/*.html`, 
      `!${source_dir}/**/_*.html`
    ],
    css: `${source_dir}/**/*.${preprocessor}`,
    scripts: `${source_dir}/**/*.js`,
    img: [
      `${source_dir}/img/**/*.{jpg,png,svg,gif,ico,webp}`,
      `!${source_dir}/img/src/*`,
      `!${source_dir}/img/sprite/*`,
    ],
    libs: 'config.js',
    favicons: [
      `${source_dir}/favicons/*.{gif,svg,png}`,
      `!${source_dir}/favicons/src/*`,
    ],
    sprite: `${source_dir}/img/sprite/*.svg`,
    fonts: `${source_dir}/fonts/**/*.{ttf,otf,eot,woff,woff2,svg}`,
  },
  libs: {
    css: libs.css,     
    scripts: libs.scripts,
  },
  write: {
    fonts: `${source_dir}/styles/${preprocessor}/base/_fonts.${preprocessor}`,

    preload: `${source_dir}/views/layouts/include/preload.html`,
  },
  styles: {
    fonts: '../fonts/',
  },
  clean: `${project_dir}`,
  helpers: {
    pic: {
      input: `${source_dir}/**/*.html`,
      output: `${source_dir}/`,
    },
  },
};

module.exports = paths;
