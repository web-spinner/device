'use strict';

const config      = require('../../_config');
const dom         = require('gulp-dom');
const breakpoints = config.picture.breakpoints;
const retina      = config.picture.retina;

const cleanClass = (elem) => {
  elem.classList.remove('pic');
  elem.getAttribute('class') || elem.removeAttribute('class');
};

const addImg = (parent, img, src, srcset, ext) => {
  img.setAttribute('src', src);
  ext == 'svg' || img.setAttribute('srcset', srcset);
  cleanClass(img);
  let alt = img.getAttribute('alt')
  img.removeAttribute('alt');
  img.setAttribute('alt', alt);
  parent.append(img);
}

const createPicture = (document) => document.createElement('picture');

const addPicture = (img, picture) => img.replaceWith(picture);

const getSrcParam = (image) => {
  const arr = image.getAttribute('src').split('.');
  return {name: arr[0], ext: arr[1]};
}

const createPathImage = (name, breakpointSuffix, retinaSuffix, retinaX, extension) => {
  const ext = (extension !== undefined) ? extension : 'webp';
  return `${name}${breakpointSuffix}${retinaSuffix}.${ext} ${retinaX}`;
}

const createSrc = (name, suffix, ext) => {
  return `${name}${suffix}.${ext}`;
}


const createSrcset = (name, suffix, ext) => {
  let arr = [];
  Object.keys(retina).forEach(key => {
    arr.push(createPathImage(name, suffix, retina[key], key, ext)); 
  });
  return arr.join(', ');
}

const addSource = (parent, srcset, width) => {
  let source = `<source srcset="${srcset}" media="(min-width: ${width}px)"></source>`
      parent.insertAdjacentHTML('beforeend', source)
}

const addPictureElements = (parent, img, flag = false) => {

  Object.keys(breakpoints).forEach(key => {
    let width  = breakpoints[key].width,
        suffix = breakpoints[key].suffix,
        name = getSrcParam(img).name,
        ext = getSrcParam(img).ext,
        src = createSrc(name, suffix, ext);

    if(flag !== true && key == breakpoints.length - 1){
      let srcset = createSrcset(name, suffix, ext);
      addImg(parent, img, src, srcset, ext);
    }
    else if(flag !== true && key < breakpoints.length - 1){
      let srcset = createSrcset(name, suffix, ext);
      (ext == 'svg') ? addSource(parent, src, width) : addSource(parent, srcset, width);
    }
    else if(flag === true) {
      let srcset = createSrcset(name, suffix);
      addSource(parent, srcset, width);
    }
  });
}

const addPictures = (document, images) => Object.keys(images).forEach(key => {
  let img = images[key].cloneNode(true);
  let srcParam = getSrcParam(img);
  let picture = createPicture(document);

  addPicture(images[key], picture);

  if(srcParam.ext !== 'svg'){
    addPictureElements(picture, img, true);
    addPictureElements(picture, img);
  }
  else {
    addPictureElements(picture, img);
  }

});

const picture = (toggle) => {
  return dom(function(){
    let images = this.querySelectorAll('.pic');
    !toggle || addPictures(this, images);
    return this;
  });
}

module.exports = picture;
