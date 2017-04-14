DROP TABLE IF EXISTS censcope.col_map;

CREATE TABLE IF NOT EXISTS censcope.col_map ( 
	col VARCHAR(20) DEFAULT NULL,
	label VARCHAR(100) DEFAULT NULL,
	topic VARCHAR(20) DEFAULT NULL,
	pie BOOLEAN DEFAULT NULL,
	trend BOOLEAN DEFAULT NULL, 
	stacked1 BOOLEAN DEFAULT NULL,
	stacked2 BOOLEAN DEFAULT NULL,
	tbl BOOLEAN DEFAULT NULL,
	pyramid1 BOOLEAN DEFAULT NULL,
	pyramid2 BOOLEAN DEFAULT NULL
);

INSERT INTO col_map(col, label, topic, pie, trend, stacked1, stacked2, tbl, pyramid1, pyramid2)
VALUES ('B5078', 'Percent Males with less than HS diploma, GED, or equivalent', 'education', 0, 1, 1, 0, 0, 0, 0),
('B5079', 'Percent Females with less than HS diploma, GED, or equivalent', 'education', 0, 1, 1, 0, 0, 0, 0),
('B5080', 'Percent Males with HS Grad, GED, or equivalent', 'education', 0, 0, 1, 0, 0, 0, 0),
('B5081', 'Percent Females with HS Grad, GED, or equivalent', 'education', 0, 0, 1, 0, 0, 0, 0),
('B5082', 'Percent Males with HS Grad, GED, equivalent or higher', 'education', 0, 0, 1, 0, 0, 0, 0),
('B5083', 'Percent Females with HS Grad, GED, equivalent or higher', 'education', 0, 0, 1, 0, 0, 0, 0),
('B5084', 'Percent Males with some College or Associates Degree', 'education', 0, 0, 1, 0, 0, 0, 0),
('B5085', 'Percent Females with some College or Associates Degree', 'education', 0, 0, 1, 0, 0, 0, 0),
('B5086', 'Percent Males with Bachelors Degree or higher', 'education', 0, 1, 1, 0, 0, 0, 0),
('B5087', 'Percent Females with Bachelors Degree or higher', 'education', 0, 1, 1, 0, 0, 0, 0),
('B5088', 'Percent Males with Masters Degree or higher', 'education', 0, 0, 1, 0, 0, 0, 0),
('B5089', 'Percent Females with Masters Degree or higher', 'education', 0, 0, 1, 0, 0, 0, 0),
('B5090', 'Percent Population 25+ less than HS Diploma/Equivalent', 'education', 0, 1, 0, 0, 0, 0, 0),
('B5027', 'Percent Population Bachelors Degree or higher', 'education', 0, 1, 0, 0, 0, 0 ,0 ),
('B5053', 'Percent White Alone, not Hispanic or Latino  population less than high school diploma', 'education', 0, 0, 0, 1, 0, 0, 0),
('B5054', 'Percent White Alone, not Hispanic or Latino  population HS Grad, GED, or equivalent', 'education', 0, 0, 0, 1, 0, 0, 0),
('B5055', 'Percent White Alone, not Hispanic or Latino  population some college or associate', 'education', 0, 0, 0, 1, 0, 0, 0),
('B5056', 'Percent White Alone, not Hispanic or Latino population Bachelors or higher', 'education', 0, 0, 0, 1, 0, 0, 0),
('B5080', 'Percent Black or African American alone population less than high school diploma', 'education', 0, 0, 0, 1, 0, 0, 0),
('B5081', 'Percent Black or African American alone  population high school graduate', 'education', 0, 0, 0, 1, 0, 0, 0),
('B5082', 'Percent Black or African American alone  population some college or associates', 'education', 0, 0, 0, 1, 0, 0, 0),
('B5083', 'Percent Black or African American alone population bacehlors or higher', 'education', 0, 0, 0, 1, 0, 0, 0),
('B5107', 'Percent Asian alone population less than high school diploma', 'education', 0, 0, 0, 1, 0, 0, 0),
('B5108', 'Percent Asian alone population high school graduate', 'education', 0, 0, 0, 1, 0, 0, 0),
('B5109', 'Percent Asian alone population some college or associate', 'education', 0, 0, 0, 1, 0, 0, 0),
('B5110', 'Percent Asian alone population bacehlors or higher', 'education', 0, 0, 0, 1, 0, 0, 0),
('B5134', 'Percent Hispanic or Latino population less than high school diploma', 'education', 0, 0, 0, 1, 0, 0, 0),
('B5135', 'Percent Hispanic or Latino population high school graduate', 'education', 0, 0, 0, 1, 0, 0, 0),
('B5136', 'Percent Hispanic or Latino population some college or associates', 'education', 0, 0, 0, 1, 0, 0, 0),
('B5137', 'Percent Hispanic or Latino population bacehlors or higher','education', 0, 0, 0, 1, 0, 0, 0);


