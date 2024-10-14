const reg1 = /[1234]/; // verifica se tem algum dos numero na string

console.log(reg1.test("Temos o número 1"));
console.log(reg1.test("Temos o número 2"));
console.log(reg1.test("Temos o número 3"));
console.log(reg1.test("Temos o número 4"));
console.log(reg1.test("Temos o número 5"));
console.log(reg1.test("Temos o número 2142345"));
console.log(reg1.test("Temos o número 231279"));

const reg2 = /[0-9]/ // podemos verificar se tem algum número entre 0 e 9 na string

console.log(reg2.test("dsapok2"));
console.log(reg2.test("1233940501000"));
console.log(reg2.test("Testando sem número"));