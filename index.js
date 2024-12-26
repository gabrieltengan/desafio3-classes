class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    attack(){
        
        if(this.tipo == "mago"){
            return "magia"
        } else if (this.tipo == "guerreiro"){
            return "espada"
        } else if (this.tipo == "monge"){
            return "artes marciais"
        } else if (this.tipo == "ninja"){
            return "shuriken"
        }

    } 

}


let heroi = new hero("Gandalf", 150, "monge")
let ataque = heroi.attack()

console.log(`O ${heroi.tipo} atacou usando ${ataque}`)


