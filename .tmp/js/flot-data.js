//Flot Line Chart
$(document).ready(function() {
    console.log("document ready");
    var offset = 0;
    //plot();

    /*function plot() {
        var sin = [],
            cos = [];
        for (var i = 0; i < 12; i += 0.2) {
            sin.push([i, Math.sin(i + offset)]);
            cos.push([i, Math.cos(i + offset)]);
        }

        var options = {
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: true
                }
            },
            grid: {
                hoverable: true //IMPORTANT! this is needed for tooltip to work
            },
            yaxis: {
                min: -1.2,
                max: 1.2
            },
            tooltip: true,
            tooltipOpts: {
                content: "'%s' of %x.1 is %y.4",
                shifts: {
                    x: -60,
                    y: 25
                }
            }
        };

        var plotObj = $.plot($("#flot-line-chart"), [{
                data: sin,
                label: "sin(x)"
            }, {
                data: cos,
                label: "cos(x)"
            }],
            options);
    }*/
});

//Flot Pie Chart
$(function() {

    var data = [{
        label: "Wins",
        data: 0.33
    }, {
        label: "Losses",
        data: 0.67
    }
    ];

    var plotObj = $.plot($("#flot-pie-chart"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});

//Flot Multiple Axes Line Chart
$(function() {
    var elo_ranking = [
        [1167692400000, 810.5],
[1167778800000, 783.2],
[1167865200000, 773.5],
[1167951600000, 763.1],
[1168210800000, 755.5],
[1168297200000, 756.4],
[1168383600000, 740.2],
[1168470000000, 718.8],
[1168556400000, 729.9],
[1168815600000, 729.9],
[1168902000000, 712.1],
[1168988400000, 722.4],
[1169074800000, 704.8],
[1169161200000, 719.9],
[1169420400000, 711.3],
[1169506800000, 750.4],
[1169593200000, 753.7],
[1169679600000, 742.3],
[1169766000000, 754.2],
[1170025200000, 740.1],
[1170111600000, 769.7],
[1170198000000, 781.4],
[1170284400000, 781.4],
[1170370800000, 790.2],
[1170630000000, 787.4],
[1170716400000, 788.8],
[1170802800000, 777.1],
[1170889200000, 797.1],
[1170975600000, 798.9],
[1171234800000, 778.1],
[1171321200000, 790.6],
[1171407600000, 780.0],
[1171494000000, 779.9],
[1171580400000, 793.9],
[1171839600000, 793.9],
[1171926000000, 780.7],
[1172012400000, 800.7],
[1172098800000, 811.4],
[1172444400000, 813.9],
[1172530800000, 814.6],
[1172617200000, 817.9],
[1172703600000, 820.0],
[1172790000000, 800.7],
[1173135600000, 806.9],
[1173222000000, 818.2],
[1173308400000, 800.5],
[1173654000000, 789.1],
[1173740400000, 779.3],
[1173826800000, 781.6],
[1173913200000, 775.5],
[1173999600000, 771.1],
[1174258800000, 765.9],
[1174345200000, 796.1],
[1174518000000, 816.9],
[1174604400000, 822.8],
[1174860000000, 829.1],
[1174946400000, 829.3],
[1175032800000, 840.3],
[1175119200000, 860.3],
[1175205600000, 858.7],
[1175464800000, 846.4],
[1175637600000, 843.8],
[1175724000000, 842.8],
[1175810400000, 842.8],
[1176069600000, 815.1],
[1176156000000, 818.9],
[1176242400000, 820.1],
[1176328800000, 838.5],
[1176415200000, 836.3],
[1176674400000, 836.1],
[1176760800000, 831.0],
[1176847200000, 831.3],
[1176933600000, 818.3],
[1177020000000, 833.8],
[1177279200000, 845.8],
[1177452000000, 858.4],
[1177538400000, 850.6],
[1177624800000, 864.6],
[1177884000000, 844.0],
[1178056800000, 836.8],
[1178143200000, 831.9],
[1178229600000, 819.3],
[1178488800000, 814.7],
[1178575200000, 815.5],
[1178748000000, 818.1],
[1178834400000, 823.7],
[1179093600000, 824.6],
[1179180000000, 831.7],
[1179266400000, 825.5],
[1179352800000, 849.4],
[1179698400000, 862.7],
[1179784800000, 855.0],
[1179871200000, 857.7],
[1179957600000, 841.8],
[1180044000000, 852.0],
[1180389600000, 831.5],
[1180476000000, 834.9],
[1180562400000, 850.8],
[1180908000000, 863.0],
[1180994400000, 859.6],
[1181167200000, 869.3],
[1181253600000, 859.8],
[1181599200000, 853.5],
[1181685600000, 862.6],
[1181858400000, 880.0],
[1182117600000, 890.9],
[1182204000000, 891.0],
[1182290400000, 881.9],
[1182376800000, 881.9],
[1182463200000, 891.4],
[1182722400000, 881.9],
[1182808800000, 877.7],
[1182895200000, 889.7],
[1182981600000, 895.7],
[1183068000000, 906.8],
[1183327200000, 910.9],
[1183413600000, 909.2],
[1183586400000, 918.1],
[1183672800000, 928.1],
[1183932000000, 921.9],
[1184018400000, 925.6],
[1184191200000, 925.0],
[1184277600000, 941.5],
[1184623200000, 950.5],
[1184796000000, 959.2],
[1184882400000, 955.7],
[1185141600000, 948.9],
[1185228000000, 935.6],
[1185314400000, 955.7],
[1185400800000, 949.5],
[1185487200000, 968.3],
[1185832800000, 982.1],
[1185919200000, 965.3],
[1186005600000, 968.6],
[1186092000000, 960.0],
[1186437600000, 915.9],
[1186696800000, 914.7],
[1186956000000, 916.2],
[1187042400000, 910.0],
[1187301600000, 919.8],
[1187560800000, 911.2],
[1187647200000, 894.7],
[1187733600000, 892.6],
[1187820000000, 898.3],
[1187906400000, 910.9],
[1188165600000, 917.3],
[1188338400000, 933.6],
[1188511200000, 940.4],
[1188856800000, 963.0],
[1189116000000, 974.9],
[1189461600000, 982.3],
[1189548000000, 999.1],
[1189634400000, 1000.9],
[1189720800000, 991.0],
[1189980000000, 1005.7],
[1190066400000, 1019.3],
[1190239200000, 1033.2],
[1190325600000, 1016.2],
[1190584800000, 1009.5],
[1190671200000, 995.3],
[1190757600000, 1003.0],
[1190844000000, 1028.8],
[1190930400000, 1016.6],
[1191189600000, 1002.4],
[1191276000000, 1000.5],
[1191362400000, 999.4],
[1191448800000, 1014.4],
[1191535200000, 1012.2],
[1191794400000, 990.2],
[1191880800000, 1002.6],
[1191967200000, 1003.0],
[1192053600000, 1030.8],
[1192140000000, 1036.9],
[1192399200000, 1061.3],
[1192485600000, 1076.1],
[1192572000000, 1074.0],
[1192658400000, 1094.7],
[1192744800000, 1086.0],
[1193004000000, 1075.6],
[1193090400000, 1075.6],
[1193176800000, 1071.0],
[1193263200000, 1118.6],
[1193612400000, 1135.3],
[1193698800000, 1145.3],
[1193871600000, 1159.3],
[1194217200000, 1139.8],
[1194303600000, 1163.7],
[1194476400000, 1154.6],
[1194562800000, 1163.2],
[1195081200000, 1134.3],
[1195167600000, 1151.0],
[1195426800000, 1146.4],
[1195513200000, 1151.0],
[1196031600000, 1177.0],
[1196118000000, 1144.2],
[1196204400000, 1106.2],
[1196290800000, 1110.1],
[1196377200000, 1087.1],
[1196636400000, 1083.2],
[1196809200000, 1102.3],
[1196982000000, 1082.8],
[1197241200000, 1078.6],
[1197327600000, 1100.2],
[1197414000000, 1122.5],
[1197586800000, 1106.3],
[1197846000000, 1106.3],
[1197932400000, 1104.9],
[1198018800000, 1112.4],
[1198105200000, 1110.6],
[1198191600000, 1104.9],
[1198710000000, 1166.2],
[1198796400000, 1160.0],
[1199142000000, 1196.2],
[1199314800000, 1191.8],
[1199401200000, 1150.9],
[1199660400000, 1163.3],
[1199833200000, 1156.7],
[1200351600000, 1119.0],
[1200438000000, 1108.4],
[1200524400000, 1101.3],
[1200610800000, 1105.7],
[1200956400000, 1092.1],
[1201042800000, 1069.9],
[1201129200000, 1098.5],
[1201474800000, 1109.9],
[1201561200000, 1116.4],
[1201647600000, 1123.3],
[1201734000000, 1117.5],
[1202079600000, 1100.2],
[1202166000000, 1084.1],
[1202252400000, 1071.4],
[1202338800000, 1081.1],
[1202425200000, 1117.7],
[1202770800000, 1127.8],
[1202857200000, 1132.7],
[1202943600000, 1154.6],
[1203030000000, 1154.6],
[1203289200000, 1217.4],
[1203462000000, 1188.1],
[1203894000000, 1208.8],
[1204066800000, 1196.4],
[1204153200000, 1225.9],
[1204239600000, 1218.4],
[1204498800000, 1195.2],
[1204585200000, 1195.2],
[1204671600000, 1245.2],
[1204758000000, 1254.7],
[1204844400000, 1251.5],
[1205103600000, 1287.5],
[1205276400000, 1299.2],
[1205362800000, 1303.3],
[1205449200000, 1302.1],
[1205708400000, 1256.8],
[1205967600000, 1218.4],
[1206313200000, 1208.6],
[1206399600000, 1212.2],
[1206486000000, 1259.0],
[1206572400000, 1275.8],
[1206658800000, 1256.2],
[1206914400000, 1215.8],
[1207000800000, 1209.8],
[1207173600000, 1238.3],
[1207260000000, 1262.3],
[1207605600000, 1285.0],
[1207778400000, 1301.1],
[1207864800000, 1301.4],
[1208210400000, 1337.9],
[1208296800000, 1349.3],
[1208383200000, 1348.6],
[1208728800000, 1374.8],
[1208815200000, 1383.0],
[1208988000000, 1360.6],
[1209074400000, 1385.2],
[1209333600000, 1387.5],
[1209420000000, 1334.6],
[1209592800000, 1325.2],
[1210024800000, 1418.4],
[1210111200000, 1435.3],
[1210197600000, 1436.9],
[1210543200000, 1442.3],
[1210629600000, 1458.0],
[1210716000000, 1462.9],
[1211148000000, 1470.5],
[1211320800000, 1490.7],
[1211493600000, 1521.9],
[1211839200000, 1488.5],
[1212357600000, 1477.6],
[1212703200000, 1585.4],
[1212962400000, 1568.0],
[1213135200000, 1563.8],
[1213308000000, 1548.6],
[1213653600000, 1540.1],
[1213740000000, 1566.8],
[1213912800000, 1556.5],
[1214172000000, 1546.2],
[1214258400000, 1546.2],
[1214344800000, 1546.2],
[1214431200000, 1596.4],
[1214517600000, 1602.1],
[1214776800000, 1600.0],
[1214863200000, 1609.7],
[1214949600000, 1635.7],
[1215036000000, 1652.9],
[1215381600000, 1613.7],
[1215468000000, 1560.4],
[1215727200000, 1664.0],
[1215986400000, 1651.8],
[1216072800000, 1587.4],
[1216159200000, 1546.0],
[1216245600000, 1492.9],
[1216332000000, 1506.5],
[1216677600000, 1479.5],
[1216850400000, 1479.5],
[1217282400000, 1421.9],
[1217455200000, 1440.8],
[1217541600000, 1451.0],
[1217800800000, 1414.1],
[1217887200000, 1391.7],
[1217973600000, 1385.8],
[1218060000000, 1400.2],
[1218405600000, 1344.5],
[1218492000000, 1330.1],
[1218578400000, 1360.0],
[1218751200000, 1337.7],
[1219010400000, 1328.7],
[1219096800000, 1345.3],
[1219269600000, 1349.8],
[1219356000000, 1349.8],
[1219701600000, 1362.7],
[1219788000000, 1381.5],
[1219874400000, 1355.9],
[1219960800000, 1354.6],
[1220306400000, 1297.1],
[1220392800000, 1293.5],
[1220565600000, 1262.3],
[1220824800000, 1263.4]

    ];
    var site_average = [
        [1167606000000, 1516.0],
[1167692400000, 1516.0],
[1167778800000, 1509.4],
[1167865200000, 1509.8],
[1167951600000, 1522.6],
[1168038000000, 1531.0],
[1168124400000, 1538.6],
[1168210800000, 1538.8],
[1168297200000, 1537.6],
[1168383600000, 1535.6],
[1168470000000, 1541.6],
[1168556400000, 1545.4],
[1168642800000, 1549.8],
[1168729200000, 1548.2],
[1168815600000, 1548.2],
[1168902000000, 1546.4],
[1168988400000, 1545.4],
[1169074800000, 1547.4],
[1169161200000, 1544.8],
[1169247600000, 1542.4],
[1169334000000, 1544.0],
[1169420400000, 1544.2],
[1169506800000, 1543.4],
[1169593200000, 1540.8],
[1169679600000, 1538.0],
[1169766000000, 1542.2],
[1169852400000, 1548.0],
[1169938800000, 1549.0],
[1170025200000, 1549.0],
[1170111600000, 1548.0],
[1170198000000, 1543.2],
[1170284400000, 1542.6],
[1170370800000, 1535.6],
[1170457200000, 1537.6],
[1170543600000, 1543.6],
[1170630000000, 1543.6],
[1170716400000, 1545.6],
[1170802800000, 1545.8],
[1170889200000, 1539.6],
[1170975600000, 1537.0],
[1171062000000, 1536.2],
[1171148400000, 1538.0],
[1171234800000, 1538.0],
[1171321200000, 1539.6],
[1171407600000, 1539.8],
[1171494000000, 1530.2],
[1171580400000, 1522.6],
[1171666800000, 1523.2],
[1171753200000, 1522.8],
[1171839600000, 1522.8],
[1171926000000, 1521.4],
[1172012400000, 1520.4],
[1172098800000, 1522.2],
[1172185200000, 1524.4],
[1172271600000, 1523.0],
[1172358000000, 1519.6],
[1172444400000, 1519.6],
[1172530800000, 1518.4],
[1172617200000, 1514.6],
[1172703600000, 1513.2],
[1172790000000, 1513.4],
[1172876400000, 1518.2],
[1172962800000, 1516.4],
[1173049200000, 1517.0],
[1173135600000, 1522.6],
[1173222000000, 1526.2],
[1173308400000, 1523.0],
[1173394800000, 1520.0],
[1173481200000, 1522.6],
[1173567600000, 1525.4],
[1173654000000, 1525.4],
[1173740400000, 1521.6],
[1173826800000, 1516.6],
[1173913200000, 1515.0],
[1173999600000, 1512.4],
[1174086000000, 1504.0],
[1174172400000, 1502.4],
[1174258800000, 1502.4],
[1174345200000, 1503.4],
[1174431600000, 1504.0],
[1174518000000, 1502.2],
[1174604400000, 1496.0],
[1174690800000, 1501.8],
[1174777200000, 1506.2],
[1174860000000, 1506.2],
[1174946400000, 1505.4],
[1175032800000, 1499.6],
[1175119200000, 1498.6],
[1175205600000, 1500.8],
[1175292000000, 1500.0],
[1175378400000, 1498.2],
[1175464800000, 1498.2],
[1175551200000, 1497.0],
[1175637600000, 1496.8],
[1175724000000, 1498.4],
[1175810400000, 1494.2],
[1175896800000, 1491.8],
[1175983200000, 1495.4],
[1176069600000, 1495.4],
[1176156000000, 1496.6],
[1176242400000, 1491.6],
[1176328800000, 1489.6],
[1176415200000, 1486.0],
[1176501600000, 1479.8],
[1176588000000, 1479.0],
[1176674400000, 1479.0],
[1176760800000, 1475.6],
[1176847200000, 1476.4],
[1176933600000, 1472.4],
[1177020000000, 1471.0],
[1177106400000, 1469.6],
[1177192800000, 1472.2],
[1177279200000, 1472.2],
[1177365600000, 1473.0],
[1177452000000, 1472.4],
[1177538400000, 1466.2],
[1177624800000, 1467.8],
[1177711200000, 1468.8],
[1177797600000, 1465.4],
[1177884000000, 1465.4],
[1177970400000, 1467.2],
[1178056800000, 1466.6],
[1178143200000, 1471.8],
[1178229600000, 1471.8],
[1178316000000, 1474.4],
[1178402400000, 1472.0],
[1178488800000, 1472.0],
[1178575200000, 1470.0],
[1178661600000, 1473.0],
[1178748000000, 1476.8],
[1178834400000, 1479.0],
[1178920800000, 1482.6],
[1179007200000, 1479.4],
[1179093600000, 1479.2],
[1179180000000, 1477.0],
[1179266400000, 1475.6],
[1179352800000, 1473.2],
[1179439200000, 1480.0],
[1179525600000, 1482.2],
[1179612000000, 1481.2],
[1179698400000, 1481.0],
[1179784800000, 1482.8],
[1179871200000, 1486.2],
[1179957600000, 1486.2],
[1180044000000, 1487.6],
[1180130400000, 1488.6],
[1180216800000, 1488.6],
[1180303200000, 1488.6],
[1180389600000, 1486.8],
[1180476000000, 1485.8],
[1180562400000, 1488.4],
[1180648800000, 1488.0],
[1180735200000, 1487.8],
[1180821600000, 1487.4],
[1180908000000, 1487.4],
[1180994400000, 1485.8],
[1181080800000, 1480.6],
[1181167200000, 1479.8],
[1181253600000, 1483.6],
[1181340000000, 1493.6],
[1181426400000, 1496.0],
[1181512800000, 1496.0],
[1181599200000, 1498.0],
[1181685600000, 1498.8],
[1181772000000, 1504.4],
[1181858400000, 1503.0],
[1181944800000, 1500.4],
[1182031200000, 1494.4],
[1182117600000, 1494.4],
[1182204000000, 1492.4],
[1182290400000, 1491.0],
[1182376800000, 1489.8],
[1182463200000, 1493.4],
[1182549600000, 1491.6],
[1182636000000, 1485.4],
[1182722400000, 1485.4],
[1182808800000, 1486.0],
[1182895200000, 1485.8],
[1182981600000, 1488.0],
[1183068000000, 1486.0],
[1183154400000, 1484.4],
[1183240800000, 1477.6],
[1183327200000, 1477.6],
[1183413600000, 1473.8],
[1183500000000, 1469.0],
[1183586400000, 1469.0],
[1183672800000, 1469.0],
[1183759200000, 1470.4],
[1183845600000, 1468.2],
[1183932000000, 1468.2],
[1184018400000, 1468.0],
[1184104800000, 1464.8],
[1184191200000, 1454.4],
[1184277600000, 1452.8],
[1184364000000, 1451.0],
[1184450400000, 1451.6],
[1184536800000, 1451.6],
[1184623200000, 1451.2],
[1184709600000, 1451.4],
[1184796000000, 1449.4],
[1184882400000, 1448.6],
[1184968800000, 1448.8],
[1185055200000, 1447.0],
[1185141600000, 1447.0],
[1185228000000, 1447.0],
[1185314400000, 1447.0],
[1185400800000, 1452.4],
[1185487200000, 1457.6],
[1185573600000, 1460.2],
[1185660000000, 1467.4],
[1185746400000, 1467.4],
[1185832800000, 1464.8],
[1185919200000, 1459.4],
[1186005600000, 1463.4],
[1186092000000, 1463.0],
[1186178400000, 1457.6],
[1186264800000, 1452.6],
[1186351200000, 1452.6],
[1186437600000, 1448.4],
[1186524000000, 1450.6],
[1186610400000, 1452.8],
[1186696800000, 1454.0],
[1186783200000, 1462.4],
[1186869600000, 1461.0],
[1186956000000, 1461.0],
[1187042400000, 1463.6],
[1187128800000, 1471.6],
[1187215200000, 1481.8],
[1187301600000, 1490.8],
[1187388000000, 1487.4],
[1187474400000, 1484.8],
[1187560800000, 1484.8],
[1187647200000, 1483.0],
[1187733600000, 1483.8],
[1187820000000, 1482.8],
[1187906400000, 1475.4],
[1187992800000, 1471.0],
[1188079200000, 1463.0],
[1188165600000, 1463.0],
[1188252000000, 1464.0],
[1188338400000, 1466.4],
[1188424800000, 1469.2],
[1188511200000, 1465.6],
[1188597600000, 1464.6],
[1188684000000, 1468.0],
[1188770400000, 1468.0],
[1188856800000, 1467.2],
[1188943200000, 1470.2],
[1189029600000, 1469.2],
[1189116000000, 1464.2],
[1189202400000, 1458.8],
[1189288800000, 1453.2],
[1189375200000, 1453.2],
[1189461600000, 1450.8],
[1189548000000, 1448.4],
[1189634400000, 1442.6],
[1189720800000, 1439.4],
[1189807200000, 1441.8],
[1189893600000, 1442.0],
[1189980000000, 1442.0],
[1190066400000, 1442.0],
[1190152800000, 1441.8],
[1190239200000, 1431.8],
[1190325600000, 1426.6],
[1190412000000, 1421.0],
[1190498400000, 1419.8],
[1190584800000, 1419.8],
[1190671200000, 1418.6],
[1190757600000, 1418.6],
[1190844000000, 1415.2],
[1190930400000, 1414.0],
[1191016800000, 1409.8],
[1191103200000, 1402.4],
[1191189600000, 1402.2],
[1191276000000, 1403.8],
[1191362400000, 1409.2],
[1191448800000, 1412.6],
[1191535200000, 1417.8],
[1191621600000, 1415.4],
[1191708000000, 1415.4],
[1191794400000, 1415.4],
[1191880800000, 1418.2],
[1191967200000, 1423.6],
[1192053600000, 1415.8],
[1192140000000, 1410.6],
[1192226400000, 1410.0],
[1192312800000, 1411.0],
[1192399200000, 1411.0],
[1192485600000, 1409.0],
[1192572000000, 1410.2],
[1192658400000, 1410.2],
[1192744800000, 1403.4],
[1192831200000, 1400.0],
[1192917600000, 1399.0],
[1193004000000, 1398.8],
[1193090400000, 1402.8],
[1193176800000, 1407.2],
[1193263200000, 1404.2],
[1193349600000, 1400.4],
[1193436000000, 1393.4],
[1193522400000, 1390.0],
[1193612400000, 1390.0],
[1193698800000, 1387.8],
[1193785200000, 1388.0],
[1193871600000, 1384.4],
[1193958000000, 1383.8],
[1194044400000, 1382.8],
[1194130800000, 1378.8],
[1194217200000, 1378.2],
[1194303600000, 1380.8],
[1194390000000, 1378.0],
[1194476400000, 1366.8],
[1194562800000, 1364.6],
[1194649200000, 1361.4],
[1194735600000, 1363.0],
[1194822000000, 1363.0],
[1194908400000, 1369.4],
[1194994800000, 1371.8],
[1195081200000, 1364.4],
[1195167600000, 1365.4],
[1195254000000, 1367.4],
[1195340400000, 1364.6],
[1195426800000, 1364.4],
[1195513200000, 1364.4],
[1195599600000, 1358.4],
[1195686000000, 1349.2],
[1195772400000, 1347.0],
[1195858800000, 1346.2],
[1195945200000, 1348.4],
[1196031600000, 1348.8],
[1196118000000, 1347.8],
[1196204400000, 1346.2],
[1196290800000, 1352.2],
[1196377200000, 1352.2],
[1196463600000, 1357.0],
[1196550000000, 1363.6],
[1196636400000, 1367.2],
[1196722800000, 1364.6],
[1196809200000, 1361.0],
[1196895600000, 1358.6],
[1196982000000, 1369.8],
[1197068400000, 1366.6],
[1197154800000, 1365.0],
[1197241200000, 1365.0],
[1197327600000, 1363.2],
[1197414000000, 1359.8],
[1197500400000, 1362.6],
[1197586800000, 1361.8],
[1197673200000, 1373.6],
[1197759600000, 1386.6],
[1197846000000, 1386.6],
[1197932400000, 1389.0],
[1198018800000, 1388.8],
[1198105200000, 1389.2],
[1198191600000, 1392.8],
[1198278000000, 1393.0],
[1198364400000, 1391.2],
[1198450800000, 1391.2],
[1198537200000, 1390.0],
[1198623600000, 1389.6],
[1198710000000, 1385.6],
[1198796400000, 1377.4],
[1198882800000, 1364.8],
[1198969200000, 1358.8],
[1199055600000, 1358.8],
[1199142000000, 1360.6],
[1199228400000, 1371.0],
[1199314800000, 1364.8],
[1199401200000, 1358.2],
[1199487600000, 1356.6],
[1199574000000, 1357.0],
[1199660400000, 1357.0],
[1199746800000, 1359.4],
[1199833200000, 1360.0],
[1199919600000, 1360.6],
[1200006000000, 1361.0],
[1200092400000, 1352.0],
[1200178800000, 1354.0],
[1200265200000, 1354.0],
[1200351600000, 1347.2],
[1200438000000, 1345.2],
[1200524400000, 1352.8],
[1200610800000, 1364.2],
[1200697200000, 1366.2],
[1200783600000, 1368.4],
[1200870000000, 1368.4],
[1200956400000, 1377.4],
[1201042800000, 1380.6],
[1201129200000, 1369.6],
[1201215600000, 1364.8],
[1201302000000, 1357.6],
[1201388400000, 1362.8],
[1201474800000, 1362.8],
[1201561200000, 1359.4],
[1201647600000, 1353.8],
[1201734000000, 1353.0],
[1201820400000, 1346.6],
[1201906800000, 1345.8],
[1201993200000, 1351.6],
[1202079600000, 1351.6],
[1202166000000, 1350.0],
[1202252400000, 1356.0],
[1202338800000, 1366.6],
[1202425200000, 1371.2],
[1202511600000, 1380.6],
[1202598000000, 1379.2],
[1202684400000, 1379.2],
[1202770800000, 1376.4],
[1202857200000, 1375.8],
[1202943600000, 1372.4],
[1203030000000, 1370.4],
[1203116400000, 1364.6],
[1203202800000, 1362.6],
[1203289200000, 1362.6],
[1203375600000, 1364.4],
[1203462000000, 1360.4],
[1203548400000, 1360.4],
[1203634800000, 1356.8],
[1203721200000, 1349.6],
[1203807600000, 1349.4],
[1203894000000, 1349.4],
[1203980400000, 1349.6],
[1204066800000, 1346.6],
[1204153200000, 1330.0],
[1204239600000, 1322.2],
[1204326000000, 1316.6],
[1204412400000, 1318.0],
[1204498800000, 1318.0],
[1204585200000, 1316.2],
[1204671600000, 1315.6],
[1204758000000, 1314.8],
[1204844400000, 1306.4],
[1204930800000, 1300.4],
[1205017200000, 1302.8],
[1205103600000, 1302.8],
[1205190000000, 1301.4],
[1205276400000, 1302.0],
[1205362800000, 1297.8],
[1205449200000, 1284.8],
[1205535600000, 1281.2],
[1205622000000, 1276.4],
[1205708400000, 1276.4],
[1205794800000, 1268.2],
[1205881200000, 1268.8],
[1205967600000, 1275.6],
[1206054000000, 1287.8],
[1206140400000, 1295.6],
[1206226800000, 1296.2],
[1206313200000, 1296.2],
[1206399600000, 1298.8],
[1206486000000, 1287.6],
[1206572400000, 1275.4],
[1206658800000, 1265.8],
[1206745200000, 1267.2],
[1206831600000, 1266.6],
[1206914400000, 1266.6],
[1207000800000, 1266.0],
[1207087200000, 1274.2],
[1207173600000, 1280.6],
[1207260000000, 1279.2],
[1207346400000, 1272.8],
[1207432800000, 1271.2],
[1207519200000, 1271.2],
[1207605600000, 1273.6],
[1207692000000, 1271.4],
[1207778400000, 1270.8],
[1207864800000, 1264.0],
[1207951200000, 1266.4],
[1208037600000, 1265.6],
[1208124000000, 1266.2],
[1208210400000, 1268.4],
[1208296800000, 1264.2],
[1208383200000, 1260.4],
[1208469600000, 1255.6],
[1208556000000, 1261.6],
[1208642400000, 1264.8],
[1208728800000, 1264.8],
[1208815200000, 1261.4],
[1208901600000, 1255.4],
[1208988000000, 1253.8],
[1209074400000, 1267.0],
[1209160800000, 1278.4],
[1209247200000, 1280.0],
[1209333600000, 1280.2],
[1209420000000, 1279.2],
[1209506400000, 1281.4],
[1209592800000, 1284.6],
[1209679200000, 1285.8],
[1209765600000, 1294.4],
[1209852000000, 1297.0],
[1209938400000, 1297.2],
[1210024800000, 1293.4],
[1210111200000, 1288.8],
[1210197600000, 1293.4],
[1210284000000, 1301.8],
[1210370400000, 1295.6],
[1210456800000, 1292.2],
[1210543200000, 1292.2],
[1210629600000, 1293.6],
[1210716000000, 1289.8],
[1210802400000, 1294.0],
[1210888800000, 1292.2],
[1210975200000, 1290.4],
[1211061600000, 1284.4],
[1211148000000, 1284.4],
[1211234400000, 1285.0],
[1211320800000, 1282.8],
[1211407200000, 1273.2],
[1211493600000, 1269.2],
[1211580000000, 1270.0],
[1211666400000, 1269.2],
[1211752800000, 1269.2],
[1211839200000, 1268.6],
[1211925600000, 1269.2],
[1212012000000, 1275.8],
[1212098400000, 1283.2],
[1212184800000, 1288.4],
[1212271200000, 1286.2],
[1212357600000, 1286.2],
[1212444000000, 1287.0],
[1212530400000, 1288.0],
[1212616800000, 1294.6],
[1212703200000, 1293.8],
[1212789600000, 1277.2],
[1212876000000, 1271.2],
[1212962400000, 1268.0],
[1213048800000, 1269.2],
[1213135200000, 1286.0],
[1213221600000, 1290.4],
[1213308000000, 1293.4],
[1213394400000, 1301.2],
[1213480800000, 1300.8],
[1213567200000, 1300.6],
[1213653600000, 1296.2],
[1213740000000, 1290.2],
[1213826400000, 1290.0],
[1213912800000, 1288.2],
[1213999200000, 1282.8],
[1214085600000, 1281.8],
[1214172000000, 1281.8],
[1214258400000, 1285.6],
[1214344800000, 1286.2],
[1214431200000, 1283.6],
[1214517600000, 1274.2],
[1214604000000, 1269.8],
[1214690400000, 1266.6],
[1214776800000, 1266.8],
[1214863200000, 1267.6],
[1214949600000, 1268.4],
[1215036000000, 1264.0],
[1215122400000, 1263.6],
[1215208800000, 1274.0],
[1215295200000, 1273.6],
[1215381600000, 1273.6],
[1215468000000, 1276.6],
[1215554400000, 1274.2],
[1215640800000, 1274.2],
[1215727200000, 1271.0],
[1215813600000, 1264.0],
[1215900000000, 1255.4],
[1215986400000, 1255.2],
[1216072800000, 1258.2],
[1216159200000, 1254.8],
[1216245600000, 1258.6],
[1216332000000, 1262.2],
[1216418400000, 1262.0],
[1216504800000, 1262.4],
[1216591200000, 1262.4],
[1216677600000, 1260.8],
[1216764000000, 1258.8],
[1216850400000, 1269.6],
[1216936800000, 1275.6],
[1217023200000, 1273.6],
[1217109600000, 1273.6],
[1217196000000, 1273.6],
[1217282400000, 1272.0],
[1217368800000, 1274.0],
[1217455200000, 1283.6],
[1217541600000, 1282.2],
[1217628000000, 1287.0],
[1217714400000, 1285.4],
[1217800800000, 1285.4],
[1217887200000, 1283.8],
[1217973600000, 1289.2],
[1218060000000, 1293.6],
[1218146400000, 1297.4],
[1218232800000, 1318.8],
[1218319200000, 1333.2],
[1218405600000, 1333.2],
[1218492000000, 1335.6],
[1218578400000, 1342.4],
[1218664800000, 1341.0],
[1218751200000, 1343.6],
[1218837600000, 1356.8],
[1218924000000, 1362.2],
[1219010400000, 1362.2],
[1219096800000, 1358.8],
[1219183200000, 1360.8],
[1219269600000, 1356.2],
[1219356000000, 1351.2],
[1219442400000, 1347.0],
[1219528800000, 1352.6],
[1219615200000, 1352.4],
[1219701600000, 1355.4],
[1219788000000, 1363.0],
[1219874400000, 1360.4],
[1219960800000, 1356.0],
[1220047200000, 1359.2],
[1220133600000, 1363.4],
[1220220000000, 1363.4],
[1220306400000, 1366.4],
[1220392800000, 1375.4],
[1220479200000, 1382.4],
[1220565600000, 1382.8],
[1220652000000, 1401.8],
[1220738400000, 1402.4],
[1220824800000, 1402.0],
[1220911200000, 1401.0]
    ];

    function euroFormatter(v, axis) {
        return v.toFixed(axis.tickDecimals);
    }

    function doPlot(position) {
        $.plot($("#flot-line-chart-multi"), [{
            data: elo_ranking,
            label: "Your ELO"
        }, {
            data: site_average,
            label: "Site Average",
            //yaxis: 2
        }], {
            xaxes: [{
                mode: 'time'
            }],
            yaxes: [{
                min: 0
            }, {
                // align if we are to the right
                alignTicksWithAxis: position == "right" ? 1 : null,
                position: position,
                tickFormatter: euroFormatter
            }],
            legend: {
                position: 'sw'
            },
            grid: {
                hoverable: true //IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s was %y",
                xDateFormat: "%y-%0m-%0d",

                onHover: function(flotItem, $tooltipEl) {
                    // console.log(flotItem, $tooltipEl);
                }
            }

        });
    }

    doPlot("right");

    $("button").click(function() {
        doPlot($(this).text());
    });
});

//Flot Moving Line Chart

$(function() {

    var container = $("#flot-line-chart-moving");

    // Determine how many data points to keep based on the placeholder's initial size;
    // this gives us a nice high-res plot while avoiding more than one point per pixel.

    var maximum = container.outerWidth() / 2 || 300;

    //

    var data = [];

    function getRandomData() {

        if (data.length) {
            data = data.slice(1);
        }

        while (data.length < maximum) {
            var previous = data.length ? data[data.length - 1] : 50;
            var y = previous + Math.random() * 10 - 5;
            data.push(y < 0 ? 0 : y > 100 ? 100 : y);
        }

        // zip the generated y values with the x values

        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]])
        }

        return res;
    }

    //

    series = [{
        data: getRandomData(),
        lines: {
            fill: true
        }
    }];

    //

    var plot = $.plot(container, series, {
        grid: {
            borderWidth: 1,
            minBorderMargin: 20,
            labelMargin: 10,
            backgroundColor: {
                colors: ["#fff", "#e4f4f4"]
            },
            margin: {
                top: 8,
                bottom: 20,
                left: 20
            },
            markings: function(axes) {
                var markings = [];
                var xaxis = axes.xaxis;
                for (var x = Math.floor(xaxis.min); x < xaxis.max; x += xaxis.tickSize * 2) {
                    markings.push({
                        xaxis: {
                            from: x,
                            to: x + xaxis.tickSize
                        },
                        color: "rgba(232, 232, 255, 0.2)"
                    });
                }
                return markings;
            }
        },
        xaxis: {
            tickFormatter: function() {
                return "";
            }
        },
        yaxis: {
            min: 0,
            max: 110
        },
        legend: {
            show: true
        }
    });

    // Update the random dataset at 25FPS for a smoothly-animating chart

    setInterval(function updateRandom() {
        series[0].data = getRandomData();
        plot.setData(series);
        plot.draw();
    }, 40);

});

//Flot Bar Chart

$(function() {

    var barOptions = {
        series: {
            bars: {
                show: true,
                barWidth: 43200000
            }
        },
        xaxis: {
            mode: "time",
            timeformat: "%m/%d",
            minTickSize: [1, "day"]
        },
        grid: {
            hoverable: true
        },
        legend: {
            show: false
        },
        tooltip: true,
        tooltipOpts: {
            content: "x: %x, y: %y"
        }
    };
    var barData = {
        label: "bar",
        data: [
            [1354521600000, 1000],
            [1355040000000, 2000],
            [1355223600000, 3000],
            [1355306400000, 4000],
            [1355487300000, 5000],
            [1355571900000, 6000]
        ]
    };
    $.plot($("#flot-bar-chart"), [barData], barOptions);

});