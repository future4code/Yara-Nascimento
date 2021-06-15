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


// Exercício 3

let idadeUsuario2 = prompt("Digite sua idade")
console.log("Sua idade em meses ficaria ", idadeUsuario2 * 12)
console.log("Sua idade em dias ficaria ", idadeUsuario2 * 365)
console.log("Sua idade em horas ficaria ", idadeUsuario2 * 8760)

// Exercício 4

let primeiroNumero = prompt("Digite o primeiro número")
let segundoNumero = prompt("Digite o segundo número")

console.log("O primeiro número é maior que segundo? ", primeiroNumero > segundoNumero)
console.log("O primeiro número é igual ao segundo? ", primeiroNumero === segundoNumero)
console.log("O primeiro número é divisível pelo segundo? ", (primeiroNumero % segundoNumero) == 0)
console.log("O segundo número é divisível pelo primeiro? ", (segundoNumero % primeiroNumero) == 0)
