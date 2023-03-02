let btn = document.querySelector('#btn')
btn.addEventListener('click', adicionar)
let num = document.querySelector('#numero')
let lista = document.querySelector('#lista')
let erro = document.querySelector('#erro')
let res = document.querySelector('#res')
let valores = []

function isnumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}

function inlist(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

function adicionar() {
    if(isnumber(num.value) && !inlist(num.value, valores)) {
        res.innerHTML = ''
        erro.innerHTML = ''
        valores.push(Number(num.value))
        let opt = document.createElement('option')
        opt.text = `Valor ${num.value} adicionado`
        lista.appendChild(opt)
    } else {
        res.innerHTML = ''
        erro.innerHTML = 'Valor invalido ou já encontrado na lista'
    }
    num.value = ''
    num.focus()
}

let btn_f = document.querySelector('#btn-f')
btn_f.addEventListener('click', finalizar)

function finalizar() {
    if(valores.length == 0) {
        erro.innerHTML = 'Adicione valores antes de finalizar'
    } else {
        let total = valores.length
        let maior = Math.max.apply(null, valores)
        let menor = Math.min.apply(null, valores)
        let soma = 0
        for(let pos in valores) {
            soma += valores[pos]
        }
        let media = soma / total
        res.innerHTML = `<p>Ao todo, temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}</p>`
    }
}