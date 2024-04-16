const veiculo1 = window.prompt("Nome veiculo 1:");
const veiculo1Velocidade = parseInt(window.prompt("Velocidade Veiculo 1:"));

const veiculo2 = window.prompt("Nome veiculo 2:");
const veiculo2Velocidade = parseInt(window.prompt("Velocidade Veiculo 2: "));

if(veiculo1Velocidade > veiculo2Velocidade) {
    alert(veiculo1 + " é mais veloz!")
} else if (veiculo1Velocidade == veiculo2Velocidade) {
    alert("Empate")
} else {
    alert(veiculo2 + " é mais veloz!")
}
