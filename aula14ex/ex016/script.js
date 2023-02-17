var btn = document.querySelector('#btn');
btn.addEventListener('click', contar);

function contar() {
    var tinicio = document.querySelector('#inicio');
    var tfim = document.querySelector('#fim');
    var tpasso = document.querySelector('#passo');
    var res = document.querySelector('#res');
    var inicio = Number(tinicio.value);
    var fim = Number(tfim.value);
    var passo = Number(tpasso.value);

    if (inicio == 0) {
        inicio = 1;
        res.innerHTML = `0 não é um valor válido, irei considerar inicio como 1.<br>`;
    }

    if (passo == 0) {
        passo = 1;
        res.innerHTML = `0 não é um valor válido, irei considerar o passo como 1.<br>`;
    }

    res.innerHTML += gerarSequencia(inicio, fim, passo);
}

function gerarSequencia(inicio, fim, passo) {
    var resultado = '';

    if (inicio <= fim) {
        for (let i = inicio; i <= fim; i += passo) {
            resultado += `➜ ${i}`;
        }
    } else {
        for (let i = inicio; i >= fim; i -= passo) {
            resultado += `➜ ${i}`;
        }
    }

    return resultado;
}



/*var btn = document.querySelector ('#btn')
btn.addEventListener ('click',contar)

function contar () {
    var tinicio = document.querySelector ('#inicio')
    var tfim = document.querySelector ('#fim')
    var tpasso = document.querySelector ('#passo')
    var res = document.querySelector ('#res')
    var inicio = Number(tinicio.value)
    var fim = Number(tfim.value)
    var passo = Number(tpasso.value)
    if (inicio == 0 ) {
        res.innerHTML = `${inicio} não é um valor válido irei considerar inicio como 1. <br>`
        if (inicio <= fim) {
            for (inicio = 1 ; inicio <= fim ; inicio += passo) {
                res.innerHTML += `➜ ${inicio}`
             }
        } else {
            res.innerHTML = ``
            for (inicio = 0 ; inicio <= fim ; inicio -= passo) {
                res.innerHTML += `➜ ${inicio}`
             }
        }
    }else if (passo == 0) {
        res.innerHTML = `${passo} não é um valor válido irei considerar o passo como 1.<br>`
        passo = 1
        for (inicio ; inicio <= fim ; inicio += passo) {
            res.innerHTML += `➜ ${inicio}`
         }
    }
     if (inicio <= fim) {
        for (inicio ; inicio <= fim ; inicio += passo) {
        res.innerHTML += `➜ ${inicio}`
     }
    } else {
        for (inicio ; inicio > fim ; inicio -= passo) {
            res.innerHTML += `➜ ${inicio}`
        } 
    
    } 

} */
