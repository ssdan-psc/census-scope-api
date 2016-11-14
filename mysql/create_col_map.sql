DROP TABLE IF EXISTS census_scope.col_map;

CREATE TABLE IF NOT EXISTS census_scope.col_map ( 
	col VARCHAR(20) DEFAULT NULL,
	topic VARCHAR(20) DEFAULT NULL,
	label VARCHAR(100) DEFAULT NULL,
	pie BOOLEAN DEFAULT NULL,
	trend BOOLEAN DEFAULT NULL, 
	stacked_bar BOOLEAN DEFAULT NULL
);

INSERT INTO col_map(col, topic, label, pie, trend, stacked_bar)
VALUES ('TotalPopulation', 'population', 'Total Population', 0, 1, 0),
	('LTHS', 'education', 'Less Than HS', 0, 0, 1),
	('HSGrad', 'education', 'High School', 0, 0, 1), 
	('SomeColl', 'education', 'Some College', 0, 0, 1),
	('CollGrad', 'education', 'College', 0, 0, 1), 
	('GradProf', 'education', 'Graduate / Professional', 0, 0, 1), 
	('PerLTHS', 'education', ' Percent Less than HS', 1, 0, 0),
	('PerHSGrad', 'education', 'Percent HS', 1, 0, 0),
	('PerSomeColl', 'education', 'Percent Some College', 1, 0, 0),
	('PerCollGrad', 'education', 'Percent College', 1, 0, 0),
	('PerGradProf', 'education', 'Percent Graduate / Professional', 1, 0, 0);