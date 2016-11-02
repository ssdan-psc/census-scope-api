
var pie_ctx = document.getElementById("pieChart");
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
var pieChart = new Chart(pie_ctx, {
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

window.download_csv_pie = function() {
	var img = pieChart.toBase64Image();
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


var line_ctx = document.getElementById("lineChart");
var data = [{
  labels: [0, 1, 2, 3, 4, 5,],
  datasets: [{
    data: [30, 5, 10, 3, 9, 50],
  }, {
    data: [30, 50, 100, 30, 90, 5],
  }]
}, {
  labels: [0, 1, 2, 3, 4, 5],
  datasets: [{
    data: [320, 52, 102, 32, 92, 502],
  }, {
    data: [302, 520, 120, 230, 290, 25],
  }]
}];

var line_useddat = { "datasets": [{ "data": [30, 5, 10, 3, 9, 50] }, { "data": [30, 50, 100, 30, 90, 5] }], "labels": [0, 1, 2, 3, 4, 5] }

var lineChart = new Chart(line_ctx, {
    type: 'line',
    data: line_useddat,
    options: {
        title: {
            display: true,
            text: 'Line Chart',
        },
    }
});

window.changedata_line = function () {
    if (line_useddat == data[0])
        line_useddat = data[1];
    else
        line_useddat = data[0];
    lineChart = new Chart(line_ctx, {
        type: 'line',
        data: line_useddat,
        options: {
            title: {
                display: true,
                text: 'Line Chart',
            },
        }
    });
}
