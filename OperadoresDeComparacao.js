// Exercícios

// Crie e compare variáveis: É menor, maior ou igual? 🤔
// Imagine que você precisa comprar duas peças de roupa, entretanto, após o pagamento de suas contas, você tem somente R$ 60,00 reais para gastar.

// Faça um algoritmo para verificar se as duas peças de que precisa, caberão no seu orçamento.

// a. Crie duas variáveis roupa1 e roupa2:

// Na variável chamada de roupa1, você vai adicionar o valor 35;
// Na variável chamada de roupa2, você vai adicionar o valor 20;
// b. Crie a variável compras:

// Atribua a ela o valor da soma entre roupa1 e roupa2;
// c. Crie uma variável chamada orcamento:

// Verifique se compras é menor ou igual a 60 e atribua o retorno a variável orcamento.

let roupa1 = 35;
let roupa2 = 20;

compras = roupa1 + roupa2;

let orcamento = compras <= 60;

console.log(orcamento);

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Comparando as idades 👵
// Nesse exercício você vai desenvolver um programa capaz de verificar duas idades.

// a. Crie as variáveis idadeDaThays e idadeDoDouglas:

// Crie uma variável chamada idadeDaThays e atribua o valor 53;
// Crie uma variável chamada idadeDoDouglas e atribua o valor 49;
// b. Compare as idades, armazenando o resultado das comparações:

// Siga o padrão para o nome das variáveis que armazenarão as comparações comparacaoN, onde N é o número da comparação.

// comparacao1: Compare se idadeDaThays é maior que idadeDoDouglas;
// comparacao2: Compare se idadeDoDouglas é menor que idadeDaThays.

let idadeDaThays = 53;
let idadeDoDouglas = 49;

let comparacao1 = idadeDaThays > idadeDoDouglas;

let comparacao2 = idadeDoDouglas < idadeDaThays;

console.log(comparacao1);
console.log(comparacao2);

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Compare os nomes 🗣
// Verifique as variáveis abaixo e valide as seguintes afirmações utilizando os operadores condicionais:

// let nomePessoa1 = 'Cleyton';
// let nomePessoa2 = 'Sheila';
// let idadePessoa1 = 30;
// let idadePessoa2 = 18;
// a. Crie as variáveis para armazenar as seguintes comparações:

// comparacao1: compare se o nome da pessoa 1 é diferente de Sheila;
// comparacao2: compare se a idade da pessoa 1 é igual a 18;
// comparacao3: compare se o nome da pessoa 2 é igual a Cleyton;
// comparacao4: compare se a idade da pessoa 2 é diferente de 30.
// Siga o padrão para o nome das variáveis que armazenarão as comparações comparacaoN, onde N é o número da comparação.

let nomePessoa1 = 'Cleyton';
let nomePessoa2 = 'Sheila';
let idadePessoa1 = 30;
let idadePessoa2 = 18;

let comparacao1 = nomePessoa1 !== 'Sheilia';
let comparacao2 = idadePessoa1 == 18;
let comparacao3 = nomePessoa2 == 'Cleyton';
let comparacao4 = idadePessoa2 !== 30;

console.log(comparacao1);
console.log(comparacao2);
console.log(comparacao3);
console.log(comparacao4);

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Verifique o estoque 👀
// Neste exercício você precisa desenvolver um programa que verifica e compara a quantidade de itens do estoque de uma loja. Abaixo existem três produtos e suas quantidades já definidos:

//   let sapato = 15;
//   let chinelo = 22;
//   let pantufa = 33;
// a. Crie variáveis para armazenar o valor de cada comparação:

// verificacao1 compare se o valor da variável sapato é maior ou igual a 15;
// verificacao2 compare se o valor da variável chinelo é maior ou igual a 12;
// verificacao3 compare se o valor da variável pantufa é menor ou igual a 18;
// b. Após ter todas as comparações feitas, imprima no console.log cada verificação.

let sapato = 15;
let chinelo = 22;
let pantufa = 33;

let verificacao1 = sapato >= 15;
let verificacao2 = chinelo >= 12;
let verificacao3 = pantufa <= 18;

console.log(verificacao1);
console.log(verificacao2);
console.log(verificacao3);

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Valide as senhas 🕵️
// Neste exercício você vai criar um validador de senhas. Abaixo, existe uma variável que contém a senha para entrar no wi-fi da casa do Juquinha. Juquinha pediu que você criasse um programa que verifique se a senha digitada é estritamente igual a senha escolhida para acessar o wi-fi.

//   let senhaDoWiFi = 159000;

//   let senhaDigitada1 = 169000;
//   let senhaDigitada2 = 159000;
//   let senhaDigitada3 = '159000';
//   let senhaDigitada4 = 159000;
// a. Crie variáveis suficientes para testar cada uma das senhaDigitadaN:

// A senha deve ser estritamente igual a senhaDoWiFi;
// Compare cada uma das senhas e atribua o valor da comparação em uma variável chamada verificacaoN, onde N é o número da comparação;
// Por último, Utilize as variáveis que você criou para adicionar o resultado da comparação, para mostrar no console se a senha é válida ou não.

let senhaDoWiFi = 159000;

let senhaDigitada1 = 169000;
let senhaDigitada2 = 159000;
let senhaDigitada3 = '159000';
let senhaDigitada4 = 159000;

let verificacao1 = senhaDoWiFi === senhaDigitada1;
let verificacao2 = senhaDoWiFi === senhaDigitada2;
let verificacao3 = senhaDoWiFi === senhaDigitada3;
let verificacao4 = senhaDoWiFi === senhaDigitada4;

console.log(verificacao1);
console.log(verificacao2);
console.log(verificacao3);
console.log(verificacao4);

