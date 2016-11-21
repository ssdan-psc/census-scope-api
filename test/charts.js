$(document).ready(function() {

  var param = window.location.search.substring(1).split("=")[0];
  if (param == 'topic'){
    var topic = window.location.search.substring(1).split("=")[1]; // TODO: Fix this 
  } else {
    throw "Need topic";
  }

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
      var full_pie_json = JSON.parse(data)
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


  // TODO: Error handling
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

     $.ajax({
       async: false,
       type: 'GET',
       url: url,
       success: function(data) {
        var full_pie_json = JSON.parse(data)
        pieChart.destroy();
        pieChart = new Chart(pie_ctx, full_pie_json);
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

     $.ajax({
       async: false,
       type: 'GET',
       url: url,
       success: function(data) {
        var full_line_json = JSON.parse(data);
        lineChart.destroy()
        lineChart = new Chart(line_ctx, full_line_json);
       }
    });
  });

  // Update Stacked Bar Chart
   $( "#bar_form" ).on( "submit", function( event ) {
     event.preventDefault();
     var topic = window.location.search.split("=")[1]
     var options = $( this ).serialize();
     var url = 'http://localhost:5000/stacked?topic=' + topic + '&' + options

     $.ajax({
       async: false,
       type: 'GET',
       url: url,
       success: function(data) {
        var full_stacked_json = JSON.parse(data)
        barChart.destroy()
        barChart = new Chart(bar_ctx, full_stacked_json);
       }
    });
  });


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