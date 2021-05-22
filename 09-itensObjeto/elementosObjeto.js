const endereco = {
    rua: 'Maria Antonia',
    numero: NaN,
    cidade: 'Arujá',
    CEP:'08933-000',
    estado: 'SP',
    país: 'Brasil',
    continente:undefined,
    localização: null,
}

exibirEndereco(endereco);

function exibirEndereco(obj) {
    for (i in obj) {
        console.log(i,obj[i])        
    }
}