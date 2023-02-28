
let btn = document.querySelector('#btn')
let valores = document.querySelector('#valores')
btn.addEventListener('click',adicionar)

function adicionar() {
    let txnum = document.querySelector('#numero')
    let num = Number(txnum.value)
    if(num == '' || num == 0 || num > 100) {
        console.log('Digite um valor válido')
    }

}

/* adicionar valores no select

var opt = document.createElement('option')
opt.text = 2
valores.appendChild(opt) 
*/
