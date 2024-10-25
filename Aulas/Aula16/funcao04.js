function fatorial (n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
let n = 5
console.log (`O fatorial de ${n} e ${fatorial(n)}`)