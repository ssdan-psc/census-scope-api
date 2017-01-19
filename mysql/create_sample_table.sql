/* From command line, start MySQL in the directory that has ACS10_15_SSDAN_MainMeasures.csv
with 'mysql -h localhost -u root --local-infile'
*/

CREATE DATABASE IF NOT EXISTS censcope; 

DROP TABLE IF EXISTS censcope.sample;

CREATE TABLE IF NOT EXISTS censcope.sample ( 
	GeographicIdentifier VARCHAR(20),
	SummaryLevel INT,
	AreaName VARCHAR(100),
	Year INT,
	TotalPopulation INT,
	TotalEd INT, 
	LTHS INT,
	HSGrad INT, 
	SomeColl INT,
	CollGrad INT, 
	GradProf INT, 
	PerLTHS DOUBLE,
	PerHSGrad DOUBLE,
	PerSomeColl DOUBLE,
	PerCollGrad DOUBLE,
	PerGradProf DOUBLE,
	PerFemWCollPlus DOUBLE,
	PerMalWCollPlus DOUBLE,
	TotalRace INT,
	TotalNHW INT,
	TotalNHB INT,
	TotalNHAIAN INT,
	TotalNHAsian INT,
	TotalNHNHPI INT,
	TotalNHOther INT,
	TotalNHMulti INT,
	TotalHisp INT,
	PerNHW DOUBLE,
	PerNHB DOUBLE,
	PerNHA DOUBLE,
	PerNHMulti DOUBLE,
	PerHisp DOUBLE,
	TotalMexican INT,
	TotalPRican INT,
	TotalCuban INT,
	TotalDominican INT,
	TotalCAmerican INT,
	TotalSAmerican INT,
	TotalOthHisp INT,
	PerHispMexican DOUBLE,
	PerHispPRican DOUBLE,
	PerHispCuban DOUBLE,
	PerHispDominican DOUBLE,
	TotalAsianIndian INT,
	TotalChinese INT,
	TotalFilipino INT,
	TotalJapanese INT,
	TotalKorean INT,
	TotalVietnamese INT,
	TotalOthAsian INT,
	PerAsianIndian DOUBLE,
	PerAsianChinese DOUBLE,
	PerAsianFilipino DOUBLE,
	PerAsianJapanese DOUBLE,
	PerAsianKorean DOUBLE,
	PerAsianViet DOUBLE,
	GiniIndex DOUBLE,
	MedianHHInc INT,
	HHInc95Percentile INT,
	HHInc20Percentile INT
);

LOAD DATA LOCAL INFILE 'ACS10_15_SSDAN_MainMeasures.csv' INTO TABLE censcope.sample 
FIELDS TERMINATED BY ',' ENCLOSED BY '"';



