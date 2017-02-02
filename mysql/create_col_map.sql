DROP TABLE IF EXISTS censcope.col_map;

CREATE TABLE IF NOT EXISTS censcope.col_map ( 
	col VARCHAR(20) DEFAULT NULL,
	label VARCHAR(100) DEFAULT NULL,
	topic VARCHAR(20) DEFAULT NULL,
	pie BOOLEAN DEFAULT NULL,
	trend BOOLEAN DEFAULT NULL, 
	stacked_bar BOOLEAN DEFAULT NULL,
	tbl BOOLEAN DEFAULT NULL,
	pyramid1 BOOLEAN DEFAULT NULL,
	pyramid2 BOOLEAN DEFAULT NULL
);

INSERT INTO col_map(col, label, topic, pie, trend, stacked_bar, tbl, pyramid1, pyramid2)
VALUES ('TotalPopulation', 'population', 'Total Population', 0, 1, 0, 1, 0, 0),
('B5060', 'Total with less than HS diploma, GED, or equivalent', 'education',
('B5061', 'Total with HS diploma, GED, or equivalent', 'education',
('B5062', 'Total with HS diploma, GED, or equivalent or higher', 'education',
('B5063', 'Total with some College or Associates Degree', 'education',
('B5064', 'Total with Bachelors Degree or higher', 'education',
('B5065', 'Total with Masters Degree or higher', 'education',
('B5019', 'Total population Regular high school diploma', 'education',
('B5020', 'Total population GED or alternative credential', 'education',
B5021	Total population Some college, less than 1 year
B5022	Total population Some college, 1 or more years, no degree
B5023	Total population Associates degree
B5024	Total population Bachelors degree
B5025	Total population Masters degree
B5026	Total population Professional school degree
B5027	Total population Doctorate degree


5078-5090 bar chart / pie chart
5066-5077 population pyramid

5006-50018 pie chart (edited)
5019-5027 pie chart
5028-5069 population pyramid

5060-5065 trend chart