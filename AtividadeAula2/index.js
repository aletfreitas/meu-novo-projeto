const prompt = require('prompt-sync')();

const a = Number(prompt("Digite o valor do salário:"))
const b = Number(prompt("Digite a porcentagem de reajuste do salário:"))

const resultado = (b/100)*a + a

console.log(resultado)

