function verificar() {
    var data = new Date()    
    var fdia = document.getElementById('txtdia')
    var fmes = document.getElementById('txtmes')
    var res = document.getElementById('res')

    if(fdia.value.lenght == 0 || Number(fdia.value) > 31 || Number(fdia.value) < 1 && fmes.value.lenght == 0 || fmes.value > 12 || fmes.value < 1) {
        window.alert('[ERRO] Preencha corretamente os dados!')
    } else {
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    if (fdia.value >= 21 && fmes.value == 3 || fdia.value <= 20 && fmes.value == 4) {
            img.setAttribute('src', 'aries.png')
            textAlign = 'center'
            res.innerHTML = `O signo é Áries!`
        } else if (fdia.value >= 21 && fmes.value == 4 || fdia.value <= 20 && fmes.value == 5) {
            img.setAttribute('src', 'taurus.png')
            textAlign = 'center'
            res.innerHTML = `O signo é Touro!`
        } else if (fdia.value >= 21 && fmes.value == 5 || fdia.value <= 20 && fmes.value == 6) {
            img.setAttribute('src', 'gemini.png')
            textAlign = 'center'
            res.innerHTML = `O signo é Gêmeos!`
        } else if (fdia.value >= 21 && fmes.value == 6 || fdia.value <= 21 && fmes.value == 7) {
            img.setAttribute('src', 'cancer.png')
            textAlign = 'center'
            res.innerHTML = `O signo é Câncer!`
        } else if (fdia.value >= 22 && fmes.value == 7 || fdia.value <= 22 && fmes.value == 8) {
            img.setAttribute('src', 'leo.png')
            textAlign = 'center'
            res.innerHTML = `O signo é Leão!`
        } else if (fdia.value >= 23 && fmes.value == 8 || fdia.value <= 22 && fmes.value == 9) {
            img.setAttribute('src', 'virgo.png')
            textAlign = 'center'
            res.innerHTML = `O signo é Virgem!`
        } else if (fdia.value >= 23 && fmes.value == 9 || fdia.value <= 22 && fmes.value == 10) {
            img.setAttribute('src', 'libra.png')
            textAlign = 'center'
            res.innerHTML = `O signo é Libra!`
        } else if (fdia.value >= 23 && fmes.value == 10 || fdia.value <= 21 && fmes.value == 11) {
            img.setAttribute('src', 'scorpio.png')
            textAlign = 'center'
            res.innerHTML = `O signo é Escorpião!`
        } else if (fdia.value >= 22 && fmes.value == 11 || fdia.value <= 21 && fmes.value == 12) {
            img.setAttribute('src', 'sagittarius.png')
            textAlign = 'center'
            res.innerHTML = `O signo é Sagitário!`
        } else if (fdia.value >= 22 && fmes.value == 12 || fdia.value <= 20 && fmes.value == 1) {
            img.setAttribute('src', 'capricorn.png')
            textAlign = 'center'
            res.innerHTML = `O signo é Capricórnio!`
        } else if (fdia.value >= 21 && fmes.value == 1 || fdia.value <= 19 && fmes.value == 2) {
            img.setAttribute('src', 'aquarius.png')
            textAlign = 'center'
            res.innerHTML = `O signo é Aquário!`
        } else {
            img.setAttribute('src', 'aquarius.png ')
            textAlign = 'center'
            res.innerHTML = `O signo é Peixes!`
        }
        res.style.textAlign = 'center'
        res.appendChild(img)
        style = "border-radius: 50%"
    }    
}