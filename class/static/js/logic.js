let darkMap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

let streetsMap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

let map = L.map("mapid", {
  center: [41.7, -94.5],
  zoom: 4,
  Layers: [darkMap]
});

let baseMapTiles = {
  "Basic": darkMap,
  "Countries": streetsMap
};

let countryOverlay = new L.LayerGroup();
let mapOverlays = {
  "Countries": countryOverlay
};

L.control.Layers(baseMapTiles, mapOverlays).addTo(map);

d3.json("/static/json/basic").then(function (data) {
  L.geoJson(data, {
    style: function (feature) {
      return feature.properties.style;
    },
    onEachFeature: function (feature, layer) {
      console.log(feature);
      Layer.bindPopup("<h1>" + feature.properties.myName + "</h1>");
    },
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    }
  }).addTo(map);
});

d3.json("https://github").then(function (data) {
  console.log(data);
  let gdps = [];
  ldata.feature.forEach(feature => {
    gdps.push(feature.properties.gdp_md_est);
  });
  //ss = simple statistics JS lib
  IQR = ss.interquartileRange(gdps);
  gdps.sort();
  let quarter = Math.floor(gdps.length / 4);
  let q3 = gdps[3 * quarter];
  console.log(IQR);
  L.geoJson(data, {
    style: function (feature) {
      let color = "red";
      if (feature.properties.gdp_md_est >= (q3 * 1.5 * IQR)) {
        color = "green";
      }
      return { color: color };
    }
  }).addTo(countryOverlay);
});