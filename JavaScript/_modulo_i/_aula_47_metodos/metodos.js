let pessoa = {
    nome: "Caique",
    idade: 24,
    dizerOla(){
        console.log("Hello, World! meu nome é: " + this.nome)
    }
}

console.log(pessoa)
pessoa.dizerOla();