import entradaDados from 'readline-sync';

console.log("Área do triângulo:\n");

let base = entradaDados.question("Informe a base: ");
let altura = entradaDados.question("Informe a altura: ");
let area = (base * altura) / 2;

console.log("\n\nA base infomada é " + base);
console.log("A altura informada é " + altura);
console.log("\n\nA área do triângulo é: " + area);
