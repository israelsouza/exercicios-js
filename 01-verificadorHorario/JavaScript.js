function carregar(){
    var date = new Date
    var data = date.getHours()
    var h1 = document.getElementById('txt1')
    var parag = document.getElementById('txt2')
    let img = document.getElementById('img')
    parag.innerHTML = `Agora são ${data} horas`

    if (data < 6) {
        alert('Vá dormir, ainda é de madrugada!')
    } else if (data < 12) {
        // Manha
        h1.innerHTML = 'Bom Dia!'
        img.src = 'imgs/manha.png'
        document.body.style.backgroundColor = '#758d51'
    } else if (data < 18) {
        // Tarde
        h1.innerHTML = 'Boa tarde!'
        img.src = 'imgs/tarde.png'
        document.body.style.backgroundColor = '#4b2613'
    } else {
        // Noite
        h1.innerHTML = 'Bom Noite!'
        img.src = 'imgs/noite.png'
        document.body.style.backgroundColor = '#5b5c5e'
    }
}