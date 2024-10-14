const notAB = /[^ab]/; // ^ --> negação... não aceita nenhum valor com a e/ou b
//se algo não bater com o que ele está verificando retorna true
console.log(notAB.test("a"));
console.log(notAB.test("ab"));
console.log(notAB.test("1ekpo"));
console.log(notAB.test(" "));

const notAaZ = /[^a-z]/;

console.log("\n A - Z \n")
console.log(notAaZ.test("a"));
console.log(notAaZ.test("ab"));
console.log(notAaZ.test("1ekpo")); // como ele não verifica números, retorna true
console.log(notAaZ.test(" "));// como não verifica caracteres especiasis... retorna true.

const umOuMaisDigitos = /\d+/;

console.log("\n Plus \n ");
console.log(umOuMaisDigitos.test("Asddaspfksaop"));
console.log(umOuMaisDigitos.test(" "));
console.log(umOuMaisDigitos.test("1234567"));

const padrao = /jorge?/; // o "e" é opcional

console.log("\n Jorge \n ");
console.log(padrao.test("jorge"));
console.log(padrao.test("jorg"));

const padrao2 = /\d+\w?/; // se a condição do d+ for atingida é true, já que o w ficou como opcional

console.log("\n d+ w? \n ");
console.log(padrao2.test("123"));
console.log(padrao2.test("123a"));
console.log(padrao2.test("123 "));