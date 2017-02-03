import sys

def chart_pie(labels, dataset, colors):
    """
    Returns a string that represents a JSON object for a pie chart
    constructed from the dataset provided.
    labels: a list of strings for the names of each slice
    dataset: a list of values for each slice
    colors: a list of (r, g, b, a) tuples for each slice
    Labels aand data are matched up by index; for example dataset[0]
    and labels[0] will be attributes of the same slice.
    """

    j = '{'
    j += '"type": \"pie\", "data": '
    j += "{"
    j += '"labels": ['
    for label in labels:
        j+= '"' + label.decode('utf-8') + '"'
        if label != labels[-1]:
            j += ','
    j += '], '

    j += '"datasets": ['
    j += '{"data": ['

    for data in dataset:
        j+= str(data)

        if data != dataset[-1]:
            j += ","
    j += "]"

    j += ", "
    j += '"backgroundColor": ['

    for color in colors:
        j += '"'
        j += str(color)

        if color != colors[-1]:
            j += "\","
        else:
            j += '"'

    j += "],"
    j += '"hoverBackgroundColor": ['

    for color in colors:
        j += '"'
        j += str(color)

        if color != colors[-1]:
            j += "\","
        else:
            j += '"'

    j += "]}"
    j += "]},"
    j += '"options": {"animation": { "duration": 1000, "animateRotate": false,'
    j += '"animateScale": true}'
    j += '} }'
    return j

def chart_bar(axislabels, setlabels, datasets, colors):
    """
    Returns a string that represents the JSON object for a stacked
    bar chart constructed from the datasets provided.
    axislabels: a list of strings for the x-axis labels on the chart
    setlabels: a list of strings, one label for each dataset
    datasets: a list of lists of numerical values to plot
    """

    j = '{'
    j += '"type": \"bar\", "data":'
    j += "{"
    j += '"labels": '
    j += str(axislabels)
    j += ', "datasets": ['

    for i in len(datasets):
        j += "{"
        j += '"type": \"bar\",'
        j += '"label": \"'
        j += str(setlabels[i])
        j += '\", "backgroundColor":"' + colors[i] + '"'
        j += ', "data": ['

        for d in datasets[i]:
            j += str(d)

            if d != datasets[i][-1]:
                j += ","
        if i != len(datasets) - 1:
            j += "]},"
        else:
            j += "]}"

    j += "]}"
    j += ','
    j += '"options": { "scales": { "xAxes": [{"stacked": true}],'
    j += '"yAxes": [{"stacked": true }] } } }'

    return j

def chart_line(axislabels, setlabels, datasets, colors):
    """
    Returns a string representing the JSON object for a line chart
    constructed from the datasets provided.
    axislabels: a list of strings for the x-axis labels on the chart
    datasets: a list of lists of numerical values to plot, each list is for one line
    setlabels: a list of strings, one for each line
    """

    j = '{'
    j += '"type": \"line\", "data": '
    j += "{"
    j += '"labels": '
    j += str(axislabels)
    j += ', "datasets": ['
    for i in len(datasets):
        j += "{"
        j += '"label": \"'
        j += setlabels[i]
        j += '\", "backgroundColor":"' + colors[i] + '"'
        j += ', "borderColor":"' + colors[i] + '"'
        j += ', "fill": false, "data": '
        j += str(datasets[i])
        j += "}"

        if i != len(datasets) - 1:
            j += ","

    j += "]},"
    j += '"options": {"title": { "display": true, "text": \"Line Chart\"}, "scales": {"yAxes": [{"ticks":{ "beginAtZero": true}}]}}}'
    return j
