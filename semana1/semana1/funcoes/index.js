//Exercícios de interpretação de código

// Resposta 1

//a) O que vai ser impresso no console?
//10
//50

//b)  minhaFuncao(...) is not a function

// Resposta 2

//a)Uma função é um bloco de código
/*  que pode ser chamado (ou
    invocado) a partir de um nome
    Podem receber entradas, que
    podem ser usadas no meio do
    código (parâmetros e argumentos*/

//b) false


//--------------------------------------------------------------------------------------------

// - **Exercícios de escrita de código** (1)

// Escreva as funções explicadas abaixo:

// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem 
//falando algumas informações sobre você, como: 

//Troque o nome, idade, cidade e se é estudante ou não por informações sobre você.
// Lembrando que a função não possui entradas, apenas imprime essa mensagem.

// a)
function imprimeInformacoesUsuario() {
    console.log("Eu sou Yara, tenho 28 anos, moro em Pernambuco e sou estudante.")
}

imprimeInformacoesUsuario()




    /*b)  Agora escreva uma função que receba 4 parâmetros que correspondem às 
    informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) 
    e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações 
    da pessoa em uma só mensagem com o template:

    ```
    Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
    ```

    - Exemplo

        Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `"instrutora"`, deve retornar:

        `"Eu sou Laís, tenho 23 anos, moro em São Paulo e sou instrutora."`*/
        

// b)
function imprimeInformacoesUsuario(nome, idade, endereco, profissao) {
    let resultado = `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco}, e sou ${profissao}.`
    console.log(resultado)
    return resultado
}

imprimeInformacoesUsuario("Yara", 28, "Pernambuco", "estudante")



//---------------------------------------------------------------------------------------------------
/*2. Escreva as funções explicadas abaixo:

    a) Escreva uma função que receba 2 números como parâmetros, 
    e, dentro da função, faça a soma das duas entradas e retorne o resultado.
     Invoque a função e imprima no console o resultado.



    b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é
     **maior ou igual** ao segundo.

    c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

    d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa 
    mensagem, juntamente com uma versão dela em letras maiúsculas.*/ 

//a)
  function somaDoisNumeros(num2, num3) {
        const resultado = num2 + num3
        console.log(resultado)
        return resultado
    }

somaDoisNumeros(2, 3)

//b)
 function comparaNumeros(num1, num2) {
    const resultado = num1 > num2
    console.log(resultado)
    return resultado     
}

comparaNumeros(1, 2)


//c)
function indicarParOuImpar(numero) {
    const resultado = (numero % 2) == 0
    console.log(resultado)
    return resultado 
}

indicarParOuImpar(2)

