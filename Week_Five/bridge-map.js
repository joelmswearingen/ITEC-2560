let usCenterCoordinates = [39.83, -98.58]
let zoomLevel = 4
let map = L.map('bridge-map').setView(usCenterCoordinates, zoomLevel)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox.streets',
accessToken: 'pk.eyJ1Ijoiam9lbHlvcyIsImEiOiJjazZsaWtqd2EwZGZpM25xcG9uNm50NzZwIn0.mx2ErgCPuYwzxP7onJ1E_g'
}).addTo(map)

bridges = [
    {'name': 'Verrazano-Narrows Bridge', 'cityState': 'New York, NY', 'span': '1298.4', 'coordinates': [40.6066, -74.0447] },
    {'name': 'Golden Gate Bridge', 'cityState': 'San Francisco and Marin, CA', 'span': '1280.2', 'coordinates': [37.8199, -122.4783] },
    {'name': 'Mackinac Bridge', 'cityState': 'Mackinaw and St. Ignace, MI', 'span': '1158.0', 'coordinates': [45.8174, -84.7278] },
    {'name': 'George Washington Bridge', 'cityState': 'New York, NY and New Jersey, NJ', 'span': '1067.0', 'coordinates': [40.8517,-73.9527] },
    {'name': 'Tacoma Narrows Bridge', 'cityState': 'Tacome and Kitsap, WA', 'span': '853.44', 'coordinates': [47.2690,-122.5517] },
]

var bridgeIcon = L.icon({
    iconUrl: 'bridge.png',
    iconSize: [50, 50],
    popupAnchor: [0, -10]
});

bridges.forEach( function(bridges) {
    let Marker = L.marker(bridges.coordinates, {icon: bridgeIcon})
        .addTo(map)
        .bindPopup(`${bridges.name}<br>${bridges.cityState}<br>${bridges.span} meters`)

})

