function enviar() {
    let D = Number(document.querySelector('input#numero').value)
    let res = document.querySelector('div#res')
    var div = document.querySelector('div#opc6')
    res.innerHTML = ''
    div.innerHTML = ''

    switch (D) {
        case 1: res.innerHTML = 'Obrigado pela doação no valor de R$10,00';     break;

        case 2: res.innerHTML = 'Obrigado pela doação no valor de R$20,00';     break;

        case 3: res.innerHTML = 'Obrigado pela doação no valor de R$30,00';     break;

        case 4: res.innerHTML = 'Obrigado pela doação no valor de R$50,00';     break;

        case 5: res.innerHTML = 'Obrigado pela doação no valor de R$100,00';    break;

        case 6:
            // Criar objts => add valor aos objts => anexar objts no HTML => verificação
            // <input> pra valor & pra enviar valor ; <p> pra pergunta & interagir
            var inputSubmit = document.createElement('input')
            var pD = document.createElement('p')
            var inputD = document.createElement('input')
            var pResposta = document.createElement('p')
            
            pD.innerHTML = 'Qual o valor desejado?<br>'
            inputD.setAttribute('type','number')
            inputSubmit.setAttribute('type','submit')

            div.appendChild(pD); div.appendChild(inputD)
            div.appendChild(inputSubmit); div.appendChild(pResposta)
            console.log(inputD.value)

            inputSubmit.onclick = function (){
                inputD.value <= 0?
                alert('ERRO, digite um número valido') + window.location.reload() :
                pResposta.innerHTML = `Obrigado pela doação no valor de R$${inputD.value}` ;
            }
        break;
        default:
            alert('ERRO: valor invalido, digite um número entre 1 e 6')
            window.location.reload()
        break;
    }
}