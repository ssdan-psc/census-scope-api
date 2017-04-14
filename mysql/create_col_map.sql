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
VALUES ('B5078', 'Percent Males with less than HS diploma, GED, or equivalent', 'education', 0, 1, 1, 0, 0, 0),
('B5079', 'Percent Females with less than HS diploma, GED, or equivalent', 'education', 0, 1, 1, 0, 0, 0),
('B5080', 'Percent Males with HS Grad, GED, or equivalent', 'education', 0, 0, 1, 0, 0, 0),
('B5081', 'Percent Females with HS Grad, GED, or equivalent', 'education', 0, 0, 1, 0, 0, 0),
('B5082', 'Percent Males with HS Grad, GED, equivalent or higher', 'education', 0, 0, 1, 0, 0, 0),
('B5083', 'Percent Females with HS Grad, GED, equivalent or higher', 'education', 0, 0, 1, 0, 0, 0),
('B5084', 'Percent Males with some College or Associates Degree', 'education', 0, 0, 1, 0, 0, 0),
('B5085', 'Percent Females with some College or Associates Degree', 'education', 0, 0, 1, 0, 0, 0),
('B5086', 'Percent Males with Bachelors Degree or higher', 'education', 0, 1, 1, 0, 0, 0),
('B5087', 'Percent Females with Bachelors Degree or higher', 'education', 0, 1, 1, 0, 0, 0),
('B5088', 'Percent Males with Masters Degree or higher', 'education', 0, 0, 1, 0, 0, 0),
('B5089', 'Percent Females with Masters Degree or higher', 'education', 0, 0, 1, 0, 0, 0),
('B5090', 'Percent Population 25+ less than HS Diploma/Equivalent', 'education', 0, 1, 0, 0, 0, 0);

