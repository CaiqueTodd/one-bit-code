function executar() {
    let opção = "";

    function areaTriangulo(base, altura) {
        return areaRetangulo(base, altura) / 2;
    }

    function areaRetangulo(base, altura) {
        return (base * altura)
    }

    function areaQuadrado(lado) {
        return lado * lado
    }

    function areaTrapezio(baseMaior, baseMenor, altura) {
        return (baseMaior + baseMenor) * altura / 2;
    }

    function areaCirculo(raio) {
        return 3.14 * (raio * raio);
    }

    do {
        opção = prompt(`Calculadora Geométrica\n\n--- Escolha uma opção ---\n\n1. Área do triangulo\n2. Área do retângulo\n3. Área do quadrado\n4. Área do trapézio\n5. Área do círculo\n\n6. Sair`);

        switch (opção) {
            case "1":
                baseTriangulo = parseFloat(prompt(`Digite a base do triângulo:`));
                alturaTriangulo = parseFloat(prompt(`Digite a altura do triângulo:`));
                alert(`Área do triângulo: ${areaTriangulo(baseTriangulo, alturaTriangulo)}`);
                break;

            case "2":
                baseRetangulo = parseFloat(prompt(`Digite a base do retângulo:`));
                alturaRetangulo = parseFloat(prompt(`Digite a altura do retângulo:`));
                alert(`Área do retângulo: ${areaRetangulo(baseRetangulo, alturaRetangulo)}`);
                break;

            case "3":
                ladoQuadrado = parseFloat(prompt(`Digite o lado do quadrado:`));
                alert(`Área do quadrado: ${areaQuadrado(ladoQuadrado)}`);
                break;

            case "4":
                baseMaiorTrapezio = parseFloat(prompt(`Digite o maior lado do trapézio:`));
                baseMenorTrapezio = parseFloat(prompt(`Digite o menor lado do trapézio:`));
                alturaTrapezio = parseFloat(prompt(`Digite a altura do trapézio:`));
                alert(`Área do trapézio: ${areaTrapezio(baseMaiorTrapezio, baseMenorTrapezio, alturaTrapezio)}`);
                break;

            case "5":
                raioCirculo = parseFloat(prompt(`Digite o raio do círculo:`));
                alert(`Área do círculo: ${areaCirculo(raioCirculo)}`);
                break;
        }

    } while (opção !== "6");
}

executar();