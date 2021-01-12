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
