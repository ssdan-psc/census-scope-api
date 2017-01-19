DROP TABLE IF EXISTS censcope.popPyramid2014_15;

CREATE TABLE IF NOT EXISTS censcope.popPyramid2014_15 ( 
	STUSAB VARCHAR(2),
	SUMLEVEL VARCHAR(3),
	GEOID VARCHAR(20),
	NAME VARCHAR(100),
	B01001e1 INT,
	B01001e2 INT,
	B01001e3 INT,
	B01001e4 INT,
	B01001e5 INT,
	B01001e6 INT,
	B01001e7 INT,
	B01001e8 INT,
	B01001e9 INT,
	B01001e10 INT,
	B01001e11 INT,
	B01001e12 INT,
	B01001e13 INT,
	B01001e14 INT,
	B01001e15 INT,
	B01001e16 INT,
	B01001e17 INT,
	B01001e18 INT,
	B01001e19 INT,
	B01001e20 INT,
	B01001e21 INT,
	B01001e22 INT,
	B01001e23 INT,
	B01001e24 INT,
	B01001e25 INT,
	B01001e26 INT,
	B01001e27 INT,
	B01001e28 INT,
	B01001e29 INT,
	B01001e30 INT,
	B01001e31 INT,
	B01001e32 INT,
	B01001e33 INT,
	B01001e34 INT,
	B01001e35 INT,
	B01001e36 INT,
	B01001e37 INT,
	B01001e38 INT,
	B01001e39 INT,
	B01001e40 INT,
	B01001e41 INT,
	B01001e42 INT,
	B01001e43 INT,
	B01001e44 INT,
	B01001e45 INT,
	B01001e46 INT,
	B01001e47 INT,
	B01001e48 INT,
	B01001e49 INT
);

LOAD DATA LOCAL INFILE 'popPyramid2014_5_data.csv' INTO TABLE censcope.popPyramid2014_15
FIELDS TERMINATED BY ',' ENCLOSED BY '"';