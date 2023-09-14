// Exercícios
// Atribua uma mensagem ✉️
// Crie um algoritmo que atribui uma mensagem à variável por meio de uma condicional if.

// Para isso, siga as instruções a seguir:

// Crie uma variável chamada atribuirMensagem e atribua o valor true à ela;
// Crie uma variável chamada mensagem para armazenar uma string que será a mensagem, mas não atribua nenhum valor para ela;
// Crie uma estrutura condicional if para que caso a variável atribuirMensagem seja verdadeira, a variável mensagem receba a string 'Olá, Tryber!';

let atribuirMensagem = true;
let mensagem;

if (atribuirMensagem) {
  mensagem = 'Olá, Tryber!';
  console.log(mensagem); // 'Olá, Tryber!'
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Complete o código 💡
// Analise o código a seguir:

// let lampada = 'ligada';
// let estadoLampada;

// if (???) {
//   estadoLampada = 'A lâmpada está ligada!';
// } ??? {
//   ????????
// }
// Com base no seu aprendizado sobre if/else, altere o código onde se encontram os pontos de interrogação (?), seguindo as instruções abaixo:

// Uma operação de comparação na condicional if que verifique se o valor da variável lampada é igual a 'ligada';
// Uma condicional else que verifique se, caso o valor da variável lampada não for igual a ‘ligada’, então a variável estadoLampada receberá a string 'A lâmpada está desligada!'.

let lampada = 'ligada';
let estadoLampada;

function ifElseExercise() {
  if (lampada == 'ligada') {
    estadoLampada = 'A lâmpada está ligada!';
  } else {
    estadoLampada = 'A lâmpada está desligada!';
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Verifique se é par ou ímpar 🔢
// Crie um algoritmo que verifica se o valor da variável num é par ou ímpar:

// let num = 22;
// let mensagem;
// Se a variável num guarda um valor par, altere a variável mensagem para 'num é par!', onde num é o próprio número. Por exemplo: '6 é par!';
// Se a variável num guarda um valor ímpar, exiba a mensagem 'num é ímpar!', onde num é o próprio número. Por exemplo: '7 é ímpar!';
// De olho na dica 👀 : Um número inteiro qualquer é dito par se, ao ser dividido pelo número dois, resulta em um número inteiro, ou seja, seu resultado é um número sem casas decimais. Caso contrário, esse número é ímpar.

// Use a operação de módulo (%) para descobrir o resto de num / 2.

let num = 22;
let mensagem;

function ifElseExercise() {
  if(num % 2 === 0) {
    mensagem = num + ' é par!';
    console.log(num + ' é par!');
  } else {
    mensagem = num + ' é ímpar!';
    console.log(num + ' é ímpar!');
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Calcule a média 🧮
// Crie um algoritmo que use duas notas, armazenadas nas variáveis nota1 e nota2, de uma pessoa estudante para calcular a média e utilize a variável resultado para exibir se a pessoa está ou não aprovada:

// let nota1 = 8;
// let nota2 = 6;
// let media;
// let resultado;
// Calcule a media e salve na variável media;
// Se a média calculada for maior ou igual a 7, o valor da variável resultado deve ser: 'Pessoa estudante aprovada';
// Se a média calculada for menor que 7, o valor da variável resultado deve ser: 'Pessoa estudante reprovada'.
// De olho na dica 👀 : A média de um conjunto de números é obtida somando todos os números desse conjunto e dividindo o resultado dessa soma pela quantidade existente de números. Por exemplo, caso as notas sejam 6 e 7:

// Some as duas notas: 6 + 7 = 13;
// Como temos duas notas, dividimos o resultado da soma por 2: let media = 13/2 = 6.5;
// Você pode fazer: let media = (nota1 + nota2) / 2.

let nota1 = 8;
let nota2 = 6;
let media;
let resultado;

media = (nota1 + nota2) / 2;

function ifElseExercise() {
    if(media >= 7) {
      resultado = 'Pessoa estudante aprovada';
    } else {
      resultado = 'Pessoa estudante Reprovada'; 
    }
}

console.log(resultado);

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Encontre a pessoa mais velha 👵
// Julia e Erick estão aprendendo a programar em JavaScript pela Trybe. Juntos eles querem construir um algoritmo capaz de informar, no console, qual dos dois é mais velho. Ajude-os a elaborar esse algoritmo com as seguintes condições:

// a. Se o valor da variável idadeJulia for maior que o valor da variável idadeErick:

// Atribua à variável verificaIdadePessoas a string 'Julia é mais velha que Erick';
// b. Caso a condição anterior seja falsa:

// Verifique se o valor da variável idadeErick é maior que o valor da variável idadeJulia;
// Atribua à variável verificaIdadePessoas a string 'Erick é mais velho que Julia'.
// c. Se nenhuma das condições anteriores for verdadeira:

// Atribua à variável verificaIdadePessoas a string 'Possuem a mesma idade';

// Considere que as seguintes variáveis estão disponíveis (os valores abaixo são exemplos);

let idadeJulia = 25;
let idadeErick = 21;
let verificaIdadePessoas = '';


function ifElseExercise() {
  if(idadeJulia > idadeErick) {
    verificaIdadePessoas = 'Julia é mais velha que Erick';
  } else if(idadeErick > idadeJulia) {
    verificaIdadePessoas = 'Erick é mais velho que Julia.;'
  } else {
    verificaIdadePessoas = 'Possuem a mesma idade';
  }

  console.log(verificaIdadePessoas);

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Encontre a classe do personagem 🧙‍♀️
// Imagine que em uma partida de RPG (Role-playing game) você deve jogar um dado de 20 lados (D20) para determinar a classe de um personagem, ou seja, de acordo com o número sorteado pelo dado uma classe será escolhida. Considere as regras a seguir:

// Número menor que 4 = Guerreiro(a);
// Número maior ou igual a 4 e menor que 8 = Ladino(a);
// Número maior ou igual a 8 e menor que 12 = Curandeiro(a);
// Número maior ou igual a 12 e menor que 16 = Arqueiro(a);
// Número maior ou igual a 16 = Feiticeiro(a);
// Crie um algoritmo que informa a classe escolhida de acordo com o número sorteado pelo dado de 20 lados e atribua o resultado na variável resultado.

// Use condicionais para salvar a classe correta na variável classe;

// A mensagem na variável resultado deve ser como essa: 'Sua classe é: Arqueiro(a)'.

// Considere que as seguintes variáveis estão disponíveis (os valores abaixo são exemplos);

let dadoNumero = 16;
let classe = '';
let resultado;


function ifElseExercise() {        
    if (dadoNumero < 4) {
      classe = 'Guerreiro(a)';
  } else if (dadoNumero >= 4 && dadoNumero < 8) { 
    classe = 'Ladino(a)';
  } else if (dadoNumero >= 8 && dadoNumero < 12) {
    classe = 'Curandeiro(a)';
  } else if (dadoNumero >= 12 && dadoNumero < 16) {
    classe = 'Arqueiro(a)';
  } else if (dadoNumero >= 16) {
    classe = 'Feiticeiro(a)'
  }
}

ifElseExercise()

resultado = 'Sua classe é: ' + classe;

console.log(resultado);

////////////////////////////////////////////////////////////////////////////////////////////////////////

