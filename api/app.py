from flask import Flask, jsonify, request, make_response
from flaskext.mysql import MySQL
from flask_cors import CORS, cross_origin

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


@app.route('/trend', methods=['GET'])    # /trend?geo=GEO&topic=TOPIC
@cross_origin()
def get_trend_chart():
    geo = request.args.get('geo')   # TODO: Map geo to all possible geos
    topic = request.args.get('topic')		

    cols, label = get_cols(topic, cursor, 'trend')
    
    if cols:
        query = "SELECT Year"
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

        response = json_builder.chart_line(labels, [json_builder.Line_Data(data, label[0])])
        return response

    else:
        return make_response("%s is an invalid topic" % (topic), 400)


@app.route('/pie', methods=['GET'])     # /pie?geo=GEO&topic=TOPIC&year=YEAR
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
        j = json_builder.chart_pie(labels, dataset)

        return j

    else:
        return make_response("%s is an invalid topic" % (topic), 400)

# @app.route('stackedbar/states/<state>', methods=['GET'])
# @cross_origin()

# @app.route('table/states/<state>', methods=['GET'])
# @cross_origin()


if __name__ == '__main__':
    app.run(debug=True)
