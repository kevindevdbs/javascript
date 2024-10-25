let amigo = {
    nome: "João",
    sexo: "M",
    peso: 85.4,
    altura: 1.80,
    engordar(p) {
        this.peso += p
        console.log ('Engordou')
    }
}
amigo.engordar(1)
console.log (`${amigo.nome} pesa ${amigo.peso}Kg`)
