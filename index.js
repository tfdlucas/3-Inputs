import entrdaDados from 'readline-sync';

let nome = entrdaDados.question('Digite seu nome: ');

console.log("Olá " + nome + ", prazer em conhece-lo.");