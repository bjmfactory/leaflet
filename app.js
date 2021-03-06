var map = L.map('map').setView([30.2500, -97.7500], 13);

L.tileLayer('http://{s}.tiles.mapbox.com/v4/mapbox.run-bike-hike/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYmptZmFjdG9yeSIsImEiOiJtcmx4TVNJIn0.1KjiOWWp8NsVJS1P9JEF2Q', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);
