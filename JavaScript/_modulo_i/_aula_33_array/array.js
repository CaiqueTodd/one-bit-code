const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"];
console.log(arr);

// --------------- Adicionar Elementos ---------------
// push
let tamanho = arr.push("Baromir");
console.log(arr);
console.log(tamanho);

// unshift
tamanho = arr.unshift("Teste");
console.log(arr);
console.log(tamanho)

// --------------- Remover Elementos ---------------
// pop
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

// shift
ultimoElemento = arr.shift();
console.log(ultimoElemento);

// --------------- Pesquisar por um Elemento ---------------
// includes
const inclui = arr.includes("Gandalf");
console.log(inclui);

// indexOf
const indice = arr.indexOf("Gandalf");
console.log(indice);

// --------------- Cortar e Concatenar ---------------
// slice
const cortar = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(cortar);
console.log(outros);

// concat
const sociedade = cortar.concat(outros, "Boromir");
console.log(sociedade)

// --------------- Substituição dos Elementos ---------------
// splice
const elementosRemovido = sociedade.splice(indice, 1, "Gandalf, o Cinzento");
console.log(sociedade);
console.log(elementosRemovido);

// --------------- Iterar sobre os Elementos
for(let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento + " Se encontra na posição: " + indice)
}