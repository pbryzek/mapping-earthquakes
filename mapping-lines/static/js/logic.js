// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// We create the tile layer that will be the background of our map.

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Coordinates for each point to be used in the polyline.
let line = [
  [33.9416, -118.4085],
  [30.1975, -97.6664],
  [43.6777, -79.6248],
  [40.6413, -73.7781]
];

let layout = {
  color: "transparent",
  weight: 3,
  lineCap: 'square',
  fillOpacity: 1,

};
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, layout).addTo(map);

let layout2 = {
  color: "blue",
  weight: 3,
  dashArray: '5, 10',
  lineCap: 'square'
};
L.polyline(line, layout2).addTo(map);