var btn = document.querySelector ('#btn')
btn.addEventListener ('click', contar)

function contar () {
    let tinicio = document.querySelector ('#inicio')
    let tfim = document.querySelector ('#fim')
    let tpasso = document.querySelector ('#passo')
    let res = document.querySelector ('#res')

    if (tinicio.value.length == 0 || tfim.value.length == 0 || tpasso.value.length == 0) {
        res.innerHTML = '[ERRO] Faltam dados !!'
    } else {
        var inicio = Number(tinicio.value)
        var fim = Number(tfim.value)
        var passo = Number(tpasso.value)
        res.innerHTML =  `Contando: <br>`

        if (passo == 0) {
            passo = 1
        }

        if (inicio <= fim) {
            // contagem crescente
            for (inicio ; inicio <= fim ; inicio += passo) {
            res.innerHTML += ` ${inicio} \u{1F449} `
            } 
        } else {
            // contagem decrescente
            for (inicio ; inicio >= fim ; inicio -= passo) {
            res.innerHTML += ` ${inicio} \u{1F449} `
        }
        }
    }
}
