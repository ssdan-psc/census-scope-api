$(document).ready(function() {
  var topic = window.location.search.split("=")[1] // TODO: Fix this 

  var pieChart;
  var lineChart;
  var barChart;

  var pie_ctx = document.getElementById("pieChart");
  var line_ctx = document.getElementById("lineChart");
  var bar_ctx = document.getElementById("barChart");

  var pie_csv;
  var trend_csv;
  var stacked_csv;

  // TODO: Needs error handling
  // Default Pie Chart
  $.ajax({
    async: false,
    type: 'GET',
    url: 'http://localhost:5000/pie?topic=' + topic + '&geo=united%20states&year=2010',
    success: function(data) {
      var full_pie_json = JSON.parse(data[0])
      console.log(data[1])
      pieChart = new Chart(pie_ctx, full_pie_json);
    }
  });

  // TODO: Needs error handling
  // Default Trend Chart
  $.ajax({
    async: false,
    type: 'GET',
    url: 'http://localhost:5000/trend?topic=' + 'population' + '&geo=united%20states',
    success: function(data) {
      var full_line_json = JSON.parse(data)
      lineChart = new Chart(line_ctx, full_line_json);
    }
  });

  // Default Stacked Bar Chart
  $.ajax({
    async: false,
    type: 'GET',
    url: 'http://localhost:5000/stacked?topic=' + 'education' + '&geo=united%20states',
    success: function(data) {
      var full_stacked_json = JSON.parse(data)
      barChart = new Chart(bar_ctx, full_stacked_json);
    }
  });

  // TODO: Needs error handling
  // Update Pie Chart
  $( "#pie_form" ).on( "submit", function( event ) {
     event.preventDefault();
     var options = $( this ).serialize();
     var url = 'http://localhost:5000/pie?topic=' + topic + '&' + options
     console.log(url)
     
     var datasource = {labels: [], datasets: []};

     $.ajax({
       async: false,
       type: 'GET',
       url: url,
       success: function(data) {
        var datasource = JSON.parse(data)
        console.log(datasource)
        pieChart.destroy();
        pieChart = new Chart(pie_ctx, { 
          type: 'pie',  // This whole part will be replaced by json_builder
          data: datasource,
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
       }
    });
  });

  // TODO: Needs error handling
  // Update Trend Chart 
  $( "#trend_form" ).on( "submit", function( event ) {
     event.preventDefault();
     var topic = window.location.search.split("=")[1]
     var options = $( this ).serialize();
     var url = 'http://localhost:5000/trend?topic=' + topic + '&' + options
     console.log(url)
     
     var datasource = {labels: [], datasets: []};

     $.ajax({
       async: false,
       type: 'GET',
       url: url,
       success: function(data) {
        var datasource = {labels: ["2010", "2015"], datasets: [{ data:[3577073, 3590886]}]};
        //var datasource = JSON.parse(data)
        console.log(datasource)

        lineChart.destroy()
        lineChart = new Chart(line_ctx, 
          {type: 'line', // This whole part will be replaced by json_builder
          data: datasource,
          options: {
            title: {
              display: true,
              text: 'Line Chart',
            },
          }
        });
       }
    });
  });

  // Update Stacked Bar Chart



    window.download_csv_pie = function() {
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

    // var barChartData = {
    //     labels: ["January", "February", "March", "April", "May", "June", "July"],
    //     datasets: [{
    //         type: 'bar',
    //         label: 'Dataset 1',
    //         backgroundColor: "rgba(220,220,220,0.7)",
    //         data: [1, 2, 3, 4, 5, 6, 7]
    //     }, {
    //         type: 'bar',
    //         label: 'Dataset 2',
    //         backgroundColor: "rgba(151,187,205,0.7)",
    //         data: [2, 3, 4, 5, 6, 7, 8]
    //     }, {
    //         type: 'bar',
    //         label: 'Dataset 3',
    //         backgroundColor: "rgba(151,187,205,0.7)",
    //         data: [4, 3, 2, 1, 2, 3]
    //     }, {
    //         type: 'bar',
    //         label: 'Dataset 4',
    //         backgroundColor: "rgba(191,107,205,0.7)",
    //         data: [5, 1, 2, 3, 5, 7, 1],
    //         borderColor: 'white',
    //         borderWidth: 0
    //     }]
    // };

    // barChart = new Chart(bar_ctx, {
    //     type: 'bar',  // This whole part will be replaced by json_builder
    //     data: barChartData,
    //     options: {
    //         scales: {
    //             xAxes: [{
    //                 stacked: true,
    //             }],
    //             yAxes: [{
    //                 stacked: true
    //             }]
    //         }
    //     }
    // });



    // Pass string and then switch
    download_img = function (chartVariable) {
        var img = chartVariable.toBase64Image();
        var hiddenElement = document.createElement('download');
        hiddenElement.target = '_blank';
        hiddenElement.href = img;
        hiddenElement.download = 'img.jpg';
        hiddenElement.click();
    }

});