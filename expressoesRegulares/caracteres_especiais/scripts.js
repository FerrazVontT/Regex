const pontoRegex = /./; // aceita tudo

console.log(".");
console.log(pontoRegex.test("Shirog"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("1234"));
console.log(pontoRegex.test("dasopdk1234"));

const dzinho = /\d/; // aceita números

console.log("d");
console.log(dzinho.test("Shirog"));
console.log(dzinho.test(" "));
console.log(dzinho.test("2134"));
console.log(dzinho.test("Shirog134"));
console.log(dzinho.test(1234));

const DZAO = /\D/; // aceita caracteres que não são números

console.log("D");
console.log(DZAO.test("Shirog"));
console.log(DZAO.test(" "));
console.log(DZAO.test("2134"));
console.log(DZAO.test("Shirog134"));
console.log(DZAO.test(1234));

const Szada = /\s/; // aceita espaços, quebras de linha e tabs

console.log("S");
console.log(Szada.test("Shirog"));
console.log(Szada.test(" "));
console.log(Szada.test("2134"));
console.log(Szada.test("Shirog134"));
console.log(Szada.test(1234));

const Wzada = /\w/; // aceita caracteres alfanuméricos

console.log("W");
console.log(Wzada.test("Shirog"));
console.log(Wzada.test(" "));
console.log(Wzada.test("2134"));
console.log(Wzada.test("Shirog134"));
console.log(Wzada.test(1234));
