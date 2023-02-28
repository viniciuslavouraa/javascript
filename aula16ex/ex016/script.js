
let btn = document.querySelector('#btn')
let valores = document.querySelector('#valores')
let erro = document.querySelector('#erro')
btn.addEventListener('click',adicionar)
let nums = [];
function adicionar() {
    let txnum = document.querySelector('#numero')
    let num = Number(txnum.value)
    if(num == '' || num == 0 || num > 100) {
        res.innerHTML = ''
        erro.innerHTML = 'Digite um valor válido entre 1 e 100'
    }else{
        valores.style.display = 'block'
        erro.innerHTML = ''
        res.innerHTML = ''
        var opt = document.createElement('option')
        opt.text = `Valor ${num} adicionado`
        nums.push(num)
        valores.appendChild(opt) 
    }
}

let btn_f = document.querySelector('#btn-f')
let txnum = document.querySelector('#numero')
let num = Number(txnum.value)
let res = document.querySelector('#res')
btn_f.addEventListener('click',calcular)

function calcular() {
    let soma = 0
    for(let i = 0 ; i < nums.length ; i++) { //calcula os valores da array
        soma += nums[i]
    }
    let maior = Math.max.apply(null,nums) // retorna o maior valor da array
    let menor = Math.min.apply(null, nums) // retorna o menor valor da array
    let media = soma / nums.length
    erro.innerHTML = ''
    res.innerHTML = `<p>Ao todo temos ${nums.length} números cadastrados<p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}<p> `
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(0)}</p>`
}

/* adicionar valores no select

var opt = document.createElement('option')
opt.text = 2
valores.appendChild(opt) 
*/
