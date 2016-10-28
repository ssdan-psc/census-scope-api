from flask import Flask, jsonify
from flask.ext.mysql import MySQL

app = Flask(__name__)

mysql = MySQL()

# TODO: Use config file to set these
# MySQL Configurations
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = ''
app.config['MYSQL_DATABASE_DB'] = 'census_scope'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)

conn = mysql.connect()
cursor = conn.cursor()

TABLE = 'sample'

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/trend', methods=['GET'])	# /trend?geo=GEO&topic=TOPIC
def get_trend_chart():
	geo = request.args.get('geo')
	topic = request.args.get('topic')			# TODO: Map topics to cols

	query = """SELECT Year, %s 					# TODO: Should it return more information to be more easily downloaded into csv?
				FROM %s 
				WHERE AreaName = %s""" % (topic, TABLE, geo)

	results = cursor.execute(query)
    return results

@app.route('/pie', methods=['GET'])	# /pie?geo=GEO&topic=TOPIC&year=YEAR
def get_pie_chart():
	geo = request.args.get('geo')
	topic = request.args.get('topic')			# TODO: Map topics to cols
	year = request.args.get('year')

	query = """SELECT %s, %s 
				FROM %s 
				WHERE AreaName = %s""" % (year, topic, TABLE, geo)

	results = cursor.execute(query)
    return results

# @app.route('stackedbar/states/<state>', methods=['GET'])

# @app.route('table/states/<state>', methods=['GET'])


if __name__ == '__main__':
    app.run(debug=True)