// Add GeoJSON data.
/*
let sanFranAirport =
{
  "type": "FeatureCollection", "features": [{
    "type": "Feature",
    "properties": {
      "id": "3469",
      "name": "San Francisco International Airport",
      "city": "San Francisco",
      "country": "United States",
      "faa": "SFO",
      "icao": "KSFO",
      "alt": "13",
      "tz-offset": "-8",
      "dst": "A",
      "tz": "America/Los_Angeles"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-122.375, 37.61899948120117]
    }
  }
  ]
};

let geojsonFeature = {
  "type": "Feature",
  "properties": {
    "name": "Coors Field",
    "amenity": "Baseball Stadium",
    "popupContent": "This is where the Rockies play!"
  },
  "geometry": {
    "type": "Point",
    "coordinates": [-104.99404, 39.75621]
  }
};
*/

// Create the map object with center at the San Francisco airport.
//let map = L.map('mapid').setView([37.5, -122.5], 10);
// Create the map object with center and zoom level.
//let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [44.0, -80.0],
	zoom: 2,
	layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//URL to the majorAirports.json that is saved on GitHub
let airportData = "https://raw.githubusercontent.com/pbryzek/mapping-earthquakes/master/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function (data) {
  console.log(data);

  // Creating a GeoJSON layer with the retrieved data.
  /*
  L.geoJson(data, {
    onEachFeature: function (feature, layer) {
      let popupH1 = "<h2>" + "Airport code: " + feature.properties.faa + "</h2>";
      let popupH2 = "<h2>" + "Airport name: " + feature.properties.name + "</h2>";
      let popupStr = popupH1 + "<hr>" + popupH2
      layer.bindPopup(popupStr);
    }
  }).addTo(map);
});
*/

d3.json(airportData).then(function (data) {
  console.log(data);

  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    onEachFeature: function (feature, layer) {
      let popupH1 = "<h2>" + "Airport code: " + feature.properties.faa + "</h2>";
      let popupH2 = "<h2>" + "Airport name: " + feature.properties.name + "</h2>";
      let popupStr = popupH1 + "<hr>" + popupH2
      layer.bindPopup(popupStr);
    }
  }).addTo(map);
});

/*
L.geoJSON(geojsonFeature).addTo(map);

// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport).addTo(map);

// Grabbing our GeoJSON data.
L.geoJson(sanFranAirport, {
  onEachFeature: function (feature, layer) {
    console.log(layer);
    let popupH1 = "<h2>" + "Airport code: " + feature.properties.faa + "</h2>";
    let popupH2 = "<h2>" + "Airport name: " + feature.properties.name + "</h2>";
    let popupStr = popupH1 + "<hr>" + popupH2
    layer.bindPopup(popupStr);
  }
}).addTo(map);
*/