# Bootcamp: UCB-VIRT-DATA-PT-03-2020-U-B-TTH

### Bootcamp Challenge #13 - 6/7/2020
Bootcamp Challenge 13: Module Mapping Earthquakes

### Links Used
- [Earthquakes in past 7 days GeoJSON](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)
- [Tectonic Plates GeoJSON](https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json)

### Challenge Description
**Objectives**
- Use d3.json() to get tectonic plate data and add the data using the L.geoJSON() layer.
- Style the tectonic plate LineString data to stand out on the map.
- Add the tectonic plate data as an overlay with the earthquake data.
- Add a third map style to allow the user to select from three different maps.

## Technologies Used
- HTML
- Bootstrap
- JavaScript
- CSS
- GIT
- d3.js
- Leaflet
- Mapbox

## Methodology, Summary, Purpose 

This challenge had us utilize the tileLayer from mapbox API with an ultimate goal of displaying the earthquakes that have occurred in the past 7 days as bubbles on a Map. I created two layers one for earthquakes and one for tectonic plates that allows the user to select one, both, or neither options from the layer control panel on the map. By utilzing D3, I downloaded the data from both URLs listed above. I utilized the L.geoJSON call to call native methods including: pointToLayer, Style, onEachFeature to adjust the bubbles based on the magnitude of the earthquakes. Ultimately the data was displayed in index.html to outline the tectonic plates and also the distribution of earthquakes in the past 7 days. 
