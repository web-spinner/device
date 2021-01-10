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

const formatSlider = slider => {
  if(slider){
    const tooltips = document.querySelectorAll('.noUi-tooltip')

    slider.noUiSlider.on('update', function (values, handle) {
      tooltips[handle].innerHTML = (handle == 0) ? 'от ' + values[handle] : 'до ' + values[handle]
    })
  }
}

createSlider(slider)
formatSlider(slider)


