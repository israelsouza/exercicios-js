gerarAsterisco(3)

function gerarAsterisco(linhas) {
//  FORMA 01
    
    var padrao = ''
    for (var c = 0; c < linhas ; c++) {
        padrao += '*'
        console.log(padrao)        
    }

//  FORMA 02    

    for(let linha = 1; linha <= linhas; linha++){
        let padrao = ''
        for (let i = 0; i < linha; i++) {
            padrao += '*'       
        }
        console.log(padrao)
    }
}