var btn = document.querySelector ('#btn')
btn.addEventListener ('click', gerar)

function gerar () {
    var num = document.querySelector ('#numero')
    var res = document.querySelector ('#res')
    for (tabuada = 0 ; tabuada <=10 ; tabuada++){
        var mult = num.value *tabuada
        res.innerHTML += `${num.value} x ${tabuada} = ${mult} <br>`
    }

    if (num.value == '') {
        res.innerHTML = 'Digite um valor válido '
    }
}
