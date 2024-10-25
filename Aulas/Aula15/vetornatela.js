let valores = [8, 1, 7, 0]

for (let pos = 0; pos < valores.length; pos++) { 
    console.log(valores[pos])
} //Enquanto pos não chegar no final do vetor adicione +1 posicão

for (let pos in valores) {
 console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
 
} //Para cada pos dentro de valores vou mostrar a pos
