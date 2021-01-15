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

(function(){
  'use strict'
  window.addEventListener('DOMContentLoaded', () => {

    const slider = document.getElementById('filter-range');

    const createSlider = slider => {
      if(slider) {
        const sliderMax = parseInt( slider.getAttribute('data-max') )
        const tooltipFirst = parseInt( slider.getAttribute('data-tooltip-first') )
        const tooltipLast = parseInt( slider.getAttribute('data-tooltip-last') )
        noUiSlider.create(slider, {
          start: [tooltipFirst, tooltipLast],
          range: {
            'min': 0,
            'max': sliderMax 
          },
          step: 1,
          tooltips: true,
          connect: true,
          format: {
            to: function(value) {
              return parseInt(value) 
            },
            from: function(value) {
              return parseInt(value)
            },
          }
        })
      }
    }

    const formatSlider = (slider, values, handle) => {
      if(slider){
        const tooltips = document.querySelectorAll('.noUi-tooltip')
        tooltips[handle].innerHTML = (handle == 0) ? 'от ' + values[handle] : 'до ' + values[handle]
      }
    }

    const setValues = slider => {
      if(slider){
        const input = document.querySelector('.f-range__input')
        input.value = slider.noUiSlider.get()
      }
    }

    const eventSlider = (event, slider) => {
      if(slider){
        slider.noUiSlider.on(event, function (values, handle) {
          formatSlider(slider, values, handle)
          setValues(slider)
        })
      }
    }

    createSlider(slider)
    eventSlider('update', slider)
  })
}());

(function(){
  'use strict'
  window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.services__button')
    const services = document.querySelectorAll('.services__item')

    const removeClassAll = (elements, className) => {
      elements.forEach(element => {
        element.classList.remove(className)
      })
    }

    if(tabs && services){
      tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
          event.preventDefault()
          
          removeClassAll(tabs, 'button--services-active')
          removeClassAll(services, 'services__item--show')

          tab.classList.add('button--services-active')
          let service = document.querySelector(tab.getAttribute('data-tab'))
          service.classList.add('services__item--show')
        })
      })
    }
  })
}());

(function(){
  'use strict'
  window.addEventListener('DOMContentLoaded', () => {

    const writeUsButton = document.querySelector('#write-us-btn')
    const mapButton = document.querySelector('#map-popup-btn')
    const map = document.querySelector('.map-popup')
    const writeUs = document.querySelector('#write-us')
    const mapCloseButton = document.querySelector('#map-close-btn')
    const writeUsCloseButton = document.querySelector('#write-us-close-btn')

    const eventClickShow = (button, popup, className) => {
      if(button, popup) {
        button.addEventListener('click', event => {
          event.preventDefault()
          popup.classList.remove(className)
        })
      }
    }

    const eventClickHidden = (button, popup, className) => {
      if(button, popup) {
        button.addEventListener('click', event => {
          event.preventDefault()
          popup.classList.add(className)
        })
      }
    }

    eventClickShow(writeUsButton, writeUs, 'write-us--hidden')
    eventClickHidden(writeUsCloseButton, writeUs, 'write-us--hidden')
    eventClickShow(mapButton, map, 'map-popup--hidden')
    eventClickHidden(mapCloseButton, map, 'map-popup--hidden')
  })
}());

if(document.querySelector('#map')){
  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
      center: [55.68697956906804, 37.52965449999998],
      zoom: 17 
    })

    var myPin = new ymaps.GeoObjectCollection({}, {
      draggable: false,
      iconLayout: 'default#image',
      iconImageHref: 'img/map-pin.png',
      iconImageSize: [22, 43],
      iconImageOffset: [-10, -55]
    });

    var myPlacemark = new ymaps.Placemark([55.68697956906804, 37.52965449999998], {
      hintContent: '<span class="map-popup__hint">улица Строителей, 15</span>',
    });

    myPin.add(myPlacemark);
    myMap.geoObjects.add(myPin);
  }
}



