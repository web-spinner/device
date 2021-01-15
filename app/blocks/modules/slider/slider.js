(function(){
  window.addEventListener('DOMContentLoaded', event => {
    const slides = document.querySelectorAll('.slider__item')
    const dots = document.querySelectorAll('.slider__dot')

    const removeClassAll = (elements, className) => {
      elements.forEach(element => {
        element.classList.remove(className)
      })
    }

    if(dots && slides) {
      dots.forEach(dot => {
        dot.addEventListener('click', event => {
          removeClassAll(slides, 'slider__item--show') 
          let slide = document.querySelector(dot.getAttribute('data-dot'))
          slide.classList.add('slider__item--show')
        })
      })
    }
  })
}());
