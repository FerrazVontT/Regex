const digitos = /\d+/;

console.log(digitos.exec("Testando sem numero"));
console.log(digitos.exec("Testando 100 numero"));

// mostram a string correspondente (100), o índice de onde a correspondência foi encontrada e a string original.

const frase = "O número 100 está aqui".match(/\d+/);
const frase2 = "O número cem não está aqui".match(/\d+/);

console.log(frase);
console.log(frase2);
