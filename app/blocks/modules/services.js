const tabs = document.querySelectorAll('.services__button')
const services = document.querySelectorAll('.services__item')

const removeClass = (elem, className) => {
  if(elem.classList.contains(className)) {
    elem.classList.remove(className)
  }
}

if(tabs && services){
  tabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
      event.preventDefault()

      tabs.forEach(tab => {
        removeClass(tab, 'button--services-active')
      })

      tab.classList.add('button--services-active')

      services.forEach(service => {
        removeClass(service, 'services__item--show')
      })

      let service = document.querySelector(tab.getAttribute('data-tab'))
      service.classList.add('services__item--show')
    })
  })
}
