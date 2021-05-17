function calcular(){
    var num = document.getElementById('numero')
    var n = Number(num.value)
    var res = document.getElementById('res')

    if ( num.value.length == 0) {
        alert('Informe um numero!!')
    } else {
        res.innerHTML = ''
        for (var c=0 ; c<=10 ; c++) {
            res.innerHTML += ` ${n} x ${c} = ${n*c} <br>`
        }
    }
    res.style.marginTop = '15px'
}