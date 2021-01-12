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
