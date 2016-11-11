
def get_cols(topic, cursor):
	query = "SELECT col FROM col_map WHERE topic=" + "'" + topic + "'"
	cursor.execute(query)
	cols = cursor.fetchall()
	return cols