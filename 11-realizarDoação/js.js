let oValor = document.querySelector('div#resultado2')
oValor.style.display = 'none'

function enviar() {
    let D = Number(document.querySelector('input#numero').value)
    let res = document.querySelector('div#res')
    res.innerHTML = ''

    switch (D) {
        case 1: res.innerHTML = 'Obrigado pela doação no valor de R$10,00'
        break;

        case 2: res.innerHTML = 'Obrigado pela doação no valor de R$20,00'
        break;

        case 3: res.innerHTML = 'Obrigado pela doação no valor de R$30,00'
        break;

        case 4: res.innerHTML = 'Obrigado pela doação no valor de R$50,00'
        break;

        case 5: res.innerHTML = 'Obrigado pela doação no valor de R$100,00'
        break;

        case 6:
            oValor.style.display = 'block'
        break;

        default:
            alert('ERRO: valor invalido, digite um número entre 1 e 6')
            window.location.reload()
        break;
    }
}

function valoradd() {
    var nDigitado = Number(document.querySelector('input#opc6').value)
    var resultado = document.querySelector('p#resultado6')

    if (nDigitado >= 1)
     {  alert(`Obrigado pela doação no valor de R$${nDigitado}`)
        window.location.reload()   }    
    else
        {alert('ERRO, digite um numero válido')
        resultado.innerHTML = ''}   
}