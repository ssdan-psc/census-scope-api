import json

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
    return

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
    labels = [0, 1, 2, 3, 4, 5]
    datasets = [[30, 5, 10, 3, 9, 50], [30, 50, 100, 30, 90, 5]]

    j = build_json(labels, datasets, "line")

    print(table_plain(labels, datasets))

    #test stacked bar chart json

    file = open('json.txt', 'w')
    file.write(str(j))
    file.close()
    print(j)
    return

main()