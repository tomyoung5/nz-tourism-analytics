
const australia = [
    295754,
    325726,
    317463,
    368597,
    428841,
    467324,
    449585,
    450799,
    424495,
    437641,
    399980,
    362077,
    348138,
    350257,
    531421,
    570356,
    628238,
    653061,
    677958,
]

const china = [
    23639,
    36889,
    53849,
    47284,
    71885,
    72728,
    87330,
    101059,
    92602,
    75994,
    68477,
    50904,
    53608,
    94182,
    162026,
    155156,
    268886,
    266679,
    274942,
]

const usa = [
    133765,
    123401,
    121752,
    136675,
    132175,
    119890,
    114874,
    122927,
    113632,
    101399,
    91891,
    77324,
    74219,
    77013,
    107850,
    101262,
    163322,
    156396,
    155723,
]

const uk = [
    141502,
    139463,
    171088,
    184154,
    195581,
    209434,
    184458,
    196593,
    182867,
    145499,
    116569,
    100976,
    85766,
    88054,
    123281,
    106036,
    142061,
    140504,
    138947,
]

export const aucklandCountryData = []

function buildData(){    
    for(let count = 0; count < australia.length; count++){
        aucklandCountryData.push(
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