const valor = prompt("Digite um valor em metro");
const opcao = prompt("Escolha uma opção de conversão:\n 1) Milímetro (mm)\n 2) Centímetro (cm)\n 3) Decímetro (dm) (dam)\n 4) Decâmetro (dam)\n 5) Hectômetro (hm)\n 6) Quilômetro (km)")

//Calculando
const milimetro = valor * 1000; //Converter para Milímetro
const centimetro = valor * 100; //Converter para Centimetro
const decimetro = valor * 10; //Converter para Decímetro
const decametro = valor / 10; //Converter para Decametro
const hectometro = valor /100; //Converter para Hectometro
const quilometro = valor / 1000; //Converter para Quilometro

switch(opcao) {
    case "1":
        alert(milimetro);
        break;
    case "2":
        alert(centimetro);
        break;
    case "3":
        alert(decimetro);
        break;
    case "4":
        alert(decametro);
        break;
    case "5":
        alert(hectometro);
        break;
    case "6":
        alert(quilometro);
        break;
    default:
        alert("Opção inválida ou não selecionada.");
        break;
}