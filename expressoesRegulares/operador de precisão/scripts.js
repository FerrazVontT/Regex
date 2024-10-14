let telefone = /\d{4,5}-\d{4}/; // limitamos por {4,5} que só podem existir 4 ou 5 números antes do "-"

console.log(telefone.test("99193-2010"));
console.log(telefone.test("9193-2010"));
console.log(telefone.test("993-20"));
console.log(telefone.test("1234-a123"));