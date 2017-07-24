$(document).ready(main());

// server
// http://158.108.165.223/data/5910503855

// Temperature
// http://158.108.165.223/data/5910503855/temp

// light sensor
// http://158.108.165.223/data/5910503855/lightsensor

function main() {
  // Temperature
  // mock optimist temp = 20C
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
  // mock optimist humidity = 55%
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
  // mock optimist soil moisture =
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
