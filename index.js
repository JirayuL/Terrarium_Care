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
// var d = new Date();
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
// Set new date everyday
setInterval(() => {
  var d = new Date();
  document.getElementById('dateNow').innerHTML = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
}, 1000);

  // Temperature
  // mock optimist temp = 20C - 25C
  setInterval(() => {
    $.ajax({
      // "key" : "value"
      url: link + "/temp"
    }).done((data) => {
      // $("#tempNow").val(data + "°C");
      // if (data < 10) {
      //   // document.getElementById("lohumal").style.display = "initial";
      //   alert("The temperature is too low. Terrarium needs a warm place.");
      // }
      // if (data > 30) {
      //   // document.getElementById("hihumal").style.display = "initial";
      //   alert("The temperature is too high. Terrarium needs a cool place.");
      // }
      document.getElementById('tempNow').innerHTML = data + "°C";
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
      // $("#humNow").val(data + "%");
      document.getElementById('humNow').innerHTML = data + "%";
      // if (data < 40) {
      //   alert("The humidity is too low. Terrarium needs watering.");
      // }
      // if (data > 70) {
      //     alert("The humidity is too high. Terrarium needs dehydrating.");
      // }
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
      // $("#soilNow").val(data + "%");
      document.getElementById('soilNow').innerHTML = data + "%";
      // if (data < 20) {
      //   alert("The soil moisture is too low. Terrarium needs watering.");
      // }
      // if (data > 70) {
      //   alert("The soil moisture is too high. Terrarium needs dehydrating.");
      // }
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
      // $("#lightNow").val(data + "lx");
      document.getElementById('lightNow').innerHTML = data + " lx";
      // if (data < 200) {
      //   alert("The light is so low. Terrarium needs light.");
      // }
      // if (data > 700) {
      //   alert("The light is so bright. Terrarium needs shade.");
      // }
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
