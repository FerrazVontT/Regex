const dia = /\d\d/;

console.log(dia.test("2024") && "2024".length == 2);
console.log(dia.test("abecede"));
console.log(dia.test("13") && "13".length == 2);
console.log(dia.test("asd1"));

const peloMenos3 = /\w\w\w/;

console.log("W");
console.log(peloMenos3.test("asd"));
console.log(peloMenos3.test("fghasdf"));
console.log(peloMenos3.test("as"));