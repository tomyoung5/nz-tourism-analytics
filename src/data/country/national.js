
const australia = [
    488201,
    539431,
    519828,
    641222,
    767015,
    794160,
    814927,
    854813,
    873263,
    936080,
    943996,
    946686,
    920906,
    1010492,
    1053170,
    1150118,
    1251541,
    1289252,
    1358873,
]

const china = [
    25322,
    40503,
    57050,
    53570,
    77090,
    80495,
    95905,
    107905,
    97404,
    87084,
    102332,
    117413,
    165039,
    207077,
    235259,
    256030,
    346396,
    361253,
    399769,
]

const usa = [
    179214,
    173334,
    177648,
    189516,
    191457,
    187487,
    193188,
    187540,
    178810,
    162229,
    157898,
    148660,
    140320,
    158766,
    185735,
    156567,
    256609,
    257827,
    259046,
]

const uk = [
    180494,
    189770,
    220698,
    240558,
    263045,
    278694,
    266484,
    267074,
    256249,
    231793,
    206924,
    194820,
    160053,
    162130,
    176472,
    166837,
    205150,
    205625,
    206100,
]

export const nationalCountryData = []

function buildData(){    
    for(let count = 0; count < australia.length; count++){
        nationalCountryData.push(
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