// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satelite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Street": streets,
  "Satellite": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Create a style for the lines.
let myStyle = {
  color: "blue",
  fillColor: "yellow",
  weight: 1
};

// Accessing the Toronto neighborhoods GeoJSON URL.
let earthquakesUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

d3.json(earthquakesUrl).then(function (data) {
  L.geoJSON(data).addTo(map);
});

/*
d3.json(earthquakesUrl).then(function (data) {
  console.log(data);

  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    style: function (feature) {
      return myStyle
    },
    onEachFeature: function (feature, layer) {
      console.log(feature);
      let popupH1 = "<h2>" + "Airline: " + feature.properties.AREA_NAME + "</h2>";
      let popupStr = popupH1 + "<hr>";
      layer.bindPopup(popupStr);
    }

  }).addTo(map);
});
*/

  /*
L.geoJson(data, {
style: function (feature) {
  return myStyle
},
onEachFeature: function (feature, layer) {
  console.log(feature);
  let popupH1 = "<h2>" + "Airline: " + feature.properties.airline + "</h2>";
  let popupH2 = "<h2>" + "Destination: " + feature.properties.dst + "</h2>";
  let popupStr = popupH1 + "<hr>" + popupH2
  layer.bindPopup(popupStr);
}
}).addTo(map);
});
*/