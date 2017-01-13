$(document).ready(function () {

    var param = window.location.search.substring(1).split("=")[0];
    if (param == 'topic'){
        var topic = window.location.search.substring(1).split("=")[1];
    } else {
        console.log("Need topic");  // TODO: Change error message & handling
    }

    var pieChart;
    var lineChart;
    var barChart;
    var table = document.getElementById("Table");
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
        var thead = document.createElement('thead');
        for (var i = 0; i < jsondata[0].length; i++) {
            var th = document.createElement('th');
            th.appendChild(document.createTextNode(jsondata[0][i]));
            thead.appendChild(th);
        }

        table.appendChild(thead);

        var tbody = document.createElement('tbody');
        for(var i = 1; i < jsondata.length - 1; i++){
            var tr = document.createElement('tr');
            for(var j = 0; j < jsondata[i].length; j++){
                var td = document.createElement('td');
                td.appendChild(document.createTextNode(jsondata[i][j]));
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }

        table.appendChild(tbody);

        $('Table').dynatable({table: {headRowSelector: 'thead'}, features: {
            paginate: false,
            search: false,
            recordCount: false,
            perPageSelect: false,
            pushState: false
        }});

    };

    // TODO: Needs error handling
    // Default Pie Chart
    $.ajax({
        async: false,
        type: 'GET',
        url: 'http://localhost:5000/pie?topic=' + topic + '&geo=united%20states&year=2010',
        success: function(data) {
            var full_pie_json = JSON.parse(data)['chart'];
            pie_csv = JSON.parse(data)['csv'];
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
            var full_line_json = JSON.parse(data)['chart'];
            trend_csv = JSON.parse(data)['csv'];
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
            var full_stacked_json = JSON.parse(data)['chart'];
            stacked_csv = JSON.parse(data)['csv'];
            barChart = new Chart(bar_ctx, full_stacked_json);
        }
    });


    // TODO: Error handling
    // Default Table
    $.ajax({
        async: false,
        type: 'GET',
        // TODO: Population hard-coded in
        url: 'http://localhost:5000/table?topic=' + 'population' + '&geo=united%20states',
        success: function(data) {
            table_csv  = JSON.parse(data);
            table_list = [];
            lines = table_csv.split('\r\n');
            for (var i = 0; i < lines.length; i++) {
                line = lines[i].split(',');
                table_list.push(line)
            }
            create_table(table, table_list)
        }
    });

    // TODO: Error handling
    // Default Pyramid Chart
    $.ajax({
        async: false,
        type: 'GET',
        // TODO: Education hard-coded in
        url: 'http://localhost:5000/pyramid?topic=' + 'population' + '&geo=united%20states',
        success: function(data) {
            var full_pyramid_json = JSON.parse(data)['chart'];
            pyramid_csv = JSON.parse(data)['csv'];

            //TODO: Only on Pyramid disable tool tips
            Chart.defaults.global.tooltips.enabled = false;

            pyramidChart = new Chart(pyramid_ctx, full_pyramid_json)
        }});

    download_csv = function(chartVariable) {
        var csv;

        if (chartVariable == 'pie') {
            csv = pie_csv
        } else if (chartVariable == 'trend') {
            csv = trend_csv
        } else if (chartVariable == 'stacked') {
            csv = stacked_csv
        }

        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        hiddenElement.download = 'data.csv';  // TODO: Change Name - get topic - topic_chart.csv
        hiddenElement.click();
    };

    download_img = function (chartVariable) {

        var img;

        if (chartVariable == 'pie') {
            img = pieChart.toBase64Image();
        } else if (chartVariable == 'trend') {
            img = lineChart.toBase64Image();
        } else if (chartVariable == 'stacked') {
            img = barChart.toBase64Image();
        }

        var hiddenElement = document.createElement('a');
        hiddenElement.target = '_blank';
        hiddenElement.href = img;
        console.log(hiddenElement.href);
        hiddenElement.download = 'img.png'; // TODO: Change Name - get topic - topic_chart.png
        console.log(hiddenElement.download);
        hiddenElement.click();
    };

    $( "#chart_form" ).on( "submit" , function( event ) {
        event.preventDefault();

        var geo = $('#geo').val();
        var year = $('#year').val();

        // Pie
        var url = 'http://localhost:5000/pie?topic=' + topic + '&geo=' + geo + '&year=' + year;
        var pie = $.get(url);

        // Trend
        url = 'http://localhost:5000/trend?topic=' + 'population' + '&geo=' + geo;
        var trend =  $.get(url);

        // Stacked Bar
        url = 'http://localhost:5000/stacked?topic=' + topic + '&geo=' + geo;
        var stacked =  $.get(url);

        // Table
        url = 'http://localhost:5000/table?topic=' + 'population' + '&geo=' + geo;
        var tbl =  $.get(url);

        url = 'http://localhost:5000/pyramid?topic=' + 'population' + '&geo=' + geo;
        var pyramid = $.get(url);

        // [data, textStatus, jqXHR]
        $.when(pie, trend, stacked, tbl, pyramid).done(function(pie_resp, trend_resp, stacked_resp, tbl_resp, pyramid_resp) {

            // Pie
            var full_pie_json = JSON.parse(pie_resp[0])['chart'];
            pie_csv = JSON.parse(pie_resp[0])['csv'];
            pieChart.destroy();
            pieChart = new Chart(pie_ctx, full_pie_json);

            // Trend
            var full_line_json = JSON.parse(trend_resp[0])['chart'];
            trend_csv = JSON.parse(trend_resp[0])['csv'];
            lineChart.destroy();
            lineChart = new Chart(line_ctx, full_line_json);

            // Stacked
            var full_stacked_json = JSON.parse(stacked_resp[0])['chart'];
            stacked_csv = JSON.parse(stacked_resp[0])['csv'];
            barChart.destroy();
            barChart = new Chart(bar_ctx, full_stacked_json);

            // TODO: Table isn't destroyed
            // Table
            while (table.hasChildNodes()) {
                table.removeChild(table.lastChild);
            }

            table_csv  = JSON.parse(tbl_resp[0]);
            table_list = [];
            lines = table_csv.split('\r\n');
            for (var i = 0; i < lines.length; i++) {
                line = lines[i].split(',');
                table_list.push(line)
            }
            create_table(table, table_list);
            table.process();

            // Pyramid
            var full_pyramid_json = JSON.parse(pyramid_resp[0])['chart'];
            pyramid_csv = JSON.parse(stacked_resp[0])['csv'];
            pyramidChart.destroy();
            pyramidChart = new Chart(pyramid_ctx, full_pyramid_json);
        });
    });
});

