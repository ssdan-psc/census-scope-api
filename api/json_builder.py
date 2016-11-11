import json

class pie_slices:
    """
    Object for building pie charts. Every dataset in a pie chart should
    be a pie_slices object. pie_slices contain:
        labels: a list of strings for the text of each slice
        colors: a list of (r, g, b, a) tuples for each slice
        dataset: a list of values for each slice
    Each slice has one label and one color associated with it, as well
    as its data. Corresponding values are matched by index. This means
    that labels[0], colors[0], and dataset[0] all correspond to the
    same slice of the pie chart.
    """
    def __init__(self, labels, colors, dataset):
        self.labels = labels
        self.colors = colors
        self.dataset = dataset

class set_stackedbar:
    def __init__(self, label, data, rgba):
        self.label = label
        self.data = data
        self.rgba = rgba

def build_json(labels, datasets, type):
    if (type == "line"):
        return line_chart(labels, datasets)
    if (type == "stacked bar"):
        return stackedbar_chart(labels, datasets)
    if (type == "pie"):
        return pie_chart(labels, datasets)
    return

def pie_chart(datasets):
    """
    Returns a string that represents a JSON object for a pie chart.
    datasets: a list of pie_slices objects that represent each set
                of data displayed in this pie chart
    """

    j = "{"
    j += "labels: ["
    for pslices in datasets:
        j += str(pslices.labels)
        j += ", "
    j += "], datasets: ["
    for pslices in datasets:
        j += "{data: "
        j += str(pslices.dataset)
        j += ", "
        j += "backgroundColor: ["
        for color in pslices.colors:
            j += "\"rgba"
            j += str(color)
            j += "\","
        j += "]}"
    j += "]}"

    return j

def table_plain(labels, datasets):
    """
    takes labels as list of labels for headers of table
    takes datasets as list of lists of values
        each list of values should be as long as list of headers
    """
    j = [labels, datasets]
    
    return json.dumps(j)


def line_chart(labels, datasets):
    j = {}
    l = labels

    j['labels'] = l
    
    d = []
    for dset in datasets:
        d.append({})
        d[len(d) - 1]['data'] = dset

    j['datasets'] = d

    return json.dumps(j)

def stackedbar_chart(labels, stackedbarsets):
    j = {}
    l = labels
    j['labels'] = l

    d = []
    for dset in stackedbarsets:
        d.append({})
        i = len(d) - 1
        d[i]['type'] = "\'bar\',"
        name = "\'"
        name += dset.label
        name += "\',"
        d[i]['label'] = name
        color = "\'"
        color += dset.rgba
        color += "\',"
        d[i]['backgroundcolor'] = color
        d[i]['data'] = dset.data

    j['datasets'] = d

    return json.dumps(j)


def main():
    labels = ["red", "green", "blue"]
    dataset = [170, 20, 25]
    colors = []
    colors.append((100, 200, 100, 0.5))
    colors.append((200, 100, 100, 0.5))
    colors.append((100, 100, 200, 0.5))
    pslices = [pie_slices(labels, colors, dataset)]

    labels = ["red", "green", "blue"]
    dataset = [140, 220, 25]
    colors = []
    colors.append((130, 20, 105, 0.5))
    colors.append((200, 120, 230, 0.5))
    colors.append((100, 200, 200, 0.7))
    pslices.append(pie_slices(labels, colors, dataset))

    j = pie_chart(pslices)

    file = open('json.txt', 'w')
    file.write(str(j))
    file.close()
    print(j)
    return

main()