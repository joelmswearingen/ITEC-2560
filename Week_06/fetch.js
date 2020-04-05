// url for 
let url = 'https://api.wheretheiss.at/v1/satellites/25544'

var issIcon = L.icon({
    iconUrl: 'international-space-station.png',
    iconSize: [50, 50],
    iconAnchor: [25, 25]
})

let timeElement = document.querySelector('#time')

let issMarker // leaflet marker
let update = 10000  // 10 second update

let coordinates = [0, 0]
let zoomLevel = 1
let map = L.map('iss-map').setView(coordinates, zoomLevel)
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoiam9lbHlvcyIsImEiOiJjazZsaWtqd2EwZGZpM25xcG9uNm50NzZwIn0.mx2ErgCPuYwzxP7onJ1E_g'
    }).addTo(map)

    // find two elements on the html page

let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')

let max_failed_attempts = 3

iss(max_failed_attempts)  // initial call to function

timeElement.innerHTML = Date()

setInterval( () => {
    let date = Date()
    timeElement.innerHTML = date
}, 1000)

function  iss(attempts) {
    if ( attempts <= 0 ) {
        console.log('Too many errors, abandoning requests to get ISS position.')
        return
    }
    // make request to API which returns a promise
    fetch(url)
        .then( res => res.json() ) //function response returns response.json
        .then( issData => {  // function issData 
            console.log(issData)
            let lat = issData.latitude // identify lat
            let long = issData.longitude  // identify long
            issLat.innerHTML = lat  // print to innerHTML
            issLong.innerHTML = long  // print to innerHTML



            if (!issMarker) {
                issMarker = L.marker([lat, long], {icon: issIcon}).addTo(map) // create the marker if it doesn't exist
            } else {
                issMarker.setLatLng([lat, long]) // move existing marker to new location
            }
        })
        .catch( err => {
            attempts--
            console.log(err, attempts)
        })  // deal with the error

        .finally( () => {
            setTimeout(iss, update, attempts) 
        })
}
    
