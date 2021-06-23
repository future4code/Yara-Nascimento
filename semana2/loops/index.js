// EXERCÍCIOS DE INTERPRETAÇÃO======================

// 1- Será impresso o valor 10
// Está somando o 0+1+2+3+4 = 10 

// 2- A) Vai ser impresso tudo que for maior do que o número 18
// B) Sim, só aletrar o número 18 da condição if para array da lista

// 3- seria impresso no console dessa forma:
// *
// **
// ***
// ****

// EXERCÍCIOS DE CÓDIGOS\====================================

// 1- 
/*const bichinhos = Number(prompt("Quantos bichinhos de estimação você tem no total?"))
const nomesBichinhos = []

for(let cont = 0; cont < bichinhos;  cont++) {

    if (bichinhos == 0) {
        console.log("Que pena! Você pode adotar um pet!")

    } else {
        nomesBichinhos[cont] = prompt(`Digite o nome do bichinho número ${cont + 1}:`)
       
    }

}
 
console.log(nomesBichinhos);*/

// 2-
const listaNumeros = [1, 2, 3]

function imprimirItens(parametro) {
    
    for (let index = 0; index < parametro.length; index++) {
        console.log(parametro[index]); 
        
    }
}

function imprimirItensDivididosPorDez(parametro) {
    
    for (let index = 0; index < parametro.length; index++) {
        console.log(parametro[index]/10); 
        
    }
}

function imprimirItens(parametro) {

    const numerosPares = []
    
    for (let index = 0; index < parametro.length; index++) {

        let resto = parametro[index] % 2 

        if (resto === 0) {
            numerosPares.push(parametro[index])
        }
    }

    console.log(numerosPares);
}

// "O elemento do índex i é: numero".
function imprimirItensDivididosPorDez(parametro) {
    
    for (let index = 0; index < parametro.length; index++) {
        console.log(`O elemento do índex ${index} é: ${parametro[index]}`); 
        
    }
}
