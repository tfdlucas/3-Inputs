import entradaDados from 'readline-sync';

console.log("Calculadora de soma entre X e Y:\n");

let x = entradaDados.question("Informe o valor de X: ");
let y = entradaDados.question("Informe o valor de Y: ");
let soma = Number(x) + Number(y);

console.log(x + " + " + y + " = " + soma);