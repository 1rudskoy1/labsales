function init() {
  let map = new ymaps.Map('map-test', {
    center: [44.988784155587226,38.93083160606833],
    zoom: 16, 
  });
}

ymaps.ready(init);