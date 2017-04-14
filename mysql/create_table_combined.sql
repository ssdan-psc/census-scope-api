CREATE TABLE `ACS_CombinedYears_CustomMeasures-SSDAN` (
	`FIPS` VARCHAR(7) NOT NULL, 
	`FILEID` VARCHAR(5), 
	`STUSAB` VARCHAR(2) NOT NULL, 
	`SUMLEV` VARCHAR(4), 
	`COMPONENT` INTEGER NOT NULL, 
	`LOGRECNO` VARCHAR(7), 
	`REGION` INTEGER, 
	`DIVISION` INTEGER, 
	`STATE` VARCHAR(4), 
	`COUNTY` VARCHAR(4), 
	`PLACE` VARCHAR(5), 
	`TRACT` VARCHAR(32), 
	`BLKGRP` VARCHAR(32), 
	`NAME` VARCHAR(66) NOT NULL, 
	`GEOID` VARCHAR(16) NOT NULL, 
	`B0001` INTEGER NOT NULL, 
	`B0002` INTEGER NOT NULL, 
	`B0003` INTEGER NOT NULL, 
	`B0004` INTEGER NOT NULL, 
	`B0005` INTEGER NOT NULL, 
	`B0006` INTEGER NOT NULL, 
	`B0007` INTEGER NOT NULL, 
	`B0008` INTEGER NOT NULL, 
	`B0009` INTEGER NOT NULL, 
	`B0010` INTEGER NOT NULL, 
	`B0011` INTEGER NOT NULL, 
	`B0012` INTEGER NOT NULL, 
	`B0013` INTEGER NOT NULL, 
	`B0014` INTEGER NOT NULL, 
	`B0015` INTEGER NOT NULL, 
	`B0016` INTEGER NOT NULL, 
	`B0017` INTEGER NOT NULL, 
	`B0018` INTEGER NOT NULL, 
	`B0029` FLOAT, 
	`B0030` FLOAT, 
	`B0031` FLOAT, 
	`B0032` FLOAT, 
	`B0033` FLOAT, 
	`B0034` FLOAT, 
	`B0035` FLOAT, 
	`B0036` FLOAT, 
	`B0037` FLOAT, 
	`B0038` FLOAT, 
	`B0039` FLOAT, 
	`B0040` INTEGER NOT NULL, 
	`B0041` INTEGER NOT NULL, 
	`B0042` INTEGER NOT NULL, 
	`B0043` INTEGER NOT NULL, 
	`B0044` INTEGER NOT NULL, 
	`B0045` INTEGER NOT NULL, 
	`B0046` INTEGER NOT NULL, 
	`B0047` INTEGER NOT NULL, 
	`B0048` INTEGER NOT NULL, 
	`B0049` INTEGER NOT NULL, 
	`B0050` INTEGER NOT NULL, 
	`B0051` INTEGER NOT NULL, 
	`B0052` INTEGER NOT NULL, 
	`B0053` INTEGER NOT NULL, 
	`B0054` INTEGER NOT NULL, 
	`B0055` INTEGER NOT NULL, 
	`B0056` INTEGER NOT NULL, 
	`B0057` INTEGER NOT NULL, 
	`B0058` INTEGER NOT NULL, 
	`B0059` INTEGER NOT NULL, 
	`B0060` INTEGER NOT NULL, 
	`B0061` INTEGER NOT NULL, 
	`B0062` INTEGER NOT NULL, 
	`B0063` INTEGER NOT NULL, 
	`B0064` INTEGER NOT NULL, 
	`B0065` INTEGER NOT NULL, 
	`B0066` INTEGER NOT NULL, 
	`B0067` INTEGER NOT NULL, 
	`B0068` INTEGER NOT NULL, 
	`B0069` INTEGER NOT NULL, 
	`B0070` INTEGER NOT NULL, 
	`B0071` INTEGER NOT NULL, 
	`B0072` INTEGER NOT NULL, 
	`B0073` INTEGER NOT NULL, 
	`B0074` INTEGER NOT NULL, 
	`B0075` INTEGER NOT NULL, 
	`B0076` INTEGER NOT NULL, 
	`B0077` INTEGER NOT NULL, 
	`B0078` INTEGER NOT NULL, 
	`B0079` INTEGER NOT NULL, 
	`B0080` INTEGER NOT NULL, 
	`B0081` INTEGER NOT NULL, 
	`B0082` INTEGER NOT NULL, 
	`B0083` INTEGER NOT NULL, 
	`B0084` INTEGER NOT NULL, 
	`B0085` INTEGER NOT NULL, 
	`B1001` INTEGER NOT NULL, 
	`B1002` INTEGER NOT NULL, 
	`B1003` INTEGER NOT NULL, 
	`B1004` INTEGER NOT NULL, 
	`B1008` INTEGER NOT NULL, 
	`B1009` INTEGER NOT NULL, 
	`B1010` INTEGER NOT NULL, 
	`B1011` INTEGER NOT NULL, 
	`B1012` INTEGER NOT NULL, 
	`B1013` INTEGER NOT NULL, 
	`B1014` INTEGER NOT NULL, 
	`B1015` INTEGER NOT NULL, 
	`B1016` INTEGER NOT NULL, 
	`B1017` INTEGER NOT NULL, 
	`B1018` INTEGER NOT NULL, 
	`B1019` INTEGER NOT NULL, 
	`B1020` INTEGER NOT NULL, 
	`B1021` INTEGER NOT NULL, 
	`B1022` INTEGER NOT NULL, 
	`B1023` INTEGER NOT NULL, 
	`B1101` INTEGER, 
	`B1102` INTEGER, 
	`B1103` INTEGER, 
	`B1104` INTEGER, 
	`B1105` INTEGER, 
	`B1106` INTEGER, 
	`B1107` INTEGER, 
	`B1108` INTEGER, 
	`B1109` INTEGER, 
	`B1110` INTEGER NOT NULL, 
	`B1111` INTEGER NOT NULL, 
	`B1112` INTEGER NOT NULL, 
	`B1113` INTEGER NOT NULL, 
	`B1114` INTEGER NOT NULL, 
	`B1115` INTEGER NOT NULL, 
	`B1116` INTEGER NOT NULL, 
	`B1117` INTEGER NOT NULL, 
	`B1118` INTEGER NOT NULL, 
	`B1119` INTEGER NOT NULL, 
	`B1120` INTEGER NOT NULL, 
	`B1121` INTEGER NOT NULL, 
	`B1122` INTEGER NOT NULL, 
	`B1123` INTEGER NOT NULL, 
	`B1124` INTEGER NOT NULL, 
	`B1125` INTEGER NOT NULL, 
	`B1501` INTEGER, 
	`B1502` INTEGER, 
	`B1503` INTEGER, 
	`B1504` INTEGER, 
	`B1505` INTEGER, 
	`B1506` INTEGER, 
	`B2201` INTEGER, 
	`B2202` INTEGER, 
	`B2203` INTEGER, 
	`B2204` INTEGER, 
	`B2207` INTEGER, 
	`B2208` INTEGER, 
	`B2301` INTEGER NOT NULL, 
	`B2302` INTEGER NOT NULL, 
	`B2303` INTEGER NOT NULL, 
	`B2304` INTEGER NOT NULL, 
	`B2305` INTEGER NOT NULL, 
	`B4001` INTEGER NOT NULL, 
	`B4002` INTEGER NOT NULL, 
	`B4003` INTEGER NOT NULL, 
	`B4009` INTEGER NOT NULL, 
	`B4010` INTEGER NOT NULL, 
	`B4011` INTEGER NOT NULL, 
	`B4012` INTEGER NOT NULL, 
	`B4013` INTEGER NOT NULL, 
	`B4014` INTEGER NOT NULL, 
	`B4015` INTEGER NOT NULL, 
	`B4016` INTEGER NOT NULL, 
	`B4017` INTEGER NOT NULL, 
	`B4018` INTEGER NOT NULL, 
	`B4019` INTEGER NOT NULL, 
	`B4020` INTEGER NOT NULL, 
	`B4033` FLOAT, 
	`B4035` FLOAT, 
	`B4401` INTEGER NOT NULL, 
	`B4402` INTEGER NOT NULL, 
	`B4403` INTEGER NOT NULL, 
	`B4404` INTEGER NOT NULL, 
	`B4405` INTEGER NOT NULL, 
	`B5001` INTEGER NOT NULL, 
	`B5002` INTEGER NOT NULL, 
	`B5003` INTEGER NOT NULL, 
	`B5028` FLOAT, 
	`B5029` FLOAT, 
	`B5030` INTEGER NOT NULL, 
	`B5031` INTEGER NOT NULL, 
	`B5032` INTEGER NOT NULL, 
	`B5033` INTEGER NOT NULL, 
	`B5034` INTEGER NOT NULL, 
	`B5035` INTEGER NOT NULL, 
	`B5036` INTEGER NOT NULL, 
	`B5037` INTEGER NOT NULL, 
	`B5038` INTEGER NOT NULL, 
	`B5039` INTEGER NOT NULL, 
	`B5040` INTEGER NOT NULL, 
	`B5041` FLOAT, 
	`B5042` FLOAT, 
	`B5043` FLOAT, 
	`B5044` FLOAT, 
	`B5045` FLOAT, 
	`B5046` FLOAT, 
	`B5047` FLOAT, 
	`B5048` FLOAT, 
	`B5049` INTEGER NOT NULL, 
	`B5050` INTEGER NOT NULL, 
	`B5051` INTEGER NOT NULL, 
	`B5052` INTEGER NOT NULL, 
	`B5053` INTEGER, 
	`B5054` FLOAT, 
	`B5055` FLOAT, 
	`B5056` FLOAT, 
	`B5057` INTEGER NOT NULL, 
	`B5058` INTEGER NOT NULL, 
	`B5059` INTEGER NOT NULL, 
	`B5068` FLOAT, 
	`B5069` FLOAT, 
	`B5091` INTEGER NOT NULL, 
	`B5092` INTEGER NOT NULL, 
	`B5093` INTEGER NOT NULL, 
	`B5094` INTEGER NOT NULL, 
	`B5095` FLOAT, 
	`B5096` FLOAT, 
	`B5097` FLOAT, 
	`B50100` INTEGER NOT NULL, 
	`B50101` INTEGER NOT NULL, 
	`B50102` INTEGER NOT NULL, 
	`B50103` INTEGER NOT NULL, 
	`B50104` INTEGER NOT NULL, 
	`B50105` INTEGER NOT NULL, 
	`B50106` INTEGER NOT NULL, 
	`B5201` INTEGER NOT NULL, 
	`B5202` INTEGER NOT NULL, 
	`B5203` INTEGER NOT NULL, 
	`B5204` INTEGER NOT NULL, 
	`B5205` INTEGER NOT NULL, 
	`B5206` INTEGER NOT NULL, 
	`B5207` INTEGER NOT NULL, 
	`B4501` INTEGER NOT NULL, 
	`B4502` INTEGER NOT NULL, 
	`B4503` INTEGER NOT NULL, 
	`B4504` INTEGER NOT NULL, 
	`B4505` INTEGER NOT NULL, 
	`B4506` INTEGER NOT NULL, 
	`B4507` INTEGER NOT NULL, 
	`B4508` INTEGER NOT NULL, 
	`B4509` INTEGER NOT NULL, 
	`B4510` INTEGER NOT NULL, 
	`B4511` INTEGER NOT NULL, 
	`B4512` INTEGER NOT NULL, 
	`B4513` INTEGER NOT NULL, 
	`B4514` INTEGER NOT NULL, 
	`B4515` INTEGER NOT NULL, 
	`B4516` INTEGER, 
	`B4517` INTEGER, 
	`B1401` INTEGER NOT NULL, 
	`B1402` INTEGER NOT NULL, 
	`B1403` INTEGER NOT NULL, 
	`B1404` INTEGER NOT NULL, 
	`B1405` INTEGER NOT NULL, 
	`B1406` INTEGER NOT NULL, 
	`B1407` INTEGER NOT NULL, 
	`B1420` INTEGER, 
	`B1421` INTEGER, 
	`B1422` INTEGER, 
	`B1423` INTEGER, 
	`B1424` INTEGER, 
	`B1425` INTEGER, 
	`B1426` INTEGER, 
	`B1427` INTEGER, 
	`B1428` INTEGER, 
	`B1429` INTEGER, 
	`B1430` INTEGER, 
	`B1431` INTEGER, 
	`B1432` INTEGER, 
	`B4601` INTEGER NOT NULL, 
	`B4602` INTEGER NOT NULL, 
	`B4603` INTEGER NOT NULL, 
	`B4604` INTEGER NOT NULL, 
	`B4605` INTEGER NOT NULL, 
	`B4606` INTEGER NOT NULL, 
	`B4607` INTEGER NOT NULL, 
	`B4608` INTEGER NOT NULL, 
	`B4609` INTEGER NOT NULL, 
	`B4610` INTEGER NOT NULL, 
	`B4611` INTEGER NOT NULL, 
	`B4612` INTEGER NOT NULL, 
	`B4613` INTEGER NOT NULL, 
	`B4621` INTEGER NOT NULL, 
	`B4622` INTEGER NOT NULL, 
	`B4623` INTEGER NOT NULL, 
	`B4624` INTEGER NOT NULL, 
	`B4625` INTEGER NOT NULL, 
	`B4641` INTEGER NOT NULL, 
	`B4642` INTEGER NOT NULL, 
	`B4411` INTEGER NOT NULL, 
	`B4412` INTEGER NOT NULL, 
	`B4413` INTEGER NOT NULL, 
	`B4414` INTEGER NOT NULL, 
	`B0019` FLOAT, 
	`B0020` FLOAT, 
	`B0021` FLOAT, 
	`B0022` FLOAT, 
	`B0023` FLOAT, 
	`B0024` FLOAT, 
	`B0025` FLOAT, 
	`B0026` FLOAT, 
	`B0027` FLOAT, 
	`B0028` FLOAT, 
	`B0086` INTEGER NOT NULL, 
	`B0087` INTEGER NOT NULL, 
	`B0088` INTEGER NOT NULL, 
	`B0089` INTEGER NOT NULL, 
	`B0090` FLOAT, 
	`B0091` FLOAT, 
	`B0092` FLOAT, 
	`B0093` FLOAT, 
	`B1005` FLOAT, 
	`B1006` FLOAT, 
	`B1007` FLOAT, 
	`B1024` FLOAT, 
	`B1025` FLOAT, 
	`B1026` FLOAT, 
	`B1027` FLOAT, 
	`B1028` FLOAT, 
	`B1029` FLOAT, 
	`B1030` FLOAT, 
	`B1031` FLOAT, 
	`B1126` INTEGER NOT NULL, 
	`B1127` INTEGER NOT NULL, 
	`B1128` INTEGER NOT NULL, 
	`B1129` INTEGER NOT NULL, 
	`B1130` INTEGER NOT NULL, 
	`B1131` FLOAT, 
	`B1132` FLOAT, 
	`B1133` FLOAT, 
	`B1134` FLOAT, 
	`B1135` FLOAT, 
	`B2206` INTEGER, 
	`B2209` FLOAT, 
	`B2210` FLOAT, 
	`B2211` FLOAT, 
	`B4004` INTEGER NOT NULL, 
	`B4005` INTEGER NOT NULL, 
	`B4006` INTEGER NOT NULL, 
	`B4007` INTEGER NOT NULL, 
	`B4008` INTEGER NOT NULL, 
	`B4021` FLOAT, 
	`B4022` FLOAT, 
	`B4023` FLOAT, 
	`B4024` FLOAT, 
	`B4025` FLOAT, 
	`B4026` FLOAT, 
	`B4027` FLOAT, 
	`B4028` FLOAT, 
	`B4029` FLOAT, 
	`B4030` FLOAT, 
	`B4031` FLOAT, 
	`B4032` FLOAT, 
	`B4406` FLOAT, 
	`B4407` FLOAT, 
	`B5060` INTEGER NOT NULL, 
	`B5061` INTEGER NOT NULL, 
	`B5062` INTEGER NOT NULL, 
	`B5063` INTEGER NOT NULL, 
	`B5064` INTEGER NOT NULL, 
	`B5065` INTEGER NOT NULL, 
	`B5066` INTEGER NOT NULL, 
	`B5067` INTEGER NOT NULL, 
	`B5070` FLOAT, 
	`B5071` FLOAT, 
	`B5072` FLOAT, 
	`B5073` FLOAT, 
	`B5074` FLOAT, 
	`B5075` FLOAT, 
	`B5076` INTEGER NOT NULL, 
	`B5077` INTEGER NOT NULL, 
	`B5078` FLOAT, 
	`B5079` FLOAT, 
	`B5080` FLOAT, 
	`B5081` FLOAT, 
	`B5082` FLOAT, 
	`B5083` FLOAT, 
	`B5084` FLOAT, 
	`B5085` FLOAT, 
	`B5086` FLOAT, 
	`B5087` FLOAT, 
	`B5088` FLOAT, 
	`B5089` FLOAT, 
	`B5090` FLOAT, 
	`B5098` FLOAT, 
	`B5099` FLOAT, 
	`B50107` FLOAT, 
	`B50108` FLOAT, 
	`B5208` FLOAT, 
	`B5209` FLOAT, 
	`B5210` FLOAT, 
	`B5211` FLOAT, 
	`B4552` FLOAT, 
	`B4553` FLOAT, 
	`B4554` FLOAT, 
	`B4555` FLOAT, 
	`B4556` FLOAT, 
	`B4557` FLOAT, 
	`B1451` FLOAT, 
	`B1452` FLOAT, 
	`B1453` FLOAT, 
	`B1454` FLOAT, 
	`B1455` FLOAT, 
	`B1456` FLOAT, 
	`B1471` FLOAT, 
	`B1472` FLOAT, 
	`B4651` FLOAT, 
	`B4629` FLOAT, 
	`B4643` FLOAT, 
	`B4415` FLOAT, 
	`B4416` FLOAT, 
	`B53135` FLOAT, 
	`B53015` INTEGER, 
	`B53006` INTEGER, 
	`B53924` INTEGER, 
	`B53011` INTEGER, 
	`B53002` INTEGER, 
	`B53020` INTEGER, 
	year INTEGER NOT NULL, 
	span INTEGER NOT NULL, 
	`GEOID2` VARCHAR(14), 
	`SUMLEVEL` VARCHAR(4), 
	`SDUNI` VARCHAR(32), 
	`B1032` INTEGER, 
	`B1033` INTEGER, 
	`B1034` INTEGER, 
	`B1035` INTEGER, 
	`B1036` INTEGER, 
	`B1037` INTEGER, 
	`B1038` INTEGER, 
	`B1039` INTEGER, 
	`B1201` INTEGER, 
	`B1202` INTEGER, 
	`B1203` INTEGER, 
	`B1204` INTEGER, 
	`B5004` INTEGER, 
	`B5005` INTEGER, 
	`B5006` INTEGER, 
	`B5007` INTEGER, 
	`B5008` INTEGER, 
	`B5009` INTEGER, 
	`B5010` INTEGER, 
	`B5011` INTEGER, 
	`B5012` INTEGER, 
	`B5013` INTEGER, 
	`B5014` INTEGER, 
	`B5015` INTEGER, 
	`B5016` INTEGER, 
	`B5017` INTEGER, 
	`B5018` INTEGER, 
	`B5019` INTEGER, 
	`B5020` INTEGER, 
	`B5021` INTEGER, 
	`B5022` INTEGER, 
	`B5023` INTEGER, 
	`B5024` INTEGER, 
	`B5025` INTEGER, 
	`B5026` INTEGER, 
	`B5027` FLOAT, 
	`B5101` FLOAT, 
	`B5102` FLOAT, 
	`B5103` FLOAT, 
	`B5104` FLOAT, 
	`B5105` FLOAT, 
	`B5106` FLOAT, 
	`B5107` FLOAT, 
	`B5108` FLOAT, 
	`B5109` FLOAT, 
	`B5110` FLOAT, 
	`B5111` INTEGER, 
	`B5112` INTEGER, 
	`B5113` INTEGER, 
	`B5114` INTEGER, 
	`B5115` INTEGER, 
	`B5116` INTEGER, 
	`B5117` INTEGER, 
	`B5118` INTEGER, 
	`B5119` INTEGER, 
	`B5120` INTEGER, 
	`B5121` INTEGER, 
	`B5122` FLOAT, 
	`B5123` FLOAT, 
	`B5124` FLOAT, 
	`B5125` FLOAT, 
	`B5126` FLOAT, 
	`B5127` FLOAT, 
	`B5128` FLOAT, 
	`B5129` FLOAT, 
	`B5130` INTEGER, 
	`B5131` INTEGER, 
	`B5132` INTEGER, 
	`B5133` INTEGER, 
	`B5134` FLOAT, 
	`B5135` FLOAT, 
	`B5136` FLOAT, 
	`B5137` FLOAT, 
	`B5138` INTEGER, 
	`B5139` INTEGER, 
	`B5149` INTEGER, 
	`B5150` INTEGER, 
	`B5151` INTEGER, 
	`B5152` INTEGER, 
	`B5154` INTEGER, 
	`B5155` INTEGER, 
	`B5156` INTEGER, 
	`B5157` INTEGER, 
	`B53001` INTEGER, 
	`B53003` INTEGER, 
	`B53004` INTEGER, 
	`B53005` INTEGER, 
	`B53007` INTEGER, 
	`B53008` INTEGER, 
	`B53009` INTEGER, 
	`B53010` INTEGER, 
	`B53012` INTEGER, 
	`B53013` INTEGER, 
	`B53014` INTEGER, 
	`B53016` INTEGER, 
	`B53017` INTEGER, 
	`B53018` INTEGER, 
	`B53019` INTEGER, 
	`B53021` INTEGER, 
	`B53922` INTEGER, 
	`B53923` INTEGER, 
	`B53925` INTEGER, 
	`B53926` INTEGER, 
	`B53927` INTEGER, 
	`B53928` INTEGER, 
	`B53929` INTEGER, 
	`B53930` INTEGER, 
	`B53931` INTEGER, 
	`B53932` INTEGER, 
	`B53933` INTEGER, 
	`B53934` INTEGER, 
	`B53935` INTEGER, 
	`B53936` INTEGER, 
	`B53937` INTEGER, 
	`B53026` INTEGER, 
	`B53027` INTEGER, 
	`B53028` INTEGER, 
	`B53029` INTEGER, 
	`B53030` INTEGER, 
	`B53031` INTEGER, 
	`B53032` INTEGER, 
	`B53033` INTEGER, 
	`B53034` INTEGER, 
	`B53035` INTEGER, 
	`B53036` INTEGER, 
	`B53037` INTEGER, 
	`B53038` INTEGER, 
	`B53039` INTEGER, 
	`B53048` INTEGER, 
	`B53049` INTEGER, 
	`B53050` INTEGER, 
	`B53051` INTEGER, 
	`B53052` INTEGER, 
	`B53053` INTEGER, 
	`B53054` INTEGER, 
	`B53055` INTEGER, 
	`B53056` INTEGER, 
	`B53057` INTEGER, 
	`B53058` INTEGER, 
	`B53059` INTEGER, 
	`B53060` INTEGER, 
	`B53061` INTEGER, 
	`B53062` INTEGER, 
	`B53063` INTEGER, 
	`B53064` INTEGER, 
	`B53065` INTEGER, 
	`B53066` INTEGER, 
	`B53067` INTEGER, 
	`B53068` INTEGER, 
	`B53070` INTEGER, 
	`B53071` INTEGER, 
	`B53072` INTEGER, 
	`B53073` INTEGER, 
	`B53074` INTEGER, 
	`B53075` INTEGER, 
	`B53076` INTEGER, 
	`B53077` INTEGER, 
	`B53078` INTEGER, 
	`B53079` INTEGER, 
	`B53080` INTEGER, 
	`B53081` INTEGER, 
	`B53083` INTEGER, 
	`B53084` INTEGER, 
	`B53085` INTEGER, 
	`B53086` INTEGER, 
	`B53087` INTEGER, 
	`B53088` INTEGER, 
	`B53089` INTEGER, 
	`B53090` INTEGER, 
	`B53091` INTEGER, 
	`B53092` INTEGER, 
	`B53093` INTEGER, 
	`B53094` INTEGER, 
	`B53096` INTEGER, 
	`B53097` INTEGER, 
	`B53098` INTEGER, 
	`B53099` INTEGER, 
	`B53100` INTEGER, 
	`B53101` INTEGER, 
	`B53102` INTEGER, 
	`B53103` INTEGER, 
	`B53104` INTEGER, 
	`B53105` INTEGER, 
	`B53106` INTEGER, 
	`B53107` INTEGER, 
	`B53109` INTEGER, 
	`B53110` INTEGER, 
	`B53111` INTEGER, 
	`B53112` INTEGER, 
	`B53113` INTEGER, 
	`B53114` INTEGER, 
	`B53115` INTEGER, 
	`B53116` INTEGER, 
	`B53117` INTEGER, 
	`B53118` INTEGER, 
	`B53119` INTEGER, 
	`B53120` INTEGER, 
	`B53122` INTEGER, 
	`B53123` INTEGER, 
	`B53124` INTEGER, 
	`B53125` INTEGER, 
	`B53126` INTEGER, 
	`B53127` INTEGER, 
	`B53128` INTEGER, 
	`B53129` INTEGER, 
	`B53130` INTEGER, 
	`B53131` INTEGER, 
	`B53132` INTEGER, 
	`B53133` INTEGER, 
	`B1040` FLOAT, 
	`B1041` FLOAT, 
	`B1042` FLOAT, 
	`B1043` VARCHAR(32), 
	`B1205` FLOAT, 
	`B1206` FLOAT, 
	`B1207` FLOAT, 
	`B5140` INTEGER, 
	`B5141` INTEGER, 
	`B5142` INTEGER, 
	`B5143` FLOAT, 
	`B5144` FLOAT, 
	`B5145` FLOAT, 
	`B5146` INTEGER, 
	`B5147` FLOAT, 
	`B5153` FLOAT, 
	`B5158` FLOAT, 
	`B53022` INTEGER, 
	`B53023` INTEGER, 
	`B53024` FLOAT, 
	`B53025` FLOAT, 
	`B53040` INTEGER, 
	`B53041` INTEGER, 
	`B53042` FLOAT, 
	`B53043` FLOAT, 
	`B53044` INTEGER, 
	`B53045` INTEGER, 
	`B53046` FLOAT, 
	`B53047` FLOAT, 
	`B53069` FLOAT, 
	`B53082` FLOAT, 
	`B53095` FLOAT, 
	`B53108` FLOAT, 
	`B53121` FLOAT, 
	`B53134` FLOAT, 
	`B5100` FLOAT
);

LOAD DATA LOCAL INFILE 'ACS_CombinedYears_CustomMeasures-SSDAN.csv' INTO TABLE `ACS_CombinedYears_CustomMeasures-SSDAN` 
FIELDS TERMINATED BY ',' ENCLOSED BY '"' IGNORE 1 LINES;