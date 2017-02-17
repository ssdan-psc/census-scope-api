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

    //All default charts
    $.ajax({
        async: false,
        type: 'GET',
        url: 'http://censusscope.web.itd.umich.edu/newCharts/api/api.php?method=hello&format=json&geo=united%20states&year=2010&topic=population',
        success: function (data) {
            console.log(data['data']['pyramid'])
            var pie_data = data['data']['pie'];
            var trend_data = data['data']['trend']
            var stacked_data = data['data']['stacked']
            var table_data = data['data']['table']
            var pyramid_data = data['data']['pyramid']

            if ('error' in pie_data) {
                pie_ctx.getContext('2d').font = "20px Helvetica";
                pie_ctx.getContext('2d').fillText(pie_data['error'], 50, 50);
            } else {
                var full_pie_json = pie_data['chart'];
                pie_csv = pie_data['csv'];
                pieChart = new Chart(pie_ctx, full_pie_json);
            }

            if ('error' in trend_data) {
                line_ctx.getContext('2d').font = "20px Helvetica";
                line_ctx.getContext('2d').fillText(trend_data['error'], 50, 50);
            } else {
                var full_line_json = JSON.parse(trend_data['chart']);
                console.log(full_line_json);
                trend_csv = trend_data['csv'];
                lineChart = new Chart(line_ctx, full_line_json);
            }

            if ('error' in stacked_data) {
                bar_ctx.getContext('2d').font = "20px Helvetica";
                bar_ctx.getContext('2d').fillText(stacked_data['error'], 50, 50);
            } else {
                var full_stacked_json = stacked_data['chart'];
                stacked_csv = stacked_data['csv'];
                barChart = new Chart(bar_ctx, full_stacked_json);
            }

            if ('error' in table_data) {
                table.innerHTML = table_data['error'];
                console.log(table_data['error']);
            } else {
                table_csv = table_data['csv'];
                table_list = [];
                lines = table_csv.split('\r\n');
                for (var i = 0; i < lines.length; i++) {
                    line = lines[i].split(',');
                    table_list.push(line)
                }
                create_table(table, table_list)
            }

            if ('error' in pyramid_data) {
                pyramid_ctx.getContext('2d').font = "20px Helvetica";
                pyramid_ctx.getContext('2d').fillText(pyramid_data['error'], 50, 50);
            } else {
                var partial_json = pyramid_data['chart'];
                var full_pyramid_json = $.extend({}, partial_json, pyramid_opts);
                pyramid_csv = pyramid_data['csv'];
                pyramidChart = new Chart(pyramid_ctx, full_pyramid_json)
            }

        },
        error: function (xhr, status, error) {
            pie_ctx.getContext('2d').font = "20px Helvetica";
            pie_ctx.getContext('2d').fillText(xhr.status + ' Error: ' + xhr.responseText, 50, 50);
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


    $("#chart_form").on("submit", function (event) {
        event.preventDefault();
        $.ajax({
            async: false,
            type: 'GET',
            url: 'http://censusscope.web.itd.umich.edu/newCharts/api/api.php?method=hello&format=json&geo=united%20states&year=2010&topic=population',
            success: function (data) {
                var pie_data = data['data']['pie'];
                var trend_data = data['data']['trend']
                var stacked_data = data['data']['stacked']
                var table_data = data['data']['table']
                var pyramid_data = data['data']['pyramid']

                if ('error' in pie_data) {
                    pie_ctx.getContext('2d').font = "20px Helvetica";
                    pie_ctx.getContext('2d').fillText(pie_data['error'], 50, 50);
                } else {
                    try { 
                        pieChart.destroy();
                    } finally {
                        var full_pie_json = pie_data['chart'];
                        pie_csv = pie_data['csv'];
                        pieChart = new Chart(pie_ctx, full_pie_json);
                    }
                }

                if ('error' in trend_data) {
                    line_ctx.getContext('2d').font = "20px Helvetica";
                    line_ctx.getContext('2d').fillText(trend_data['error'], 50, 50);
                } else {
                    try { 
                        lineChart.destroy(); 
                    } finally {
                        var full_line_json = trend_data['chart'];
                        trend_csv = trend_data['csv'];
                        lineChart = new Chart(line_ctx, full_line_json);
                    }
                }

                if ('error' in stacked_data) {
                    bar_ctx.getContext('2d').font = "20px Helvetica";
                    bar_ctx.getContext('2d').fillText(stacked_data['error'], 50, 50);
                } else {
                    try { 
                        barChart.destroy(); 
                    } finally {
                        var full_stacked_json = stacked_data['chart'];
                        stacked_csv = stacked_data['csv'];
                        barChart = new Chart(bar_ctx, full_stacked_json);
                    }
                }

                if ('error' in table_data) {
                    table.innerHTML = table_data['error'];
                    console.log(table_data['error']);
                } else {
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

                }

                if ('error' in pyramid_data) {
                    pyramid_ctx.getContext('2d').font = "20px Helvetica";
                    pyramid_ctx.getContext('2d').fillText(pyramid_data['error'], 50, 50);
                } else {
                    try { 
                        pyramidChart.destroy();
                    } finally {
                        var partial_json = pyramid_data['chart'];
                        var full_pyramid_json = $.extend({}, partial_json, pyramid_opts);
                        pyramid_csv = pyramid_data['csv'];
                        pyramidChart = new Chart(pyramid_ctx, full_pyramid_json)
                    }
                }

            },
            error: function (xhr, status, error) {
                pie_ctx.getContext('2d').font = "20px Helvetica";
                pie_ctx.getContext('2d').fillText(xhr.status + ' Error: ' + xhr.responseText, 50, 50);
            }

        });
    });
});