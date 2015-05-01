L.mapbox.accessToken = 'pk.eyJ1IjoiYmptZmFjdG9yeSIsImEiOiJtcmx4TVNJIn0.1KjiOWWp8NsVJS1P9JEF2Q';

var map = L.mapbox.map('map', 'bjmfactory.79138904')
  .setView([29, -26], 2);

var marker = L.marker([30, -97], {
  icon: L.mapbox.marker.icon({
    'marker-color': '#f86767'
  })
});

var t = 0;
window.setInterval(function(){
  marker.setLatLng(L.latLng(
    Math.cos(t * 0.5) * 50,
    Math.sin(t) * 50));
  t += 0.01;
}, 50);

marker.addTo(map);

