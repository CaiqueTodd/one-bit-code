function calcularMedia(a, b) {
    const media = (a+b) / 2;
    return media
}

const teste = calcularMedia(5,2);
console.log(teste);

function criarProduto(nome, preco){
    const produto = {
        nome, //nome: nome
        preco, //preço: preco
        estoque: 1
    }
    return produto
}

const notebook = criarProduto("Dell", 1500);

function areaRetangulo(base, altura) {
    const area = base * altura;
    return area;
}

console.log(areaRetangulo(3,5))

function ola(){
    let texto = "....";
    return texto;
    return texto = "Olá, mundo";
    console.log(texto);
}

console.log(ola());

function maioridade(idade){
    if(idade >= 18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}

console.log(maioridade(1))

