function verificar(){
    var hoje = new Date
    var data = hoje.getFullYear()
    var ano = document.getElementById('nasc')
    var res = document.getElementById('res')
    var sex = document.getElementsByName('radSex')

    if (ano.value == 0 || ano.value > data ) {
        alert('ERRO: Verifique os dados informados')
    } else {
        var idade = data - Number(ano.value)
        var gen = ''
        var img = document.createElement('img')

        if (sex[0].checked) {
            //  MASCULINO
            gen = 'Homem'
            if (idade < 12) {
                // criança
                img.setAttribute('src','imgs/garoto.png')
            } else if (idade < 20) {
                // jovem
                img.setAttribute('src','imgs/jovemh.png')
            } else if (idade < 59) {
                // adulto
                img.setAttribute('src','imgs/adulto.png')
            } else {
                // idoso
                img.setAttribute('src','imgs/idoso.png')
            }
        }

        if (sex[1].checked) {
            // FEMININO
            gen = 'Mulher'
            if (idade < 12) {
                // criança
                img.setAttribute('src','imgs/garota.png')
            } else if (idade < 20) {
                // jovem
                img.setAttribute('src','imgs/jovemm.png')
            } else if (idade < 59) {
                // adulto
                img.setAttribute('src','imgs/adulta.png')
            } else {
                // idoso
                img.setAttribute('src','imgs/idosa.png')
            }
        }

        img.style.marginTop = '10px'
        res.style.marginTop = '10px'
        res.innerHTML = `Detectamos um ${gen} com ${idade} anos de idade`
        res.appendChild(img)
    }
    window.setTimeout(2000)
}