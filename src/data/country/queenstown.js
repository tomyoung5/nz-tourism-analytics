
const australia = [
110538,
124722,
115416,
160754,
180660,
189643,
177727,
205182,
190091,
209458,
195372,
169934,
166612,
238890,
277218,
306448,
309380,
305924,
317033,
]

const china = [
3864,
5019,
6429,
10044,
6109,
10478,
15100,
10619,
8372,
10781,
15589,
14396,
29128,
56906,
82989,
106331,
144435,
145928,
148933,
]

const usa = [
95891,
86236,
79136,
74349,
70767,
71765,
73660,
68027,
60166,
62021,
52829,
55934,
60545,
59316,
81155,
73307,
120567,
96373,
96518,
]

const uk = [
73670,
80992,
99609,
103921,
109445,
117589,
107344,
99354,
99376,
80502,
83602,
65908,
51127,
48627,
66437,
62486,
91457,
105776,
107595,
]

export const queenstownCountryData = []

function buildData(){
    for(let count = 0; count < australia.length; count++){
        queenstownCountryData.push(
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