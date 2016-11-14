
def get_cols(topic, cursor):
	query = "SELECT col FROM col_map WHERE topic=" + "'" + topic + "'"
	cursor.execute(query)
	results = cursor.fetchall()
	cols = []
	for c in results:
		col = c[0].encode('utf-8')
		cols.append(col)
	return cols