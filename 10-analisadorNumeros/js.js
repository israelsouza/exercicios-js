let nd = document.querySelector('input#numero')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function verificador() {
    if (nd.value >= 1 && nd.value <= 100 ) {
        if (nd.value.length > 3) {return false}
        for (posi in valores) {
            if (nd.value == valores[posi]) {
                alert('Numero já encontrado na lista')
                return false
            }
        }
    } else { return alert('Valor inválido, tente novamente') }
    if (true){
        valores.push(nd.value)
        var opt = document.createElement('option')
        lista.appendChild(opt)
        opt.innerHTML = `Valor ${nd.value} salvo`
        res.innerHTML = ''
        nd.value = ''
        nd.focus()
    }
}

function finalizar(){
    if (valores.length === 0) {
        return alert('Digite ao menos um valor')
    } else {
        let soma = 0 
        let totNum = 0
        let maiorN = valores[0]
        let menorN = valores[0]
        for (posi in valores) {
            soma = soma + Number(valores[posi])
            if (valores[posi] > maiorN) maiorN = valores[posi] 
            if (valores[posi] < menorN) menorN = valores[posi] 
            totNum++   }
        let media = soma / totNum
        res.innerHTML = ''
        res.innerHTML += `<p>O total de números cadastrados foi ${totNum}</p>`
        res.innerHTML += `<p>O maior número cadastrado foi ${maiorN}</p>`
        res.innerHTML += `<p>O menor número cadastrado foi ${menorN}</p>`
        res.innerHTML += `<p>A soma dos numeros é ${soma}</p>`
        res.innerHTML += `<p>A media dos numeros é ${media}</p>`
    }
}    