window.onload = function () {

		var dps = []; // dataPoints

		var chart = new CanvasJS.Chart("chartContainer",{
			title :{
				text: "Humidity"
			},
			data: [{
				type: "line",
				dataPoints: dps
            }],
            backgroundColor : "transparent"
		});

		var xVal = 0;
		var yVal = 100;
		var updateInterval = 1000;
		var dataLength = 500; // number of dataPoints visible at any point
		var temp = 0;

		var updateChart = function (count) {
			count = count || 1;
			// count is number of times loop runs to generate random dataPoints.

			$.ajax({
				// "key" : "value"
				url: "http://158.108.165.223/data/5910503855/hum"
			}).done((data) => {
				temp = Math.round(data);
			}).fail(() => {
				console.error("Temp graph is wrong.");
			})

			yVal = temp;
			dps.push({
				x: xVal,
				y: yVal
			});
			xVal++;
			if (dps.length > dataLength)
			{
				dps.shift();
			}

			chart.render();

		};

		// generates first set of dataPoints
		updateChart(dataLength);

		// update chart after specified time.
		setInterval(function(){updateChart()}, updateInterval);

	}
