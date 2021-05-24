function imc(){
    const res = document.querySelector('div#res')
    const peso = document.querySelector('input#peso')
    const alt = document.querySelector('input#alt')
    const imc = peso.value / (alt.value**2)

    if (peso.value <= 0 || alt.value <= 0) {
        alert('Dados não inseridos ou inválidos!!')
        return false
    } else {
        if (imc < 17) {
            res.innerHTML = `Seu IMC é: ${imc.toFixed(2)}.<br> Muito abaixo do peso ideal, cuide melhor de sua saúde!`
        } else if (imc >= 17 && imc < 18.5) {
            res.innerHTML = `Seu IMC é: ${imc.toFixed(2)}.<br> Abaixo do peso ideal.` }
        else if (imc >= 18.5 && imc < 25) {
            res.innerHTML = `Seu IMC é: ${imc.toFixed(2)}.<br> Peso ideal!!` }
        else if (imc >= 25 && imc < 30) {
            res.innerHTML = `Seu IMC é: ${imc.toFixed(2)}.<br> Sobrepeso.`  }
        else if (imc >= 30 && imc < 35) {
            res.innerHTML = `Seu IMC é: ${imc.toFixed(2)}.<br> Obesidade.`  }
        else if (imc >= 35 && imc < 40) {
            res.innerHTML = `Seu IMC é: ${imc.toFixed(2)}.<br> Obesidade severa`  }
        else {
            res.innerHTML = `Seu IMC é: ${imc.toFixed(2)}.<br> Obesidade mórbida, cuide melhor de sua saúde!`  }
    }
}