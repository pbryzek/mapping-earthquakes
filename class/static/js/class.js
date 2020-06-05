let darkMap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

let map = L.map("mapid", {
    center: [41.7, -94.5],
    zoom:4,
    Layers: [darkMap]
});

d3.json("/static/json/basic").then(function(data){
    L.geoJson(data, {
        style: function(feature){
            let aColor = "green";
            if (feature.properties.aDemographic < 60){
                aColor: "red"
            }
            return {color: aColor}
        }
    }).addTo(map);
});