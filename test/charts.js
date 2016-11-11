var ctx = $("#myChart");

var data = {
  labels: [
    "Red",
    "Blue",
    "Yellow"
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      "#FF6384",
      "#36A2EB",
      "#FFCE56"
    ],
    hoverBackgroundColor: [
      "#FF6384",
      "#36A2EB",
      "#FFCE56"
    ]
  }]
};

var myChart = new Chart(ctx, {
  type: 'pie',
  data: data,
  options: {
    animation: {
      duration: 1000,
      animateRotate: false,
      animateScale: true,
    },
    circumference: 2 * Math.PI,
    cutoutPercentage: 0,
  }
});

window.download_csv = function() {
		var img = myChart.toBase64Image();
    var csv = 'Color,Value\n';
    console.log(data["datasets"][0]["data"])
    console.log(data["labels"])
    for (i = 0; i < data["datasets"][0]["data"].length; i++)
    {
    	csv += data["labels"][i];
    	csv += ",";
    	csv += data["datasets"][0]["data"][i];
      csv += "\n";
      }

    console.log(csv);
    var hiddenElement = document.createElement('a');
    hiddenElement.target = '_blank';
    hiddenElement.href = img
    hiddenElement.download = 'img.jpg';
    hiddenElement.click();
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.download = 'data.csv';
    hiddenElement.click();
}
