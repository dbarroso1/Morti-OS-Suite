$(function () {
    google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart1);
    google.charts.setOnLoadCallback(drawChart2);

    function drawChart1() {
        var data = google.visualization.arrayToDataTable([
            ['Step', 'Value'],
            [5, 6.986694336],
            [18, 4.715085506],
            [24, 4.576293945],
            [40, 4.364052773],
            [42, 4.374617577],
            [45, 4.177027702],
            [53, 4.046007156],
            [56, 3.994881153],
            [71, 3.940865517],
            [74, 4.029242516],
            [94, 3.775060654],
            [102, 3.680642843],
            [106, 3.860520363],
            [126, 3.746268749],
            [139, 3.805251598],
            [150, 3.701197863],
            [155, 3.735049963],
            [158, 3.686251879],
            [167, 3.658822775],
            [178, 3.72648716],
            [183, 3.732760906],
            [185, 3.535935163],
            [186, 3.699960947],
            [190, 3.69288373],
            [198, 3.64470768],
            [207, 3.686300755],
            [212, 3.579498291],
            [223, 3.668130875],
            [229, 3.706583023],
            [234, 3.369730949],
            [249, 3.449924707],
            [255, 3.308216095],
            [260, 3.493213177],
            [267, 3.558794022],
            [271, 3.323161602],
            [273, 3.400556087],
            [292, 3.49085474],
            [297, 3.556126118],
            [303, 3.490415096],
            [308, 3.395913363],
            [310, 3.457933903],
            [318, 3.682704926],
            [330, 3.441447258],
            [339, 3.433225632],
            [347, 3.454675913],
            [363, 3.455462217],
            [367, 3.393024921],
            [377, 3.24405241],
            [421, 3.524673462],
            [422, 3.475473881],
            [439, 3.390414715],
            [441, 3.395659447],
            [442, 3.519833326],
            [445, 3.446369171],
            [460, 3.410987377],
            [463, 3.311389923],
            [464, 3.164232254],
            [474, 3.134317875],
            [491, 3.280232668],
            [493, 3.32385397],
            [514, 3.23018837],
            [517, 3.305612326],
            [525, 3.191086769],
            [531, 3.251847744],
            [533, 3.294980049],
            [536, 3.216644049],
            [542, 3.295710325],
            [547, 3.292673111],
            [557, 3.266587973],
            [563, 3.352259159],
            [573, 3.217653513],
            [579, 3.316606045],
            [581, 3.129740238],
            [586, 3.265835762],
            [587, 3.319458485],
            [602, 3.253001213],
            [620, 3.217539787],
            [622, 3.182466745],
            [634, 3.340720177],
            [641, 3.170761585],
            [642, 3.275564194],
            [644, 3.237580538],
            [647, 3.226536036],
            [649, 3.302662373],
            [661, 3.176938534],
            [664, 3.343853474],
            [668, 3.330191851],
            [671, 3.313454628],
            [674, 3.204672813],
            [678, 3.215456486],
            [683, 3.190610409],
            [688, 3.241730452],
            [714, 2.881967306],
            [718, 3.042731762],
            [722, 2.936096191],
            [723, 2.939843893],
            [730, 3.027554274],
            [739, 3.032696009],
            [743, 3.04146266],
            [747, 3.07566309],
            [752, 3.039955139],
            [756, 3.128674984],
            [765, 3.070236206],
            [769, 3.071547508],
            [770, 3.019896507],
            [771, 3.17330718],
            [773, 3.027399063],
            [780, 3.111013412],
            [785, 3.042804003],
            [787, 2.971496105],
            [792, 3.08407402],
            [794, 3.103078842],
            [798, 3.048941851],
            [802, 3.100445271],
            [808, 2.940339565],
            [809, 3.091006279],
            [832, 3.186230659],
            [836, 3.203716516],
            [869, 3.193660259],
            [874, 3.112801552],
            [876, 3.165698528],
            [882, 3.048941135],
            [890, 3.040525675],
            [896, 2.99012804],
            [900, 3.028403759],
            [907, 3.074100494],
            [909, 3.074394226],
            [915, 2.985625744],
            [917, 3.179319143],
            [931, 2.847971916],
            [932, 2.767099142],
            [942, 2.842080116],
            [945, 2.946428299],
            [954, 2.83859396],
            [958, 2.800239563],
            [962, 2.858983278],
            [971, 2.822544575],
            [972, 2.998294353],
            [978, 2.953832388],
            [979, 2.897162437],
            [984, 2.889850378],
            [996, 2.925006628],
            [1002, 2.885231018],
            [1005, 3.003296614],
            [1014, 2.895085812],
            [1017, 2.913705826],
            [1025, 2.989929199],
            [1037, 2.897255898],
            [1044, 2.977784157],
            [1057, 2.966157436],
            [1063, 2.846462965],
            [1066, 2.892994642],
            [1068, 2.814846992],
            [1072, 2.85510993],
            [1076, 2.871277809],
            [1078, 2.897073746],
            [1083, 2.865703583],
            [1084, 2.914481163],
            [1093, 2.941296101],
            [1099, 2.958735466],
            [1103, 2.957567215],
            [1104, 2.90147686],
            [1114, 2.942141056],
            [1119, 3.00429821],
            [1133, 3.011052608],
            [1156, 2.598258018],
            [1160, 2.658993244],
            [1161, 2.563310146],
            [1162, 2.580355167],
            [1180, 2.668380022],
            [1192, 2.639417171],
            [1193, 2.668889284],
            [1199, 2.731437922],
            [1206, 2.717376709],
            [1232, 2.681699038],
            [1234, 2.692790031],
            [1244, 2.670544147],
            [1255, 2.738236666],
            [1258, 2.874979258],
            [1261, 2.856053829],
            [1281, 2.850190639],
            [1287, 2.792580605],
            [1294, 2.836047173],
            [1300, 2.782620907],
            [1310, 2.844241619],
            [1316, 2.732046604],
            [1319, 2.77257061],
            [1327, 2.864959955],
            [1330, 2.778138876],
            [1333, 2.761789083],
            [1336, 2.85687542],
            [1337, 2.723526478],
            [1355, 2.783980131],
            [1385, 2.889731407],
            [1388, 2.516060591],
            [1389, 2.49416399],
            [1391, 2.443933487],
            [1392, 2.623254776],
            [1414, 2.473647118],
            [1426, 2.582967281],
            [1428, 2.543473959],
            [1432, 2.510187864],
            [1436, 2.494688272],
            [1440, 2.601223469],
            [1465, 2.619779348],
            [1466, 2.516890049],
            [1477, 2.645668983],
            [1485, 2.57673645],
            [1489, 2.618008614],
            [1491, 2.725352049],
            [1501, 2.519803047],
            [1508, 2.793082714],
            [1523, 2.679833412],
            [1527, 2.542029142],
            [1551, 2.588674068],
            [1552, 2.646001339],
            [1568, 2.645498276],
            [1569, 2.675313711],
            [1578, 2.71033287],
            [1584, 2.598370552],
            [1588, 2.696288109],
            [1597, 2.715004921],
            [1604, 2.66164279],
            [1605, 2.593716383],
            [1618, 2.356393814],
            [1627, 2.350447655],
            [1632, 2.303389072],
            [1637, 2.432950497],
            [1640, 2.401630878],
            [1645, 2.362250328],
            [1648, 2.295034885],
            [1652, 2.304240704],
            [1660, 2.391061306],
            [1668, 2.477368355],
            [1675, 2.423556089],
            [1682, 2.422960281],
            [1691, 2.333605289],
            [1695, 2.426668406],
            [1696, 2.504648685],
            [1697, 2.485834837],
            [1699, 2.460117579],
            [1702, 2.46626544],
            [1709, 2.388077497],
            [1718, 2.393599033],
            [1728, 2.572678089],
            [1732, 2.403621197],
            [1734, 2.500736713],
            [1737, 2.619392633],
            [1742, 2.573775291],
            [1745, 2.573552847],
            [1746, 2.450278759],
            [1747, 2.459917068],
            [1766, 2.515276432],
            [1775, 2.457947254],
            [1781, 2.527217388],
            [1788, 2.481302738],
            [1789, 2.510681629],
            [1798, 2.501911402],
            [1805, 2.464229107],
            [1817, 2.505167961],
            [1826, 2.517065048],
            [1830, 2.473352432],
            [1840, 2.534680843],
            [1844, 2.62237072],
            [1849, 2.187483549],
            [1853, 2.198506832],
            [1866, 2.170128345],
            [1869, 2.178757906],
            [1875, 2.271715403],
            [1876, 2.25656867],
            [1877, 2.244889021],
            [1911, 2.17701292],
            [1917, 2.339921951],
            [1934, 2.317715883],
            [1936, 2.257436037],
            [1938, 2.333038092],
            [1944, 2.290320396],
            [1947, 2.397790909],
            [1949, 2.361106396],
            [1952, 2.300119877],
            [1967, 2.214485407],
            [1969, 2.288205385],
            [1981, 2.317870617],
            [1982, 2.36351347],
            [1983, 2.386078596],
            [2001, 2.247993469],
            [2005, 2.327693224],
            [2013, 2.361406803],
            [2017, 2.344846249],
            [2027, 2.428188324],
            [2030, 2.410624504],
            [2033, 2.304832935],
            [2036, 2.405789852],
            [2060, 2.371459007],
            [2072, 2.345330715],
            [2073, 2.471152782],
            [2076, 2.338796616],
            [2077, 2.505795717],
            [2079, 2.035499573],
            [2081, 2.023988724],
            [2085, 2.140235424],
            [2089, 1.963873982],
            [2094, 1.862711191],
            [2096, 2.084853649],
            [2111, 1.998988628],
            [2115, 2.015018463],
            [2141, 2.180985928],
            [2144, 2.05836916],
            [2145, 2.144029617],
            [2149, 2.197626829],
            [2151, 2.037844419],
            [2156, 2.198407173],
            [2165, 1.988268614],
            [2173, 2.158757687],
            [2177, 2.184937],
            [2187, 2.22608304],
            [2189, 2.142663479],
            [2191, 2.251491785],
            [2192, 2.08915782],
            [2196, 2.129934311],
            [2199, 2.092557192],
            [2207, 2.142681599],
            [2211, 2.273507118],
            [2225, 2.196489096],
            [2231, 2.209510803],
            [2236, 2.201265335],
            [2237, 2.241657734],
            [2239, 2.109465599],
            [2242, 2.185060501],
            [2244, 2.174125195],
            [2246, 2.161844254],
            [2247, 2.123303175],
            [2254, 2.134076834],
            [2257, 2.09576273],
            [2262, 2.224419594],
            [2281, 2.288618565],
            [2291, 2.21248126],
            [2297, 2.262902737],
            [2303, 2.239856482],
            [2307, 2.194602251],
            [2308, 2.162024021],
            [2319, 1.926972151],
            [2320, 1.740789294],
            [2335, 1.84158206],
            [2345, 1.967644453],
            [2354, 1.806569099],
            [2371, 1.9441818],
            [2389, 1.823289633],
            [2390, 1.934381247],
            [2392, 1.854783177],
            [2402, 2.091276169],
            [2406, 1.916912556],
            [2416, 1.863943696],
            [2424, 2.054999828],
            [2425, 1.887898445],
            [2436, 1.901524544],
            [2444, 2.025562286],
            [2450, 2.011270523],
            [2451, 1.951311946],
            [2453, 2.09677124],
            [2455, 2.065525532],
            [2460, 2.007304668],
            [2485, 2.103852749],
            [2486, 2.014474392],
            [2496, 2.039515495],
            [2498, 2.026469231],
            [2502, 2.014872551],
            [2503, 2.01206398],
            [2517, 2.058515072],
            [2523, 2.100013733],
            [2528, 2.004117966],
            [2530, 2.002922535],
            [2532, 1.966854334],
            [2534, 2.132667065],
            [2547, 1.58253479],
            [2551, 1.621312141],
            [2553, 1.581857204],
            [2556, 1.652925253],
            [2566, 1.624021053],
            [2576, 1.665985465],
            [2578, 1.683449507],
            [2590, 1.61704421],
            [2591, 1.634032607],
            [2592, 1.76796174],
            [2600, 1.733581662],
            [2606, 1.724129081],
            [2623, 1.794304371],
            [2629, 1.671027899],
            [2630, 1.817243814],
            [2638, 1.705115318],
            [2644, 1.898624897],
            [2650, 1.694754601],
            [2655, 1.854170799],
            [2678, 1.715240002],
            [2680, 1.835096478],
            [2685, 1.819583893],
            [2690, 1.874040246],
            [2703, 1.834045053],
            [2710, 1.72435987],
            [2725, 1.892772198],
            [2737, 1.862466693],
            [2740, 1.975122452],
            [2746, 1.945827365],
            [2754, 1.833392382],
            [2755, 1.892299652],
            [2757, 1.918871641],
            [2766, 1.970190287],
            [2789, 1.399733782],
            [2790, 1.398183823],
            [2791, 1.521343946],
            [2798, 1.44456315],
            [2809, 1.523563862],
            [2811, 1.425598979],
            [2823, 1.494640589],
            [2824, 1.329232097],
            [2827, 1.498155832],
            [2829, 1.476111889],
            [2830, 1.509593248],
            [2859, 1.588172197],
            [2871, 1.535173535],
            [2872, 1.67219305],
            [2880, 1.629361868],
            [2881, 1.561071396],
            [2887, 1.463002682],
            [2890, 1.545853615],
            [2896, 1.576869249],
            [2900, 1.61709547],
            [2917, 1.639538288],
            [2919, 1.671996474],
            [2920, 1.54362762],
            [2921, 1.693330526],
            [2932, 1.617947578],
            [2950, 1.715961695],
            [2967, 1.789592505],
            [2974, 1.699203491],
            [2975, 1.659523606],
            [2978, 1.599506617],
            [2994, 1.649372339],
            [2998, 1.663325787],
            [3003, 1.271973729],
            [3005, 1.290460825],
            [3007, 1.232000709],
            [3009, 1.278565645],
            [3011, 1.281288147],
            [3015, 1.267273426],
            [3016, 1.227987766],
            [3027, 1.302039504],
            [3030, 1.273379087],
            [3038, 1.290174246],
            [3041, 1.293063879],
            [3042, 1.336113214],
            [3050, 1.360292554],
            [3065, 1.281112194],
            [3069, 1.313814402],
            [3071, 1.233173013],
            [3086, 1.289992094],
            [3099, 1.512417316],
            [3122, 1.248836756],
            [3137, 1.526513815],
            [3138, 1.340021372],
            [3144, 1.471704721],
            [3145, 1.546321273],
            [3150, 1.382448196],
            [3155, 1.413534164],
            [3159, 1.413136005],
            [3161, 1.338693619],
            [3177, 1.368874311],
            [3188, 1.53532052],
            [3195, 1.461992502],
            [3196, 1.465343356],
            [3203, 1.629759312],
            [3206, 1.566153765],
            [3230, 1.598733664],
            [3233, 1.575760603],
            [3240, 1.13303411],
            [3243, 1.080389619],
            [3244, 1.141364932],
            [3246, 1.042713165],
            [3247, 1.155924797],
            [3267, 1.152949095],
            [3272, 1.106921554],
            [3281, 1.159196138],
            [3283, 1.315155625],
            [3285, 1.327739477],
            [3305, 1.250403047],
            [3313, 1.310577512],
            [3321, 1.234088302],
            [3327, 1.280725479],
            [3328, 1.317603111],
            [3333, 1.209440827],
            [3338, 1.267954826],
            [3345, 1.269575834],
            [3357, 1.287862062],
            [3374, 1.347044468],
            [3376, 1.326736927],
            [3378, 1.244266748],
            [3381, 1.55858469],
            [3386, 1.319408894],
            [3403, 1.383779287],
            [3408, 1.306230068],
            [3430, 1.42282784],
            [3433, 1.314934015],
            [3438, 1.360412836],
            [3445, 1.319546938],
            [3449, 1.412865043],
            [3451, 1.372636795],
            [3457, 1.492521644],
            [3458, 1.331331491],
            [3464, 1.323415518],
            [3471, 1.003382564],
            [3477, 1.013240337],
            [3480, 0.961260319],
            [3497, 1.02390945],
            [3499, 1.06485498],
            [3509, 1.120778918],
            [3512, 0.965639949],
            [3514, 1.061526299],
            [3519, 1.26318717],
            [3535, 1.192946196],
            [3537, 1.101121783],
            [3543, 1.156924725],
            [3547, 1.251162052],
            [3549, 1.191546917],
            [3563, 1.168423891],
            [3575, 1.191273928],
            [3580, 1.145823836],
            [3592, 1.150707722],
            [3599, 1.139877796],
            [3600, 1.203630805],
            [3618, 1.084704161],
            [3620, 1.070402622],
            [3622, 1.311743498],
            [3625, 1.20168066],
            [3628, 1.26464653],
            [3645, 1.176970363],
            [3656, 1.196638465],
            [3657, 1.229744911],
            [3663, 1.255025983],
            [3670, 1.259741783],
            [3694, 1.204627037],
            [3700, 0.907704473],
            [3702, 0.850150168],
            [3723, 0.96636641],
            [3726, 0.897301316],
            [3730, 0.877326846],
            [3731, 0.924981475],
            [3732, 1.015826583],
            [3738, 0.963535905],
            [3741, 0.952505112],
            [3743, 1.050631285],
            [3752, 1.010668039],
            [3759, 0.961308002],
            [3764, 1.026386976],
            [3772, 1.072536707],
            [3776, 0.934544086],
            [3780, 1.008065701],
            [3793, 1.051160097],
            [3795, 1.068910956],
            [3798, 1.019562721],
            [3810, 1.061889648],
            [3814, 1.090564251],
            [3819, 1.068455815],
            [3821, 1.036303997],
            [3831, 1.100986123],
            [3833, 1.078893661],
            [3835, 0.968228221],
            [3848, 1.133695245],
            [3864, 1.175358534],
            [3869, 1.169170856],
            [3876, 1.125739098],
            [3901, 0.984376967],
            [3902, 1.097395301],
            [3903, 1.017161012],
            [3910, 1.147484899],
            [3920, 1.117928624],
            [3928, 0.819937766],
            [3935, 0.842375875],
            [3939, 0.81306541],
            [3950, 0.778213501],
            [3956, 0.860548139],
            [3962, 0.887614012],
            [3980, 0.822085619],
            [3984, 0.810336232],
            [3995, 0.836630583],
            [4000, 0.86877203],
            [4005, 0.864828587],
            [4009, 0.937000632],
            [4010, 0.906981707],
            [4021, 0.902999163],
            [4022, 1.056864023],
            [4033, 0.974581659],
            [4035, 0.97349],
            [4036, 0.932642877],
            [4043, 0.946398973],
            [4046, 0.962397516],
            [4047, 0.945503712],
            [4048, 1.035623431],
            [4076, 1.016182542],
            [4093, 0.985098958],
            [4098, 1.017093301],
            [4099, 0.990644217],
            [4101, 1.009499311],
            [4109, 1.011264682],
            [4167, 0.72407949],
            [4182, 0.800796628],
            [4193, 0.834284842],
            [4194, 0.848023176],
            [4196, 0.820607543],
            [4198, 0.848460376],
            [4201, 0.943110943],
            [4202, 0.875376523],
            [4204, 0.82087189],
            [4227, 0.901899278],
            [4232, 0.849795818],
            [4235, 0.835955262],
            [4238, 0.677287042],
            [4243, 0.881011963],
            [4254, 0.780599952],
            [4263, 0.911309838],
            [4266, 0.906835079],
            [4267, 0.895083427],
            [4276, 0.900281787],
            [4282, 0.888509631],
            [4298, 0.903145611],
            [4304, 1.013439417],
            [4308, 0.982630491],
            [4317, 0.932406008],
            [4319, 0.912044287],
            [4328, 0.920855165],
            [4332, 0.928250432],
            [4338, 0.86099577],
            [4343, 0.906967521],
            [4349, 0.935161769],
            [4358, 1.034258962],
            [4365, 0.934518874],
            [4369, 0.989956379],
            [4378, 1.069172621],
            [4393, 0.735745907],
            [4400, 0.736858606],
            [4406, 0.731465399],
            [4410, 0.641122103],
            [4411, 0.693632483],
            [4430, 0.893308997],
            [4431, 0.766129494],
            [4433, 0.853279471],
            [4439, 0.774245799],
            [4442, 0.844249725],
            [4469, 0.865411103],
            [4475, 0.816310167],
            [4479, 0.88997364],
            [4482, 0.825652719],
            [4490, 0.9386729],
            [4492, 0.741550148],
            [4509, 0.831759334],
            [4510, 0.931663871],
            [4529, 0.84909445],
            [4530, 0.843906522],
            [4533, 0.843207955],
            [4540, 0.868189871],
            [4542, 0.919223845],
            [4550, 0.800008297],
            [4552, 0.789842844],
            [4553, 0.863958657],
            [4566, 0.846090794],
            [4568, 0.902209222],
            [4578, 0.932183146],
            [4581, 0.927113354],
            [4592, 0.86770606],
            [4595, 0.995354474],
            [4597, 0.872157991],
            [4599, 0.949470997],
            [4611, 0.871579051],
            [4628, 0.746133924],
            [4643, 0.691317737],
            [4649, 0.653060853],
            [4656, 0.825720787],
            [4664, 0.747242689],
            [4668, 0.667957544],
            [4675, 0.830618501],
            [4676, 0.714204729],
            [4677, 0.746470511],
            [4687, 0.853749514],
            [4708, 0.831096649],
            [4713, 0.69116056],
            [4718, 0.772285819],
            [4724, 0.80523175],
            [4734, 0.794065595],
            [4739, 0.847608447],
            [4745, 0.838017464],
            [4749, 0.83527714],
            [4750, 0.723236322],
            [4758, 0.912247539],
            [4761, 0.831058979],
            [4762, 0.921174169],
            [4764, 0.857878447],
            [4767, 0.760678053],
            [4768, 0.919284225],
            [4776, 0.747127354],
            [4779, 0.868819714],
            [4780, 0.80092746],
            [4782, 0.909119129],
            [4784, 0.936755657],
            [4787, 0.80497694],
            [4788, 0.743022084],
            [4794, 0.882443905],
            [4800, 0.890972614],
            [4802, 0.814217329],
            [4805, 0.848410368],
            [4825, 0.869213104],
            [4827, 0.792872429],
            [4833, 0.937417626],
            [4840, 0.80117631],
            [4852, 0.634500623],
            [4871, 0.588769019],
            [4873, 0.653707027],
            [4889, 0.765979409],
            [4892, 0.84150064],
            [4894, 0.709396541],
            [4895, 0.688122272],
            [4914, 0.739026845],
            [4938, 0.658853829],
            [4941, 0.791725159],
            [4954, 0.77949208],
            [4962, 0.79316318],
            [4970, 0.788931847],
            [4971, 0.875687599],
            [4974, 0.879545808],
            [4976, 0.824111402],
            [4977, 0.714182496],
            [4991, 0.869504094],
            [4999, 0.800326645],
            [5021, 0.899585485],
            [5027, 0.790800273],
            [5030, 0.857275963],
            [5037, 0.839650691],
            [5050, 0.79254365],
            [5052, 0.721973777],
            [5053, 0.794968545],
            [5060, 0.716106057],
            [5078, 0.799512267],
            [5094, 0.626748562],
            [5101, 0.718727767],
            [5106, 0.640275955],
            [5107, 0.679675043],
            [5113, 0.739778519],
            [5126, 0.687933266],
            [5128, 0.638018012],
            [5134, 0.673601329],
            [5160, 0.687253952],
            [5165, 0.783504486],
            [5178, 0.774932623],
            [5182, 0.679115534],
            [5200, 0.824835062],
            [5208, 0.816428542],
            [5231, 0.718261123],
            [5234, 0.804207444],
            [5235, 0.740973353],
            [5237, 0.775879383],
            [5239, 0.753257811],
            [5240, 0.70741117],
            [5244, 0.77243948],
            [5262, 0.793641269],
            [5266, 0.826985002],
            [5289, 0.768178344],
            [5302, 0.800576329],
            [5318, 0.544651389],
            [5329, 0.657324791],
            [5330, 0.641911268],
            [5345, 0.681426585],
            [5348, 0.609756231],
            [5359, 0.607388914],
            [5360, 0.753331184],
            [5363, 0.653054953],
            [5380, 0.689323902],
            [5384, 0.60593307],
            [5397, 0.613743961],
            [5404, 0.655372262],
            [5406, 0.722308815],
            [5420, 0.668815434],
            [5425, 0.586941361],
            [5439, 0.641046405],
            [5440, 0.693322182],
            [5442, 0.590075552],
            [5447, 0.648261786],
            [5475, 0.675649345],
            [5484, 0.6493572],
            [5491, 0.760858178],
            [5495, 0.740805745],
            [5501, 0.758894682],
            [5507, 0.755178094],
            [5512, 0.764056742],
            [5515, 0.766618848],
            [5517, 0.783320129],
            [5532, 0.750901818],
            [5541, 0.80100739],
            [5549, 0.642318606],
            [5559, 0.603484273],
            [5566, 0.642437458],
            [5571, 0.589103699],
            [5573, 0.642604768],
            [5576, 0.653786302],
            [5585, 0.633139491],
            [5587, 0.623003185],
            [5593, 0.55509603],
            [5605, 0.635466337],
            [5610, 0.634005427],
            [5618, 0.685737133],
            [5620, 0.64610064],
            [5630, 0.661785781],
            [5632, 0.609376073],
            [5647, 0.749776721],
            [5658, 0.72240901],
            [5660, 0.671684146],
            [5664, 0.645712018],
            [5676, 0.612685382],
            [5679, 0.670621634],
            [5713, 0.822134733],
            [5720, 0.704935551],
            [5723, 0.683329523],
            [5727, 0.693405867],
            [5741, 0.804761469],
            [5752, 0.667382836],
            [5759, 0.778150916],
            [5766, 0.73601222],
            [5776, 0.491060942],
            [5779, 0.59653306],
            [5784, 0.543481529],
            [5789, 0.546719313],
            [5795, 0.624258757],
            [5797, 0.56929189],
            [5807, 0.629334211],
            [5808, 0.586195886],
            [5825, 0.624789238],
            [5828, 0.558588743],
            [5835, 0.704522133],
            [5847, 0.646960735],
            [5862, 0.626924634],
            [5864, 0.709365606],
            [5871, 0.710332751],
            [5881, 0.65331459],
            [5889, 0.683845043],
            [5891, 0.669123054],
            [5893, 0.641898394],
            [5896, 0.597290456],
            [5898, 0.610443592],
            [5907, 0.682578683],
            [5917, 0.675095618],
            [5918, 0.754402816],
            [5928, 0.770537674],
            [5932, 0.732245266],
            [5933, 0.697747469],
            [5952, 0.721129179],
            [5957, 0.725534201],
            [5959, 0.742082],
            [5960, 0.792327166],
            [5963, 0.827598453],
            [5972, 0.717923105],
            [5990, 0.762924254],
            [6010, 0.615399241],
            [6015, 0.573510528],
            [6019, 0.567084551],
            [6024, 0.635124981],
            [6030, 0.593874276],
            [6031, 0.646047592],
            [6032, 0.612224162],
            [6035, 0.625149548],
            [6038, 0.580534935],
            [6052, 0.638339341],
            [6057, 0.594962001],
            [6060, 0.619387507],
            [6077, 0.597777605],
            [6078, 0.681303799],
            [6082, 0.548433542],
            [6087, 0.693554819],
            [6094, 0.678765714],
            [6103, 0.566377223],
            [6105, 0.63874507],
            [6115, 0.667807221],
            [6121, 0.665900707],
            [6123, 0.726322293],
            [6129, 0.611734271],
            [6131, 0.69203639],
            [6133, 0.59888494],
            [6140, 0.676683664],
            [6145, 0.704596102],
            [6147, 0.638064802],
            [6149, 0.661011577],
            [6157, 0.618499875],
            [6172, 0.687422633],
            [6176, 0.743855238],
            [6181, 0.761501193],
            [6184, 0.70900017],
            [6200, 0.731638432],
            [6210, 0.829554617],
            [6211, 0.704057336],
            [6213, 0.71734798],
            [6219, 0.663655996],
            [6220, 0.682240844],
            [6225, 0.637241066],
            [6232, 0.689870477],
            [6237, 0.482417405],
            [6240, 0.546089888],
            [6244, 0.485352278],
            [6250, 0.605945945],
            [6263, 0.553804398],
            [6270, 0.624441266],
            [6289, 0.483696163],
            [6309, 0.647527456],
            [6312, 0.687172294],
            [6316, 0.61323297],
            [6317, 0.598080397],
            [6324, 0.597966909],
            [6341, 0.513039291],
            [6352, 0.668857574],
            [6363, 0.602639019],
            [6370, 0.652421415],
            [6376, 0.617532492],
            [6400, 0.613723814],
            [6423, 0.630667925],
            [6432, 0.575962067],
            [6447, 0.660547256],
            [6448, 0.696616113],
            [6455, 0.696996689],
            [6459, 0.776156545],
            [6469, 0.494876087],
            [6472, 0.53938514],
            [6473, 0.513509035],
            [6483, 0.548267961],
            [6487, 0.467095882],
            [6495, 0.646082699],
            [6496, 0.517123103],
            [6500, 0.640339971],
            [6509, 0.508792281],
            [6510, 0.496894717],
            [6520, 0.669537008],
            [6521, 0.614848614],
            [6522, 0.522416592],
            [6530, 0.616625249],
            [6534, 0.550400257],
            [6550, 0.620725036],
            [6558, 0.675048709],
            [6571, 0.615584135],
            [6574, 0.611407101],
            [6578, 0.66384387],
            [6580, 0.629570723],
            [6581, 0.607326508],
            [6584, 0.63719672],
            [6593, 0.622764647],
            [6594, 0.680219054],
            [6603, 0.629848659],
            [6606, 0.596301436],
            [6616, 0.60296154],
            [6621, 0.600723624],
            [6649, 0.655297995],
            [6657, 0.667311907],
            [6666, 0.632251263],
            [6668, 0.626474738],
            [6672, 0.67046833],
            [6678, 0.653712869],
            [6680, 0.56559217],
            [6681, 0.706390023],
            [6688, 0.734234929],
            [6691, 0.624128878],
            [6696, 0.665574789],
            [6699, 0.493743896],
            [6700, 0.472690076],
            [6707, 0.61689508],
            [6711, 0.576957941],
            [6715, 0.550358295],
            [6725, 0.571947098],
            [6726, 0.513940811],
            [6738, 0.532065451],
            [6742, 0.585052729],
            [6749, 0.59066391],
            [6753, 0.587038338],
            [6764, 0.539241314],
            [6776, 0.66075933],
            [6792, 0.572111368],
            [6813, 0.671451569],
            [6817, 0.636389315],
            [6832, 0.701650202],
            [6837, 0.653898001],
            [6840, 0.598409295],
            [6846, 0.694518685],
            [6850, 0.691790223],
            [6854, 0.639132082],
            [6862, 0.61901474],
            [6868, 0.646199822],
            [6869, 0.568157375],
            [6870, 0.611587882],
            [6886, 0.557824373],
            [6893, 0.671878934],
            [6895, 0.598622024],
            [6901, 0.719005048],
            [6909, 0.689784884],
            [6912, 0.64053309],
            [6916, 0.759576023],
            [6918, 0.618587613],
            [6926, 0.684734881],
            [6929, 0.690397084]
    
        ]);

        var options = {
            title: 'RTC Training Loss',
            curveType: 'function',
            legend: {
                position: 'bottom'
            },
            colors: ['#fe01cb']
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
    }

    function drawChart2() {
        var data = google.visualization.arrayToDataTable([
            ['Step', 'Value'],
            [0, 10000],
            [10, 0]
        ]);

        var options = {
            title: 'TTS Training Loss',
            curveType: 'function',
            legend: {
                position: 'bottom'
            },
            colors: ['#fe01cb']
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }
})