// 3 requisitos

// verificar se a peça possui mas de 100g
//     Sim: Pode cadastrar
//     Não: Não pode cadastrar

// verificar numero de peças cadastradas
//     Menos de 10: Pode cadastrar
//     10 ou mais peças: Não pode cadastrar

// Verificar o comprimento do nome da peça
//     Menos de 3 caracteres: Não podemos cadastrar
//     3 ou mias caracteres: Podemos cadastrar

let pesoPeca = 100
if(pesoPeca > 100) {
    console.log("Peso maior que 100g, cadastrar a peça.")
} else {
    console.log("Peso insuficiente, não é possível cadastrar")
}

let numeroPecas;

numeroPecas = 10;
// Number


if(numeroPecas < 10) {
    console.log("Ainda há espaço na caixa, podemos cadastrar a peça.")
} else {
    console.log("Não há espaço disponível na caixa")
}

let nomePeca = "Di"

console.log("O comprimento do nome da peça é:", nomePeca.length)

if(nomePeca.length < 3) {
    console.warn("Nome de peça muito curto, não é possível cadastrar")
} else {
    console.log("Nome de peça adequado, podemos cadastrar")
}
