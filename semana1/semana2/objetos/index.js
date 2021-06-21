//Exercícios de interpretação de código


// 1- A)- Será impresso no console: 
// Matheus Nachtergaele
// Virginia Cavendish
// {canal: "Globo", horario: "14h"}

// 2- A)
//{nome: "Juca", idade: 3, raca: "SRD"}
 //{nome: "Juba", idade: 3, raca: "SRD"}
 //{nome: "Jubo", idade: 3, raca: "SRD"}

// B) Conctenar um objeto dentro do outro, fazendo uma sobreescrita às propriedades iguais.

// 3- A) false
// undefined
 
// A) O valor impresso no console é falso porque é extamente o que está contido dentro da propriedade backender.
//B) Não foi definido nenhuma variavél "altura", logo o resultado  indefinido. 

//////////////////////////////////////////////////////////////////////////////////////////////////


// Exercícios de escrita de códigos 

// 1 - A) e B)

const pessoa = {
    nome: "Yara",
    apelidos: ["Yarinha", "Yaya", "Ya"]
}

const pessoa2 ={
    nome: "Yara",
    apelidos: ["Gatinha", "Momô", "Chatinha", ...pessoa.apelidos]
}

function imprimirMensagem(objeto) {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos}`)
}

imprimirMensagem(pessoa)

imprimirMensagem(pessoa2)


// 2- A) 
const objeto1 = { 
    nome: "Cosme",
    idade: 31,
    profissao: "Programador"
}
const objeto2 = { 
    nome: "Tacy",
    idade: 29,
    profissao: "Full Stack"
}

function imprimirMensagem2(objetoA, objetoB) {
    console.log(`${objetoA.nome}, ${objetoB.nome.length}, ${objetoA.idade}, ${objetoB.profissao}, ${objetoA.profissao.length}`)

}
    
imprimirMensagem2(objeto1, objeto2)  

// 3)

const carrinho = []

const manga = { 
    nome: "manga", 
    disponibilidade: true 
}
 
const abacate = {
    nome: "abacate",
    disponibilidade: true
}
    
const mamao = {
    nome: "mamão",
    disponibilidade: true
}

function encherCarrinho(fruta1, fruta2, fruta3) {
    carrinho.push(fruta1)
    carrinho.push(fruta2)
    carrinho.push(fruta3)

    console.log(carrinho)
}

encherCarrinho(manga, abacate, mamao)