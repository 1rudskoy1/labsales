function init() {
  let map = new ymaps.Map('map-test', {
    center: [59.93367450828043,30.304773714985885],
    zoom: 15, 
  });
let placemarkGeo = new ymaps.Placemark([59.93367450828043,30.304773714985885], {
  balloonContent: `
      <p class = "baloon__header">ЖК “Яблоновский”</p> 
  `,
}, {
  iconLayout: 'default#image',
  iconImageHref: '../img/map/геолокац.svg',
  hideIconOnBalloonOpen: false,
  iconImageSize: [70,71],
  iconImageOffset: [-32,-7]
});
let placemarkAES = new ymaps.Placemark([59.93251148700967,30.300868418660198], {
  balloonContent: `
      <p class = "baloon__header">АЗС</p> 
  `,
}, {
  iconLayout: 'default#image',
  iconImageHref: '../img/map/азс.svg',
  iconImageSize: [70,71],
  hideIconOnBalloonOpen: false,
  iconImageOffset: [-32,-7]
});
let placemarkMag = new ymaps.Placemark([59.93553368818955,30.30627615046711], {
  balloonContent: `
      <p class = "baloon__header">Магазин</p> 
  `,
}, {
  iconLayout: 'default#image',
  iconImageHref: '../img/map/магазин.svg',
  iconImageSize: [70,71],
  hideIconOnBalloonOpen: false,
  iconImageOffset: [-32,-7]
});
let placemarkSad = new ymaps.Placemark([59.9343061224715,30.299838848831364], {
  balloonContent: `
      <p class = "baloon__header">Детский сад</p> 
  `,
}, {
  iconLayout: 'default#image',
  iconImageHref: '../img/map/садик.svg',
  iconImageSize: [51,51],
  hideIconOnBalloonOpen: false,
  iconImageOffset: [-25,-7]
});
let placemarkDoct = new ymaps.Placemark([59.93014928950221,30.30207044673177], {
  balloonContent: `
      <p class = "baloon__header">Поликлиника</p> 
  `,
}, {
  iconLayout: 'default#image',
  iconImageHref: '../img/map/больница.svg',
  iconImageSize: [51,51],
  hideIconOnBalloonOpen: false,
  iconImageOffset: [-25,-7]
});
map.geoObjects.add(placemarkGeo);
map.geoObjects.add(placemarkAES);
map.geoObjects.add(placemarkMag);
map.geoObjects.add(placemarkSad);
map.geoObjects.add(placemarkDoct);

placemarkGeo.balloon.open();

}
ymaps.ready(init);