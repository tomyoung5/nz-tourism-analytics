
const australia = [
80568,
83813,
71624,
102707,
110136,
121541,
121450,
141299,
134965,
135792,
147162,
99055,
96888,
101100,
114969,
115509,
125974,
128994,
132014,
]

const china = [
890,
1413,
802,
3124,
2209,
4510,
1473,
1520,
5366,
6905,
8747,
2994,
14686,
24951,
31736,
31021,
46906,
48726,
50546,
]

const usa = [
45970,
40601,
43544,
41213,
44988,
45199,
40807,
42552,
36586,
38015,
33931,
33681,
32594,
41309,
59816,
36718,
57997,
62373,
63682,
]

const uk = [
65214,
66948,
80063,
90106,
98915,
100144,
96688,
86512,
94671,
76484,
76282,
56665,
41877,
39835,
56289,
49468,
65456,
64912,
64368,
]

export const westCoastCountryData = []

function buildData(){    
    for(let count = 0; count < australia.length; count++){
        westCoastCountryData.push(
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