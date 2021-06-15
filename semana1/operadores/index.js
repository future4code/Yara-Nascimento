//Exercícios de escrita de código

// Exercícios 1 


let idadeUsuario = prompt("Digite sua idade")
let idadeMelhorAmigo = prompt("Digite a idade do seu melhor amigo")
let resultado = idadeUsuario > idadeMelhorAmigo
console.log("Sua idade é maior do que a do seu melhor amigo? ", resultado)
console.log(idadeUsuario - idadeMelhorAmigo)

// Exercícios 2

let numeroPar = prompt("Digite um número par")
console.log(numeroPar % 2)

// Notei que console.log sempre retorna um valor maior que 0 para divisões 
// de números ímpares por dois, dado que esse operador resulta o resto da divisão.
