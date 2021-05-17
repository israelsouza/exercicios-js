function calcular(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('final')
    var pular = document.getElementById('pular')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || pular.value.length == 0) {
        alert('ERRO: Informe todos os dados necessarios')
    } else {
        res.innerHTML += `Contando...`
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(pular.value)

        if (p < 0) {
            alert('ERRO: Salto invalido, considerando salto como 1...')
            p = 1
        }

        if (i < f) {
            res.innerHTML = `<br><br>`
            for (var c=i; c<=f ; c+=p) {
                res.innerHTML += `${c} \u{1F449} `
            }
    
        } else if (i > f) {
            res.innerHTML = `<br><br>`
            for (var c=i; c>=f; c-= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
    }
    res.innerHTML += ` \u{1F3C1}`
}