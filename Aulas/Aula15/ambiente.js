let a = [2,4,5,9]
a [4] = 7 //adicionar o elemento na posicao 4
a.push(1) //adicionar o elemento na ultima posicao
a.sort() //colocar em ordem crescente

console.log (`nosso vetor é o ${a}`)
console.log(`O Vetor tem ${a.length} elementos`) //length = numero de elementos
console.log (`O primeiro valor do vetor é ${a[0]}`) //seleciona o elemento na posicao 0

let pos = (a.indexOf(0))// busca em qual posicao esta o valor 5
if(pos == -1){
    console.log(`O valor nao foi encontrado`)
}//quando nao existe elemento na variavel
else{

    console.log(`O valor 5 esta na posicao , ${pos}`)// mostra na tela qual a posicao do valor 5
}