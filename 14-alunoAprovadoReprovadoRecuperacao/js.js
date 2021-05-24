function verificar() {
    nome = document.querySelector('input#nome').value
    n1 = Number(document.querySelector('input#n01').value)
    n2 = Number(document.querySelector('input#n02').value)
    res = document.querySelector('div#res')
    media = (n1 + n2) / 2

    if (nome.length == 0 || nome == '' || nome >= 0 || nome < 0) {
        alert('digite um nome para prosseguir')
        return false
    }

    if (n1 > 10 || n1 < 0 || n2 > 10 || n2 < 0 || n1 == '' || n2 == '' ) {
        alert('Valor inserido inválido, digite duas nota entre 0 e 10')
    } else {
        res.innerHTML = ''

        if (media < 5) { res.innerHTML = `Aluno ${nome} reprovado, com media de ${media}.` }
        else if (media <= 7) { res.innerHTML = `Aluno ${nome} em recuperação, com media de ${media}.`}
        else { res.innerHTML = `Aluno ${nome} aprovado, com media de ${media}.` }
    }
}