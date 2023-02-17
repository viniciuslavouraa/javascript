var btn = document.querySelector ('#btn')
btn.addEventListener ('click', gerar)

function gerar () {
    var num = document.querySelector ('#numero')
    var tabuada = 0
    var res = document.querySelector ('#res')
    for (tabuada ; tabuada <=10 ; tabuada++){
        var mult = num.value *tabuada
        res.innerHTML += `${num.value} x ${tabuada} = ${mult} <br>`
    }
}
