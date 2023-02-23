var btn = document.querySelector ('#btn')
btn.addEventListener ('click', tabuada)
res.innerHTML = 'Digite um valor'
function tabuada() {
    let num = document.querySelector ('#numero')
    let tabuada = document.querySelector ('#seltab')
    let res = document.querySelector ('#res')
    if (num.value.length == 0) {
        res.innerHTML = ''
        res.innerHTML = '[ERRO]Digite um valor válido'
    } else {
        tabuada.style.display = 'block'
        res.innerHTML = ''
        tabuada.innerHTML = ''
        let tab = 1
        for (tab ; tab <= 10 ; tab++) {
            mult = num.value * tab
            let item = document.createElement ('option')
            item.text = `${num.value} x ${tab} = ${mult}`
            item.value = `tabuada${tab}`//somente util para PHP ou linguagens back-end
            tabuada.appendChild(item)
        }
    }
}
