let ctx = document.querySelector('#bridge-barchart-canvas');

// bridges = [
//     {'name': 'Verrazano-Narrows Bridge', 'cityState': 'New York, NY', 'span': '1298.4', 'coordinates': [40.6066, -74.0447] },
//     {'name': 'Golden Gate Bridge', 'cityState': 'San Francisco and Marin, CA', 'span': '1280.2', 'coordinates': [37.8199, -122.4783] },
//     {'name': 'Mackinac Bridge', 'cityState': 'Mackinaw and St. Ignace, MI', 'span': '1158.0', 'coordinates': [45.8174, -84.7278] },
//     {'name': 'George Washington Bridge', 'cityState': 'New York, NY and New Jersey, NJ', 'span': '1067.0', 'coordinates': [40.8517,-73.9527] },
//     {'name': 'Tacoma Narrows Bridge', 'cityState': 'Tacome and Kitsap, WA', 'span': '853.44', 'coordinates': [47.2690,-122.5517] },
// ]


let data = {
    labels: ['Verrazano-Narrows Bridge', 'Golden Gate Bridge', 'Mackinac Bridge', 'George Washington Bridge', 'Tacoma Narrows Bridge'],
    datasets: [{
        label: 'Length in meters',
        data: [1298.4, 1280.2, 1158.0, 1067.0, 853.44],
        backgroundColor: ['red', 'blue', 'orange', 'green', 'yellow']
    }]
};

let options = {
    scales: {
        xAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};

let chart = new Chart( ctx, {
    type : 'horizontalBar',
    data : data,
    options : options
});
