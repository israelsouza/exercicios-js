const n1 = document.querySelector('input#num1')
const n2 = document.querySelector('input#num2')
const res = document.querySelector('div#res')

function soma(){
    if(n1.value == '' || n2.value == ''){
        alert('Informe os dois valores')
    } else{
        res.innerHTML = `${Number(n1.value)+Number(n2.value)}`
    }
}
function subtracao(){
    if(n1.value == '' || n2.value == ''){
        alert('Informe os dois valores')
    } else{
        res.innerHTML = `${Number(n1.value)-Number(n2.value)}`
    }
}
function divisao(){
    if(n1.value == '' || n2.value == ''|| n1.value == 0 || n2.value == 0){
        alert('Informe os dois valores maiores que 1')
    } else{
        res.innerHTML = `${Number(n1.value)/Number(n2.value)}`
    }
}
function multiplicacao(){
    if(n1.value == '' || n2.value == ''){
        alert('Informe os dois valores')
    } else{
        res.innerHTML = `${Number(n1.value)*Number(n2.value)}`
    }
}