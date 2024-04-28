const nomeTurista = prompt("Olá, turista!\n Digite seu nome:");
let nomeCidades = "";
let contagemCidades = 0;

let conheceuCidade = prompt("Olá, " + nomeTurista + "!\n Já conheceu alguma cidade ? (Sim/Não)");

while (conheceuCidade === "Sim") {
    let cidade = prompt("Qual é o nome da cidade visitada?");
    nomeCidades += " - " + cidade + "\n"
    contagemCidades++
    conheceuCidade = prompt("Você visitou alguma outra cidade? (Sim/Não)");
}

alert(
    "Turista: " + nomeTurista +
    "\nQuantidade de cidades visitadas: " + contagemCidades +
    "\nCidades visitadas:\n" + nomeCidades);