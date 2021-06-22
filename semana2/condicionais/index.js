
//===============================EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO(1)====================================

//1 - Leia o código abaixo:

/* 1- 


const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)
if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
*/
//a) Explique o que o código faz. Qual o teste que ele realiza? 

/* O código faz com que o usuário digite na tela algum número e esse número caso tenha o resto de  2 = 0
 ele retornar como verdadeiro imprimindo "Passou no teste", caso se for diferente de 0, imprime "não passou
no teste"*/

//b) Para que tipos de números ele imprime no console "Passou no teste"? 
// Para todo número que for par.

//c) Para que tipos de números a mensagem é "Não passou no teste"?
// Para todo númeo que for ímpar.


//=====================================EXERCÍCIO DE INTERPRETAÇÃO(2)=================================================


/*2- O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar
 algumas tarefas de um supermercado:*/

/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
*/
// a) Para que serve o código acima?
//Serve para mostrar o valorda fruta escolhido pelo usuário.

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// O preço da fruta "Maça" é R$2.25

//c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa
//no console se retirássemos o `break` que está logo acima do `default`
//o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// Tirando break ele pecorre até o ultimo break do default, onde o valor do preço é alterado de 5.5 para "5".



//=============================EXERCÍCIO DE INTERPRETAÇÃO(03)=======================================
// 3-Leia o código abaixo:

/*
const numero = Number(prompt("Digite o primeiro número."))
if(numero > 0) {
  console.log("Esse número passou no teste")
  let mensagem = "Essa mensagem é secreta!!!"
}
console.log(mensagem)
*/

//a) O que a primeira linha está fazendo?
//Pedindo ao usúario para digitar um número

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//Se ele digitasse o numero 10 iria imprimir na tela "Esse número passou no teste" e iria imprimir
//Se ele digitasse o numero -10 não iria imprimir nada, pois -10 não é maior que 0, retorana falso

//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
/*Sim, haverá um erro de variavel não definida, pois a condição não está no escopo global
 e com isso a pessoa acabou chamando a varial mensagem fora do escopo local e somente o local tem acesso ao global
 no geral o escopo global não pode entrar na escopo da variavel(local), mas o inverso pode.
 o erro foi chamar a variavel pelo escopo global dentro do escopo da variavel(local).*/















 //=====================================EXERCÍCIOS DE ESCRITA DE CÓDIGO(1)=============================================
/*
 a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
 b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
 c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim,
  imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."
  */

  const idade = Number(prompt("digite sua idade"))
  const respostaIdade = idade
  if(respostaIdade < 18) {
    console.log("Você não pode dirigir!")
  }else{
    console.log("Você pode dirigir!")
  }

  //=======================================EXERCÍCIO DE ESCRITA(2)=============================================
  
  /*Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M
   (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!"
    ou "Boa Noite!". Utilize o bloco if/else*/

  const turno = prompt("digite M (matutino) ou V (Vespertino) ou N (Noturno)")
  const resposta = turno
  const matutino = "M"
  const vespertino = "V"
  const noturno = "N"
  if(resposta.toUpperCase() === matutino ){
    console.log("Bom Dia!")
  }else if(resposta.toUpperCase() === vespertino){
    console.log("Boa Tarde!")
  }else if(resposta.toUpperCase() === noturno){
    console.log("Boa Noite!")
  }else{
    console.log("Não entendi, desculpa!")
  }

//================================EXERCÍCIO DE CÓDIGO(3)============================================

//3- Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

const turnoEstudante = prompt("digite M (matutino) ou V (Vespertino) ou N (Noturno)")
//const respostaTurno = turnoEstudante
switch (turnoEstudante.toUpperCase()) {
  case "M":
    console.log("Bom Dia!")
  break
  case "V":
    console.log("Boa Tarde!")
  break
  case "N":
    console.log("Boa Noite!")
  break
  default:
    console.log("Não entendi, desculpa!") 
}


//========================================EXERCÍCIO DE CÓDIGO(4)============================================

/* 4- Considere a situação: você vai ao cinema com um amigo ou amiga,
porém ele/ela só assistirá a um filme com você se ele for do gênero
fantasia e se o ingresso está abaixo de 15 reais. Faça um código que
pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta
sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme.
Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário,
imprima "Escolha outro filme :("*/

const generoFilme = prompt("Qual o gênero do filme que vamos assistir?")
const valorIngresso = Number(prompt("Qual o valor do ingresso?"))
const respostaFilme = generoFilme
const respostaIngresso = valorIngresso
if(respostaFilme.toLowerCase() === "fantasia" && respostaIngresso <= 15) {
              console.log("Bom filme!")
}else{
              console.log("Escolha outro filme :(")
}
