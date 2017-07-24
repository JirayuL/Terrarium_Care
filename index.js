$(document).ready(main());

// server
// http://158.108.165.223/data/5910503855

// Temperature
// http://158.108.165.223/data/5910503855/temp

// light sensor
// http://158.108.165.223/data/5910503855/lightsensor

function main() {
  // Temperature
  // mock optimist temp = 20C - 25C
  setInterval(() => {
    $.ajax({
      // "key" : "value"
      url: link + "/temp"
    }).done((data) => {

    }).fail(() => {
      console.error("Temp is wrong.");
    })
  }, 1000);

  // Humidity
  // mock optimist humidity = 55% - 70%
  setInterval(() => {
    $.ajax({
      // "key" : "value"
      url: link + "/hum"
    }).done((data) => {

    }).fail(() => {
      console.error("Humidity is wrong.");
    })
  }, 1000)

  //Soil moisture
  // mock optimist soil moisture = 53% - 60%
  setInterval(() => {
    $.ajax({
      // "key" : "value"
      url: link + "/soil"
    }).done((data) => {

    }).fail(() => {
      console.error("Soil moisture is wrong.");
    })
  }, 1000)

  // light sensor
  // mock optimist lightsensor =
  setInterval(() => {
    $.ajax({
      // "key" : "value"
      url: link + "/lightsensor"
    }).done((data) => {

    }).fail(() => {
      console.error("Light sensor is wrong.");
    })
  }, 1000);
}
window.onload = function() {

  var dps = []; // dataPoints

  var chart = new CanvasJS.Chart("chartContainer", {
    title: {
      text: "Temperature",
    },
    data: [{
      type: "line",
      dataPoints: dps
    }],
    backgroundColor: "transparent"
  });

  var xVal = 0;
  var yVal = 50;
  var updateInterval = 100;
  var dataLength = 500; // number of dataPoints visible at any point

  var updateChart = function(count) {
    count = count || 1;
    // count is number of times loop runs to generate random dataPoints.

    for (var j = 0; j < count; j++) {
      yVal = yVal + Math.round(5 + Math.random() * (-5 - 5));
      dps.push({
        x: xVal,
        y: yVal
      });
      xVal++;
    };
    if (dps.length > dataLength) {
      dps.shift();
    }

    chart.render();

  };

  // generates first set of dataPoints
  updateChart(dataLength);

  // update chart after specified time.
  setInterval(function() {
    updateChart()
  }, updateInterval);

}
