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
  layers: [dark]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Create a style for the lines.
let myStyle = {
	color: "#yellow",
	weight: 2
};

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/pbryzek/mapping-earthquakes/master/torontoRoutes.json";
d3.json(torontoData).then(function (data) {
  console.log(data);

  // Creating a GeoJSON layer with the retrieved data.
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