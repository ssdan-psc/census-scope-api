DROP TABLE IF EXISTS census_scope.col_map;

CREATE TABLE IF NOT EXISTS census_scope.col_map ( 
	col VARCHAR(20),
	topic VARCHAR(20),
	label VARCHAR(20)
);

INSERT INTO col_map(col, topic, label)
VALUES ('TotalPopulation', 'population', 'Total Population'),
	('TotalEd', 'education'), 
	('LTHS', 'education'),
	('HSGrad', 'education'), 
	('SomeColl', 'education'),
	('CollGrad', 'education'), 
	('GradProf', 'education'), 
	('PerLTHS', 'education'),
	('PerHSGrad', 'education'),
	('PerSomeColl', 'education'),
	('PerCollGrad', 'education'),
	('PerGradProf', 'education');