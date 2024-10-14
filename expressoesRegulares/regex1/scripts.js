const reg1 = new  RegExp("sapato");

console.log(reg1.test("ssapatosasdask"));
console.log(reg1.test("sapsstoa"));

const reg2 = /bola/;

let text = "Tem bola na cesta";

console.log(reg2.test("Não tem"));
console.log(reg2.test(text));

console.log(/quadrado/.test("Onde tem um quadrado"));
console.log(/quadrado/.test("12-odsafoquadradodasdpsakmdsa"));

