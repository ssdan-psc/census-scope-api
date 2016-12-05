from flask import Flask, jsonify, request, make_response
from flaskext.mysql import MySQL
from flask_cors import CORS, cross_origin
import json
import csv
import io

from helper import get_cols
import json_builder

app = Flask(__name__)
CORS(app)

mysql = MySQL()

# TODO: Use config file to set these
# MySQL Configurations
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = ''
app.config['MYSQL_DATABASE_DB'] = 'census_scope'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_PORT'] = 3307
mysql.init_app(app)

conn = mysql.connect()
cursor = conn.cursor()

TABLE = 'sample'

colors = ["#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#cb62ff",
          "#72ff62",
          "#ffa362"]

# TODO: Be careful about bytes coming from SQL queries 

@app.route('/')
@cross_origin()
def index():
    return "Hello, World!"

# /trend?geo=GEO&topic=TOPIC
@app.route('/trend', methods=['GET'])
@cross_origin()
def get_trend_chart():
    geo = request.args.get('geo')   # TODO: Map geo to all possible geos
    topic = request.args.get('topic')		

    cols, data_labels = get_cols(topic, cursor, 'trend')
    
    if cols:
        query = "SELECT Year"
        data_labels.insert(0, 'Year')
        for col in cols: 
            query += "," + col.decode('utf-8')
        query += " FROM "  + TABLE + " WHERE AreaName='" + geo + "'"

        cursor.execute(query)
        results = cursor.fetchall()

        labels = []
        data = []
        for result in results:
            labels.append(result[0])
            data.append(result[1])
      
        response = {}
        chart = json_builder.chart_line(labels, [json_builder.Line_Data(data, data_labels[1])])
        response["chart"] = json.loads(chart)

        with io.BytesIO() as csv_string:
            writer = csv.writer(csv_string)
            writer.writerow(data_labels)
            for row in results: 
                writer.writerow(row)

            response["csv"] = csv_string.getvalue()

        return json.dumps(response)

    else:
        return make_response("%s is an invalid topic" % (topic), 400)


# /pie?geo=GEO&topic=TOPIC&year=YEAR
@app.route('/pie', methods=['GET'])     
@cross_origin()
def get_pie_chart():
    geo = request.args.get('geo')   # TODO: Map geo to all possible geos 
    topic = request.args.get('topic')
    year = request.args.get('year')

    cols, labels = get_cols(topic, cursor, 'pie')

    if cols:
        query = "SELECT "
        for col in cols:
            query += col.decode('utf-8')
            if col != cols[-1]:
                query += ","

        query += " FROM " + TABLE + " WHERE AreaName='" + geo + "' AND Year=" + year

        try:
            cursor.execute(query)
        except:
            return make_response("%s is invalid" % (query), 400)
        
        results = cursor.fetchall()

        if not results:
            return make_response("There is no data available for %s in %s in %s" % (topic, geo, year), 400)
        
        data = results[0]
        
        c = []
        for i in range(0, len(data)):
            c.append(colors[i]);

        dataset = json_builder.Pie_Slices(colors, data)

        response = {}
        chart = json_builder.chart_pie(labels, dataset)
        response['chart'] = json.loads(chart)
       
        with io.BytesIO() as csv_string:
            writer = csv.writer(csv_string)
            writer.writerow(labels)
            for row in results: 
                writer.writerow(row)

            response["csv"] = csv_string.getvalue()

        return json.dumps(response)

    else:
        return make_response("%s is an invalid topic" % (topic), 400)

# /stacked?topic=TOPIC&geo=GEO
@app.route('/stacked', methods=['GET'])
@cross_origin()
def get_stacked_chart():
    geo = request.args.get('geo')   # TODO: Map geo to all possible geos
    topic = request.args.get('topic')       

    cols, data_labels = get_cols(topic, cursor, 'stacked_bar')
    
    if cols:
        query = "SELECT Year"
        for col in cols: 
            query += "," + col.decode('utf-8')
        query += " FROM "  + TABLE + " WHERE AreaName='" + geo + "'"

        cursor.execute(query)
        results = cursor.fetchall()

        labels = []
        data = []
        temp = []
        print(results)
        for result in results:
            labels.append(result[0])
            print(result)
            for i in range(1, len(result)):
                if result == results[0]:
                    temp.append([result[i]])
                else:
                    temp[i - 1].append(result[i])

        for i in range(0, len(temp)):
            dataset = json_builder.Stacked_Bars(data_labels[i], colors[i], temp[i])

            data.append(dataset)
        
        response = {}
        chart = json_builder.chart_bar(labels, data)
        response["chart"] = json.loads(chart)
        response['csv'] = "test,test,test"      # TODO: Need csv

        return json.dumps(response)

    else:
        return make_response("%s is an invalid topic" % (topic), 400)


# /table?topic=TOPIC&geo=GEO
@app.route('/table', methods=['GET'])
@cross_origin()
def get_table():
    topic = request.args.get('topic')
    geo = request.args.get('geo')

    cols, labels = get_cols(topic, cursor, "tbl")

    if cols:
        query = "SELECT Year,"
        labels.insert(0, "Year")
        for col in cols: 
            query += col.decode('utf-8')
            if col != cols[-1]:
                query += ","
        query += " FROM "  + TABLE + " WHERE AreaName = '" + geo + "'"

        cursor.execute(query)
        results = cursor.fetchall()

        with io.BytesIO() as csv_string:
            writer = csv.writer(csv_string)
            writer.writerow(labels)
            for row in results: 
                writer.writerow(row)

            return json.dumps(csv_string.getvalue())

    else:
        return make_response("%s is an invalid topic" % (topic), 400)

# /pyramid?topic=TOPIB&geo=GEO
@app.route('/pyramid', methods=['GET'])
@cross_origin()
def get_pyramid():
    topic = request.args.get('topic')
    geo = request.args.get('geo')

    #cols, labels = get_cols(topic, cursor, "pyramid")

    return json.dumps('hi')


if __name__ == '__main__':
    app.run(debug=True)
