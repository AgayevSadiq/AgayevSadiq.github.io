const aspa = {
    dragon: [{
        ad: 'nurlan',
        bal: 100
    }, {
        ad: 'Orxan',
        bal: 80
    }, {
        ad: 'Cavi',
        bal: 85
    }, {
        ad: 'Maho',
        bal: 75
    }, {
        ad: 'Ramo',
        bal: 10
    }, {
        ad: 'Sadiq',
        bal: 100
    }, ],
    js: {
        famius: [{
            ad: 'Farid',
            bal: 85
        }, {
            ad: 'Selman',
            bal: 80
        }, {
            ad: 'Murad',
            bal: 95
        }], 
        king: [{
            ad: 'Morro',
            bal: 85
        }, {
            ad: 'Aliko',
            bal: 80
        }, {
            ad: 'Hebib',
            bal: 95
        }],
        nerv: {
            html: [{
                ad: 'Dinara',
                bal: 85
            }, {
                ad: 'Leman',
                bal: 50
            }],
            css:  [{
                ad: 'Elmir',
                bal: 85
            }, {
                ad: 'Zakir',
                bal: 40
            }]
        }
    }
}

function aspa2(data) {
    if (Array.isArray(data)) {
        let umumiBal = 0;
        for (let i = 0; i < data.length; i++) {
            umumiBal += data [1].bal;
        }
        return [umumiBal,data.length]
    } else {
        let netice = [0, 0];
        
    }
}

console.log(aspa2(aspa));