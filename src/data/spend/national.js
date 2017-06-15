
const australia = [
    2101,
    1861,
    2352,
    1786,
    1717,
    1665,
    1770,
    1869,
    1824,
    1743,
    1615,
    1549,
    1547,
    2178,
    2454,
    2392,
    2253,
    2129,
    2056,
]

const china = [
3607,
3258,
5326,
4073,
3089,
2862,
2935,
2564,
2677,
3146,
2829,
2984,
3037,
3846,
5271,
5610,
6545,
6645,
6845,
]

const usa = [
3884,
4633,
5373,
2990,
2743,
2840,
3250,
3392,
3209,
2906,
2477,
2304,
2382,
3341,
4880,
5302,
5402,
4952,
4632,
]

const uk = [
3338,
3733,
4295,
3653,
3051,
3357,
3358,
3774,
3470,
3427,
2901,
2750,
2526,
2774,
4317,
6445,
5042,
3517,
3643,
]

export const nationalSpendData = []

function buildData(){    
    for(let count = 0; count < australia.length; count++){
        nationalSpendData.push(
            {
                year: ('' + (2000 + count)),
                australia: australia[count],
                china: china[count],
                usa: usa[count],
                uk: uk[count],
            })
    }
}

buildData()