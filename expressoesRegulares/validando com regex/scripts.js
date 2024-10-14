const cep = /\d{5}-\d{3}/;
console.log("Cep:")
console.log(cep.test("81302-123"));
console.log(cep.test("812-123"));
console.log(cep.test("aaaaa-aaa"));
console.log(cep.test("aa1aa-aaa"));

const email = /\w+\@\w+\.com|.com.br/;

console.log("\nEmail:")
console.log(email.test("shirog@gmail.com"));
console.log(email.test("shirog@hotmail.com"));
console.log(email.test("shiroggmail@.com"));
console.log(email.test("shirog1@gmail.com"));

const site = /(www\.)?\w+\.com|.com.br/;

console.log("\nSite:")
console.log(site.test("www.sitedoshirog.com"));
console.log(site.test("sitedoshirog.com"));
console.log(site.test(".com"));
console.log(site.test("site.br"));
console.log(site.test("shirog.com"));

const nascimento = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19[2-9][0-9]|20[01][0-9]|202[0-4])$/;

console.log("\nData Nascimento:")
console.log(nascimento.test("13/01/2004"));
console.log(nascimento.test("1/1/2004"));
console.log(nascimento.test("13/01/1900"));
console.log(nascimento.test("13/16/2004"));
console.log(nascimento.test("13/01/24"));
console.log(nascimento.test("33/01/2004"));
console.log(nascimento.test("13/01/ 2004"));
console.log(nascimento.test("13-01-2004"));
console.log(nascimento.test("13/09/2004"));