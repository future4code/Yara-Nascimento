//=========Exercícios de interpretação de código===================

// 1-
 /*const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})*/


// A) IMPRIMIU NA TELA O MESMO RESULTADO
 //Object 0 Array(3)
 //Object 1 Array(3)
 //Object 2 Array(3)

 //=========================================================================================================

 // 2-

 // A) Vai ser impresso o array de nomes: 

//"Amanda Rangel", 
//"Laís Petra"
//"Letícia Chijo"
  
  
// 3- A) Será impresso os dois itens do array cuja propriedade apelido seja diferente de Chijo.

// {nome: "Amanda Rangel", apelido: "Mandi"}
// {nome: "Laís Petra", apelido: "Laura"}


//=====================EXERCÍCIOS DE ESCRITO DE CÓDIGOS============================================

// 1- 

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 let nomesDoguinhos = pets.map(pet => pet.nome) // A)
 console.log(nomesDoguinhos);

 let cachorrosSalsicha = pets.filter(cachorro => cachorro.raca === "Salsicha") // B)
 console.log(cachorrosSalsicha);


let listaDeMensagens = pets.filter(pet => pet.raca === "Poodle").map(pet => 
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`))  // C)

    //===========================================================================================

    // 2-

    const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
     ]

     
     let nomesProdutos = produtos.map(produto => console.log(produto.nome)) // A) 

     /*let produtosComDesconto = produtos.map(produto => {nome: produto.nome; preco: produto.preco * 0.05})
     console.log(produtosComDesconto);*/// Não consegui completar!
 

    let produtosBebidas = produtos.filter(produto => produto.categoria === "Bebidas")
        .map(produto => console.log(produto)) // C)


    


    let produtosYpe = produtos.filter(produto => produto.nome.includes("Ypê") )
    console.log(produtosYpe);  // D)