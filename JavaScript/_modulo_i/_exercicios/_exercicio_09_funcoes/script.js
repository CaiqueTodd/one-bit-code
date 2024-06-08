let opção = "";

function areaTriangulo(base, altura) {
    return areaRetangulo(base, altura) / 2;
}


function areaRetangulo(base, altura) {
    return (base * altura)
}



do {
    opção = prompt(`Calculadora Geométrica\n\n--- Escolha uma opção ---\n\n1. Área do triangulo\n2. Área do retângulo\n3. Área do quadrado\n4. Área do trapézio\n5. Área do círculo\n\n6. Sair`);

    switch (opção) {
        case "1":
            baseTriangulo = prompt(`Digite a base do triângulo:`);
            alturaTriangulo = prompt(`Digite a altura do triângulo:`)
            alert(`Área do triângulo: ${areaTriangulo(baseTriangulo, alturaTriangulo)}`);
            break;

        case "2":
            baseRetangulo = prompt(`Digite a base do retângulo:`);
            alturaRetangulo = prompt(`Digite a altura do retângulo:`)
            alert(`Área do retângulo: ${areaRetangulo(baseRetangulo, alturaRetangulo)}`)
            break;
        case "3":
            break;
        case "4":
            break;
        case "5":
            break;
    }

} while (opção !== "6");