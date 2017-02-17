$(document).ready(function() {

    var param = window.location.search.substring(1).split("=")[0];
    if (param == 'topic') {
        var topic = window.location.search.substring(1).split("=")[1];
    } else {
        console.log("Need topic"); // TODO: Change error message & handling
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

    var pyramid_opts = {
        "options": {
            "scales": {
                "xAxes": [{
                    "stacked": true,
                    "ticks": {
                        "callback": function(value, index, values) {
                            return Math.abs(value);
                        }
                    }
                }],
                "yAxes": [{
                    "stacked": true
                }]
            },
            "tooltips": {
                "callbacks": {
                    "label": function(tooltipItems, data) {
                        return Math.abs(parseInt(tooltipItems.xLabel))
                    }
                }
            }
        }
    };

    create_table = function(table, jsondata) {
        var thead = document.createElement('thead');
        for (var i = 0; i < jsondata[0].length; i++) {
            var th = document.createElement('th');
            th.appendChild(document.createTextNode(jsondata[0][i]));
            thead.appendChild(th);
        }

        table.appendChild(thead);

        var tbody = document.createElement('tbody');
        for (var i = 1; i < jsondata.length - 1; i++) {
            var tr = document.createElement('tr');
            for (var j = 0; j < jsondata[i].length; j++) {
                var td = document.createElement('td');
                td.appendChild(document.createTextNode(jsondata[i][j]));
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }

        table.appendChild(tbody);

        $('Table').dynatable({
            table: {
                headRowSelector: 'thead'
            },
            features: {
                paginate: false,
                search: false,
                recordCount: false,
                perPageSelect: false,
                pushState: false
            }
        });

    };

    // Default Pie Chart
    $.ajax({
        async: false,
        type: 'GET',
        url: 'http://localhost:5000/pie?topic=' + topic + '&geo=united%20states&year=2010',
        success: function(data) {
            var full_pie_json = JSON.parse(data)['chart'];
            pie_csv = JSON.parse(data)['csv'];
            pieChart = new Chart(pie_ctx, full_pie_json);
        },
        error: function(xhr, status, error) {
            pie_ctx.getContext('2d').font = "20px Helvetica";
            pie_ctx.getContext('2d').fillText(xhr.status + ' Error: ' + xhr.responseText, 50, 50);
        }
    });


    // Default Trend Chart
    $.ajax({
        async: false,
        type: 'GET',
        url: 'http://localhost:5000/trend?topic=' + 'population' + '&geo=united%20states',
        success: function(data) {
            var full_line_json = JSON.parse(data)['chart'];
            trend_csv = JSON.parse(data)['csv'];
            lineChart = new Chart(line_ctx, full_line_json);
        },
        error: function(xhr, status, error) {
            line_ctx.getContext('2d').font = "20px Helvetica";
            line_ctx.getContext('2d').fillText(xhr.status + ' Error: ' + xhr.responseText, 50, 50);
        }
    });


    // Default Stacked Bar Chart
    $.ajax({
        async: false,
        type: 'GET',
        url: 'http://localhost:5000/stacked?topic=' + topic + '&geo=united%20states',
        success: function(data) {
            var full_stacked_json = JSON.parse(data)['chart'];
            stacked_csv = JSON.parse(data)['csv'];
            barChart = new Chart(bar_ctx, full_stacked_json);
        },
        error: function(xhr, status, error) {
            bar_ctx.getContext('2d').font = "20px Helvetica";
            bar_ctx.getContext('2d').fillText(xhr.status + ' Error: ' + xhr.responseText, 50, 50);
        }
    });


    // Default Table
    $.ajax({
        async: false,
        type: 'GET',
        url: 'http://localhost:5000/table?topic=' + 'population' + '&geo=united%20states',
        success: function(data) {
            table_csv = JSON.parse(data);
            table_list = [];
            lines = table_csv.split('\r\n');
            for (var i = 0; i < lines.length; i++) {
                line = lines[i].split(',');
                table_list.push(line)
            }
            create_table(table, table_list)
        },
        error: function(xhr, status, error) {
            table.innerHTML = xhr.status + ' Error: ' + xhr.responseText;
            console.log(xhr);
        }
    });


    // Default Pyramid Chart
    $.ajax({
        async: false,
        type: 'GET',
        url: 'http://localhost:5000/pyramid?topic=' + 'population' + '&geo=united%20states',
        success: function(data) {

            var partial_json = JSON.parse(data)['chart'];
            var full_pyramid_json = $.extend({}, partial_json, pyramid_opts);
            pyramid_csv = JSON.parse(data)['csv'];
            pyramidChart = new Chart(pyramid_ctx, full_pyramid_json)
        },
        error: function(xhr, status, error) {
            pyramid_ctx.getContext('2d').font = "20px Helvetica";
            pyramid_ctx.getContext('2d').fillText(xhr.status + ' Error: ' + xhr.responseText, 50, 50);
        }
    });

    download_csv = function(chartVariable) {
        var csv;

        if (chartVariable == 'pie') {
            csv = pie_csv
        } else if (chartVariable == 'trend') {
            csv = trend_csv
        } else if (chartVariable == 'stacked') {
            csv = stacked_csv
        } else if (chartVariable == 'pyramid') {
            csv = pyramid_csv
        }

        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        hiddenElement.download = topic + '_' + chartVariable + '.csv';
        hiddenElement.click();
    };


    download_img = function(chartVariable) {

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
        hiddenElement.download = topic + '_' + chartVariable + '.png';
        hiddenElement.click();
    };


    $("#chart_form").on("submit", function(event) {
        event.preventDefault();

        var geo = $('#geo').val();
        var year = $('#year').val();

        // Pie
        var url = 'http://localhost:5000/pie?topic=' + 'education' + '&geo=' + geo + '&year=' + year;
        var pie = $.get(url);

        // Trend
        url = 'http://localhost:5000/trend?topic=' + 'population' + '&geo=' + geo;
        var trend = $.get(url);

        // Stacked Bar
        url = 'http://localhost:5000/stacked?topic=' + 'education' + '&geo=' + geo;
        var stacked = $.get(url);

        // Table
        url = 'http://localhost:5000/table?topic=' + 'population' + '&geo=' + geo;
        var tbl = $.get(url);

        url = 'http://localhost:5000/pyramid?topic=' + 'population' + '&geo=' + geo;
        var pyramid = $.get(url);

        // TODO: Error handling
        // [data, textStatus, jqXHR]
        $.when(pie, trend, stacked, tbl, pyramid).done(function(pie_resp, trend_resp, stacked_resp, tbl_resp, pyramid_resp) {

            // Pie
            var full_pie_json = JSON.parse(pie_resp[0])['chart'];
            pie_csv = JSON.parse(pie_resp[0])['csv'];
            try { 
                pieChart.destroy(); 
            } finally {
                pieChart = new Chart(pie_ctx, full_pie_json);
            }

            // Trend
            var full_line_json = JSON.parse(trend_resp[0])['chart'];
            trend_csv = JSON.parse(trend_resp[0])['csv'];
            try { 
                lineChart.destroy(); 
            } finally {
                lineChart = new Chart(line_ctx, full_line_json);
            }

            // Stacked
            var full_stacked_json = JSON.parse(stacked_resp[0])['chart'];
            stacked_csv = JSON.parse(stacked_resp[0])['csv'];
            try { 
                barChart.destroy(); 
            } finally { 
                barChart = new Chart(bar_ctx, full_stacked_json);
            }

            // Table 
            convert_camelcase = function(str) {
                str = str.replace('"','')
                if (str.length == 1) {
                    return str.toLowerCase();
                } else {
                    //From http://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
                    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
                        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
                            return index == 0 ? match.toLowerCase() : match.toUpperCase();
                        });
                }
            };

            update_dynatable = function(table, newData) {

                var dynatable = $(table).data('dynatable');
                var recordCount = dynatable.settings.dataset.originalRecords.length;
                
                //remove all existing records from this table
                for (i = 0; i < recordCount; i++) {
                    dynatable.settings.dataset.originalRecords.pop();
                }

                var lines = newData.split("\\r\\n");
                lines.pop();
                var cols = lines[0].split(",");
              
                for (i = 1; i < lines.length; i++) {
                    var newRecord = {}
                    var entries = lines[i].split(",")
                    for (j = 0; j < entries.length; j++) {
                        var colCamel = convert_camelcase(cols[j]);
                        newRecord[colCamel] = entries[j];
                    }
                    dynatable.settings.dataset.originalRecords.push(newRecord)
                }
                
                dynatable.process();
            };

            update_dynatable(table, tbl_resp[0])

            // Pyramid
            var partial_json = JSON.parse(pyramid_resp[0])['chart'];
            var full_pyramid_json = $.extend({}, partial_json, pyramid_opts);
            pyramid_csv = JSON.parse(pyramid_resp[0])['csv'];
            try { 
                pyramidChart.destroy();
            } finally  {
                pyramidChart = new Chart(pyramid_ctx, full_pyramid_json)
            }
        });
    });
});