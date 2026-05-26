// Função que retorna função como parâmetro

//        nome da função ( parâmetros )
function executarOperacao(a, b, operacao){
    return operacao(a, b);
}

function multiplicar(a, b){
    return a * b;
}

let resultado = executarOperacao(4, 5, multiplicar);
console.log("Multiplicação: ", resultado);
