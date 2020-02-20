let ctx = document.querySelector('#bridge-barchart-canvas');

// data for the chart, housed in arrays. Label indicates what each bar represents. Data indicates data specific to the bridge.
// background indicates bar color
let data = {
    labels: ['Verrazano-Narrows Bridge', 'Golden Gate Bridge', 'Mackinac Bridge', 'George Washington Bridge', 'Tacoma Narrows Bridge'],
    datasets: [{
        label: 'Length in meters',
        data: [1298.4, 1280.2, 1158.0, 1067.0, 853.44],
        backgroundColor: ['red', 'blue', 'orange', 'green', 'yellow']
    }]
};

// options allow for styling of the chart. This specifically allows the chart to start at zero and not 1.
let options = {
    scales: {
        xAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};

// add defined data and options to a chart type. 
let chart = new Chart( ctx, {
    type : 'horizontalBar',
    data : data,
    options : options
});
