$(document).ready(function() {

  var param = window.location.search.substring(1).split("=")[0];
  if (param == 'topic'){
    var topic = window.location.search.substring(1).split("=")[1];
  } else {
    console.log("Need topic");
  }

  var pieChart;
  var lineChart;
  var barChart;
  var table = document.getElementById("Table")
  var pyramidChart;

  var pie_ctx = document.getElementById("pieChart");
  var line_ctx = document.getElementById("lineChart");
  var bar_ctx = document.getElementById("barChart");
  var pyramid_ctx = document.getElementById("pyramidChart");

  var pie_csv;
  var trend_csv;
  var stacked_csv;
  var table_csv; 
  var pyramid_csv;


  create_table = function(table, jsondata) {
    var thead = document.createElement('thead')
    for (var i = 0; i < jsondata[0].length; i++) {
      var th = document.createElement('th');
      th.appendChild(document.createTextNode(jsondata[0][i]));
      thead.appendChild(th);
    }
    
    table.appendChild(thead);

    var tbody = document.createElement('tbody')
    for(var i = 1; i < jsondata.length - 1; i++){
      var tr = document.createElement('tr');
      for(var j = 0; j < jsondata[i].length; j++){
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(jsondata[i][j]));
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }

    table.appendChild(tbody)

    $('Table').dynatable({table: {headRowSelector: 'thead'}, features: {
    paginate: false,
    search: false,
    recordCount: false,
    perPageSelect: false
  }});

  };

  // TODO: Needs error handling
  // Default Pie Chart
  $.ajax({
    async: false,
    type: 'GET',
    url: 'http://localhost:5000/pie?topic=' + topic + '&geo=united%20states&year=2010',
    success: function(data) {
      var full_pie_json = JSON.parse(data)['chart']
      pie_csv = JSON.parse(data)['csv']
      pieChart = new Chart(pie_ctx, full_pie_json);
    }
  });


  // TODO: Needs error handling
  // Default Trend Chart
  $.ajax({
    async: false,
    type: 'GET',
    // TODO: Population hard-coded in 
    url: 'http://localhost:5000/trend?topic=' + 'population' + '&geo=united%20states',
    success: function(data) {
      var full_line_json = JSON.parse(data)['chart']
      trend_csv = JSON.parse(data)['csv']
      lineChart = new Chart(line_ctx, full_line_json);
    }
  });


  // TODO: Error handling
  // Default Stacked Bar Chart
  $.ajax({
    async: false,
    type: 'GET',
    // TODO: Education hard-coded in 
    url: 'http://localhost:5000/stacked?topic=' + 'education' + '&geo=united%20states',
    success: function(data) {
      var full_stacked_json = JSON.parse(data)['chart']
      stacked_csv = JSON.parse(data)['csv']
      barChart = new Chart(bar_ctx, full_stacked_json);
    }
  });

  // Default Table
   $.ajax({
    async: false,
    type: 'GET',
    // TODO: Population hard-coded in 
    url: 'http://localhost:5000/table?topic=' + 'population' + '&geo=united%20states',
    success: function(data) {
      table_csv  = JSON.parse(data)
      table_list = []
      lines = table_csv.split('\r\n')
      for (var i = 0; i < lines.length; i++) {
        line = lines[i].split(',')
        table_list.push(line)
      }
      create_table(table, table_list)
    }
  });


   // Default Pyramid Chart
   $.ajax({
    async: false,
    type: 'GET',
    // TODO: Education hard-coded in 
    url: 'http://localhost:5000/pyramid?topic=' + 'population' + '&geo=united%20states',
    success: function(data) {
      var full_pyramid_json = JSON.parse(data)['chart']
      console.log(full_pyramid_json)
      stacked_csv = JSON.parse(data)['csv']

    //   pyramidChart = new Chart(pyramid_ctx, {
    //   data: {
    //     labels: ["10 to 14 years", "15 to 17 years", "18 and 19 years", "20 years", "21 years", "22 to 24 years", "25 to 29 years", "30 to 34 years", "35 to 39 years", "40 to 44 years", "45 to 49 years", "50 to 54 years", "55 to 59 years", "60 and 61 years", "62 to 64 years", "65 and 66 years", "67 to 69 years", "70 to 74 years", "75 to 79 years", "80 to 84 years", "85 years and over"],
    //     datasets: [{
    //       data: [10590658, 6482243, 4548783, 2454800, 2385111, 6622417, 10845393, 10457546, 9869846, 10399619, 10740238, 11046847, 9989328, 3639567, 4974429, 2915262, 3616479, 4666294, 3328014, 2362325, 1936823],
    //       label: "Male"
    //     }, {
    //       data: [9767830, 10023099, 10108225, 6162466, 4317042, 2335348, 2271330, 6338466, 10599744, 10407499, 9932588, 10520987, 10985645, 11475456, 10633673, 3920308, 5439455, 3223178, 4077987, 5494784, 4231547, 3442927, 3882341],
    //       label: "Female"
    //     }]
    //   },
    //   "type": "horizontalBar",
    //   "options": {
    //     "scales": {
    //       "xAxes": [{
    //         "stacked": true
    //       }],
    //       "yAxes": [{
    //         "stacked": true
    //       }]
    //     }
    //   }
    // })
      
      pyramidChart = new Chart(pyramid_ctx, full_pyramid_json)
  }});
  

  $ ( "chart_form" ).on( "submit" , function( event ) {
    event.preventDefault()
    var options = $( this ).serialize();
    console.log(options)

    // Pie 
    var url = 'http://localhost:5000/pie?topic=' + topic + '&' + options
    var pie = $.get(url);

    url = 'http://localhost:5000/trend?topic=' + topic + '&' + options
    var trend =  $.get(url);

    url = 'http://localhost:5000/stacked?topic=' + topic + '&' + options
    var stacked =  $.get(url);

    url = 'http://localhost:5000/table?topic=' + topic + '&' + options
    var tbl =  $.get(url);

    // [data, textStatus, jqXHR]
    $.when(pie, trend, stacked, tbl).done(function(pie_resp, trend_resp, stacked_resp, tbl_resp) {

      // Pie 
      var full_pie_json = JSON.parse(pie_resp[0])['chart']
      pie_csv = JSON.parse(data)['csv']
      pieChart.destroy();
      pieChart = new Chart(pie_ctx, full_pie_json);

      // Trend
      var full_line_json = JSON.parse(trend_resp[0])['chart']
      trend_csv = JSON.parse(data)['csv']
      lineChart.destroy()
      lineChart = new Chart(line_ctx, full_line_json);

      // Stacked
      var full_stacked_json = JSON.parse(stacked_resp[0])['chart']
      stacked_csv = JSON.parse(data)['csv']
      barChart.destroy()
      barChart = new Chart(bar_ctx, full_stacked_json);

      // Table
      table_csv  = JSON.parse(data)
      table_list = []
      lines = table_csv.split('\r\n')
      for (var i = 0; i < lines.length; i++) {
        line = lines[i].split(',')
        table_list.push(line)
      }
      create_table(table, table_list)

    });
  });
  //   $.ajax({
  //      type: 'GET',
  //      url: url,
  //      success: function(data) {
  //       var full_pie_json = JSON.parse(data)['chart']
  //       pie_csv = JSON.parse(data)['csv']
  //       pieChart.destroy();
  //       pieChart = new Chart(pie_ctx, full_pie_json);
  //      }
  //   });

  //   // Trend
  //   url = 'http://localhost:5000/trend?topic=' + topic + '&' + options
  //   $.ajax({
  //      type: 'GET',
  //      url: url,
  //      success: function(data) {
  //       var full_line_json = JSON.parse(data)['chart']
  //       trend_csv = JSON.parse(data)['csv']
  //       lineChart.destroy()
  //       lineChart = new Chart(line_ctx, full_line_json);
  //      }
  //   });

  //   // Stacked
  //   url = 'http://localhost:5000/stacked?topic=' + topic + '&' + options
  //   $.ajax({
  //      type: 'GET',
  //      url: url,
  //      success: function(data) {
  //       var full_stacked_json = JSON.parse(data)['chart']
  //       stacked_csv = JSON.parse(data)['csv']
  //       barChart.destroy()
  //       barChart = new Chart(bar_ctx, full_stacked_json);
  //      }
  //   });

  //   // Table 
  //   url = 'http://localhost:5000/stacked?topic=' + topic + '&' + options
  //   $.ajax({
  //      type: 'GET',
  //      url: url,
  //      success: function(data) {
  //       table_csv = JSON.parse(data)
  //       var full_stacked_json = JSON.parse(data)['chart']
  //      }
  //   });

  // });
  // TODO: Needs error handling
  // Update Pie Chart
  // $( "#pie_form" ).on( "submit", function( event ) {
  //    event.preventDefault();
  //    var options = $( this ).serialize();
  //    var url = 'http://localhost:5000/pie?topic=' + topic + '&' + options

  //    $.ajax({
  //      async: false,
  //      type: 'GET',
  //      url: url,
  //      success: function(data) {
  //       var full_pie_json = JSON.parse(data)['chart']
  //       pie_csv = JSON.parse(data)['csv']
  //       pieChart.destroy();
  //       pieChart = new Chart(pie_ctx, full_pie_json);
  //      }
  //   });
  // });

  // TODO: Needs error handling
  // Update Trend Chart 
  // $( "#trend_form" ).on( "submit", function( event ) {
  //    event.preventDefault();
  //    var topic = window.location.search.split("=")[1]
  //    var options = $( this ).serialize();
  //    var url = 'http://localhost:5000/trend?topic=' + topic + '&' + options

  //    $.ajax({
  //      async: false,
  //      type: 'GET',
  //      url: url,
  //      success: function(data) {
  //       var full_line_json = JSON.parse(data)['chart']
  //       trend_csv = JSON.parse(data)['csv']
  //       lineChart.destroy()
  //       lineChart = new Chart(line_ctx, full_line_json);
  //      }
  //   });
  // });

  // TODO: Needs error handling
  // Update Stacked Bar Chart
  //  $( "#bar_form" ).on( "submit", function( event ) {
  //    event.preventDefault();
  //    var topic = window.location.search.split("=")[1]
  //    var options = $( this ).serialize();
  //    var url = 'http://localhost:5000/stacked?topic=' + topic + '&' + options

  //    $.ajax({
  //      async: false,
  //      type: 'GET',
  //      url: url,
  //      success: function(data) {
  //       var full_stacked_json = JSON.parse(data)['chart']
  //       stacked_csv = JSON.parse(data)['csv']
  //       barChart.destroy()
  //       barChart = new Chart(bar_ctx, full_stacked_json);
  //      }
  //   });
  // });

  // TODO: Update Table 
  // $( "#table_form" ).on( "submit", function( event ) {
  //    event.preventDefault();
  //    var topic = window.location.search.split("=")[1]
  //    var options = $( this ).serialize();
  //    var url = 'http://localhost:5000/stacked?topic=' + topic + '&' + options

  //    $.ajax({
  //      async: false,
  //      type: 'GET',
  //      url: url,
  //      success: function(data) {
  //       table_csv = JSON.parse(data)
  //       var full_stacked_json = JSON.parse(data)['chart']

  //      }
  //   });
  // });

  download_csv = function(chartVariable) {
    var csv; 

    if (chartVariable == "pie") {
      csv = pie_csv
    } else if (chartVariable == 'trend') {
      csv = trend_csv
    } else if (chartVariable == 'stacked') {
      csv = stacked_csv
    }

    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.download = 'data.csv';  // TODO: Change Name
    hiddenElement.click();
  };

  download_img = function (chartVariable) {
    var img;
      
    if (chartVariable == "pie") {
      img = pieChart.toBase64Image();      
    } else if (chartVariable == 'trend') {
      img = lineChart.toBase64Image();
    } else if (chartVariable == 'stacked') {
      img = barChart.toBase64Image();
    }

    var hiddenElement = document.createElement('download');
    hiddenElement.target = '_blank';
    hiddenElement.href = img;      
    hiddenElement.download = 'img.jpg'; // TODO: Change Name
    hiddenElement.click();
  };

});