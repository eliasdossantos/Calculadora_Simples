
// Função para somar dois números:
function somar(numero1, numero2) {
    return numero1 + numero2;
}

// Função para subtrair dois números:
function subtrair(numero1, numero2) {
    return numero1 - numero2;
}

// Função para multiplicar dois números:
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

// Função para dividir dois números:
function dividir(numero1, numero2) {
    return numero1 / numero2;
}

// Obter os números do usuário:
const numero1 = parseInt(prompt('Digite o primeiro número: '));
const numero2 = parseInt(prompt('Digite o segundo número: '));
const operacao = prompt('Escolha a operação desejada (+, -, *, /): ');

let resultado;

// Verificar a operação escolhida e realizar o cálculo:
if (operacao === '+') {
    resultado = somar(numero1, numero2);
} else if (operacao === '-') {
    resultado = subtrair(numero1, numero2);
} else if (operacao === '*') {
    resultado = multiplicar(numero1, numero2);
} else if (operacao === '/') {
    resultado = dividir(numero1, numero2);
} else {
    resultado = 'Operação inválida:';
}

// Mostrar o resultado da operação:
console.log(`=== O resultado da operação ===`);
console.log(`${numero1} ${operacao} ${numero2} = ${resultado}`);
