function fatorial(n) {
    let fat = 1
    for(let c = n ; c > 1 ; c-- ) {
        fat *= c
        console.log(`${n} x ${c} = ${fat}`)
    }
    return fat
}
console.log(fatorial(5))