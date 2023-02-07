

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.querySelector ('#res')
    var nasc = document.querySelector ('#nascimento')
    var nasc = Number(nasc.value)
    var img = document.createElement('img')
    img.setAttribute ('id', 'imagem')

    if (nasc <= 1000 || nasc > ano) {
        res.innerHTML = `Digite um ano válido, ${nasc} não é um ano válido` 
    }
    else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - nasc
        var genero = ''
        var image = document.querySelector ('#image')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 1 && idade <=10) {
                //criança
                img.setAttribute ('src', 'images/criança.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute ('src', 'images/menino-p.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute ('src', 'images/adulto-p.jpg')
            }else {
                //idoso
                img.setAttribute ('src', 'images/idoso-p.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 1 && idade <=10) {
                //criança
                img.setAttribute ('src', 'images/criança-f.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute ('src', 'images/menina-p.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute ('src', 'images/adulta-p.jpg')
            }else {
                //idoso
                img.setAttribute ('src', 'images/idosa-p.jpg')
            }
        }
        res.innerHTML = `Você tem ${idade} anos e é ${genero}`
        res.appendChild(img)
    }
}