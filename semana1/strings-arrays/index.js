//Exercício 1


const nomeDoUsuario = prompt("Qual é seu nome?")
const emailDoUsuario = prompt("Qual é seu email?")
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

// O exercício pede para imprimir um texto concatenado 
//com o valor das duas variáveis preenchidas pelo usuário através do prompt.

// Exercício 2

//a) Imprima na tela o array completo

const comidasFavoritas = [ "Macarrão", "Tapioca", "Sopa", "Legumes", "Ovos"]


//b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ",
// seguida por cada uma das comidas, **uma embaixo da outra**.

console.log(comidasFavoritas)
console.log("Essas são as minhas comidas favoritas:")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])


//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
//Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista

comidasFavoritas[1] = prompt("Qual é a sua comida favorita?")
console.log(comidasFavoritas)


//Exercícios 3


//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

    
const listaDeTarefas = []


//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

listaDeTarefas[0] = prompt("Qual é a sua primeira tarefa do dia?")
listaDeTarefas[1] = prompt("Qual é a sua segunda tarefa do dia?")
listaDeTarefas[2] = prompt("Qual é a sua terceira tarefa do dia?")




//c) Imprima o array no console

console.log(listaDeTarefas)


//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

const indiceEscolhidoPeloUsuario = prompt("Escolha entre os índices 0, 1 e 2 a tarefa que você realizou hoje.")

//e) Remova da lista o item de índice que o usuário escolheu.

listaDeTarefas.splice(1, indiceEscolhidoPeloUsuario)

//f) Imprima o array no console

console.log(listaDeTarefas)



