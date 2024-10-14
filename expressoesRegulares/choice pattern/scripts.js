const reg = /\w+: (Vittor|Shirog|Vinicin)/;

console.log(reg.test("Nome: Shirog"));
console.log(reg.test("Nome: Vittorr"));
console.log(reg.test(": Vinicin"));
console.log(reg.test("Nome: charles"));