
const australia = [
138238,
150470,
123144,
174166,
205478,
201108,
201754,
186845,
182386,
180104,
193074,
205817,
183555,
196833,
218505,
267503,
254263,
262212,
268636,
]

const china = [
2895,
7933,
8836,
6479,
6783,
9200,
6321,
7366,
5543,
5923,
8896,
7327,
10680,
19511,
32066,
27888,
37934,
29219,
30599,
]

const usa = [
35094,
43065,
45730,
49933,
60423,
54732,
55448,
51437,
44617,
41226,
39028,
43249,
38366,
45135,
67587,
49811,
68560,
67813,
68691,
]

const uk = [
77388,
83530,
101824,
103056,
114496,
114099,
115058,
113870,
106467,
95796,
85325,
74062,
65283,
59802,
63306,
64419,
81455,
81123,
80790,
]

export const wellingtonCountryData = []

function buildData(){    
    for(let count = 0; count < australia.length; count++){
        wellingtonCountryData.push(
            {
                year: ('' + (2000 + count)),
                australia: australia[count],
                china: china[count],
                usa: usa[count],
                uk: uk[count],
                total: (australia[count] + china[count] + usa[count] + uk[count]),
            })
    }
}

buildData()