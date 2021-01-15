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
