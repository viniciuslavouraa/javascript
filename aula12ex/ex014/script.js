function carregar() {
    var msg =  document.querySelector('#msg')
    var img =  document.querySelector('#img')
    var data = new Date()
    var hora = data.getHours()
    var minuto = new Date()
    var min = minuto.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}<br> `
    if (hora >= 0 && hora < 12) {
        msg.innerHTML += 'tenha um bom dia !'
        img.src= 'images/manha-p.jpg'
        document.body.style.background = '#ffe683'
    } else if(hora >= 12 && hora <= 18) {
        msg.innerHTML += `tenha uma boa tarde !`
        img.src= 'images/tarde-p.jpg'
        document.body.style.background = '#c07029'
    }else {
        msg.innerHTML += `tenha um boa noite!`
        img.src= 'images/noite-p.jpg'
        document.body.style.background = '#674a60'
    }
}