$(document).ready(main());

// server
// http://158.108.165.223/data/5910503855

// Temperature
// http://158.108.165.223/data/5910503855/temp

// light sensor
// http://158.108.165.223/data/5910503855/lightsensor

// height
// http://158.108.165.223/data/5910503855/height

var link = "http://158.108.165.223/data/5910503855";

// Get the time when we call it.
var d = new Date();
// d.getHours();
// d.getMinutes();
// d.getSeconds();

// tempNow
// tempAva
// lightNow
// lightAva
// humNow
// humAva

function main() {
  // Temperature
  // mock optimist temp = 20C - 25C
  setInterval(() => {
    $.ajax({
      // "key" : "value"
      url: link + "/temp"
    }).done((data) => {
      $("#tempNow").val(data + "°C");
    }).fail(() => {
      console.error("Temp is wrong.");
    })
  }, 1000);

// Height
  setInterval(() => {
    $.ajax({
      // "key" : "value"
      url: link + "/height"
    }).done((data) => {
      // $("#heightNow").val(data + "cm");
      document.getElementById('heightNow').innerHTML = data + "cm";
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
      $("#humNow").val(data + "%");
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
      $("#soilNow").val(data + "%");
    }).fail(() => {
      console.error("Soil moisture is wrong.");
    })
  }, 1000)

  // light sensor
  // mock optimist lightsensor = 320–500lux
  setInterval(() => {
    $.ajax({
      // "key" : "value"
      url: link + "/lightsensor"
    }).done((data) => {
      $("#lightNow").val(data + "lx");
    }).fail(() => {
      console.error("Light sensor is wrong.");
    })
  }, 1000);
}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

function on2() {
  document.getElementById("overlay2").style.display = "block";
}

function off2() {
  document.getElementById("overlay2").style.display = "none";
}
