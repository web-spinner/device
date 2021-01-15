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

