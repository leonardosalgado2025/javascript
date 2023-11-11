function Amigo (nome, sexo, peso) {
    this.nome = nome
    this.sexo = sexo
    this.peso = peso
    this.engordar = function (p=0) {
        console.log('Engordou')
        this.peso += p
    }
}

let amg1 = new Amigo('João', 'M', 45)
let amg2 = new Amigo('Andreia', 'F', 50)
let amg3 = new Amigo('André', 'M', 60)

console.log(`${amg1.nome} pesa: ${amg1.peso}kg e ${amg2.nome} pesa ${amg2.peso}Kg`)

amg3.engordar(10)

console.log(`O ${amg3.nome} pesa: ${amg3.peso}`)


