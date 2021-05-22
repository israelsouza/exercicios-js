// Objeto

const exempObj = {
    amigo: 'Joao',
    idade: 23,
    estado: 'SP',
    numeroDaCasa: 29,
}

exibirPropriedades(exempObj)

function exibirPropriedades(obj) {
    for (prop in obj) {
        if( typeof obj[prop] === 'string') {
            console.log(prop,obj[prop])
        }
    }
}

// Array

const exempArray = [ 'Joao', 23, 'SP', 29 ]

const funcao = exempArray.filter(function (array) {
    for (index in array) {
        if (typeof array[index] == 'string' ) {
            console.log(array)
        }        
    }
})
