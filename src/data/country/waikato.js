
const australia = [
81292,
88220,
82757,
114562,
136855,
184799,
132142,
151250,
147544,
149382,
173623,
193138,
170470,
193044,
207779,
250064,
235319,
237372,
245815,
]

const china = [
1766,
4164,
5683,
10048,
13739,
8390,
7030,
5699,
4022,
4649,
16749,
11854,
9996,
19318,
20163,
48094,
52192,
37022,
38827,
]

const usa = [
39724,
41549,
40362,
42184,
61093,
52611,
43586,
43657,
38088,
32157,
35799,
36406,
32733,
46186,
57825,
41536,
78255,
71127,
72083,
]

const uk = [
77068,
82583,
95336,
105323,
98442,
104962,
106677,
106311,
91595,
87018,
81005,
78422,
72627,
67189,
79122,
69544,
86705,
86899,
87093,
]

export const waikatoCountryData = []

function buildData(){    
    for(let count = 0; count < australia.length; count++){
        waikatoCountryData.push(
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